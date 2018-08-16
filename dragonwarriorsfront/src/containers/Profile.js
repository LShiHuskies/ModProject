import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logout from './Logout';
import { ActionCable } from 'react-actioncable-provider';
import SecondPlayer from './SecondPlayer';
import HighScores from './HighScores';
import Controls from './Controls';
import GameLobby from './GameLobby';


class Profile extends Component {

  state = {
    games: null,
    controls: null,
    gameLobby: null,
    gokuTaken: false,
    vegetaTaken: false
  }

  handleHighScores = () =>{
    if (this.state.controls !== null) {
      this.setState({
        controls: null
      })
    }
    if (this.state.games == null) {

      fetch(`http://${window.location.hostname}:3000/api/games/`,
        {headers: {
          'Content-type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }}).then(r=>r.json()).then(gameInstances => this.iterateThroughGames(gameInstances))
    } else {
      this.setState({
        games: null
      })
    }
  }

  handleControls = () => {
    if (this.state.games !== null) {
      this.setState({
        games: null
      })
    }
    else if (this.state.controls == null) {
      this.setState({
        controls: true
      })
    } else {
      this.setState({
        controls: null
      })
    }

  }

  iterateThroughGames = (gameInstances) => {
    let gameArray = gameInstances.filter(game => game.scores > 50000 && game.scores !== null )
    let sortedGames = gameArray.sort(function(a, b) {return b.scores - a.scores})
    sortedGames.length = 5

    this.setState({
      games: sortedGames
    })

  }

  handleUser = (event) => {

    if (this.state.games !== null) {
      this.setState({
        games: null
      })
    }

    if (this.state.controls !== null) {
      this.setState({
        controls: null
      })
    }

    this.setState({
      gameLobby: true
    })

    if (event.character == 'Goku') {
      this.setState({
        gokuTaken: true
      })
    }
     if (event.character == 'Vegeta') {
      this.setState({
        vegetaTaken: true
      })
    }


  }


  handleStartGame = (event) => {
    event.preventDefault()

    const config = {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token')
      },
      body:JSON.stringify({
        username: this.props.player
      })
    }
    fetch(`http://${window.location.hostname}:3000/api/users/${this.props.player.id}`, config).then(r => r.json())


  }


  handleClick = (event) => {
    if (event.target.innerText == 'Goku') {
        let action = {
        type: 'SETCLICKEDTOTRUE'
      }
      this.props.dispatch(action)
    } else if (event.target.innerText == "Vegeta") {
      let action = {
      type: 'SETCLICKEDTOFALSE'
    }
    this.props.dispatch(action)
  }

    if (event.target.innerText == 'Goku' || event.target.innerText == 'Vegeta' ) {
        const config = {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json',
            'Authorization': localStorage.getItem('token')
          },
          body:JSON.stringify({
            username: this.props.player,
            character: event.target.innerText
          })
        }
        fetch(`http://${window.location.hostname}:3000/api/users/${this.props.player.id}`, config).then(r => r.json())
      } else if (event.target.innerText == 'Close Game Lobby') {
        window.location.reload()
      } else {
        alert('player has been taken')
      }
    }

  render() {

    return (
      <React.Fragment>

      <ActionCable
        channel={{ channel: 'UsersChannel'}}
        onReceived={this.handleUser}
        />

      <div className='profile-thing' style={{float: 'left', display: 'inline'}}>
        <Logout />
        <button
          style={{marginLeft: '10px',
          backgroundColor: 'rgba(128, 128, 128, 0.7)',
          fontFamily: 'cursive'
        }} onClick={this.handleStartGame} > Co-Op Game </button>
      <button onClick={this.handleHighScores}
          style={{
            marginLeft: '10px',
            backgroundColor: 'rgba(128, 128, 128, 0.7)',
            fontFamily: 'cursive'}}> High Scores </button>
          <div style={{float: 'right', marginLeft: '150px', fontFamily: 'cursive', color: 'green'}}> Welcome {this.props.player !== null ?
            this.props.player.username !== undefined ? this.props.player.username : this.props.player.name
             : null} </div>
           <button onClick={this.handleControls}
             style={{marginLeft: '10px',
             fontFamily: 'cursive',
             backgroundColor: 'rgba(128, 128, 128, 0.7)'
           }}> Controls </button>
      </div>

      <div style={{float: 'left', marginLeft: '150px', fontFamily: 'cursive', color: 'green'}}> {this.props.secondPlayer !== null ?
        this.props.secondPlayer.username !== undefined ? this.props.secondPlayer.username : this.props.secondPlayer.name
         : null} </div>

      <img src='https://img00.deviantart.net/ca58/i/2012/282/d/6/dbz__the_z_warriors_by_ineverfinishanythi-d5h9j36.png'
        style={{position: 'absolute', width: '10%', top: '600px', left: '600px'}}/>
      <img src='https://pre00.deviantart.net/6ad3/th/pre/f/2012/021/5/9/dbkai___super_saiyan_goku_vs_frieza_render_by_xsaiyan-d4n53br.png'
        style={{position: 'absolute', width: '8%'}} />
      <img src='https://media.giphy.com/media/R8mLRyn4T1dcY/giphy.gif'
        style={{position: 'absolute', width: '20%', top: '490px', left: '1000px'}}
         />

       {this.state.games !== null ? <HighScores games={this.state.games}/> : null }
       {this.state.controls !== null ? <Controls/> : null}
       {this.state.gameLobby !== null ? <GameLobby handleClick={this.handleClick} gokuTaken={this.state.gokuTaken} vegetaTaken={this.state.vegetaTaken}/> : null}



    </React.Fragment>
    )
  }
}


const mapStateToProps = (state) => {

  return {
    player: state.playerCoordinates.player,
    startGame: state.playerCoordinates.startGame,
    secondPlayer: state.secondPlayerCoordinates.secondplayer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
