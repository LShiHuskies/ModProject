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
       paddingLeft: '20px',
       backgroundColor: 'rgba(255, 255, 255, 0.7)'
     }} >
     <h4 style={{color: 'red', fontSize: '20px'}}>{game.name}</h4>
     <p id="user" style={{color: 'black', fontSize: '16px'}}>Player One: {game.users[0].username}</p>
     <p id="user"style={{color: 'black', fontSize: '16px'}}>Player Two: {game.users[1].username}</p>

     <p id="scores" style={{color: 'orange', fontSize: '16px'}}>score: {game.scores} </p>


   </div>
 )
    return (
       <div style={{overflow: 'scroll', height: '600px',
         marginTop: '70px',
         marginLeft: '400px',
         marginRight: '700px'
       }}>
         {cards}
       </div>
    )
  }
}

export default HighScores;
