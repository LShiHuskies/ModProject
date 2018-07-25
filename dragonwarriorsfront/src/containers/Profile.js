import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logout from './Logout';

class Profile extends Component {


  // handleClick = () => {
  //   let action = {
  //     type: 'STARTGAME'
  //   }
  //   this.props.dispatch(action)
  // }

  render() {

    return (
      <React.Fragment>
      <div style={{float: 'left', display: 'inline' }}>
        <Logout />
        <button style={{marginLeft: '10px', backgroundColor: 'rgba(128, 128, 128, 0.7)', color: 'rgba(0, 0, 0, 0.6)', fontFamily: 'cursive'}} onClick={this.props.handleStartGame} > Start Game </button>
        <button style={{
            marginLeft: '10px',
            backgroundColor: 'rgba(128, 128, 128, 0.7)',
            fontFamily: 'cursive'}}> View High Scores </button>
          <div style={{float: 'right', marginLeft: '150px', fontFamily: 'cursive', color: 'green'}}> Welcome {this.props.player !== null ?
            this.props.player.username !== undefined ? this.props.player.username : this.props.player.name
             : null} </div>
           <button style={{marginLeft: '10px',
             fontFamily: 'cursive',
             backgroundColor: 'rgba(128, 128, 128, 0.7)'
           }}> View Controls </button>
      </div>
      <img src='https://img00.deviantart.net/ca58/i/2012/282/d/6/dbz__the_z_warriors_by_ineverfinishanythi-d5h9j36.png'
        style={{position: 'absolute', width: '10%', top: '600px', left: '600px'}}/>
      <img src='https://pre00.deviantart.net/6ad3/th/pre/f/2012/021/5/9/dbkai___super_saiyan_goku_vs_frieza_render_by_xsaiyan-d4n53br.png'
        style={{position: 'absolute', width: '8%'}} />
      <img src='https://media.giphy.com/media/R8mLRyn4T1dcY/giphy.gif'
        style={{position: 'absolute', width: '20%', top: '490px', left: '1000px'}}
         />
    </React.Fragment>
    )
  }
}


const mapStateToProps = (state) => {

  return {
    player: state.playerCoordinates.player,
    startGame: state.playerCoordinates.startGame
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
