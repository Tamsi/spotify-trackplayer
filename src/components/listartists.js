import React, { Component } from 'react';
import Artist from './artist';

class ListArtists extends Component {
  constructor(props) {
    super(props);
  }

  dispArtists() {
    return this.props.list.map(artist => {
      return (
        <Artist artistSelect={this.props.artistSelect} key={artist.id} artist={artist}/>
      );
    });
  }

  render() {
    return (
      <div>
        <ul className="center">
          {this.dispArtists()}
        </ul>
      </div>
    );
  }
}

export default ListArtists;
