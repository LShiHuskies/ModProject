import React from 'react';
import { connect } from 'react-redux';
import EnemyAttacks from './EnemyAttacks';
import enemyAttackIntervalArray from '../reducers/enemyAttackInterval';
import enemyAttackIntervalArray2 from '../reducers/enemyAttackInterval2';


let friezaIntervals = []
class Enemy extends React.Component {


  componentDidMount() {

    window.addEventListener('keydown', () => {
      friezaIntervals.push(setInterval(this.handleThatKey, 100) )
    })

  }

  handleThatKey = () => {
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
       (this.props.playerLeft < this.props.enemyLeft)
       && (this.props.enemyTop > this.props.playerTop - 80 && this.props.enemyTop < this.props.playerTop + 80)
       && (this.props.enemyAttack !== true)
     ) {

       let action = {
         type: 'ENEMYATTACKLEFT'
       }
       this.props.dispatch(action)



     } // end of the if statement for the attack left
     // start for the if statement attack left 2
     // if (
     //   (this.props.playerLeft < this.props.enemyLeft)
     //   && (this.props.enemyTop > this.props.playerTop - 80 && this.props.enemyTop < this.props.playerTop + 80)
     //   && (this.props.enemyAttack == true && this.props.enemyAttack2 !== true)
     // ) {
     //
     //   let action = {
     //     type: 'ENEMYATTACKLEFT'
     //   }
     //   this.props.dispatch(action)
     //
     // }
     // end of the if statement of the attack left 2
     if (
       (this.props.playerLeft > this.props.enemyLeft)
       && (this.props.enemyTop < this.props.playerTop + 80 && this.props.enemyTop > this.props.playerTop - 80)
       && (this.props.enemyAttack !== true)
     ) {

       let action = {
         type: 'ENEMYATTACKRIGHT'
       }
       this.props.dispatch(action)


     } // end of the if statement for the right attack

     if ( (this.props.playerTop + 110 > this.props.enemyAttackTop && this.props.playerTop - 40 < this.props.enemyAttackTop)
      && (this.props.playerLeft + 50 > this.props.enemyAttackLeft && this.props.playerLeft - 50 < this.props.enemyAttackLeft )
      && (this.props.enemyAttackDirection == "LEFT")
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

     // start for the if statement for the left successful attack 2 by frieza
     if (
       (this.props.playerTop + 110 > this.props.enemyAttackTop2 && this.props.playerTop - 40 < this.props.enemyAttackTop2)
        && (this.props.playerLeft + 50 > this.props.enemyAttackLeft2 && this.props.playerLeft - 50 < this.props.enemyAttackLeft2 )
        && (this.props.enemyAttackDirection == "LEFT")
      ) {

        let action = {
          type: 'ENEMYSUCCESSFULATTACKLEFT'
        }

        this.props.dispatch(action)

        let anotheraction = {
          type: "SETENEMYATTACKTOFALSE"
        }
        this.props.dispatch(anotheraction)

        let misslelandLeft = enemyAttackIntervalArray2.pop()
        clearInterval(misslelandLeft)

      }


     // end of the if statement for the left successful attack 2 by frieza


     if ( (this.props.playerTop + 90 > this.props.enemyAttackTop && this.props.playerTop - 40 < this.props.enemyAttackTop)
      && (this.props.playerLeft + 50 > this.props.enemyAttackLeft && this.props.playerLeft - 30 < this.props.enemyAttackLeft )
      && (this.props.enemyAttackDirection == "RIGHT")
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
        <img src='https://vignette.wikia.nocookie.net/unanything/images/5/5d/Frieza.png/revision/latest?cb=20150214101506' style={{position: 'absolute', width: '5%', top: `${this.props.enemyTop}px`, left: `${this.props.enemyLeft}px` }}/>
        {this.props.enemyAttack == true ? <EnemyAttacks /> : null }
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
      enemyAttackLeft2: state.playerCoordinates.enemyAttackLeft2
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Enemy);
