import { combineReducers } from 'redux';
import counter from './counter';
import characters from './characters';
import selectedCharacter from './select_characters'



const rootReducer = combineReducers({
  characters: characters,
  counter: counter,
  selectedCharacter: selectedCharacter
});

export default rootReducer;
