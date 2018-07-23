import React from 'react';
import { connect } from 'react-redux';



class Healthbar extends React.Component {

  render() {
    let showuser = this.props.username !== '' ? this.props.username : "NO USER NAME ENTERED"

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
      username: state.playerCoordinates.username,
      enemyHealth: state.playerCoordinates.enemyHealth
  }
}

export default connect (mapStateToProps)(Healthbar);
