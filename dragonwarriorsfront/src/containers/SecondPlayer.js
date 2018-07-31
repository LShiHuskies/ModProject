import React from 'react';
import { connect } from 'react-redux';
import Score from './Score';
import { ActionCable } from 'react-actioncable-provider';
import SecondPlayerAttack from './SecondPlayerAttack';
import playerTwoAttackInterval from '../reducers/playerTwoAttackInterval';
import enemyAttackIntervalArray from '../reducers/enemyAttackInterval';
import enemyAttackIntervalArray2 from '../reducers/enemyAttackInterval2'

var leftAttackProjectile = [];
var upAttackProjectile = [];
var downAttackProjectile = [];
var rightAttackProjectile = [];


class SecondPlayer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      attack: false,
      leftAttack: null,
      topAttack: null,
      degree: this.props.degree,
    }
  }

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

      if (this.props.characterdirection == 'LEFT' && this.state.attack == false) {

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

    if (this.props.characterdirection == 'RIGHT' && this.state.attack == false ) {
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

    case 13:

    if (this.props.left > 750) {
      let action = {
        type: 'TELEPORTVEGETALEFT'
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


    } else if (this.props.left < 750) {

      let action = {
        type: 'TELEPORTVEGETARIGHT'
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





    }

  }

  handleReceived = (event) => {
    this.props.dispatch(event.type)

    if (event.type.type == 'ATTACKLEFT TWO') {
      this.setState({
        attack: true,
        leftAttack: this.props.leftAttack,
        topAttack: this.props.topAttack,
        degree: this.props.degree
      }, () => {
        leftAttackProjectile.push(setInterval(
          () =>  this.setState({
          leftAttack: this.state.leftAttack - 5,
          topAttack: this.state.topAttack
      }, () => { if (this.state.leftAttack < 0) {
        this.setState({
          attack: false,
          leftAttack: null,
          topAttack: null
        })
      } else if (  (this.state.leftAttack < this.props.enemyLeft + 20 && this.state.leftAttack > this.props.enemyLeft - 20)
        && (this.state.topAttack > this.props.enemyTop - 50 && this.state.topAttack < this.props.enemyTop + 105  )
              ) {

                let action = {
                  type: 'HITFRIEZALEFT'
                }
              this.props.dispatch(action)

        this.setState({
          attack: false,
          leftAttack: null,
          topAttack: null
        })

      } // end of the else if statement for left attack
      else if (( this.state.topAttack > this.props.enemyAttackTop - 30 && this.state.topAttack < this.props.enemyAttackTop + 30 )
      && ( this.state.leftAttack < this.props.enemyAttackLeft + 5 && this.state.leftAttack > this.props.enemyAttackLeft - 5 )
    ) {
      let action = {
        type: 'SETENEMYATTACKTOFALSE'
      };
      this.props.dispatch(action);

      this.setState({
        attack: false,
        leftAttack: null,
        topAttack: null
      });

      let anotheraction = {
        type: 'BLOCKFRIEZAATTACKLEFT'
      };
      this.props.dispatch(anotheraction);


      let misslelandLeft = enemyAttackIntervalArray.pop()
      clearInterval(misslelandLeft)


    } // end of the else if for the attack left 1

  }), 7 ) // end of the set Interval for left attack
  ) // end of the leftAttackProjectile push
  })

    } // end of the if statement for the attack left two
  else if (event.type.type == 'ATTACKRIGHT TWO') {

    this.setState({
      attack: true,
      leftAttack: this.props.leftAttack,
      topAttack: this.props.topAttack,
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
        }  // end of the if
        else if ( (this.state.leftAttack > this.props.enemyLeft - 30 && this.state.leftAttack < this.props.enemyLeft + 30)
          && (this.state.topAttack < this.props.enemyTop + 80 && this.state.topAttack > this.props.enemyTop - 30)
       ) {
         
         let action = {
           type: 'HITFRIEZARIGHT'
         }
       this.props.dispatch(action)

       this.setState({
         attack: false,
         leftAttack: null,
         topAttack: null
       })
       clearInterval(rightAttackProjectile.pop()) // clears the interval if it touches frieza

        } // end of the else if
        else if (
          ( this.state.topAttack > this.props.enemyAttackTop - 35 && this.state.topAttack < this.props.enemyAttackTop + 35 )
        && ( this.state.leftAttack < this.props.enemyAttackLeft + 40 && this.state.leftAttack > this.props.enemyAttackLeft - 40 )
       ) {


         let action = {
           type: 'SETENEMYATTACKTOFALSE'
         };
         this.props.dispatch(action);

         this.setState({
           attack: false,
           leftAttack: null,
           topAttack: null
         });

         let anotheraction = {
           type: 'BLOCKFRIEZAATTACKRIGHT'
         };
         this.props.dispatch(anotheraction);


         let misslelandRight = enemyAttackIntervalArray.pop()
         clearInterval(misslelandRight)
         clearInterval(rightAttackProjectile.pop()) // clears the interval if it touches frieza's attack

       } // handling frieza's attack 1

       else if (
         ( this.state.topAttack > this.props.enemyAttackTop2 - 35 && this.state.topAttack < this.props.enemyAttackTop2 + 35 )
       && ( this.state.leftAttack < this.props.enemyAttackLeft2 + 40 && this.state.leftAttack > this.props.enemyAttackLeft2 - 40 )

       ) {


         let action = {
           type: 'SETENEMYATTACK2TOFALSE'
         };
         this.props.dispatch(action);

         this.setState({
           attack: false,
           leftAttack: null,
           topAttack: null
         });

         let anotheraction = {
           type: 'BLOCKFRIEZAATTACKRIGHT'
         };
         this.props.dispatch(anotheraction);




         let misslelandRight = enemyAttackIntervalArray2.pop()
         clearInterval(misslelandRight)
         clearInterval(rightAttackProjectile.pop()) // clears the interval if it touches frieza's attack


       }

      } ), 7 )) // end of the push into the rightAttackProjectile
    }

    )


  }




} // closing of the handle received




  render() {
    if (this.state.leftAttack < 0) {

      while (leftAttackProjectile.length > 0) {

        let leftattackInstance = leftAttackProjectile.pop()
        clearInterval(leftattackInstance)
      }
    }  // this is the first attack left.
    else if (this.state.leftAttack > window.innerWidth) {
      while(rightAttackProjectile.length > 0) {

        let rightattackInstance = rightAttackProjectile.pop()
        clearInterval(rightattackInstance)
      }
    }

    return (
      <React.Fragment>
        <ActionCable
          channel={{ channel: 'MoveTwosChannel' }}
          onReceived={this.handleReceived}
          />
        <img src={this.props.image} style={{position: 'absolute', top: `${this.props.top}px`, left: `${this.props.left}px`, width: `${this.props.width}%`}} />
        {this.state.attack == true ? <SecondPlayerAttack leftAttack={this.state.leftAttack} topAttack={this.state.topAttack} degree={this.state.degree}/> : null}
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
      attack: state.secondPlayerCoordinates.attack,
      characterdirection: state.secondPlayerCoordinates.defaultDirection.characterdirection,
      leftAttack: state.secondPlayerCoordinates.attackLeft,
      topAttack: state.secondPlayerCoordinates.attackTop,
      attack: state.secondPlayerCoordinates.attack,
      degree: state.secondPlayerCoordinates.degree,
      enemyAttackLeft: state.playerCoordinates.enemyAttackLeft,
      enemyAttackTop: state.playerCoordinates.enemyAttackTop,
      enemyAttackLeft2: state.playerCoordinates.enemyAttackLeft2,
      enemyAttackTop2: state.playerCoordinates.enemyAttackTop2,
      enemyTop: state.playerCoordinates.enemyCoordinates.enemyTop,
      enemyLeft: state.playerCoordinates.enemyCoordinates.enemyLeft
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      dispatch
    }
  }




export default connect(mapStateToProps, mapDispatchToProps)(SecondPlayer);
