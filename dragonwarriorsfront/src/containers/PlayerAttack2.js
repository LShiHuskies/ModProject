import React from 'react';


class PlayerAttack2 extends React.Component {



  render() {

    return (
      <img src="https://vignette.wikia.nocookie.net/joke-battles/images/a/a4/Kamehameha-N.png/revision/latest?cb=20161007170238"
      style={{
                    width: "5%",
                    position: "absolute",
                    transform: `rotate(${this.props.degree}deg)`,
                    left: `${this.props.leftAttackCoordinates}px`,
                    top: `${this.props.topAttackCoordinates}px`}}
      />
    )
  }
}



export default PlayerAttack2;
