const accessToken = '';
const CLIENT_ID = '2c52ab918ac54abf830ebec04c90fcf1';
const clientSecret = 'b7927c283624462792cf277d1a26eaf4';
const REDIRECT_URI = 'http://localhost:3000/';

const Spotify = {
  const getAccessToken = window.location.ref => {
    if (accessToken.length > 0) {
      if (window.location.ref.match(/access_token=([^&]*)/
  /expires_in=([^&]*)/)) {
        let accessToken = access_token;
        let expiration_time = expires_in;
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
      }
    } else if (accessToken.length === 0) {
        window.location = 'https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}';
    }
  }

  const search = searchTerm => {
    let accessToken = Spotify.getAccessToken();
    const urlForFetch = 'https://api.spotify.com/v1/search?type=track&q=${searchTerm}';
    return fetch(urlForFetch, {
      header: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(jsonResponse => {
      if (!jsonResponse) {
        return []
      }
      return jsonResponse.tracks.map(track => {
        return {
          ID: track.name,
          name: track.name,
          artist: track.artist[0].name,
          album: track.album.name,
          URI: track.url
        };
      });
    });
  }

  const savePlaylist = (name, trackURIs) => {
    if (!name || !trackURIs || trackURIs === 0) return;
    const accessToken = accessToken;
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    let userId = undefined;
    let playlistId = undefined;
    const userUrl = 'https://api.spotify.com/v1/me';

    fetch(userUrl, {headers: headers}).then(response => response.json()).then(jsonResponse => userId = jsonResponse.id).then(() => {
      const createPlaylistUrl = `https://api.spotify.com/v1/users/${userId}/playlist`;
      fetch(createPlaylistUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          name: name
        })
      }).then(response => response.json()).then(jsonResponse => playlistId = jsonResponse.id).then(() => {
        cost addPlaylistTracksUrl = `https://api.spotify.com/v1/users/${userId}/playlist/${playlistId}/tracks`;
        fetch(addPlaylistTracksUrl, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({
            uris: trackURIs
          })
        });
      });
    });
  }
};

export default Spotify;
