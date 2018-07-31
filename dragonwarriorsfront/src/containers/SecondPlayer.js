import React from 'react';
import { connect } from 'react-redux';
import Score from './Score';
import { ActionCable } from 'react-actioncable-provider';
import SecondPlayerAttack from './SecondPlayerAttack';

var leftAttackProjectile = [];
var upAttackProjectile = [];
var downAttackProjectile = [];
var rightAttackProjectile = [];


class SecondPlayer extends React.Component {
  componentDidMount() {

    if (this.props.clicked == false ) {
      window.addEventListener('keydown', this.handleControls)
    }
  }


  handleControls = (event) => {
    switch (event.keyCode) {

      case 65:
        let action = {
          type: 'MOVE TWO LEFT'
        }
        // this.props.dispatch(action)


          let config = {
            method: 'POST',
            headers: {
            'Accepts': 'application/json',
          'Content-Type': 'application/json'
          },
            body: JSON.stringify({
              top: this.props.top,
              left: this.props.left,
              type: action
            })
          };

      fetch(`http://localhost:3000/api/move_twos`, config).then(r=> r.json())




      break;

      case 68:
        action = {
          type: 'MOVE TWO RIGHT'
        }
        // this.props.dispatch(action)


         config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            top: this.props.top,
            left: this.props.left,
            type: action
          })
        };

    fetch(`http://localhost:3000/api/move_twos`, config).then(r=> r.json())




      break;

      case 87:
         action = {
          type: 'MOVE TWO UP'
        }
        // this.props.dispatch(action)

         config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            top: this.props.top,
            left: this.props.left,
            type: action
          })
        };

    fetch(`http://localhost:3000/api/move_twos`, config).then(r=> r.json())


      break;

      case 83:
        action = {
          type: 'MOVE TWO DOWN'
        }
        // this.props.dispatch(action)

        config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            top: this.props.top,
            left: this.props.left,
            type: action
          })
        };

    fetch(`http://localhost:3000/api/move_twos`, config).then(r=> r.json())


      break;

      case 81:
        action = {
          type: 'MOVE TWO LEFT UP'
        }
        // this.props.dispatch(action)

         config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            top: this.props.top,
            left: this.props.left,
            type: action
          })
        };

    fetch(`http://localhost:3000/api/move_twos`, config).then(r=> r.json())


      break;

      case 90:
        action = {
          type: 'MOVE TWO LEFT DOWN'
        }
        // this.props.dispatch(action)

        config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            top: this.props.top,
            left: this.props.left,
            type: action
          })
        };

    fetch(`http://localhost:3000/api/move_twos`, config).then(r=> r.json())

      break;

      case 69:
        action = {
          type: 'MOVE TWO RIGHT UP'
        }
        // this.props.dispatch(action)

       config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            top: this.props.top,
            left: this.props.left,
            type: action
          })
        };

    fetch(`http://localhost:3000/api/move_twos`, config).then(r=> r.json())

      break;

      case 67:
        action = {
          type: 'MOVE TWO RIGHT DOWN'
        }
        // this.props.dispatch(action)


        config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            top: this.props.top,
            left: this.props.left,
            type: action
          })
        };

    fetch(`http://localhost:3000/api/move_twos`, config).then(r=> r.json())

      break;

      case 39:

        action = {
          type: 'LOOKRIGHT TWO'
        }
        // this.props.dispatch(action)


        config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            top: this.props.top,
            left: this.props.left,
            type: action
          })
        };

    fetch(`http://localhost:3000/api/move_twos`, config).then(r=> r.json())

        break;

      case 37:

        action = {
          type: 'LOOKLEFT TWO'
        }

        // this.props.dispatch(action)

        config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            top: this.props.top,
            left: this.props.left,
            type: action
          })
        };
      fetch(`http://localhost:3000/api/move_twos`, config).then(r=> r.json())


      break;

      // case 38:
      //
      //   action = {
      //     type: 'LOOKUP TWO'
      //   }
      //
      //   // this.props.dispatch(action)
      //
      //
      //   config = {
      //     method: 'POST',
      //     headers: {
      //     'Accepts': 'application/json',
      //   'Content-Type': 'application/json'
      //   },
      //     body: JSON.stringify({
      //       top: this.props.top,
      //       left: this.props.left,
      //       type: action
      //     })
      //   };
      //   fetch(`http://localhost:3000/api/move_twos`, config).then(r=> r.json())
      //
      // break;

      case 40:

        action = {
          type: 'LOOKDOWN TWO'
        }
        // this.props.dispatch(action)


        config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            top: this.props.top,
            left: this.props.left,
            type: action
          })
        };
        fetch(`http://localhost:3000/api/move_twos`, config).then(r=> r.json())

      break;

      case 32:

      if (this.props.characterdirection == 'LEFT' && this.props.attack == false) {

      action = {
        type: "ATTACKLEFT TWO"
      }

      config = {
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

    if (this.props.characterdirection == 'RIGHT' && this.props.attack == false ) {
      action = {
        type: "ATTACKRIGHT TWO"
      }

      config = {
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




    break;



    }

  }

  handleReceived = (event) => {
    this.props.dispatch(event.type)


  }




  render() {
    return (
      <React.Fragment>
        <ActionCable
          channel={{ channel: 'MoveTwosChannel' }}
          onReceived={this.handleReceived}
          />
        <img src={this.props.image} style={{position: 'absolute', top: `${this.props.top}px`, left: `${this.props.left}px`, width: `${this.props.width}%`}} />
        {this.props.attack == true ? <SecondPlayerAttack /> : null}
      </React.Fragment>
    )
  }
}


  const mapStateToProps = (state) => {
    return {
      top: state.secondPlayerCoordinates.top,
      left: state.secondPlayerCoordinates.left,
      playerHealth: state.secondPlayerCoordinates.playerHealth,
      clicked: state.playerCoordinates.clicked,
      image: state.secondPlayerCoordinates.defaultDirection.image,
      width: state.secondPlayerCoordinates.defaultDirection.width,
      leftAttack: state.secondPlayerCoordinates.leftAttack,
      topAttack: state.secondPlayerCoordinates.topAttack,
      attack: state.secondPlayerCoordinates.attack,
      characterdirection: state.secondPlayerCoordinates.defaultDirection.characterdirection
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      dispatch
    }
  }




export default connect(mapStateToProps, mapDispatchToProps)(SecondPlayer);
