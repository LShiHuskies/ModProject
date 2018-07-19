import React from 'react';



class Healthbar extends React.Component {

  render() {
    return (
      <div>
        {this.props.health}
      </div>
    )
  }
}

export default Healthbar;
