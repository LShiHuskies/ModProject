import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './containers/Login';
import World from './containers/World';
import { connect } from 'react-redux';
import GameOver from './containers/GameOver';
import Profile from './containers/Profile';


// https://wallpapertag.com/wallpaper/full/8/d/1/202872-vertical-dbz-background-1920x1080-for-retina.jpg

class App extends Component {
  state = {
    backgroundImage: 'url(http://backgroundcheckall.com/wp-content/uploads/2017/12/dragon-ball-z-namek-background-5521.jpg)',
    login: false,
    username: '',
    password: '',
    loginError: null,
    profileBackgroundImage: 'url(https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fprophotoresource.com%2Fwp-content%2Fuploads%2F2015%2F12%2FLandscape_01.jpg&f=1)'
  }


  // this.setState({
  //   login: true,
  //   backgroundImage: 'url(https://images7.alphacoders.com/677/thumb-1920-677266.png)',
  // })



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
      this.setState({
        login: true,
        backgroundImage: 'url(https://wallpapertag.com/wallpaper/full/8/d/1/202872-vertical-dbz-background-1920x1080-for-retina.jpg)',
      })

      // let action = {
      //   type: 'SETUSERNAME',
      //   payload: this.state.username
      // }
      //
      // this.props.dispatch(action)

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

// <div>{this.props.playerHealth > 0 ? <World /> : <GameOver/> } </div>

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
      (this.props.startGame == false) ? <Profile /> :  <World /> 
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
    startGame: state.playerCoordinates.startGame
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    dispatch
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
