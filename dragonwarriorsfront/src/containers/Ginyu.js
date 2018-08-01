import React from 'react';
import { connect } from 'react-redux';
import ginyuAttackIntervalArray from '../reducers/ginyuAttackInterval';


class Ginyu extends React.Component {

  componentDidMount() {
    if (this.props.level == 'ONE') {
        ginyuAttackIntervalArray.push(setInterval( this.handleGinyu, 30 ))
    } else if (this.props.level == 'TWO') {
        ginyuAttackIntervalArray.push(setInterval( this.handleGinyu, 26 ))
    } else if (this.props.level == 'THREE') {
        ginyuAttackIntervalArray.push(setInterval( this.handleGinyu, 23 ))
    } else {
        ginyuAttackIntervalArray.push(setInterval( this.handleGinyu, 20 ))
    }

  }

  componentWillUnmount() {
    while (ginyuAttackIntervalArray.length > 0){
      let ginyuInterval = ginyuAttackIntervalArray.pop()
      clearInterval(ginyuInterval)
    }
  }

  handleGinyu = () => {
    if(this.props.time > 25) {
      if(this.props.playerLeft < this.props.ginyuLeft) {
        let action = {
          type: 'GINYUGOLEFT'
        };
        this.props.dispatch(action)
      }
      if(this.props.playerLeft > this.props.ginyuLeft) {
        let action = {
          type: 'GINYUGORIGHT'
        }
        this.props.dispatch(action)
      }
      if(this.props.playerTop > this.props.ginyuTop) {
        let action = {
          type: 'GINYUGODOWN'
        }
        this.props.dispatch(action)
      }
      if(this.props.playerTop < this.props.ginyuTop) {
        let action = {
          type: 'GINYUGOUP'
        }
        this.props.dispatch(action)
      }
      if ( (this.props.ginyuTop < this.props.playerTop + 120 && this.props.ginyuTop > this.props.playerTop - 100)
      && (this.props.playerLeft < this.props.ginyuLeft + 60 && this.props.playerLeft > this.props.ginyuLeft - 25)
    ) {
      let action = {
        type: 'GINYUGOTGOKU'
      }
      this.props.dispatch(action)
    }
  } else {

    if(this.props.playerTwoLeft < this.props.ginyuLeft) {
      let action = {
        type: 'GINYUGOLEFT'
      };
      this.props.dispatch(action)
    }
    if(this.props.playerTwoLeft > this.props.ginyuLeft) {
      let action = {
        type: 'GINYUGORIGHT'
      }
      this.props.dispatch(action)
    }
    if(this.props.playerTwoTop > this.props.ginyuTop) {
      let action = {
        type: 'GINYUGODOWN'
      }
      this.props.dispatch(action)
    }
    if(this.props.playerTwoTop < this.props.ginyuTop) {
      let action = {
        type: 'GINYUGOUP'
      }
      this.props.dispatch(action)
    }
    if ( (this.props.ginyuTop < this.props.playerTwoTop + 120 && this.props.ginyuTop > this.props.playerTwoTop - 100)
    && (this.props.playerTwoLeft < this.props.ginyuLeft + 60 && this.props.playerTwoLeft > this.props.ginyuLeft - 25)
  ) {
    let action = {
      type: 'GINYUGOTVEGETA'
    }
    this.props.dispatch(action)
  }



  }

  }

  render() {

    return (
      <div>
        <img src='https://vignette.wikia.nocookie.net/dbz-vs/images/7/72/Captain_Ginyu.png/revision/latest?cb=20150805182823'
          style={{position: 'absolute',
            width: '6%',
            top: `${this.props.ginyuTop}px`,
            left: `${this.props.ginyuLeft}px`}}
           />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ginyuTop: state.playerCoordinates.ginyuTop,
    ginyuLeft: state.playerCoordinates.ginyuLeft,
    playerTop: state.playerCoordinates.top,
    playerLeft: state.playerCoordinates.left,
    level: state.playerCoordinates.level,
    time: state.playerCoordinates.time,
    playerTwoTop: state.secondPlayerCoordinates.top,
    playerTwoLeft: state.secondPlayerCoordinates.left
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Ginyu);
