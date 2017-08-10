import React, { Component } from 'react';
import SearchBar from './components/searchbar';
import ListArtists from './components/listartists';
import ArtistDetails from './components/artistdetails';
import logo from './logo.svg';
import './App.css';

const CLIENT_ID = '9d2f82abf2a54c37b43450d85f2cff46';
const REDIRECT_URI = 'http://localhost:3000';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artistSelected: null,
      albumSelected: null,
      artists: [],
      albums: [],
      tracks: []
    }
    this.token = null;
    this.url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}`;
    this.token_array = window.location.hash.substring(1).split('&').map((vartab) => {
      return (vartab.split('='));
    }).filter((tab) => {
      return (tab[0] === 'access_token');
    });
    if (typeof this.token_array[0] !== 'undefined')
      this.token = this.token_array[0][1];
  }

  STSearch(term) {
    if (this.token !== null)
    {
      fetch(
        `https://api.spotify.com/v1/search?q=${term}&type=artist`,
        {
          headers: {
           'Authorization': 'Bearer '+ this.token
        }
      })
      .then((response) => {
        return (response.json());
      })
      .then((result) => {
        this.setState({artists: result.artists.items});
      })
    }
  }

  getAlbum(artist) {
    fetch(
      `https://api.spotify.com/v1/artists/${artist.id}/albums/`,
      {
        headers: {
         'Authorization': 'Bearer '+ this.token
      }
    })
    .then((response) => {
      return (response.json());
    })
    .then((albums) => {
      this.setState(
        {
          artistSelected: artist,
          albums: albums.items
        }
      );
    })
  }

  getTracks(album) {
    fetch(
      `https://api.spotify.com/v1/albums/${album.id}/tracks/`,
      {
        headers: {
         'Authorization': 'Bearer '+ this.token
      }
    })
    .then((response) => {
      return (response.json());
    })
    .then((tracks) => {
      this.setState(
        {
          albumSelected: album,
          tracks: tracks.items
        }
      );
      console.log(tracks);
    })
  }

  render() {
    return (
      <div className="App">
        {(this.token === null) ?
          <a href={this.url}><button>Login</button></a>
        :
          (<div>
            <SearchBar onChangeTerm={term => this.STSearch(term)}/>
            <ArtistDetails artistSelected={this.state.artistSelected} albums={this.state.albums} tracks={this.state.tracks} albumSelect={album => this.getTracks(album)}/>
            <ListArtists artistSelect={artist => this.getAlbum(artist)} list={this.state.artists}/>
          </div>)
        }
      </div>
    );
  }
}

export default App;
