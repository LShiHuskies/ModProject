import React from 'react';
import { connect } from 'react-redux';


class Logout extends React.Component {

  handleTheLogout = () => {
    let action = {
      type: 'LOGOUT'
    }

    this.props.dispatch(action);

    window.location.reload()

  }

  render() {
    return (
      <button onClick={this.handleTheLogout} style={{backgroundColor: 'rgba(128, 128, 128, 0.7)', color: 'rgba(0, 0, 0, 0.6)', fontFamily: 'cursive'}}>
        Log Out
      </button>
    )
  }
}

const mapStateToProps = (state) =>  {
  return {
    logout: state.playerCoordinates.logOut
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Logout);
