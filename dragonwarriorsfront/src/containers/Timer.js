import React from 'react';
import { connect } from 'react-redux';

let counterInterval = [];

class Timer extends React.Component {


  componentDidMount() {
    counterInterval.push(setInterval( this.handleCounter, 1000 )
  )
  }



  handleCounter = () => {
    let action = {
      type: 'COUNTERDOWN'
    }
    this.props.dispatch(action)

  }

  render() {
    return (
      <div>
      {this.props.timer}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    timer: state.playerCoordinates.time
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
