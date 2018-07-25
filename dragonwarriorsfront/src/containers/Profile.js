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
        <button style={{marginLeft: '40px', color: 'red', backgroundColor: 'blue', fontFamily: 'cursive'}} onClick={this.props.handleStartGame} > Start Game </button>
        <div style={{float: 'right', marginLeft: '500px', fontFamily: 'cursive', color: 'green'}}> Welcome {this.props.player !== null ?
            this.props.player.username !== undefined ? this.props.player.username : this.props.player.name
             : null} </div>
      </div>
      <img src='https://img00.deviantart.net/ca58/i/2012/282/d/6/dbz__the_z_warriors_by_ineverfinishanythi-d5h9j36.png'
        style={{position: 'absolute', width: '10%', top: '600px', left: '600px'}}/>
      <img src='https://pre00.deviantart.net/6ad3/th/pre/f/2012/021/5/9/dbkai___super_saiyan_goku_vs_frieza_render_by_xsaiyan-d4n53br.png'
        style={{position: 'absolute', width: '8%'}} />
      <img src='https://media.giphy.com/media/R8mLRyn4T1dcY/giphy.gif'
        style={{position: 'absolute', width: '20%', top: '490px', left: '1000px'}}
         />
       <button style={{position: 'absolute',
         top: '100px',
         left: '20px',
         backgroundColor: 'purple',
         fontFamily: 'cursive'}}> View High Scores </button>
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
