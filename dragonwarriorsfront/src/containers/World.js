import React from 'react';
import { connect } from 'react-redux';
import Player from './Player';



class World extends React.Component {


  render() {
    return (
      <div>
        <div id="PlayerCard" style={{
          boxShadow: '0px 4px 8px 0 rgba(0, 0, 0, 1)',
          transition: '0.3s',
          float: 'left',
          marginLeft: '30px',
          textAlign: 'left'
        }}> Welcome {this.props.username} </div>
        <Player />
      </div>
    )
  }
}

export default World;
