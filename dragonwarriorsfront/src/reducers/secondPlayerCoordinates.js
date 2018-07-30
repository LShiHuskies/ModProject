
const defaultState = {
    top: 100,
    left: 400,
    playerHealth: 100,
    secondplayer: null
  }


export default function secondPlayMovements(state = defaultState, action) {
  switch(action.type) {
    case 'OPERATIONGETSECONDPLAYER':

    return {
      ...state, secondplayer: action.payload
    }

  }

  return state
}
