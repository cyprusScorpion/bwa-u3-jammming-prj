import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange(this);
  }

  const search = searchTerm => this.props.onSearch = this.state.searchTerm;

  const handleTermChange = event
  => this.state.searchTerm = event;

  render() {
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist"  onChange=this.handleTermChange />
      <a>SEARCH</a>
    </div>
  }
}
