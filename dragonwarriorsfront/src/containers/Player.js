import React from 'react';
import { connect } from 'react-redux';
import { moveLeft } from '../actions';
import { bindActionCreators } from 'redux';
import Healthbar from './Healthbar';
import PlayerAttack from './PlayerAttack';



var leftAttackProjectile = [];
var upAttackProjectile = [];
var downAttackProjectile = [];
var rightAttackProjectile = [];
class Player extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      health: 100,
      attack: false,
      leftAttack: null,
      topAttack: null,
      degree: this.props.degree
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

      case 38:

        action = {
          type: 'LOOKUP'
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

      if (this.props.playerDirection.characterdirection == 'LEFT' && this.state.attack == false && this.state.leftAttack == null) {


        action = {
          type: "ATTACKLEFT"
        }
        this.props.dispatch(action)

        this.setState({
          attack: true,
          leftAttack: this.props.attackLeft,
          topAttack: this.props.attackTop,
          degree: this.props.degree
        }, () => {
          leftAttackProjectile.push(setInterval(
            () =>  this.setState({
            leftAttack: this.state.leftAttack - 5,
            topAttack: this.state.attackTop
          }, () => { if (this.state.leftAttack < 0) {
            this.setState({
              attack: false,
              leftAttack: null,
              topAttack: null
            })
          }
          }), 10 )
        )
        })


      }



      else if (this.props.playerDirection.characterdirection == 'DOWN' && this.state.attack == false && this.state.topAttack == null){
        action = {
          type: "ATTACKDOWN"
        }
        this.props.dispatch(action)



      this.setState({
        attack: true,
        leftAttack: this.props.attackLeft,
        topAttack: this.props.attackTop,
        degree: this.props.degree
      }, () => {
        downAttackProjectile.push(setInterval(
          () =>  this.setState({
          leftAttack: this.state.leftAttack,
          topAttack: this.state.topAttack + 5
        }, () => { if (this.state.topAttack > window.innerHeight) {
          this.setState({
            attack: false,
            leftAttack: null,
            topAttack: null
          })
        }
        }), 10 )
      )
      })


    } else if (this.props.playerDirection.characterdirection == 'RIGHT' && this.state.attack == false && this.state.leftAttack == null) {
      action = {
        type: "ATTACKRIGHT"
      }
      this.props.dispatch(action)

      this.setState({
        attack: true,
        leftAttack: this.props.attackLeft,
        topAttack: this.props.attackTop,
        degree: this.props.degree
      }, () => {
        rightAttackProjectile.push(setInterval(
          () => this.setState({
            leftAttack: this.state.leftAttack + 5,
            topAttack: this.state.topAttack
          }, () => { if (this.state.leftAttack > window.innerWidth) {
            this.setState({
              attack: false,
              leftAttack: null,
              topAttack: null
            })
          } } ), 10
        ))
      }

      )


    } else if (this.props.playerDirection.characterdirection == 'UP' && this.state.attack == false && this.state.topAttack == null) {

      action = {
        type: "ATTACKUP"
      }
      this.props.dispatch(action)



    this.setState({
      attack: true,
      leftAttack: this.props.attackLeft,
      topAttack: this.props.attackTop,
      degree: this.props.degree
    }, () => {
      upAttackProjectile.push(setInterval(
        () =>  this.setState({
        leftAttack: this.state.leftAttack,
        topAttack: this.state.topAttack - 5
      }, () => { if (this.state.topAttack < 0) {
        this.setState({
          attack: false,
          leftAttack: null,
          topAttack: null
        })
      }
      }), 10 )
    )
    })





    }


      break;
      }




    }




  render() {
  if (this.state.leftAttack < 0) {
    while (leftAttackProjectile.length > 0) {
      let leftattackInstance = leftAttackProjectile.pop()
      clearInterval(leftattackInstance)
    }
  } else if ( this.state.topAttack > window.innerHeight) {

    while(downAttackProjectile.length > 0) {
      let downattackInstance = downAttackProjectile.pop()
      clearInterval(downattackInstance)
    }
  } else if (this.state.leftAttack > window.innerWidth) {
    while(rightAttackProjectile.length > 0) {
      let rightattackInstance = rightAttackProjectile.pop()
      clearInterval(rightattackInstance)
    }
  } else if (this.state.topAttack < 0) {
    while(upAttackProjectile.length > 0) {
      let upattackInstance = upAttackProjectile.pop()
      clearInterval(upattackInstance)
    }
  }

    return (
      <React.Fragment>
        <img src={this.props.playerDirection.image} style={{position: 'absolute', width: `${this.props.playerDirection.width}%`, top: `${this.props.top}px`, left: `${this.props.left}px`, transform: 'rotate(0deg)' }} />
        <Healthbar health={this.state.health}/>
        {this.state.attack == true ? <PlayerAttack leftAttackCoordinates={this.state.leftAttack} topAttackCoordinates={this.state.topAttack} degree={this.state.degree}/> : null}
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
