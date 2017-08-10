import React, { Component } from 'react';

class ArtistDetails extends Component {
  constructor(props) {
    super(props);
  }

  play(url) {
    const audio = new Audio();
    //audio.src = url;
    //audio.play();
  }

  render() {
    return (
      <div className="row">
      {(this.props.artistSelected) ?
          <div className="col-md-12">
            {(this.props.artistSelected.images.length > 0) ?
              <img src={this.props.artistSelected.images[0].url}/>
            :
              <img src='https://adobe99u.files.wordpress.com/2014/10/nobody.png'/>}
            <h2>{this.props.artistSelected.name}</h2>
            <ul>
              {this.props.albums.map((album) => {
                return <li onClick={() => this.props.albumSelect(album)} key={album.id}>
                  <img className="artist_img" src={album.images[0].url}/>
                  {album.name}
                  <ul>
                    {this.props.tracks.map((track) => {
                      return <li onClick={this.play(track.preview_url)} key={track.id}>
                        {track.name}
                      </li>
                    })}
                  </ul>
                </li>
              })}
            </ul>
          </div>
      :
        <div>
        Not found
        </div>
      }
      </div>
    );
  }
}

export default ArtistDetails;
