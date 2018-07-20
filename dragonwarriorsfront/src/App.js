import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './containers/Login'
import World from './containers/World'

// https://wallpapertag.com/wallpaper/full/8/d/1/202872-vertical-dbz-background-1920x1080-for-retina.jpg

class App extends Component {
  state = {
    backgroundImage: 'url(http://backgroundcheckall.com/wp-content/uploads/2017/12/dragon-ball-z-namek-background-5521.jpg)',
    login: false,
    username: '',
    password: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (event.target.value == "Login") {
      this.setState({
        login: true,
        backgroundImage: 'url(https://images7.alphacoders.com/677/thumb-1920-677266.png)',
      })
    } else if (event.target.value == "Create New Account") {

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
          />
      </div> : <World username={this.state.username} />}
      </div>
    );
  }
}

export default App;
