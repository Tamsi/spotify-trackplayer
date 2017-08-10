import React, { Component } from 'react';

class Artist extends Component {
  constructor(props) {
    super(props);
    //console.log(props.artist);
  }

  render() {
    return (
      <li onClick={() => this.props.artistSelect(this.props.artist)} className="list-group-item" key={this.props.artist.id}>
        <div className="media-left">
          {(this.props.artist.images.length > 0) ?
            <img className="artist_img" src={this.props.artist.images[0].url}/>
          :
            <img className="artist_img" src='https://adobe99u.files.wordpress.com/2014/10/nobody.png'/>}
        </div>
        <div className="media-body">
          <div className="media-heading"><h2>{this.props.artist.name}</h2></div>
        </div>
      </li>
    );
  }
}

export default Artist;
