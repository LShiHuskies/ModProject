import React from 'react';
import { connect } from 'react-redux';


class Logout extends React.Component {

  handleTheLogout = () => {
    let action = {
      type: 'LOGOUT'
    }

    this.props.dispatch(action);


  }

  render() {
    return (
      <button onClick={this.handleTheLogout} style={{backgroundColor: 'black', color: 'rgba(130, 170, 0, 0.7)', fontFamily: 'cursive'}}>
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
