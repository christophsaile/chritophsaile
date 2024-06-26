export type TimeRange = 'long_term' | 'medium_term' | 'short_term';

export interface SpotifyArtists {
  genres: string[];
  external_urls: SpotifyExternalUrls;
  id: string;
  images: SpotifyImage[];
  name: string;
}

export interface SpotifyTracks {
  album: {
    images: SpotifyImage[];
  };
  artists: {
    name: string;
  }[];
  external_urls: SpotifyExternalUrls;
  id: string;
  name: string;
}

export interface SpotifyPlaylists {
  id: string;
  name: string;
  images: SpotifyImage[];
  external_urls: SpotifyExternalUrls;
}

interface SpotifyExternalUrls {
  spotify: string;
}
export interface SpotifyImage {
  height: number;
  url: string;
  width: number;
}

export const getSpotifyAccessToken = async () => {
  const refreshToken = import.meta.env.SPOTIFY_REFRESH_TOKEN;
  const clientId = import.meta.env.SPOTIFY_CLIENT_ID;
  const clientSecret = import.meta.env.SPOTIFY_CLIENT_SECRET;

  if (!refreshToken || !clientId || !clientSecret) {
    throw new Error('Missing required environment variables for Spotify API');
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken || '',
    }),
  });

  return response.json();
};

export const spotifyProfile = async (accessToken?: string) => {
  const token = accessToken || (await getSpotifyAccessToken()).access_token;

  return fetch('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const spotifyTopArtists = async (
  timeRange: TimeRange,
  limit = 10,
  accessToken?: string
) => {
  const token = accessToken || (await getSpotifyAccessToken()).access_token;

  return fetch(
    `https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}&limit=${limit}&offset=0`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const spotifyTopTracks = async (
  timeRange: TimeRange,
  limit = 10,
  accessToken?: string
) => {
  const token = accessToken || (await getSpotifyAccessToken()).access_token;

  return fetch(
    `https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=${limit}&offset=0`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const spotifyPlaylists = async (accessToken?: string) => {
  const token = accessToken || (await getSpotifyAccessToken()).access_token;

  return fetch('https://api.spotify.com/v1/me/playlists?&offset=0', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const currentlyPlayingSong = async (accessToken?: string) => {
  const token = accessToken || (await getSpotifyAccessToken()).access_token;

  return fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
