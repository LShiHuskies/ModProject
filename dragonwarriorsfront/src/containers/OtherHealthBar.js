import React from 'react';
import { connect } from 'react-redux';



class OtherHealthBar extends React.Component {
  render() {
    return (
      <div id='top-health' style={{marginTop: '45%'}}>
        {this.props.clicked === false ? 'Player: Goku' : 'Player: Vegeta' }
        <div className="health">
          {this.props.clicked === false ? <span style={{width: `${this.props.playerHealth}%`}}>{this.props.playerHealth}% </span>
        : <span style={{width: `${this.props.playerTwoHealth}%`}}>{this.props.playerTwoHealth}% </span> }
        </div>
      </div>
    )
  }

}


const mapStateToProps = (state) => {

    return {
      playerHealth: state.playerCoordinates.playerHealth,
      enemyHealth: state.playerCoordinates.enemyHealth,
      player: state.playerCoordinates.player,
      playerTwoHealth: state.secondPlayerCoordinates.playerHealth,
      secondPlayer: state.secondPlayerCoordinates.secondplayer,
      clicked: state.playerCoordinates.clicked
  }
}



export default connect(mapStateToProps)(OtherHealthBar);
