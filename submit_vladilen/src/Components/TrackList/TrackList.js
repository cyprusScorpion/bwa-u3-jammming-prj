import React from 'react';
import './TrackList.css';

import Track from '../Track/Track';

export class TrackList extends React.Component {
  render() {
    <div className="TrackList" key={track.id}>
        this.props.tracks.map(track => {
          <Track track={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} />
        });
    </div>
  }
}
