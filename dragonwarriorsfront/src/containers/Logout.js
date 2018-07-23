import React from 'react';
import { connect } from 'react-redux';


class Logout extends React.Component {
  render() {
    return (
      <button style={{backgroundColor: 'black', color: 'rgba(130, 170, 0, 0.7)', fontFamily: 'cursive'}}>
        Log Out
      </button>
    )
  }
}

export default Logout
