import React from 'react';
import { connect } from 'react-redux';
import { moveLeft } from '../actions';
import { bindActionCreators } from 'redux';
import Healthbar from './Healthbar';
import PlayerAttack from './PlayerAttack';




class Player extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      health: 100,
      attack: false,
      testleft: this.props.attackLeft,
      testtop: this.props.attackTop
    }
  }



  componentDidMount() {
    window.addEventListener('keydown', this.handleControls)
  }

  handleResetAttack = (event) => {
    this.setState({
      attack: false
    })
  }

  handleControls = (event) => {
    switch (event.keyCode) {

      case 65:
        let action = {
          type: 'MOVE LEFT'
        }
        this.props.dispatch(action)
      break;

      case 68:
        action = {
          type: 'MOVE RIGHT'
        }
        this.props.dispatch(action)
      break;

      case 87:
         action = {
          type: 'MOVE UP'
        }
        this.props.dispatch(action)
      break;

      case 83:
        action = {
          type: 'MOVE DOWN'
        }
        this.props.dispatch(action)
      break;

      case 81:
        action = {
          type: 'MOVE LEFT UP'
        }
        this.props.dispatch(action)
      break;

      case 90:
        action = {
          type: 'MOVE LEFT DOWN'
        }
        this.props.dispatch(action)
      break;

      case 69:
        action = {
          type: 'MOVE RIGHT UP'
        }
        this.props.dispatch(action)
      break;

      case 67:
        action = {
          type: 'MOVE RIGHT DOWN'
        }
        this.props.dispatch(action)
      break;

      case 39:

        action = {
          type: 'LOOKRIGHT'
        }
        this.props.dispatch(action)
        break;

      case 37:

        action = {
          type: 'LOOKLEFT'
        }

        this.props.dispatch(action)

      break;

      case 40:

        action = {
          type: 'LOOKDOWN'
        }
        this.props.dispatch(action)

      break;

      case 32:

        if (this.state.attack == false){
          this.setState ({
            attack: true
          })
      }

      if (this.props.playerDirection.characterdirection == 'LEFT') {
        action = {
          type: "ATTACKLEFT"
        }
        this.props.dispatch(action)

        console.log('im here')
      } else if (this.props.playerDirection.characterdirection == 'DOWN'){
        action = {
          type: "ATTACKDOWN"
        }
        this.props.dispatch(action)
      }

      // action = {
      //   type: "ATTACK"
      // }
      // this.props.dispatch(action)
      break;
      }




    }




  render() {


    return (
      <React.Fragment>
        <img src={this.props.playerDirection.image} style={{position: 'absolute', width: `${this.props.playerDirection.width}%`, top: `${this.props.top}px`, left: `${this.props.left}px`, transform: 'rotate(0deg)' }} />
        <Healthbar health={this.state.health}/>
        {this.props.attackLeft !== null ? <PlayerAttack attack={this.state.attack} resetState={this.handleResetAttack}/> : null}
      </React.Fragment>
    )
  }
}








const mapStateToProps = (state) => {

    return {
      top: state.playerCoordinates.top,
      left: state.playerCoordinates.left,
      playerDirection: state.playerCoordinates.defaultDirection,
      attackLeft: state.playerCoordinates.attackLeft,
      attackTop: state.playerCoordinates.attackTop,
      degree: state.playerCoordinates.degree
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
