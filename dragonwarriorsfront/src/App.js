import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './containers/Login';
import World from './containers/World';
import { connect } from 'react-redux';
import GameOver from './containers/GameOver';
import Profile from './containers/Profile';
import Logout from './containers/Logout';



// https://wallpapertag.com/wallpaper/full/8/d/1/202872-vertical-dbz-background-1920x1080-for-retina.jpg
let count = 0;
let otherCount = 0;

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
    if(this.props.playerHealth < 1 && count < 1) {
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
    }



  }

  handleStartGame = (event) => {
    event.preventDefault();

    this.setState({
      startGame: true,
      backgroundImage: 'url(https://images7.alphacoders.com/677/thumb-1920-677266.png)'
    })

  }



  handleSubmit = (event) => {
    event.preventDefault();


    if (event.target.value == "Login") {

      // trying to the link the back end with the front end--
      fetch(`http://localhost:3000/api/sessions`, {
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
      fetch(`http://localhost:3000/api/users`, {
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
      alert('Your Account has been processed, Please give about 1 second to 3 seconds to process. I appreciate your patient and you can go ahead and type your credientials again and login in.')
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

        this.setState({
          login: true,
          backgroundImage: 'url(https://wallpapertag.com/wallpaper/full/8/d/1/202872-vertical-dbz-background-1920x1080-for-retina.jpg)',
          username: '',
          password: ''
        })

      let action = {
        type: 'OPERATIONGETPLAYER',
        payload: player
      }

      this.props.dispatch(action);

      // localStorage.setItem('token', player.token)


    } else if (player['errors'] !== undefined) {
      alert(player['errors'])
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


  render() {

    return (
      <div className="App" style={{backgroundImage: this.state.backgroundImage}}>
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
      this.state.startGame == false ? <Profile handleStartGame={this.handleStartGame}/> :
      (this.props.playerHealth > 0) ? <World /> : <GameOver/>
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
    logout: state.playerCoordinates.logOut
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    dispatch
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
