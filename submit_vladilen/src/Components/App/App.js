import React from 'react';
import './App.css';
import Spotify from '../../util/Spotify';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name},
        {artist},
        {album},
        {id}
      ],
       playlistName: 'PlayList',
       playlistTracks: [
        {
          name: '',
          artist: '',
          album: '',
          id: - 1
        }
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  const addTrack = track => {
    if (this.state.playlistTracks.id.find(savedTrack
      => savedTrack.id === track.id)) {
      return;
    } else {
      this.setState.playlistTracks.id(
        {
          name: track.name,
          artist: track.artist,
          album: track.album,
          id: track.id
        }
      )
    }
  };

  const removeTrack = track => {
    if (this.state.playlistTracks.id.find(savedTrack
      => savedTrack.id === track.id)) {
        this.setState.playlistTracks.id(
          {
            name: '',
            artist: '',
            album: '',
            id: - 1
          }
        )
      }
  };

  const updatePlaylistName = name => {
    setState({
      this.state.playlistName: name;
    });
  };

  const savePlaylist = () => {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: 'New Playlist Name',
        playlistTracks: []
      });
    });
  };

  const Spotify.search = searchTerm => console.log(`${searchTerm}`);

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
