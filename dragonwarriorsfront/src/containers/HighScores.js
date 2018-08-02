import React from 'react';


class HighScores extends React.Component {

  render() {


    let cards = this.props.games.map(game =>
      <div id='highscores'
     style={{
       boxShadow: '0px 4px 8px 0 rgba(0, 0, 0, 1)',
       transition: '0.3s',
       float: 'top',
       textAlign: 'left',
       marginTop: '70px',
       marginLeft: '300px',
       marginRight: '1400px',
       backgroundColor: 'rgba(0, 0, 255, 0.3)'
     }} >
     <h4 style={{color: 'red', fontSize: '20px'}}>{game.name}</h4>
     <p id="user" style={{color: 'black', fontSize: '16px'}}>Player One: {game.users[0].username}</p>
     <p id="user"style={{color: 'black', fontSize: '16px'}}>Player Two: {game.users[1].username}</p>

     <p id="scores" style={{color: 'orange', fontSize: '16px'}}>score: {game.scores} </p>


   </div>
 )
    return (
       <div>
         {cards}
       </div>
    )
  }
}

export default HighScores;
