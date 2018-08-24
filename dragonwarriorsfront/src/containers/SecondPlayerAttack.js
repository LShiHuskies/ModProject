import React from 'react';


class SecondPlayerAttack extends React.Component {

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
      <div>

      <img src="http://i.imgur.com/nTwGHSe.png"
        alt='kamehameha'
      style={{
                    width: "6%",
                    position: "absolute",
                    transform: `rotate(${this.state.degree}deg)`,
                    left: `${this.props.leftAttack}px`,
                    top: `${this.props.topAttack}px`}}
      />
    </div>
    )
  }
}





export default SecondPlayerAttack;
