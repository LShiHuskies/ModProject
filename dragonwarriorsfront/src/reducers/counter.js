

const defaultState = {counter: 0};

export default function counter(state = defaultState, action) {
  switch(action.type) {
    case 'ADD_ONE':
    return {
      ...state, counter: state.counter + 1
    }
  default:
    return state
  }
}
