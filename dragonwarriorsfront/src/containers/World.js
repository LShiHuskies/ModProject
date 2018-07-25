import React from 'react';
import { connect } from 'react-redux';
import Player from './Player';
import Enemy from './Enemy';
import Timer from './Timer';



class World extends React.Component {

  render() {
    return (
    <div>
      <Timer />

      <Player />
      <Enemy />
    </div>
    )
  }
}


export default World;
