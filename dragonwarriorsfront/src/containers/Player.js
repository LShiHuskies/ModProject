import React from 'react';
import { connect } from 'react-redux';
import { moveLeft } from '../actions';
import { bindActionCreators } from 'redux';
import Healthbar from './Healthbar';
import PlayerAttack from './PlayerAttack';
import Score from './Score';
import enemyAttackIntervalArray from '../reducers/enemyAttackInterval';


var leftAttackProjectile = [];
var upAttackProjectile = [];
var downAttackProjectile = [];
var rightAttackProjectile = [];
class Player extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
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

                    action = {
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
          && ( this.state.leftAttack < this.props.enemyAttackLeft + 30 && this.state.leftAttack > this.props.enemyAttackLeft - 30 )
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


        }

        }), 10 ) // end of the set Interval for left attack
      ) // end of the leftAttackProjectile push
    }) // end of the setState


  } // end of the if statement for left direction pointing



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
        }  // end of the if statement
        else if ( (this.state.topAttack > this.props.enemyTop - 30 && this.state.topAttack < this.props.enemyTop + 30)
              && (this.state.leftAttack < this.props.enemyLeft + 40 && this.state.leftAttack > this.props.enemyLeft - 60 )

         ) {


             action = {
               type: 'HITFRIEZADOWN'
             }
           this.props.dispatch(action)

           this.setState({
             attack: false,
             leftAttack: null,
             topAttack: null
           })

           clearInterval(downAttackProjectile.pop())
        }  // end of the else if statement


      }), 10 ) // end of the set interval for the downAttackProjectile
    ) // end of the push into the downAttackProjectile array
  }) // end of the setState for the down attack


   // end of the else if for the down direction pointing

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
          }  // end of the if
          else if ( (this.state.leftAttack > this.props.enemyLeft - 30 && this.state.leftAttack < this.props.enemyLeft + 30)
            && (this.state.topAttack < this.props.enemyTop + 80 && this.state.topAttack > this.props.enemyTop - 30)
         ) {

           action = {
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
            ( this.state.topAttack > this.props.enemyAttackTop - 50 && this.state.topAttack < this.props.enemyAttackTop + 50 )
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

          } // end of the else if for the frieza attack and player attack collision



        } ), 10 )) // end of the push into the rightAttackProjectile
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
        }) // end of the setState
      } // end of the if statement
      else if (
        ( this.state.topAttack < this.props.enemyTop + 100 && this.state.topAttack > this.props.enemyTop )
        && (this.state.leftAttack > this.props.enemyLeft - 30 && this.state.leftAttack < this.props.enemyLeft + 20)
      ) {

        action = {
          type: 'HITFRIEZAUP'
        }
      this.props.dispatch(action)

      this.setState({
        attack: false,
        leftAttack: null,
        topAttack: null
      }) // end of this this state within the else if statement


      } // end of the else if
    }), 10 ) // end of the setInterval
  ) // end of the upAttackProjectile
  })  // end of the setState



} // end of the else end of the spacebar
// else if ( (this.state.topAttack > this.props.enemyAttackTop - 50 && this.state.topAttack < this.props.enemyAttackTop + 50)
// && (this.state.leftAttack < this.props.enemyAttackLeft + 50 && this.state.leftAttack > this.props.enemyAttackLeft - 50)
// )
// {
//   console.log('attackTop', this.state.topAttack)
//   console.log('attackLeft', this.state.leftAttack)
//   console.log('enemyleftattack', this.props.enemyAttackLeft)
//   console.log('enemyTopAttack', this.props.enemyAttackTop)
//   console.log('trying this')
//   debugger;




// }




      break; // end of the spacebar case

      case 13:

      if (this.props.left < 800) {
        let action = {
          type: 'TELEPORTRIGHT'
        }
        this.props.dispatch(action)
      } else if (this.props.left >= 800) {
        let action = {
          type: 'TELEPORTLEFT'
        }
        this.props.dispatch(action)
      }
      break;




    } // end of the switch statements




    } // end of the handle controls function




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
        <Score />
        <Healthbar />
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
      degree: state.playerCoordinates.degree,
      enemyTop: state.playerCoordinates.enemyCoordinates.enemyTop,
      enemyLeft: state.playerCoordinates.enemyCoordinates.enemyLeft,
      enemyAttack: state.playerCoordinates.enemyAttack,
      enemyAttackDirection: state.playerCoordinates.enemyAttackDirection,
      enemyAttackLeft: state.playerCoordinates.enemyAttackLeft,
      enemyAttackTop: state.playerCoordinates.enemyAttackTop
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
