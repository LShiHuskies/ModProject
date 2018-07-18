
const defaultState = {
  selectedCharacter: null
}


export default function selectedCharacter(state = defaultState, action) {
  switch(action.type) {
    case 'SELECT':
    return {
      ...state, selectedCharacter: action.payload
    }
  default:
    return state
  }
}
