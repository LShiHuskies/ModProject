import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ActionCable } from 'react-actioncable-provider';

class GameLobby extends Component {

    handleStartGameforReal = (event) => {
      event.preventDefault();
      const config = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': localStorage.getItem('token')
        },
        body:JSON.stringify({
          player: this.props.player
        })
      }
      fetch(`http://${window.location.hostname}:3000/api/games/`, config).then(r => r.json())
    }

  render() {
    let characters = this.props.characters.filter( character => {
      return character.name == 'Goku' || character.name == 'Vegeta'
    })
    let characterImage = characters.map(he => <img src={he.image} style={{width: '135px', height: '150px', marginTop: '10px', marginLeft: '10px', marginRight: '10px', marginBottom: '10px'}}/>)
    return (
        <React.Fragment>
        <div id='description' style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
           transition: '0.3s',
           backgroundColor: 'rgba(0, 120, 100, 0.7)',
           float: 'left',
           position:'relative', top:'20%', left: '0%', right: '10%', color: 'black',
           fontSize: '23px'
         }}>
         Choose Character
         <br></br>
         <p style={{fontSize: '20px'}}>Default: Vegeta</p>
         <h3 style={{marginTop: '0'}}>
           {characterImage}
           <br></br>
           <button onClick={this.props.count == 0 ? this.props.handleClick : null} style={{float: 'left', marginLeft: '16%', fontSize: '17px'}}>
             {this.props.gokuTaken == false ? 'Goku' : 'TAKEN'}
           </button>
           <button onClick={this.props.count == 0 ? this.props.handleClick : null} style={{float: 'right', marginRight: '14%',fontSize: '17px'}}>
             {this.props.vegetaTaken == false ? 'Vegeta' : 'TAKEN'} </button>
           <br></br>
           <button onClick={this.handleStartGameforReal} style={{fontSize: '17px'}}>Start Game</button>
           <br></br>
           <button value="Refresh Page" onClick={this.props.handleClick} style={{fontSize: '17px'}} > Close Game Lobby </button>
         </h3>

       </div>

       </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.playerCoordinates.player,
    characters: state.characters.characters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameLobby);
