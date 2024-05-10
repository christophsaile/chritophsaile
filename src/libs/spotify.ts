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

interface SpotifyExternalUrls {
  spotify: string;
}
export interface SpotifyImage {
  height: number;
  url: string;
  width: number;
}

const getAccessToken = async () => {
  const refresh_token = import.meta.env.SPOTIFY_REFRESH_TOKEN;

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${import.meta.env.SPOTIFY_CLIENT_ID}:${import.meta.env.SPOTIFY_CLIENT_SECRET}`
      ).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token || '',
    }),
  });

  return response.json();
};

export const spotifyProfile = async () => {
  const { access_token } = await getAccessToken();

  return fetch('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const spotifyAlbums = async (offset: number, limit: number) => {
  const { access_token } = await getAccessToken();

  return fetch(`https://api.spotify.com/v1/me/albums?offset=${offset}&limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const spotifyTopArtists = async (timeRange: TimeRange) => {
  const { access_token } = await getAccessToken();

  return fetch(
    `https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}&limit=10&offset=0`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
};

export const spotifyTopTracks = async (timeRange: TimeRange) => {
  const { access_token } = await getAccessToken();

  return fetch(
    `https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=10&offset=0`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
};

export const spotifyPlaylists = async () => {
  const { access_token } = await getAccessToken();

  return fetch('https://api.spotify.com/v1/me/playlists?&offset=0', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const currentlyPlayingSong = async () => {
  const { access_token } = await getAccessToken();

  return fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
