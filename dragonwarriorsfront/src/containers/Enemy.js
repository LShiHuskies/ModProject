import React from 'react';
import { connect } from 'react-redux';
import EnemyAttacks from './EnemyAttacks';
import enemyAttackIntervalArray from '../reducers/enemyAttackInterval';
import enemyAttackIntervalArray2 from '../reducers/enemyAttackInterval2';

import EnemyAttacks2 from './EnemyAttacks2';

let friezaIntervals = []
class Enemy extends React.Component {

  componentDidMount() {

  friezaIntervals.push(setInterval(this.handleThatKey, 80))

  }

  handleThatKey = () => {
    if (this.props.time >= 45) {
      if (this.props.playerTop > this.props.enemyTop) {
        let action = {
          type: 'ENEMYMOVEDOWN'
        }
        this.props.dispatch(action)

      }  // if the player is closer to the bottom of the screen than the computer
       if (this.props.playerLeft > this.props.enemyLeft) {

         let action = {
           type: 'ENEMYMOVERIGHT'
         }
         this.props.dispatch(action)

       } // if the player is closer to the left of the screen than the computer
       if (this.props.playerTop < this.props.enemyTop) {
         let action = {
           type: 'ENEMYMOVEUP'
         }
         this.props.dispatch(action)
       } // if the player is closer to the top of the screen than the computer

       if (this.props.playerLeft < this.props.enemyLeft) {
         let action = {
           type: 'ENEMYMOVELEFT'
         }
         this.props.dispatch(action)
       } // if the player is closer to the left of the screen than the computer
     } else if (this.props.time < 45 && this.props.time > 30) {

       if (this.props.playerTwoTop > this.props.enemyTop) {
         let action = {
           type: 'ENEMYMOVEDOWN'
         }
         this.props.dispatch(action)

       }  // if the player is closer to the bottom of the screen than the computer
        if (this.props.playerTwoLeft > this.props.enemyLeft) {

          let action = {
            type: 'ENEMYMOVERIGHT'
          }
          this.props.dispatch(action)

        } // if the player is closer to the left of the screen than the computer
        if (this.props.playerTwoTop < this.props.enemyTop) {
          let action = {
            type: 'ENEMYMOVEUP'
          }
          this.props.dispatch(action)
        } // if the player is closer to the top of the screen than the computer

        if (this.props.playerTwoLeft < this.props.enemyLeft) {
          let action = {
            type: 'ENEMYMOVELEFT'
          }
          this.props.dispatch(action)
        } // if the player is closer to the left of the screen than the computer

     } else if ( this.props.time <= 30 && this.props.time > 15 ) {

       if (this.props.playerTop > this.props.enemyTop) {
         let action = {
           type: 'ENEMYMOVEDOWN'
         }
         this.props.dispatch(action)

       }  // if the player is closer to the bottom of the screen than the computer
        if (this.props.playerLeft > this.props.enemyLeft) {

          let action = {
            type: 'ENEMYMOVERIGHT'
          }
          this.props.dispatch(action)

        } // if the player is closer to the left of the screen than the computer
        if (this.props.playerTop < this.props.enemyTop) {
          let action = {
            type: 'ENEMYMOVEUP'
          }
          this.props.dispatch(action)
        } // if the player is closer to the top of the screen than the computer

        if (this.props.playerLeft < this.props.enemyLeft) {
          let action = {
            type: 'ENEMYMOVELEFT'
          }
          this.props.dispatch(action)
        } // if the player is closer to the left of the screen than the computer

     } else if ( this.props.time <= 15 && this.props.time >= 0 ) {


       if (this.props.playerTwoTop > this.props.enemyTop) {
         let action = {
           type: 'ENEMYMOVEDOWN'
         }
         this.props.dispatch(action)

       }  // if the player is closer to the bottom of the screen than the computer
        if (this.props.playerTwoLeft > this.props.enemyLeft) {

          let action = {
            type: 'ENEMYMOVERIGHT'
          }
          this.props.dispatch(action)

        } // if the player is closer to the left of the screen than the computer
        if (this.props.playerTwoTop < this.props.enemyTop) {
          let action = {
            type: 'ENEMYMOVEUP'
          }
          this.props.dispatch(action)
        } // if the player is closer to the top of the screen than the computer

        if (this.props.playerTwoLeft < this.props.enemyLeft) {
          let action = {
            type: 'ENEMYMOVELEFT'
          }
          this.props.dispatch(action)
        } // if the player is closer to the left of the screen than the computer



     }

     if (( (this.props.time < 50 && this.props.time > 48) ||
     (this.props.enemyHealth < 25 && this.props.enemyHealth > 15))
     && this.props.level !== 'ONE'
   ) {

       if (this.props.playerLeft < 700 && this.props.playerLeft > 200) {
         let action = {
           type: 'TELEPORTTOGOKULEFT'
         }

         this.props.dispatch(action)
       } else if (this.props.playerLeft > 700 && this.props.playerLeft < window.innerWidth - 200) {
         let action = {
           type: 'TELEPORTTOGOKURIGHT'
         }
         this.props.dispatch(action)
       }

     }

     if ( (( this.props.time < 40 && this.props.time > 38 ) || ( this.props.enemyHealth < 10))
     && this.props.level !== 'ONE' ) {

       if (this.props.playerTwoLeft < 700 && this.props.playerTwoLeft > 200) {
         let action = {
           type: 'TELEPORTTOVEGETALEFT',
           payload: {
             playerTwoLeft: this.props.playerTwoLeft,
             playerTwoTop: this.props.playerTwoTop
           }
         }
         this.props.dispatch(action)
       } else if (this.props.playerTwoLeft > 700 && this.props.playerTwoLeft < window.innerWidth - 200) {
         let action = {
           type: 'TELEPORTTOVEGETARIGHT',
           payload: {
             playerTwoLeft: this.props.playerTwoLeft,
             playerTwoTop: this.props.playerTwoTop
           }
         }
         this.props.dispatch(action)
       }

     }



     if (( (this.props.time < 28 && this.props.time > 26) ||
     (this.props.enemyHealth < 40 && this.props.enemyHealth > 15))
     && (this.props.level === 'THREE' || this.props.level === 'FOUR')
   ) {

       if (this.props.playerLeft < 700 && this.props.playerLeft > 200) {
         let action = {
           type: 'TELEPORTTOGOKULEFT'
         }
         this.props.dispatch(action)
       } else if (this.props.playerLeft > 700 && this.props.playerLeft < window.innerWidth - 200) {
         let action = {
           type: 'TELEPORTTOGOKURIGHT'
         }
         this.props.dispatch(action)
       }

     }

     if ( (( this.props.time < 20 && this.props.time > 18 ) || ( this.props.enemyHealth < 15))
     && (this.props.level === 'THREE' || this.props.level === 'FOUR')
      ) {

       if (this.props.playerTwoLeft < 700 && this.props.playerTwoLeft > 200) {
         let action = {
           type: 'TELEPORTTOVEGETALEFT',
           payload: {
             playerTwoLeft: this.props.playerTwoLeft,
             playerTwoTop: this.props.playerTwoTop
           }
         }
         this.props.dispatch(action)
       } else if (this.props.playerTwoLeft > 700 && this.props.playerTwoLeft < window.innerWidth - 200) {
         let action = {
           type: 'TELEPORTTOVEGETARIGHT',
           payload: {
             playerTwoLeft: this.props.playerTwoLeft,
             playerTwoTop: this.props.playerTwoTop
           }
         }
         this.props.dispatch(action)
       }

     }



     if (
       (this.props.playerTop + 90 > this.props.enemyTop && this.props.playerTop - 70 < this.props.enemyTop)
        && (this.props.playerLeft + 50 > this.props.enemyLeft && this.props.playerLeft - 50 < this.props.enemyLeft )

     ) {
       let action = {
         type: 'TELEPORTENEMYANDPLAYER'
       }
       this.props.dispatch(action)
     } // if the player is same need to teleport to detect the collision first


     if (
       (this.props.playerTwoTop + 90 > this.props.enemyTop && this.props.playerTwoTop - 70 < this.props.enemyTop)
        && (this.props.playerTwoLeft + 50 > this.props.enemyLeft && this.props.playerTwoLeft - 50 < this.props.enemyLeft )

     ) {
       let action = {
         type: 'TELEPORTVEGETAANDPLAYER'
       }
       this.props.dispatch(action)
     } // if the player is same need to teleport to detect the collision first


     if (
       (this.props.playerLeft < this.props.enemyLeft)
       && (this.props.enemyTop > this.props.playerTop - 80 && this.props.enemyTop < this.props.playerTop + 80)
       && (this.props.enemyAttack !== true)
     ) {
       if (this.props.enemyLeft > 30) {
         let action = {
           type: 'ENEMYATTACKLEFT'
         }
         this.props.dispatch(action)
       }


     } // end of the if statement for the attack left




     if (
       (this.props.playerTwoLeft < this.props.enemyLeft)
       && (this.props.enemyTop > this.props.playerTwoTop - 80 && this.props.enemyTop < this.props.playerTwoTop + 80)
       && (this.props.enemyAttack !== true)
     ) {
      if (this.props.enemyLeft > 30) {
       let action = {
         type: 'ENEMYATTACKLEFTVEGETA'
       }
       this.props.dispatch(action)
     }


     } // end of the if statement for the attack left against vegeta




     // start for the if statement attack left 2
     if (
       (this.props.playerLeft < this.props.enemyLeft)
       && (this.props.enemyTop > this.props.playerTop - 80 && this.props.enemyTop < this.props.playerTop + 80)
       && (this.props.enemyAttack === true && this.props.enemyAttack2 !== true)
     ) {
      if (this.props.enemyLeft > 30) {
       let action = {
         type: 'ENEMYATTACKLEFT2'
       }
       this.props.dispatch(action)
      }
     }
     // end of the if statement of the attack left 2


     if (
       (this.props.playerTwoLeft < this.props.enemyLeft)
       && (this.props.enemyTop > this.props.playerTwoTop - 80 && this.props.enemyTop < this.props.playerTwoTop + 80)
       && (this.props.enemyAttack === true && this.props.enemyAttack2 !== true)
     ) {
      if (this.props.enemyLeft > 30) {

       let action = {
         type: 'ENEMYATTACKLEFT2VEGETA'
       }
       this.props.dispatch(action)
      }
     }
     // end of the if statement of the attack left 2 against vegeta




     if (
       (this.props.playerLeft > this.props.enemyLeft)
       && (this.props.enemyTop < this.props.playerTop + 80 && this.props.enemyTop > this.props.playerTop - 80)
       && (this.props.enemyAttack !== true)
     ) {
      if (this.props.enemyLeft < window.innerWidth - 30) {

       let action = {
         type: 'ENEMYATTACKRIGHT'
       }
       this.props.dispatch(action)
     }

     } // end of the if statement for the right attack against goku

     if (
       (this.props.playerTwoLeft > this.props.enemyLeft)
       && (this.props.enemyTop < this.props.playerTwoTop + 80 && this.props.enemyTop > this.props.playerTwoTop - 80)
       && (this.props.enemyAttack !== true)
     ) {
    if (this.props.enemyLeft < window.innerWidth - 30) {
       let action = {
         type: 'ENEMYATTACKRIGHTVEGETA'
       }
       this.props.dispatch(action)
     }


     } // end of the if statement for the right attack against vegeta




     // if statement for the second right attack for frieza

     if (
       (this.props.playerLeft > this.props.enemyLeft)
       && (this.props.enemyTop < this.props.playerTop + 80 && this.props.enemyTop > this.props.playerTop - 80)
       && (this.props.enemyAttack === true && this.props.enemyAttack2 !== true)
     ) {
      if (this.props.enemyLeft < window.innerWidth - 30) {
       let action = {
         type: 'ENEMYATTACKRIGHT2'
       }
       this.props.dispatch(action)
     }
   } // end of the enemyattackright2


   if (
     (this.props.playerTwoLeft > this.props.enemyLeft)
     && (this.props.enemyTop < this.props.playerTwoTop + 80 && this.props.enemyTop > this.props.playerTwoTop - 80)
     && (this.props.enemyAttack === true && this.props.enemyAttack2 !== true)
   ) {
    if (this.props.enemyLeft < window.innerWidth - 30) {

     let action = {
       type: 'ENEMYATTACKRIGHT2VEGETA'
     }
     this.props.dispatch(action)
   }
 }


    // end of the enemyattackright 2 against vegeta

     if ( (this.props.playerTop + 110 > this.props.enemyAttackTop && this.props.playerTop - 40 < this.props.enemyAttackTop)
      && (this.props.playerLeft + 50 > this.props.enemyAttackLeft && this.props.playerLeft - 50 < this.props.enemyAttackLeft )
      && (this.props.enemyAttackDirection === "LEFT")
      )
     {

       let action = {
         type: 'ENEMYSUCCESSFULATTACKLEFT'
       }

       this.props.dispatch(action)

       let anotheraction = {
         type: "SETENEMYATTACKTOFALSE"
       }
       this.props.dispatch(anotheraction)

       let misslelandLeft = enemyAttackIntervalArray.pop()
       clearInterval(misslelandLeft)



     } // end of the if statement of the left successful attack 1 by frieza


     if ( (this.props.playerTwoTop + 110 > this.props.enemyAttackTop && this.props.playerTwoTop - 40 < this.props.enemyAttackTop)
      && (this.props.playerTwoLeft + 50 > this.props.enemyAttackLeft && this.props.playerTwoLeft - 50 < this.props.enemyAttackLeft )
      && (this.props.enemyAttackDirection === "LEFT")
      )
     {

       let action = {
         type: 'ENEMYSUCCESSFULATTACKLEFTVEGETA'
       }

       this.props.dispatch(action)

       let anotheraction = {
         type: "SETENEMYATTACKTOFALSE"
       }
       this.props.dispatch(anotheraction)

       let misslelandLeft = enemyAttackIntervalArray.pop()
       clearInterval(misslelandLeft)



     } // end of the if statement of the left successful attack 1 by frieza




     // start for the if statement for the left successful attack 2 by frieza
     if (
       (this.props.playerTop + 110 > this.props.enemyAttackTop2 && this.props.playerTop - 40 < this.props.enemyAttackTop2)
        && (this.props.playerLeft + 50 > this.props.enemyAttackLeft2 && this.props.playerLeft - 50 < this.props.enemyAttackLeft2 )
        && (this.props.enemyAttack2Direction === "LEFT")
      ) {

        let action = {
          type: 'ENEMYSUCCESSFULATTACKLEFT'
        }

        this.props.dispatch(action)

        let anotheraction = {
          type: "SETENEMYATTACK2TOFALSE"
        }
        this.props.dispatch(anotheraction)

        let misslelandLeft = enemyAttackIntervalArray2.pop()
        clearInterval(misslelandLeft)

      }


     // end of the if statement for the left successful attack 2 by frieza

     if (
       (this.props.playerTwoTop + 110 > this.props.enemyAttackTop2 && this.props.playerTwoTop - 40 < this.props.enemyAttackTop2)
        && (this.props.playerTwoLeft + 50 > this.props.enemyAttackLeft2 && this.props.playerTwoLeft - 50 < this.props.enemyAttackLeft2 )
        && (this.props.enemyAttack2Direction === "LEFT")
      ) {

        let action = {
          type: 'ENEMYSUCCESSFULATTACKLEFTVEGETA'
        }

        this.props.dispatch(action)

        let anotheraction = {
          type: "SETENEMYATTACK2TOFALSE"
        }
        this.props.dispatch(anotheraction)

        let misslelandLeft = enemyAttackIntervalArray2.pop()
        clearInterval(misslelandLeft)

      }


     // end of the if statement for the left successful attack 2 by frieza against Vegeta




     if ( (this.props.playerTop + 90 > this.props.enemyAttackTop && this.props.playerTop - 40 < this.props.enemyAttackTop)
      && (this.props.playerLeft + 50 > this.props.enemyAttackLeft && this.props.playerLeft - 30 < this.props.enemyAttackLeft )
      && (this.props.enemyAttackDirection === "RIGHT")
      ) {


        let action = {
          type: 'ENEMYSUCCESSFULATTACKRIGHT'
        }

        this.props.dispatch(action)

        let anotheraction = {
          type: "SETENEMYATTACKTOFALSE"
        }
        this.props.dispatch(anotheraction)

        let misslelandRight = enemyAttackIntervalArray.pop()
        clearInterval(misslelandRight)

      } // end of the if statement for the right attack




      if ( (this.props.playerTwoTop + 90 > this.props.enemyAttackTop && this.props.playerTwoTop - 40 < this.props.enemyAttackTop)
       && (this.props.playerTwoLeft + 50 > this.props.enemyAttackLeft && this.props.playerTwoLeft - 30 < this.props.enemyAttackLeft )
       && (this.props.enemyAttackDirection === "RIGHT")
       ) {

         let action = {
           type: 'ENEMYSUCCESSFULATTACKRIGHTVEGETA'
         }

         this.props.dispatch(action)

         let anotheraction = {
           type: "SETENEMYATTACKTOFALSE"
         }
         this.props.dispatch(anotheraction)

         let misslelandRight = enemyAttackIntervalArray.pop()
         clearInterval(misslelandRight)

       } // end of the if statement for the right attack one against VEGETA

      if (
        (this.props.playerTop + 90 > this.props.enemyAttackTop2 && this.props.playerTop - 40 < this.props.enemyAttackTop2)
         && (this.props.playerLeft + 50 > this.props.enemyAttackLeft2 && this.props.playerLeft - 30 < this.props.enemyAttackLeft2 )
         && (this.props.enemyAttack2Direction === "RIGHT")
      ) {
        let action = {
          type: 'ENEMYSUCCESSFULATTACKRIGHT'
        }

        this.props.dispatch(action)

        let anotheraction = {
          type: "SETENEMYATTACK2TOFALSE"
        }
        this.props.dispatch(anotheraction)

        let misslelandRight = enemyAttackIntervalArray2.pop()
        clearInterval(misslelandRight)

      } // end of the successfull attack 2 vs goku

      if (
        (this.props.playerTwoTop + 90 > this.props.enemyAttackTop2 && this.props.playerTwoTop - 40 < this.props.enemyAttackTop2)
         && (this.props.playerTwoLeft + 50 > this.props.enemyAttackLeft2 && this.props.playerTwoLeft - 30 < this.props.enemyAttackLeft2 )
         && (this.props.enemyAttack2Direction === "RIGHT")
      ) {
        let action = {
          type: 'ENEMYSUCCESSFULATTACKRIGHTVEGETA'
        }

        this.props.dispatch(action)

        let anotheraction = {
          type: "SETENEMYATTACK2TOFALSE"
        }
        this.props.dispatch(anotheraction)

        let misslelandRight = enemyAttackIntervalArray2.pop()
        clearInterval(misslelandRight)

      }




  }

