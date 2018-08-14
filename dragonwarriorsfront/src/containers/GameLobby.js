import React, {Component} from 'react';
import { connect } from 'react-redux';

class GameLobby extends Component {

  render() {
    console.log(this.props.localPlayer)
    console.log(this.props.player)
    return (
        <div id='description' style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
           transition: '0.3s',
           backgroundColor: 'rgba(0, 120, 100, 0.7)',
           float: 'left',
           position:'relative', top:'10%', right: '15%', color: 'black'
         }}>
         Players Ready to Play
         <h3>

         </h3>

       </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    localPlayer: state.playerCoordinates.localplayer,
    player: state.playerCoordinates.player
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameLobby);
