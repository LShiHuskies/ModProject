import React from 'react';
import { connect } from 'react-redux';



class GameOver extends React.Component {

  componentDidMount() {
    fetch(`http://localhost:3000/api/games`)
  }



  render() {
    return (
      <div>
        hello
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.playerCoordinates.score,
    player: state.playerCoordinates.player
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
