import React from 'react';
import { connect } from 'react-redux';

let enemyAttackIntervalArray = []

class EnemyAttacks extends React.Component {


  componentDidMount() {

      enemyAttackIntervalArray.push(setInterval( this.handleTheComponent, 10 )
    )

  }


  handleTheComponent = () => {
    if (this.props.enemyAttackDirection == "LEFT") {
      let action = {
        type: 'ENEMYMISSILELEFT'
      }
      this.props.dispatch(action)

  } else if (this.props.enemyAttackDirection == "RIGHT") {
    let action = {
      type: 'ENEMYMISSILERIGHT'
    }
    this.props.dispatch(action)
  }

  }

  render() {
    if  (this.props.enemyAttackLeft < 0) {
      let action = {
        type: "SETENEMYATTACKTOFALSE"
      }
      this.props.dispatch(action)
      while (enemyAttackIntervalArray.length > 0) {
        let thing = enemyAttackIntervalArray.pop()
        clearInterval(thing)
      }

    }  // end of the if statement for this.props.enemyAttackLeft < 0
    else if (this.props.enemyAttackLeft > window.innerWidth) {
      let action = {
        type: "SETENEMYATTACKTOFALSE"
      }
      this.props.dispatch(action)
      while (enemyAttackIntervalArray.length > 0) {
        let thing = enemyAttackIntervalArray.pop()
        clearInterval(thing)
      }
    }





    return (
      <div>
        <img src='https://orig00.deviantart.net/6ee6/f/2009/227/f/4/death_ball_cell__png_by_aragorn3000.png' style={{position: 'absolute', width:"3%", left: `${this.props.enemyAttackLeft}px`, top: `${this.props.enemyAttackTop}px` }}/>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    enemyAttackTop: state.playerCoordinates.enemyAttackTop,
    enemyAttackLeft: state.playerCoordinates.enemyAttackLeft,
    enemyAttackDirection: state.playerCoordinates.enemyAttackDirection,
    enemyAttack: state.playerCoordinates.enemyAttack
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(EnemyAttacks);
