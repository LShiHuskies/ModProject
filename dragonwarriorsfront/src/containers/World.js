import React from 'react';
import { connect } from 'react-redux';
import Player from './Player';
import Enemy from './Enemy';



class World extends React.Component {


  render() {
    return (
    <div>
      <Player />
      <Enemy />
    </div>
    )
  }
}

export default World;
