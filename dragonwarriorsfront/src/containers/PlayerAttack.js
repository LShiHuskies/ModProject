import React from 'react';


class PlayerAttack extends React.Component {

  state = {
    degree: null
  }

  componentDidMount() {
    this.setState({
      degree: this.props.degree
    })
  }

  render() {



    return (
      <img src="https://orig00.deviantart.net/c74e/f/2013/060/6/5/kamehameha_style_blue_png_by_lewildgoku-d5wny3l.png"
      style={{
                    width: "6%",
                    position: "absolute",
                    transform: `rotate(${this.state.degree}deg)`,
                    left: `${this.props.leftAttackCoordinates}px`,
                    top: `${this.props.topAttackCoordinates}px`}}
      />
    )
  }
}



export default PlayerAttack;
