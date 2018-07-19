import React from 'react';
import { connect } from 'react-redux';
import { moveLeft } from '../actions';
import { bindActionCreators } from 'redux';
import Healthbar from './Healthbar';
import PlayerAttack from './PlayerAttack';




class Player extends React.Component {
  state = {
    health: 100,
    attack: false
    // playDisplayDirection: {
    //   image: 'http://www.pngmart.com/files/2/Goku-PNG-Transparent-Image.png',
    //   width: '5'
    // },
    // playDefaultDirection: {
    //   image: 'http://www.pngmart.com/files/2/Goku-PNG-Transparent-Image.png',
    //   width: '5'
    // },
    // playRightDirection: {
    //   image: 'https://vignette.wikia.nocookie.net/deadliestfiction/images/0/09/Goku.png/revision/latest?cb=20180325020436',
    //   width: '3.5'
    // },
    // playLeftDirection: {
    //   image: 'https://vignette.wikia.nocookie.net/dragonball/images/0/09/Goku.png/revision/latest?cb=20160204151954',
    //   width: '4.25'
    // }
  }


  componentDidMount() {
    window.addEventListener('keydown', this.handleControls)
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
      } else {
        this.setState ({
          attack: false
        })
      }

      if (this.props.playerDirection.characterdirection == 'DOWN') {
        action = {
          type: "ATTACKLEFT"
        }
        this.props.dispatch(action)
      }

      action = {
        type: "ATTACK"
      }
      this.props.dispatch(action)

      }








    }




  render() {

    return (
      <React.Fragment>
        <img src={this.props.playerDirection.image} style={{position: 'absolute', width: `${this.props.playerDirection.width}%`, top: `${this.props.top}px`, left: `${this.props.left}px`, transform: 'rotate(0deg)' }} />
        <Healthbar health={this.state.health}/>
        {this.state.attack == true ? <PlayerAttack attack={this.state.attack}/> : null}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {

    return {
      top: state.playerCoordinates.top,
      left: state.playerCoordinates.left,
      playerDirection: state.playerCoordinates.defaultDirection
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
