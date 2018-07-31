
const defaultState = {
    top: 100,
    left: 400,
    playerHealth: 100,
    secondplayer: null,
    defaultDirection: {
      image: 'https://www.freepngimg.com/thumb/dragon_ball/21449-6-vegeta-file-thumb.png',
      width: '8',
      characterdirection: 'DOWN'
    },
    attackTop: null,
    attackLeft: null,
    degree: 0,
    attack: false
  }


export default function secondPlayMovements(state = defaultState, action) {
  switch(action.type) {
    case 'OPERATIONGETSECONDPLAYER':

    return {
      ...state, secondplayer: action.payload
    }

    case 'MOVE TWO LEFT':
    if (state.left < 2) {
      return state
    }

    return {
      ...state, left: state.left - 15
    }

    case 'MOVE TWO RIGHT':

    if (state.left > window.innerWidth - 60 )
    return state

    return {
      ...state, left: Number(state.left) + 15
    }

    case 'MOVE TWO UP':
    if (state.top < 2)
      return state

    return {
      ...state, top: Number(state.top) - 15
    }

    case 'MOVE TWO DOWN':
    if (state.top > window.innerHeight - 100)
      return state

    return {
      ...state, top: Number(state.top) + 15
    }

    case 'MOVE TWO LEFT UP':
    if (state.top < 5 || state.left < 2) {
      return state
    }
    return {
      ...state, top: state.top - 15, left: state.left - 15
    }

    case 'MOVE TWO LEFT DOWN':
    if (state.top > window.innerHeight - 140 || state.left < 2) {
      return state
    }
    return {
      ...state, top: Number(state.top) + 15, left: state.left - 15
    }

    case 'MOVE TWO RIGHT UP':
    if (state.top < 2 || state.left > window.innerWidth - 75) {
      return state
    }
    return {
      ...state, top: state.top - 15, left: Number(state.left) + 15
    }

    case 'MOVE TWO RIGHT DOWN':
    if (state.top > window.innerHeight - 140 || state.left > window.innerWidth - 75) {
      return state
    }
    return {
      ...state, top: Number(state.top) + 15, left: Number(state.left) + 15
    }

    case 'LOOKRIGHT TWO':

    return {
      ...state, defaultDirection: {
        image: 'http://www.dustloop.com/wiki/images/5/52/DBFZ_SS_Vegeta_Portrait.png',
        width: '4',
        characterdirection: 'RIGHT'
      }
    }

    case 'LOOKLEFT TWO':

    return {
        ...state, defaultDirection: {
        image: 'http://www.spriters-resource.com/resources/sheet_icons/64/67278.png',
        width: '7',
        characterdirection: 'LEFT'
      }
    }

    case 'LOOKDOWN TWO':

    return {
      ...state, defaultDirection: {
        image: 'https://www.freepngimg.com/thumb/dragon_ball/21449-6-vegeta-file-thumb.png',
        width: '8',
        characterdirection: 'DOWN'
      }
    }

    case 'ATTACKLEFT TWO':

    return {
      ...state, attackTop: state.top,
      attackLeft: state.left - 60,
      degree: 180,
      attack: true
    }

    case 'PLAYERTWOMISSILELEFT':

    return {
      ...state, attackTop: state.attackTop,
      attackLeft: state.attackLeft - 3
    }

    case 'SETPLAYERTWOATTACKTOFALSE':
    return {
      ...state, attackTop: null,
      attackLeft: null, attack: false
    }

    case 'ATTACKRIGHT TWO':

    return {
      ...state, attackTop: state.top,
      attackLeft: state.left + 60,
      degree: 0,
      attack: true
    }

    case 'PLAYERTWOMISSILERIGHT':

    return {
      ...state, attackTop: state.attackTop,
      attackLeft: state.attackLeft + 3
    }





  }

  return state
}
