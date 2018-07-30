import React from 'react';
import { connect } from 'react-redux';
import Logout from './Logout';
import { ActionCable } from 'react-actioncable-provider';



class GameOver extends React.Component {

  componentDidMount() {
    const config = {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': localStorage.getItem('token')
      },
      body:JSON.stringify({scores: this.props.score})
    }

    fetch(`http://localhost:3000/api/games/374`, config).then(r => r.json())
    .then(res => {

      const otherConfig = {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
          'Authorization': localStorage.getItem('token')
        },
        body:JSON.stringify({
          game_id: res.id,
          username: (this.props.player.username !== undefined ?
          this.props.player.username :
          this.props.player.name)
        })
      }

      fetch(`http://localhost:3000/api/users/${this.props.player.id}`, otherConfig).then(r => r.json())
    })



  }

  handleUser = (event) => {
    debugger;
    alert(event)
  }



  render() {
    let user = this.props.player.username !== undefined ? this.props.player.username : this.props.player.name
    return (
      <React.Fragment>
      <ActionCable
        channel={{ channel: 'UsersChannel'}}
        onReceived={this.handleUser}
        />
      <div style={{color: 'red', display: 'inline', fontFamily: 'cursive', fontSize: '100px'}}>
      <div style={{float: 'left', fontSize: '30px'}}> <Logout/> </div>
        Game Over
      </div>
      <div style={{color: 'rgba(192, 192, 192, 0.8)', textAlign: 'center', fontSize: '75px',
          boxShadow: '0px 4px 8px 0 rgba(0, 0, 0, 1)',
          transition: '0.3s',
          marginTop: '500px',
          marginLeft: '500px',
          marginRight: '500px',
          backgroundColor: 'rgba(0, 0, 0, 0.6)'
      }}> {`${user}\'s`} Score: {this.props.score}</div>
    <button value="Refresh Page" onClick={() => {window.location.reload()}} style={{color: 'red', backgroundColor: 'rgba(128, 128, 128, 0.7)', marginTop: '50px', fontFamily: 'cursive'}}> Back to Profile? </button>
      </React.Fragment>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.playerCoordinates.score,
    player: state.playerCoordinates.player
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