  render() {

    if (friezaIntervals.length > 2) {

      while (friezaIntervals.length > 1) {

        let intervalInstance = friezaIntervals.pop()
        clearInterval(intervalInstance)

      }
    }
    return (
      <div>
        <img src='https://vignette.wikia.nocookie.net/unanything/images/5/5d/Frieza.png/revision/latest?cb=20150214101506'
          alt='frieza' 
          style={{position: 'absolute', width: '5%', top: `${this.props.enemyTop}px`, left: `${this.props.enemyLeft}px` }}/>
        {this.props.enemyAttack === true ? <EnemyAttacks /> : null }
        {this.props.enemyAttack2 === true ? <EnemyAttacks2 /> : null }
      </div>
    )
  }
}



const mapStateToProps = (state) => {


    return {
      playerTop: state.playerCoordinates.top,
      playerLeft: state.playerCoordinates.left,
      playerDirection: state.playerCoordinates.defaultDirection,
      enemyTop: state.playerCoordinates.enemyCoordinates.enemyTop,
      enemyLeft: state.playerCoordinates.enemyCoordinates.enemyLeft,
      enemyAttackTop: state.playerCoordinates.enemyAttackTop,
      enemyAttackLeft: state.playerCoordinates.enemyAttackLeft,
      enemyAttack: state.playerCoordinates.enemyAttack,
      enemyAttackDirection: state.playerCoordinates.enemyAttackDirection,
      enemyAttack2: state.playerCoordinates.enemyAttack2,
      enemyAttackTop2: state.playerCoordinates.enemyAttackTop2,
      enemyAttackLeft2: state.playerCoordinates.enemyAttackLeft2,
      enemyAttack2Direction: state.playerCoordinates.enemyAttack2Direction,
      playerTwoTop: state.secondPlayerCoordinates.top,
      playerTwoLeft: state.secondPlayerCoordinates.left,
      time: state.playerCoordinates.time,
      level: state.playerCoordinates.level,
      enemyHealth: state.playerCoordinates.enemyHealth
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Enemy);
