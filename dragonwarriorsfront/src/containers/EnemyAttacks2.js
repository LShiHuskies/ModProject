import React from 'react';
import { connect } from 'react-redux';
import enemyAttackIntervalArray2 from '../reducers/enemyAttackInterval2';



class EnemyAttacks2 extends React.Component {


  componentDidMount() {

      enemyAttackIntervalArray2.push(setInterval( this.handleTheComponent, 7.5 )
    )

  }


  handleTheComponent = () => {
    if (this.props.enemyAttack2Direction === "LEFT") {
      let action = {
        type: 'ENEMYMISSILELEFT2'
      }
      this.props.dispatch(action)

  } if (this.props.enemyAttack2Direction === "RIGHT") {
    let action = {
      type: 'ENEMYMISSILERIGHT2'
    }
    this.props.dispatch(action)
  }

  }

  render() {

    if  (this.props.enemyAttackLeft2 < 0) {
      let action = {
        type: "SETENEMYATTACK2TOFALSE"
      }
      this.props.dispatch(action)
      while (enemyAttackIntervalArray2.length > 0) {
        let thing = enemyAttackIntervalArray2.pop()
        clearInterval(thing)
      }

    }  // end of the if statement for this.props.enemyAttackLeft < 0
    else if (this.props.enemyAttackLeft2 > window.innerWidth) {
      let action = {
        type: "SETENEMYATTACK2TOFALSE"
      }
      this.props.dispatch(action)
      while (enemyAttackIntervalArray2.length > 0) {
        let thing = enemyAttackIntervalArray2.pop()
        clearInterval(thing)
      }
    }





    return (
      <div>
        <img src='https://orig00.deviantart.net/6ee6/f/2009/227/f/4/death_ball_cell__png_by_aragorn3000.png'
          alt='deathball'
          style={{position: 'absolute',
            width:"3%",
            left: `${this.props.enemyAttackLeft2}px`,
            top: `${this.props.enemyAttackTop2}px` }}/>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    enemyAttackTop2: state.playerCoordinates.enemyAttackTop2,
    enemyAttackLeft2: state.playerCoordinates.enemyAttackLeft2,
    enemyAttack2Direction: state.playerCoordinates.enemyAttack2Direction,
    enemyAttack2: state.playerCoordinates.enemyAttack2
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(EnemyAttacks2);
