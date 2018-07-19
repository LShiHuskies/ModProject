
    const defaultState = {
        top: '500',
        left: '500',
        defaultDirection: {
          image: 'http://www.pngmart.com/files/2/Goku-PNG-Transparent-Image.png',
          width: '5',
          characterdirection: 'DOWN'
        },
        attackTop: null,
        attackLeft: null,
        degree: '0'
    }


export default function playMovements(state = defaultState, action) {
  switch(action.type) {
    case 'MOVE LEFT':
    if (state.left < 2) {
      return state
    }

    return {
      ...state, left: state.left - 15
    }

    case 'MOVE RIGHT':

    if (state.left > window.innerWidth - 75) {
      return state
    }
    return {
      ...state, left: Number(state.left) + 15
    }

    case 'MOVE UP':
    if (state.top < 5) {
      return state
    }
    return {
      ...state, top: state.top - 15
    }

    case 'MOVE DOWN':
    if (state.top > window.innerHeight - 140) {
      return state
    }
    return {
      ...state, top: Number(state.top) + 15
    }

    case 'MOVE LEFT UP':
    if (state.top < 5 || state.left < 2) {
      return state
    }
    return {
      ...state, top: state.top - 15, left: state.left - 15
    }

    case 'MOVE LEFT DOWN':
    if (state.top > window.innerHeight - 140 || state.left < 2) {
      return state
    }
    return {
      ...state, top: Number(state.top) + 15, left: state.left - 15
    }

    case 'MOVE RIGHT UP':
    if (state.top < 2 || state.left > window.innerWidth - 75) {
      return state
    }
    return {
      ...state, top: state.top - 15, left: Number(state.left) + 15
    }

    case 'MOVE RIGHT DOWN':
    if (state.top > window.innerHeight - 140 || state.left > window.innerWidth - 75) {
      return state
    }
    return {
      ...state, top: Number(state.top) + 15, left: Number(state.left) + 15
    }

    case 'LOOKRIGHT':

    return {
      ...state, defaultDirection: {
        image: 'https://vignette.wikia.nocookie.net/deadliestfiction/images/0/09/Goku.png/revision/latest?cb=20180325020436',
        width: '3.5',
        characterdirection: 'RIGHT'
      }
    }

    case 'LOOKLEFT':

    return {
      ...state, defaultDirection: {
        // LEFT IMAGE
        image: 'https://vignette.wikia.nocookie.net/dragonball/images/0/09/Goku.png/revision/latest?cb=20160204151954',
        width: '4.25',
        characterdirection: 'LEFT'
      }
    }

    case 'LOOKDOWN':

    return {
      // DEFAULT DOWN IMAGE
      ...state, defaultDirection: {
        image: 'http://www.pngmart.com/files/2/Goku-PNG-Transparent-Image.png',
        width: '5',
        characterdirection: 'DOWN'
      }
    }

    case 'ATTACKLEFT':


    return {
      ...state, attackTop: Number(state.top) + 20, attackLeft: Number(state.left) - 50, degree: '180'
    }

    case 'ATTACKDOWN':

    console.log("do nothing")
    break;

  default:
    return state
  }
}
