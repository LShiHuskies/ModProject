import React from 'react';
import { connect } from 'react-redux';


class PlayerAttack extends React.Component {

  state = {
    leftAttack: 100,
    topAttack: 100
  }

  componentDidMount() {

  }
  render() {
    console.log(this.props)
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

    return (
      <img src="https://orig00.deviantart.net/c74e/f/2013/060/6/5/kamehameha_style_blue_png_by_lewildgoku-d5wny3l.png"
      style={{
                    width: "6%",
                    position: "absolute",
                    transform: `rotate(90deg)`,
                    left: `${this.props.attackLeft}px`,
                    top: `${this.props.attackTop}px`}}
      />
    )
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  return {
    attackleft: state.playerCoordinates.left,
    attackTop: state.playerCoordinates.top
  }
}



export default connect(mapStateToProps)(PlayerAttack);
