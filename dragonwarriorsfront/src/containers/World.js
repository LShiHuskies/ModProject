import React from 'react';
import { connect } from 'react-redux';
import Player from './Player';
import Enemy from './Enemy';
import Timer from './Timer';
import Ginyu from './Ginyu';
import ginyuAttackIntervalArray from '../reducers/ginyuAttackInterval';
import SecondPlayer from './SecondPlayer';
import { ActionCable } from 'react-actioncable-provider';





class World extends React.Component {



  render() {

    return (
    <div>

      <Timer />
      <Player />
      <SecondPlayer />
      <Enemy />
      {this.props.time < 20 && this.props.time > 8 ? <Ginyu /> : null}
    </div>
    )
  }
}


const mapStateToProps = (state) => {

  return {
    time: state.playerCoordinates.time
  }
}


export default connect(mapStateToProps)(World);
