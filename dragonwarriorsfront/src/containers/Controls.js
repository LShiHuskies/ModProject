import React from 'react';


class Controls extends React.Component {
  render() {
    return (
      <div id='highscores'
     style={{
       boxShadow: '0px 4px 8px 0 rgba(0, 0, 0, 1)',
       transition: '0.3s',
       float: 'top',
       textAlign: 'left',
       marginTop: '70px',
       marginLeft: '500px',
       marginRight: '500px',
       paddingBottom: '0px',
       overflow: 'scroll',
       backgroundColor: 'rgba(255, 255, 255, 0.5)',
       height: '350px'
     }} >
     <h4>Player Objective</h4>
     <ul style={{fontSize: '16px'}}>
       <ol> 1. Deplete Frieza's health before the timer runs out and before either player's health reaches 0</ol>
       <ol> 2. The players must work together</ol>
       <ol> 3. The players must avoid getting hit by Ginyu as it will reduce his or her health by 2.5% and increase Frieza's by 5%</ol>
       <ol> 4. Try to stay alive as long as you can and get the highest score</ol>
       <ol> 5. Getting hit by Frieza's attacks will decrease the player's health by 5%</ol>
     </ul>
     <h4>Player Movements</h4>
     <ul style={{fontSize: '16px'}}>
      <li>Go Left: Press A</li>
      <li>Go Right: Press D</li>
      <li>Go Down: Press S</li>
      <li>Go Up: Press W</li>
      <li>Go Left and Up: Press Q</li>
      <li>Go Right and Up: Press E</li>
      <li>Go Left and Down: Press Z</li>
      <li>Go Right and Down: Press C</li>
    </ul>
    <h4>Player Direction Facing</h4>
    <ul style={{fontSize: '16px'}}>
      <li>Right Arrow: Look Right</li>
      <li>Left Arrow: Look Left</li>
      <li>Up Arrow: Look Up</li>
      <li>Down Arrow: Look Down</li>
    </ul>
    <h4>Player Attacks</h4>
      <ul style={{fontSize: '16px'}}>
        <li>Kamehameha: Space Bar </li>
        <li>Teleportation: Enter</li>
        <li>FYI the direction you are facing will determine which direction you are firing</li>
      </ul>


   </div>
    )
  }
}

export default Controls;
