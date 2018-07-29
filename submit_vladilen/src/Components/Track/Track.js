import React from 'react';
import './Track.css';

export class Track  extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  const addTrack = this.props.track => this.props.onAdd = this.props.track;

  const removeTrack = this.props.track => this.props.onRemove = this.props.track;

  const renderAction = () => {
    if (isRemoval) {
      return <+ onClick=this.addTrack>;
    } else {
      return <- onClick=this.removeTrack>;
      }
    }
  }

  render() {
    <div className="Track">
      <div className="Track-information">
        <h3>{this.props.track.name}</h3>
        <p>{this.props.track.artist} | {this.props.track.album}</p>
      </div>
      <a className="Track-action">{this.renderAction}</a>
    </div>
  }
}
