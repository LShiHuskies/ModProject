import React from 'react';
import { connect } from 'react-redux';

var object = []
class PlayerAttack extends React.Component {

constructor (props) {
  super(props)

  this.state = {
    left: this.props.attackLeft,
    top: this.props.attackTop
  }
}

  componentDidMount() {
    console.log('state', this.state)
    if (this.props.degree == '180') {
      object.push(setInterval( () => {this.setState ({
        left: this.state.left - 10,
        top: this.state.top
      })
    }, 100))
  }
  }



  render() {

    // let leftAttackCoordinates = this.props.attackCoorindates.left
    // let topAttackCoordinates = this.props.attackCoorindates.top
    // let attackRotation = 0;
    // if (this.props.attackCoorindates.defaultDirection.width == '4.25') {
    //    leftAttackCoordinates = Number(this.props.attackCoorindates.left) - 70;
    //    topAttackCoordinates = Number(this.props.attackCoorindates.top) + 20;
    //    attackRotation = 180
    //
    //
    // } else if (this.props.attackCoorindates.defaultDirection.width == '5') {
    //   leftAttackCoordinates = Number(this.props.attackCoorindates.left) - 10;
    //   topAttackCoordinates = Number(this.props.attackCoorindates.top) + 60;
    //   attackRotation = 90;
    // }
    if (this.state.left < 0) {
      // console.log(object)
      // var leftObjecttimer = object.pop()
      // clearInterval(leftObjecttimer)
      // this.setState({
      //   left: 200,
      //   top: 200
      // })
      // this.props.resetState()
    }
    return (
      <img src="https://orig00.deviantart.net/c74e/f/2013/060/6/5/kamehameha_style_blue_png_by_lewildgoku-d5wny3l.png"
      style={{
                    width: "6%",
                    position: "absolute",
                    transform: `rotate(${this.props.degree}deg)`,
                    left: `${this.state.left}px`,
                    top: `${this.props.attackTop}px`}}
      />
    )
  }
}


const mapStateToProps = (state) => {

  return {
    attackLeft: state.playerCoordinates.attackLeft,
    attackTop: state.playerCoordinates.attackTop,
    degree: state.playerCoordinates.degree
  }
}





export default connect(mapStateToProps)(PlayerAttack);
