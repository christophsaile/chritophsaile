import { spotifyPlaylists } from '../../src/libs/spotify.ts';

export default async () => {
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
  const data = await (await spotifyPlaylists(access_token)).json();
  return new Response(JSON.stringify(data), {
    headers: {
      'content-type': 'application/json',
    },
  });
};

export const config = { path: '/get-playlists' };