import React from 'react';
import { connect } from 'react-redux';
import Player from './Player';


class World extends React.Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleControls)
  }
  render() {
    return (
      <div>
        <div> Welcome {this.props.username} </div>
        <Player />
      </div>
    )
  }
}

export default World;
