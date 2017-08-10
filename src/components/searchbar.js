import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
    	term : ''
    };
  }

  onChangeTerm(term) {
  	this.setState({term: term});
  	this.props.onChangeTerm(term);
  }

  render() {
    return (
      <div>
        <input className="form-control center" value={this.state.term} onChange={event => this.onChangeTerm(event.target.value)} placeholder="Search for an artist..."/>
      </div>
    );
  }
}

export default SearchBar;
