import { spotifyTopTracks } from '../../src/libs/spotify.ts';
import { type TimeRange } from '../../src/libs/spotify.ts';

export default async (request: Request) => {
  const timeRange =
    (new URL(request.url).searchParams.get('timeRange') as TimeRange) || 'short_term';

  // can't use getSpotifyAccessToken() from the spotify.ts file
  // since netlify edge-functions run on deno and not on node
  const getSpotifyAccessToken = async () => {
    const clientId = Netlify.env.get('SPOTIFY_CLIENT_ID');
    const clientSecret = Netlify.env.get('SPOTIFY_CLIENT_SECRET');
    const refreshToken = Netlify.env.get('SPOTIFY_REFRESH_TOKEN');

    if (!refreshToken || !clientId || !clientSecret) {
      throw new Error('Missing required environment variables for Spotify API');
    }

    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken || '',
      }),
    });

    return await response.json();
  };

  const { access_token } = await getSpotifyAccessToken();
  const data = await (await spotifyTopTracks(timeRange, 6, access_token)).json();
  return new Response(JSON.stringify(data), {
    headers: {
      'content-type': 'application/json',
    },
  });
};

// TODO: check you to increase the cache time
export const config = { path: '/get-tracks', cache: 'manual' };
