import React from 'react';
import { connect } from 'react-redux';



class Healthbar extends React.Component {

  render() {
    let showuser = this.props.player !== null ? this.props.player.username : "NO USER NAME ENTERED"

    return (
      <React.Fragment>
      <div id='top-health'>
        User: {showuser}
        <div className="health">
          <span style={{width: `${this.props.playerHealth}%`}}>{this.props.playerHealth}% </span>
        </div>
      </div>

        <div class="healthenemy">
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
      player: state.playerCoordinates.player
  }
}

export default connect (mapStateToProps)(Healthbar);
