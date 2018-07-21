import React from 'react';
import { connect } from 'react-redux';
import EnemyAttacks from './EnemyAttacks';


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

     if (this.props.playerLeft == this.props.enemyLeft) {
       // let action = {
       //   type: 'TELEPORTENEMY'
       // }
       // this.props.dispatch(action)
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





     } // end of the if statement for the attack


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
      enemyAttack: state.playerCoordinates.enemyAttack
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Enemy);
