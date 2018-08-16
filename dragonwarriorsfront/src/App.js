import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './containers/Login';
import World from './containers/World';
import { connect } from 'react-redux';
import GameOver from './containers/GameOver';
import Profile from './containers/Profile';
import Logout from './containers/Logout';
import { ActionCable } from 'react-actioncable-provider';
import SecondPlayer from './containers/SecondPlayer';



let count = 0;
let otherCount = 0;
let thirdCount = 0;
let fourthCount = 0;
let fifthCount = 0;

let scoreCount = 0;


class App extends Component {
  state = {
    backgroundImage: 'url(http://backgroundcheckall.com/wp-content/uploads/2017/12/dragon-ball-z-namek-background-5521.jpg)',
    login: false,
    username: '',
    password: '',
    loginError: null,
    startGame: false,
    gameOver: false
  }

  makeFetchForScore = () => {

    scoreCount = scoreCount + 1;
    let object = {
      score: this.props.score,
      enemyHealth: this.props.enemyHealth,
      playerHealth: this.props.playerHealth,
      playerTwoHealth: this.props.playerTwoHealth,
      time: this.props.time,
      enemyLeft: this.props.enemyLeft,
      enemyTop: this.props.enemyTop,
      playerOneTop: this.props.playerOneTop,
      playerOneLeft: this.props.playerOneLeft,
      playerTwoTop: this.props.playerTwoTop,
      playerTwoLeft: this.props.playerTwoLeft,
      scoreCounter: scoreCount
    };
    let action = {
      type: 'SETSCORETOALL',
      payload: object
    }

    let config = {
      method: 'POST',
      headers: {
      'Accepts': 'application/json',
    'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        type: action
      })
    };
    fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())

  }

  componentDidMount() {

    if(!!localStorage.getItem('token')){

      let player = atob(localStorage.getItem('token').split('.')[1])

      let bestPlayer = JSON.parse(player)
      let action = {
        type: 'OPERATIONGETPLAYER',
        payload: bestPlayer
      }
      this.props.dispatch(action)
      this.setState({
        login: true,
        backgroundImage: 'url(https://wallpapertag.com/wallpaper/full/8/d/1/202872-vertical-dbz-background-1920x1080-for-retina.jpg)'
      })
    }

  }

  componentDidUpdate() {

    if( ((this.props.playerHealth < 1 || this.props.playerTwoHealth < 1) && count < 1) || ( !(this.props.enemyHealth < 1 ) && (this.props.time < 1) && (count < 1) ) ){
      this.setState({
        gameOver: true,
        backgroundImage: 'url(https://images7.alphacoders.com/315/thumb-1920-315686.jpg)'
      })
      count = count + 1
    } else if ( this.props.logout == true && otherCount < 1 ) {
      this.setState({
        login: false,
        backgroundImage: 'url(http://backgroundcheckall.com/wp-content/uploads/2017/12/dragon-ball-z-namek-background-5521.jpg)'
      })
      otherCount = otherCount + 1
    } else if ( this.props.enemyHealth < 1 && thirdCount < 1 && this.props.time < 59 ) {
      let action = {
        type: 'RESTORE'
      }

      let config = {
        method: 'POST',
        headers: {
        'Accepts': 'application/json',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          type: action
        })
      };
      fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())

      thirdCount = thirdCount + 1;
      scoreCount = 0;
    } else if ( this.props.enemyHealth < 1 && fourthCount < 1 && thirdCount == 1 && this.props.time < 59) {
      fourthCount = fourthCount + 1;

      let action = {
        type: 'RESTORELEVEL3'
      }

      let config = {
        method: 'POST',
        headers: {
        'Accepts': 'application/json',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          type: action
        })
      };
      fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())
      scoreCount = 0;

    } else if ( this.props.enemyHealth < 1 && fifthCount < 1 && fourthCount == 1 && this.props.time < 59 ) {
        let action = {
          type: 'RESTORELEVEL4'
        }

        let config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
          'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            type: action
          })
        };
        fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())
        scoreCount = 0;

    } else if ( this.props.time < 55 && scoreCount < 1 && this.state.gameOver !== true && this.state.login == true ) {
      this.makeFetchForScore()
    } else if ( this.props.time < 51 && scoreCount < 2 && this.state.gameOver !== true && this.state.login == true ) {
      this.makeFetchForScore()
    } else if ( this.props.time < 46 && scoreCount < 3 && this.state.gameOver !== true && this.state.login == true ) {
      this.makeFetchForScore()
    } else if ( this.props.time < 41 && scoreCount < 4 && this.state.gameOver !== true && this.state.login == true ) {
      this.makeFetchForScore()
    } else if ( this.props.time < 36 && scoreCount < 5 && this.state.gameOver !== true && this.state.login == true ) {
      this.makeFetchForScore()
    } else if ( this.props.time < 31 && scoreCount < 6 && this.state.gameOver !== true && this.state.login == true ) {
      this.makeFetchForScore()
    } else if ( this.props.time < 26 && scoreCount < 7 && this.state.gameOver !== true && this.state.login == true ) {
      this.makeFetchForScore()
    } else if ( this.props.time < 21 && scoreCount < 8 && this.state.gameOver !== true && this.state.login == true) {
      this.makeFetchForScore()
    } else if ( this.props.time < 16 && scoreCount < 9 && this.state.gameOver !== true && this.state.login == true) {
      this.makeFetchForScore()
    } else if ( this.props.time < 11 && scoreCount < 10 && this.state.gameOver !== true && this.state.login == true) {
      this.makeFetchForScore()
    } else if ( this.props.time < 6 && scoreCount < 11 && this.state.gameOver !== true && this.state.login == true) {
      this.makeFetchForScore()
    } else if ( this.props.time < 4 && scoreCount < 12 && this.state.gameOver !== true && this.state.login == true) {
      this.makeFetchForScore()
    } else if ( this.props.time < 3 && scoreCount < 13 && this.state.gameOver !== true && this.state.login == true) {
      this.makeFetchForScore()
    } else if ( this.props.time < 2 && scoreCount < 14 && this.state.gameOver !== true && this.state.login == true) {
      this.makeFetchForScore()
      scoreCount = 0;
    }


  }



  handleSubmit = (event) => {
    event.preventDefault();


    if (event.target.value == "Login") {

      // trying to the link the back end with the front end--

      fetch(`http://${window.location.hostname}:3000/api/sessions`, {
        method: 'POST',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({username: this.state.username, password: this.state.password})
      })
      .then( res => res.json() )
      .then(player => this.handlePlayer(player) )

    } else if (event.target.value == "Create New Account") {
      // need to make a fetch request in order to create a new account
      fetch(`http://${window.location.hostname}:3000/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({username: this.state.username, password: this.state.password})
      })
      .then( res => res.json())
      .then( this.handleTheResult )

    }

  }


  handleTheResult = (result) => {

    if (result['errors'] == undefined) {
      alert('Your Account has been processed, Please give about 1 second to 3 seconds to process. I appreciate your patience and you can go ahead and type your credientials again and login in.')
      this.setState({
        username: '',
        password: ''
      })

    } else {
      alert(result['errors'])
    }

  }


  handlePlayer = (player) => {


    if (player['errors'] == undefined) {


      localStorage.setItem('token', player.token)
      let action = {
        type: 'OPERATIONGETPLAYER',
        payload: player
      }
      this.props.dispatch(action)

        this.setState({
          login: true,
          backgroundImage: 'url(https://wallpapertag.com/wallpaper/full/8/d/1/202872-vertical-dbz-background-1920x1080-for-retina.jpg)',
          username: '',
          password: ''
        })


    } else if (player['errors'] !== undefined) {
      alert(player['errors'])
    }


  }



  // this is the function when we initiate a new game.

  handleReceived = (event) => {
    if (this.state.login == true) {
      if (event.id) {
        let action = {
          type: 'SETGAMEID',
          payload: event.id
        }

      this.props.dispatch(action)

      this.setState({
        startGame: true,
        backgroundImage: 'url(https://images7.alphacoders.com/677/thumb-1920-677266.png)'
      })
    } else if (event.scores) {

      let action = {
        type: 'SETSCORE',
        payload: event.scores
      }
      this.setState({
        backgroundImage: 'url(https://images7.alphacoders.com/315/thumb-1920-315686.jpg)',
        gameOver: true
      })
    }
  }

  }


  handleUserNameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState ({
      password: event.target.value
    })
  }

  handleScoreAndEnemyHealth = (event) => {
    if (this.state.login == true) {
      if (event.type.type == 'SETSCORETOALL') {
        this.props.dispatch(event.type)
        scoreCount = event.type.payload.scoreCounter
      }
      else if (event.type.type == 'RESTORE' ) {
        this.props.dispatch(event.type)
        this.setState({
          backgroundImage: 'url(https://i.pinimg.com/originals/0f/18/c4/0f18c45e07a7212f4d49e71213833e01.jpg)'
        })
      } else if (event.type.type == 'RESTORELEVEL3' ) {
        this.props.dispatch(event.type)
        this.setState({
          backgroundImage: 'url(http://backgroundcheckall.com/wp-content/uploads/2017/12/dragon-ball-background-namek-5467.jpg)'
        })
      } else if (event.type.type == 'RESTORELEVEL4') {
        this.props.dispatch(event.type)
        this.setState({
          backgroundImage: 'url(https://img00.deviantart.net/342f/i/2017/015/a/5/saga_of_freezer___namek_screen_by_saodvd-davkgjo.png)'
        })
      }
    }
  }


  render() {

    return (
      <div className="App" style={{backgroundImage: this.state.backgroundImage}}>


        <ActionCable
          channel={{ channel: 'MovesChannel' }}
          onReceived={this.handleScoreAndEnemyHealth}
          />

        <ActionCable
          channel={{ channel: 'GamesChannel'}}
          onReceived={this.handleReceived}
          />

        {this.state.login == false ? <div id="Login">
          <Login login={this.state.login}
            username={this.state.username}
            password={this.state.password}
            handleSubmit={this.handleSubmit}
            userNameChange={this.handleUserNameChange}
            passwordChange={this.handlePasswordChange}
            loginError={this.state.loginError}
          />

      </div> :
      this.state.startGame == false ? <Profile /> :
      (!(this.props.playerHealth > 0) || !(this.props.playerTwoHealth > 0) || (!(this.props.enemyHealth < 1 ) && (this.props.time < 1) )
      || this.state.gameOver == true)
      ? <GameOver />
      : <World />
    }

      </div>
    );
  }
}



const mapStateToProps = (state) => {

  return {
    username: state.playerCoordinates.player,
    playerHealth: state.playerCoordinates.playerHealth,
    enemyHealth: state.playerCoordinates.enemyHealth,
    time: state.playerCoordinates.time,
    logout: state.playerCoordinates.logOut,
    playerOne: state.playerCoordinates.player,
    playerTwo: state.secondPlayerCoordinates.secondplayer,
    clicked: state.playerCoordinates.clicked,
    score: state.playerCoordinates.score,
    playerTwoHealth: state.secondPlayerCoordinates.playerHealth,
    enemyTop: state.playerCoordinates.enemyCoordinates.enemyTop,
    enemyLeft: state.playerCoordinates.enemyCoordinates.enemyLeft,
    playerOneLeft: state.playerCoordinates.left,
    playerOneTop: state.playerCoordinates.top,
    playerTwoLeft: state.secondPlayerCoordinates.left,
    playerTwoTop: state.secondPlayerCoordinates.top
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    dispatch
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
