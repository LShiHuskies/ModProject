import React from 'react';
import { connect } from 'react-redux';



class Healthbar extends React.Component {

  render() {

    return (
      <React.Fragment>
      <div id='top-health'>
        {this.props.clicked == true ? 'Player: Goku' : 'Player: Vegeta' }
        <div className="health">
          {this.props.clicked == true ? <span style={{width: `${this.props.playerHealth}%`}}>{this.props.playerHealth}% </span>
        : <span style={{width: `${this.props.playerTwoHealth}%`}}>{this.props.playerTwoHealth}% </span> }
        </div>
      </div>

        <div className="healthenemy">
          <span style={{width: `${this.props.enemyHealth}%`}}>{this.props.enemyHealth}% </span>
        </div>


        {/* Enemy's Health */}
      </React.Fragment>


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

export default connect (mapStateToProps)(Healthbar);
