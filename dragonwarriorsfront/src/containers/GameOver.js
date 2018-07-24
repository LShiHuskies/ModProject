import React from 'react';
import { connect } from 'react-redux';



class GameOver extends React.Component {

  componentDidMount() {
    const config = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token')
      },
      body:JSON.stringify({scores: this.props.score})
    }




    fetch(`http://localhost:3000/api/games`, config).then(r => r.json())
    .then(res => {

      const otherConfig = {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
          'Authorization': localStorage.getItem('token')
        },
        body:JSON.stringify({
          game_id: res.id,
          username: this.props.player.username
        })
      }

      fetch(`http://localhost:3000/api/users/${this.props.player.id}`, otherConfig).then(r => r.json())
    })



  }



  render() {
    return (
      <div style={{color: 'red'}}>
        Game Over
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.playerCoordinates.score,
    player: state.playerCoordinates.player
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
