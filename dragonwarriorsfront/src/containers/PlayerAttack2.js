import React from 'react';


class PlayerAttack2 extends React.Component {

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
      <img src="https://vignette.wikia.nocookie.net/joke-battles/images/a/a4/Kamehameha-N.png/revision/latest?cb=20161007170238"
        alt='kamehameha'
      style={{
                    width: "5%",
                    position: "absolute",
                    transform: `rotate(${this.state.degree}deg)`,
                    left: `${this.props.leftAttackCoordinates}px`,
                    top: `${this.props.topAttackCoordinates}px`}}
      />
    )
  }
}



export default PlayerAttack2;
