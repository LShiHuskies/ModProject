
    const defaultState = {
        top: 500,
        left: 500,
        playerHealth: 100,
        enemyHealth: 100,
        defaultDirection: {
          image: 'http://www.pngmart.com/files/2/Goku-PNG-Transparent-Image.png',
          width: '5',
          characterdirection: 'DOWN'
        },
        attackTop: null,
        attackLeft: null,
        degree: '0',
        enemyCoordinates: {
          enemyTop: 300,
          enemyLeft: 1500
        },
        score: 0,
        enemyAttackTop: null,
        enemyAttackLeft: null,
        enemyAttackDirection: null,
        enemyAttack: false,
        time: 60,
        player: null,
        startGame: false,
        logOut: false,
        ginyuLeft: 1000,
        ginyuTop: 600,
        attackLeft2: null,
        attackTop2: null,
        level: 'ONE',
        attackLeft3: null,
        attackTop3: null,
        enemyAttackTop2: null,
        enemyAttackLeft2: null,
        enemyAttack2: false,
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

    case 'LOOKUP':

    return {
      ...state, defaultDirection: {
        image: 'http://img00.deviantart.net/c1c5/i/2016/054/4/e/goku_de_espaldas_by_saodvd-d9svku5.png',
        width: '5',
        characterdirection: 'UP'
      }
    }

    case 'ATTACKLEFT':


    return {
      ...state, attackTop: Number(state.top) + 20, attackLeft: Number(state.left) - 80, degree: '180'
    }

    case 'ATTACKDOWN':

    return {
      ...state, attackTop: Number(state.top) + 130, attackLeft: Number(state.left) - 10, degree: '90'
    }

    case 'ATTACKRIGHT':

    return {
      ...state, attackTop: Number(state.top) + 20, attackLeft: Number(state.left) + 42, degree: '0'
    }

    case 'ATTACKUP':

    return {
      ...state, attackTop: Number(state.top) - 75, attackLeft: Number(state.left) - 5, degree: '270'
    }

    case 'ENEMYMOVEDOWN':

    return {
      ...state, enemyCoordinates: {
        enemyTop: Number(state.enemyCoordinates.enemyTop) + 6,
        enemyLeft: state.enemyCoordinates.enemyLeft
      }
    }

    case 'ENEMYMOVERIGHT':

    return {
      ...state, enemyCoordinates: {
        enemyTop: state.enemyCoordinates.enemyTop,
        enemyLeft: Number(state.enemyCoordinates.enemyLeft) + 6
      }
    }

    case 'ENEMYMOVEUP':

    return {
      ...state, enemyCoordinates: {
        enemyTop: Number(state.enemyCoordinates.enemyTop) - 6,
        enemyLeft: state.enemyCoordinates.enemyLeft
      }
    }

    case 'ENEMYMOVELEFT':

    return {
      ...state, enemyCoordinates: {
        enemyTop: state.enemyCoordinates.enemyTop,
        enemyLeft: Number(state.enemyCoordinates.enemyLeft) - 6
      }
    }

    case 'HITFRIEZALEFT':

    return {
      ...state, enemyCoordinates: {
        enemyTop: state.enemyCoordinates.enemyTop,
        enemyLeft: Number(state.enemyCoordinates.enemyLeft) - 30
      },
      enemyHealth: state.enemyHealth - 5,
      score: state.score + 400
    }

    case 'HITFRIEZADOWN':

    return {
      ...state, enemyCoordinates: {
        enemyTop: state.enemyCoordinates.enemyTop + 30,
        enemyLeft: state.enemyCoordinates.enemyLeft
      },
      enemyHealth: state.enemyHealth - 5,
      score: state.score + 200
    }

    case 'HITFRIEZARIGHT':

    return {
      ...state, enemyCoordinates: {
        enemyTop: state.enemyCoordinates.enemyTop,
        enemyLeft: state.enemyCoordinates.enemyLeft + 30
      },
      enemyHealth: state.enemyHealth - 5,
      score: state.score + 400
    }

    case 'HITFRIEZAUP':

    return {
      ...state, enemyCoordinates: {
        enemyTop: state.enemyCoordinates.enemyTop - 30,
        enemyLeft: state.enemyCoordinates.enemyLeft
      },
      enemyHealth: state.enemyHealth - 5,
      score: state.score + 200
    }

    case 'TELEPORTENEMYANDPLAYER':

    return {
      ...state, enemyCoordinates: {
        enemyTop: 300,
        enemyLeft: 1400,
      },
      playerHealth: state.playerHealth - 20,
      top: 480,
      left: 500
    }

    case 'ENEMYATTACKLEFT':

    return {
      ...state, enemyAttackTop: state.enemyCoordinates.enemyTop,
      enemyAttackLeft: state.enemyCoordinates.enemyLeft,
      enemyAttackDirection: 'LEFT',
      enemyAttack: true
    }

    case 'ENEMYATTACKLEFT2':

    return {
      ...state, enemyAttackTop2: state.enemyCoordinates.enemyTop,
      enemyAttackLeft2: state.enemyCoordinates.enemyLeft,
      enemyAttack2Direction: 'LEFT',
      enemyAttack2: true
    }

    case 'ENEMYMISSILELEFT':

    return {
      ...state, enemyAttackTop: state.enemyAttackTop,
      enemyAttackLeft: state.enemyAttackLeft - 3
    }

    case 'ENEMYMISSILELEFT2':

    return {
      ...state, enemyAttackTop2: state.enemyAttackTop2,
      enemyAttackLeft2: state.enemyAttackLeft2 - 3
    }

    case 'ENEMYSUCCESSFULATTACKLEFT':

    return {
      ...state, playerHealth: Number(state.playerHealth) - 10,
      left: state.left - 40
    }

    case 'ENEMYATTACKRIGHT':

    return {
      ...state, enemyAttackTop: state.enemyCoordinates.enemyTop,
      enemyAttackLeft: state.enemyCoordinates.enemyLeft + 35,
      enemyAttackDirection: 'RIGHT',
      enemyAttack: true
    }

    case 'ENEMYATTACKRIGHT2':

    return {
      ...state, enemyAttackTop2: state.enemyCoordinates.enemyTop,
      enemyAttackLeft2: state.enemyCoordinates.enemyLeft + 35,
      enemyAttack2Direction: 'RIGHT',
      enemyAttack2: true
    }

    case 'ENEMYMISSILERIGHT':

    return {
      ...state, enemyAttackTop: state.enemyAttackTop,
      enemyAttackLeft: state.enemyAttackLeft + 3
    }

    case 'ENEMYMISSILERIGHT2':

    return {
      ...state, enemyAttackTop2: state.enemyAttackTop2,
      enemyAttackLeft2: state.enemyAttackLeft2 + 3
    }

    case 'ENEMYSUCCESSFULATTACKRIGHT':

    return {
      ...state, playerHealth: Number(state.playerHealth) - 10,
      left: state.left + 40
    }

    case 'SETENEMYATTACKTOFALSE':

    return {
      ...state, enemyAttackTop: null,
      enemyAttackLeft: null,
      enemyAttack: false
    }

    case 'SETENEMYATTACK2TOFALSE':

    return {
      ...state, enemyAttackTop2: null,
      enemyAttackLeft2: null,
      enemyAttack2: false
    }

    case 'COUNTERDOWN':

    return {
      ...state, time: state.time - 1
    }

    case 'TELEPORTRIGHT':

    return {
      ...state, top: Math.random() * 800,
      left: 1400,
      playerHealth: state.playerHealth - 2.5
    }

    case 'TELEPORTLEFT':

    return {
      ...state, top: Math.random() * 900,
      left: 150,
      playerHealth: state.playerHealth - 2.5
    }

    case 'BLOCKFRIEZAATTACKLEFT':

    return {
      ...state, score: state.score + 250
    }

    case 'BLOCKFRIEZAATTACKRIGHT':

    return {
      ...state, score: state.score + 250
    }

    case 'OPERATIONGETPLAYER':

    return {
      ...state, player: action.payload
    }

    case 'RESETTIMER':

    return {
      ...state, time: 60
    }

    case 'STARTGAME':
    return {
      ...state, startGame: true
    }

    case 'LOGOUT':

    localStorage.removeItem('token')

    return {
      ...state, logOut: true
    }

    case 'GINYUGOLEFT':

    return {
      ...state, ginyuLeft: state.ginyuLeft - 10
    }

    case 'GINYUGORIGHT':

    return {
      ...state, ginyuLeft: state.ginyuLeft + 10
    }

    case 'GINYUGODOWN':

    return {
      ...state, ginyuTop: state.ginyuTop + 10
    }

    case 'GINYUGOUP':

    return {
      ...state, ginyuTop: state.ginyuTop - 10
    }

    case 'GINYUGOTGOKU':

    return {
      ...state, playerHealth: state.playerHealth - 10,
      enemyHealth: state.enemyHealth + 5,
      ginyuLeft: Math.random() * 1400,
      ginyuTop: Math.random() * 1000
    }

    case 'ATTACKLEFT2':

    return {
      ...state, attackTop2: Number(state.top) + 30, attackLeft2: Number(state.left) - 80, degree: '180'
    }

    case 'ATTACKDOWN2':

    return {
      ...state, attackTop2: Number(state.top) + 130, attackLeft2: Number(state.left) - 2, degree: '90'
    }

    case 'ATTACKRIGHT2':

    return {
      ...state, attackTop2: Number(state.top) + 30, attackLeft2: Number(state.left) + 42, degree: '0'
    }

    case 'ATTACKUP2':

    return {
      ...state, attackTop2: Number(state.top) - 75, attackLeft2: Number(state.left) + 5, degree: '270'
    }

    case 'ATTACKLEFT3':

    return {
      ...state, attackTop3: Number(state.top) + 30, attackLeft3: Number(state.left) - 80, degree: '180'
    }

    case 'ATTACKDOWN3':

    return {
      ...state, attackTop3: Number(state.top) + 130, attackLeft3: Number(state.left) - 2, degree: '90'
    }

    case 'ATTACKRIGHT3':

    return {
      ...state, attackTop3: Number(state.top) + 30, attackLeft3: Number(state.left) + 42, degree: '0'
    }

    case 'ATTACKUP3':

    return {
      ...state, attackTop3: Number(state.top) - 75, attackLeft3: Number(state.left) + 5, degree: '270'
    }




    break;

  default:
    return state
  }
}
