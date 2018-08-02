import React from 'react';
import { connect } from 'react-redux';


class Score extends React.Component {
  render() {

    return (
      <div id='score'> Score: {this.props.score} </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    score: state.playerCoordinates.score
  }
}

export default connect (mapStateToProps)(Score);
