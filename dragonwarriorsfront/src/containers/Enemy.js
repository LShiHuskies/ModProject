import React from 'react';
import { connect } from 'react-redux';


let thing = []
class Enemy extends React.Component {

  componentDidMount() {
    console.log(this.props)
    window.addEventListener('keydown', this.handleThatKey)

  }

  handleThatKey = (event) => {
    if (this.props.playerTop > this.props.enemyTop) {
      let action = {
        type: 'ENEMYMOVEDOWN'
      }
      this.props.dispatch(action)

    }
     if (this.props.playerLeft > this.props.enemyLeft) {

       let action = {
         type: 'ENEMYMOVERIGHT'
       }
       this.props.dispatch(action)

     }
     if (this.props.playerTop < this.props.enemyTop) {
       let action = {
         type: 'ENEMYMOVEUP'
       }
       this.props.dispatch(action)
     }

     if (this.props.playerLeft < this.props.enemyTop) {
       let action = {
         type: 'ENEMYMOVELEFT'
       }
       this.props.dispatch(action)
     }



  }

  render() {
    
    return (
      <div>
        <img src='https://vignette.wikia.nocookie.net/unanything/images/5/5d/Frieza.png/revision/latest?cb=20150214101506' style={{position: 'absolute', width: '5%', top: `${this.props.enemyTop}px`, left: `${this.props.enemyLeft}px` }}/>
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
      enemyLeft: state.playerCoordinates.enemyCoordinates.enemyLeft
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Enemy);
