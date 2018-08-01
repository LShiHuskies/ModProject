import React from 'react';
import { connect } from 'react-redux';
import playerTwoAttackInterval from '../reducers/playerTwoAttackInterval';
import { ActionCable } from 'react-actioncable-provider';


class SecondPlayerAttack extends React.Component {

  state = {
    degree: null
  }

  componentDidMount() {
    this.setState({
      degree: this.props.degree
    })
  }

  render() {





    return (
      <div>

      <img src="http://i.imgur.com/nTwGHSe.png"
      style={{
                    width: "6%",
                    position: "absolute",
                    transform: `rotate(${this.state.degree}deg)`,
                    left: `${this.props.leftAttack}px`,
                    top: `${this.props.topAttack}px`}}
      />
    </div>
    )
  }
}





export default SecondPlayerAttack;
