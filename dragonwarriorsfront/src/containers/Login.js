import React from 'react';
import { connect } from 'react-redux';
import CharacterList from './character-list';


class Login extends React.Component {


  render() {

    return (
      <React.Fragment>
        <div id="title">
          Welcome Z Warriors
        </div>
        <form onClick={this.props.handleSubmit}>

            <label id="label">
              Username: <br></br>
            <input type="text" name="username" placeholder="Username" id="username" value={this.props.username} onChange={this.props.userNameChange}/> <br></br>
              Password: <br></br>
            <input type="password" name="password" placeholder="Password" id="password" value={this.props.password} onChange={this.props.passwordChange}/>
            </label>
            <br></br>
            <input type="submit" value="Login" id="login" /> <br></br>
            <input type="submit" value="Create New Account" id="create" />
        </form>

        <div> {this.props.loginError} </div>

        <div id='show'>
        <button id="button" onClick={ () => {
                const action = {
                  type: 'ADD_ONE'
                }
                this.props.dispatch(action)
              }
            }> Display characters
        </button>
          {(this.props.counter%2 !== 0) ? <CharacterList /> : null }
        </div>


      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    counter: state.counter.counter
  }
}

const mapDispatchToProps = (dispatch) =>  {

  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
