import React from 'react';
import { connect } from 'react-redux';
import Player from './Player';
import Enemy from './Enemy';
import Timer from './Timer';
import Ginyu from './Ginyu';
import ginyuAttackIntervalArray from '../reducers/ginyuAttackInterval';
import SecondPlayer from './SecondPlayer';
import { ActionCable } from 'react-actioncable-provider';
import OtherHealthBar from './OtherHealthBar';





class World extends React.Component {



  render() {

    return (
    <div>

      <Timer />
      <Player />
      <SecondPlayer />
      <Enemy />
      <OtherHealthBar/>
      {this.props.level == 'ONE' && (this.props.time < 30 && this.props.time > 20) ? <Ginyu /> : null}
      {this.props.level == 'TWO' && (this.props.time < 40 && this.props.time > 20) ? <Ginyu /> : null}
      {this.props.level == 'THREE' && (this.props.time < 45 && this.props.time > 15) ? <Ginyu /> : null}
      {this.props.level == 'FOUR' && (this.props.time < 45 && this.props.time > 5) ? <Ginyu /> : null}
    </div>
    )
  }
}


const mapStateToProps = (state) => {

  return {
    time: state.playerCoordinates.time,
    level: state.playerCoordinates.level
  }
}


export default connect(mapStateToProps)(World);
