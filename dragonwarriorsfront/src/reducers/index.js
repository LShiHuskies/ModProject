import { combineReducers } from 'redux';
import counter from './counter';
import characters from './characters';
import selectedCharacter from './select_characters';
import playMovements from './playerCoordinates';


const rootReducer = combineReducers({
  characters: characters,
  counter: counter,
  selectedCharacter: selectedCharacter,
  playerCoordinates: playMovements
});

export default rootReducer;
