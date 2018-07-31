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

    playerTwoAttackInterval.push(setInterval( this.handleTheComponent, 6.5 )
  )
  }


  handleTheComponent = () => {

    if (this.state.degree == 180) {
      let action = {
        type: 'PLAYERTWOMISSILELEFT'
      }
      let config = {
        method: 'POST',
        headers: {
        'Accepts': 'application/json',
      'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          top: this.props.top,
          left: this.props.left,
          attackTop: this.props.attackTop,
          attackLeft: this.props.attackLeft,
          type: action
        })
      };
      fetch(`http://localhost:3000/api/move_twos`, config).then(r=> r.json())
    } // end of the if statement for the if the attack if faced for left

    else if (this.state.degree == 0) {

      let action = {
        type: 'PLAYERTWOMISSILERIGHT'
      }
      let config = {
        method: 'POST',
        headers: {
        'Accepts': 'application/json',
      'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          top: this.props.top,
          left: this.props.left,
          attackTop: this.props.attackTop,
          attackLeft: this.props.attackLeft,
          type: action
        })
      };
      fetch(`http://localhost:3000/api/move_twos`, config).then(r=> r.json())






    }


  }


  handleReceived = (event) => {
    this.props.dispatch(event.type)
  }

  render() {

    if  (this.props.leftAttack < 0) {
      let action = {
        type: "SETPLAYERTWOATTACKTOFALSE"
      }
      this.props.dispatch(action)
      while (playerTwoAttackInterval.length > 0) {
        let thing = playerTwoAttackInterval.pop()
        clearInterval(thing)
      }

    } else if (this.props.leftAttack > window.innerWidth - 100) {
      let action = {
        type: "SETPLAYERTWOATTACKTOFALSE"
      }
      this.props.dispatch(action)
      while (playerTwoAttackInterval.length > 0) {
        let thing = playerTwoAttackInterval.pop()
        clearInterval(thing)
      }
    }



    return (
      <div>
      <ActionCable
        channel={{ channel: 'MoveTwosChannel' }}
        onReceived={this.handleReceived}
        />
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

const mapStateToProps = (state) => {
  return {
    leftAttack: state.secondPlayerCoordinates.attackLeft,
    topAttack: state.secondPlayerCoordinates.attackTop,
    attack: state.secondPlayerCoordinates.attack,
    degree: state.secondPlayerCoordinates.degree
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(SecondPlayerAttack);
