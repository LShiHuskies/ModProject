import React from 'react';
import { connect } from 'react-redux';
// import { moveLeft } from '../actions';
// import { bindActionCreators } from 'redux';
// import Healthbar from './Healthbar';
import PlayerAttack from './PlayerAttack';
// import Score from './Score';
import enemyAttackIntervalArray from '../reducers/enemyAttackInterval';

import enemyAttackIntervalArray2 from '../reducers/enemyAttackInterval2'

import PlayerAttack2 from './PlayerAttack2';

import { ActionCable } from 'react-actioncable-provider';



var leftAttackProjectile = [];
var upAttackProjectile = [];
var downAttackProjectile = [];
var rightAttackProjectile = [];


let leftAttackProjectile2 = [];
let downAttackProjectile2 = [];
let rightAttackProjectile2 = [];
let upAttackProjectile2 = [];


let leftAttackProjectile3 = [];
let downAttackProjectile3 = [];
let rightAttackProjectile3 = [];
let upAttackProjectile3 = [];

// let counter = 0;

class Player extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      attack: false,
      leftAttack: null,
      topAttack: null,
      degree: this.props.degree,
      attack2: false,
      leftAttack2: null,
      topAttack2: null,
      attack3: false,
      leftAttack3: null,
      topAttack3: null
    }
  }



  componentDidMount() {
    if (this.props.clicked === true )
      window.addEventListener('keydown', this.handleControls)
  }

  handleResetAttack = (event) => {
    this.setState({
      attack: false
    })
  }

  handleControls = (event) => {
    switch (event.keyCode) {

      case 65:
        let action = {
          type: 'MOVE LEFT'
        }
        // this.props.dispatch(action)


          let config = {
            method: 'POST',
            headers: {
            'Accepts': 'application/json',
          'Content-Type': 'application/json'
          },
            body: JSON.stringify({
              user_id: this.props.player.id,
              top: this.props.top,
              left: this.props.left,
              type: action
            })
          };

      fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())




      break;

      case 68:
        action = {
          type: 'MOVE RIGHT'
        }
        // this.props.dispatch(action)


         config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            user_id: this.props.player.id,
            top: this.props.top,
            left: this.props.left,
            type: action
          })
        };

    fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())




      break;

      case 87:
         action = {
          type: 'MOVE UP'
        }
        // this.props.dispatch(action)

         config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            user_id: this.props.player.id,
            top: this.props.top,
            left: this.props.left,
            type: action
          })
        };

    fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())


      break;

      case 83:
        action = {
          type: 'MOVE DOWN'
        }
        // this.props.dispatch(action)

        config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            user_id: this.props.player.id,
            top: this.props.top,
            left: this.props.left,
            type: action
          })
        };

    fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())


      break;

      case 81:
        action = {
          type: 'MOVE LEFT UP'
        }
        // this.props.dispatch(action)

         config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            user_id: this.props.player.id,
            top: this.props.top,
            left: this.props.left,
            type: action
          })
        };

    fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())


      break;

      case 90:
        action = {
          type: 'MOVE LEFT DOWN'
        }
        // this.props.dispatch(action)

        config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            user_id: this.props.player.id,
            top: this.props.top,
            left: this.props.left,
            type: action
          })
        };

    fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())

      break;

      case 69:
        action = {
          type: 'MOVE RIGHT UP'
        }
        // this.props.dispatch(action)

       config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            user_id: this.props.player.id,
            top: this.props.top,
            left: this.props.left,
            type: action
          })
        };

    fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())

      break;

      case 67:
        action = {
          type: 'MOVE RIGHT DOWN'
        }
        // this.props.dispatch(action)


        config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            user_id: this.props.player.id,
            top: this.props.top,
            left: this.props.left,
            type: action
          })
        };

    fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())

      break;

      case 39:

        action = {
          type: 'LOOKRIGHT'
        }
        // this.props.dispatch(action)


        config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            user_id: this.props.player.id,
            top: this.props.top,
            left: this.props.left,
            type: action
          })
        };

    fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())

        break;

      case 37:

        action = {
          type: 'LOOKLEFT'
        }

        // this.props.dispatch(action)

        config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            user_id: this.props.player.id,
            top: this.props.top,
            left: this.props.left,
            type: action
          })
        };
      fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())


      break;

      case 38:

        action = {
          type: 'LOOKUP'
        }

        // this.props.dispatch(action)


        config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            user_id: this.props.player.id,
            top: this.props.top,
            left: this.props.left,
            type: action
          })
        };
        fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())

      break;

      case 40:

        action = {
          type: 'LOOKDOWN'
        }
        // this.props.dispatch(action)


        config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            user_id: this.props.player.id,
            top: this.props.top,
            left: this.props.left,
            type: action
          })
        };
        fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())

      break;

      case 32:

      if (this.props.playerDirection.characterdirection === 'LEFT' && this.state.attack === false && this.state.leftAttack === null) {


        action = {
          type: "ATTACKLEFT"
        }
        // this.props.dispatch(action)

        config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            user_id: this.props.player.id,
            top: this.props.top,
            left: this.props.left,
            leftAttack: this.props.attackLeft,
            topAttack: this.props.attackTop,
            degree: this.props.degree,
            type: action
          })
        };
        fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())
          // HERE


    //     this.setState({
    //       attack: true,
    //       leftAttack: this.props.attackLeft,
    //       topAttack: this.props.attackTop,
    //       degree: this.props.degree
    //     }, () => {
    //
    //       leftAttackProjectile.push(setInterval(
    //         () =>  this.setState({
    //         leftAttack: this.state.leftAttack - 5,
    //         topAttack: this.state.topAttack
    //       }, () => { if (this.state.leftAttack < 0) {
    //         this.setState({
    //           attack: false,
    //           leftAttack: null,
    //           topAttack: null
    //         })
    //       } else if (  (this.state.leftAttack < this.props.enemyLeft + 20 && this.state.leftAttack > this.props.enemyLeft - 20)
    //         && (this.state.topAttack > this.props.enemyTop - 50 && this.state.topAttack < this.props.enemyTop + 105  )
    //               ) {
    //
    //                 action = {
    //                   type: 'HITFRIEZALEFT'
    //                 }
    //               this.props.dispatch(action)
    //
    //         this.setState({
    //           attack: false,
    //           leftAttack: null,
    //           topAttack: null
    //         })
    //
    //       } // end of the else if statement for left attack
    //       else if (( this.state.topAttack > this.props.enemyAttackTop - 30 && this.state.topAttack < this.props.enemyAttackTop + 30 )
    //       && ( this.state.leftAttack < this.props.enemyAttackLeft + 5 && this.state.leftAttack > this.props.enemyAttackLeft - 5 )
    //     ) {
    //       let action = {
    //         type: 'SETENEMYATTACKTOFALSE'
    //       };
    //       this.props.dispatch(action);
    //
    //       this.setState({
    //         attack: false,
    //         leftAttack: null,
    //         topAttack: null
    //       });
    //
    //       let anotheraction = {
    //         type: 'BLOCKFRIEZAATTACKLEFT'
    //       };
    //       this.props.dispatch(anotheraction);
    //
    //
    //       let misslelandLeft = enemyAttackIntervalArray.pop()
    //       clearInterval(misslelandLeft)
    //
    //
    //     } // end of the else if for the attack left 1
    //     // start of the else if for the attack left 2
    //
    //     else if (
    //       ( this.state.topAttack > this.props.enemyAttackTop2 - 30 && this.state.topAttack < this.props.enemyAttackTop2 + 30 )
    //       && ( this.state.leftAttack < this.props.enemyAttackLeft2 + 5 && this.state.leftAttack > this.props.enemyAttackLeft2 - 5 )
    //       ) {
    //
    //
    //
    //         let action = {
    //           type: 'SETENEMYATTACK2TOFALSE'
    //         };
    //         this.props.dispatch(action);
    //
    //         this.setState({
    //           attack: false,
    //           leftAttack: null,
    //           topAttack: null
    //         });
    //
    //         let anotheraction = {
    //           type: 'BLOCKFRIEZAATTACKLEFT'
    //         };
    //         this.props.dispatch(anotheraction);
    //
    //
    //         let misslelandLeft = enemyAttackIntervalArray2.pop()
    //         clearInterval(misslelandLeft)
    //
    //
    //     }
    //
    //     // end of the else if for the blocking frieza's attack
    //
    //   }), 7 ) // end of the set Interval for left attack
    //   ) // end of the leftAttackProjectile push
    // }) // end of the setState
// comment out since we are fetching to backend

  } // end of the if statement for left direction pointing


  else if ( this.props.playerDirection.characterdirection === 'LEFT' && this.state.attack === true && this.state.attack2 === false && this.state.leftAttack2 === null ) {

    let action = {
      type: "ATTACKLEFT2"
    }
    // this.props.dispatch(action)
//  here is the start of the copy and paste ---

      config = {
        method: 'POST',
        headers: {
        'Accepts': 'application/json',
      'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          user_id: this.props.player.id,
          top: this.props.top,
          left: this.props.left,
          leftAttack: this.props.attackLeft,
          topAttack: this.props.attackTop,
          degree: this.props.degree,
          type: action
        })
      };
      fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())


    //   this.setState({
    //     attack2: true,
    //     leftAttack2: this.props.attackLeft2,
    //     topAttack2: this.props.attackTop2,
    //     degree: this.props.degree
    //   }, () => {
    //
    //     leftAttackProjectile2.push(setInterval(
    //       () =>  this.setState({
    //       leftAttack2: this.state.leftAttack2 - 5,
    //       topAttack2: this.state.topAttack2
    //     }, () => { if (this.state.leftAttack2 < 0) {
    //       this.setState({
    //         attack2: false,
    //         leftAttack2: null,
    //         topAttack2: null
    //       })
    //     } else if (  (this.state.leftAttack2 < this.props.enemyLeft + 20 && this.state.leftAttack2 > this.props.enemyLeft - 20)
    //       && (this.state.topAttack2 > this.props.enemyTop - 50 && this.state.topAttack2 < this.props.enemyTop + 105  )
    //             ) {
    //
    //               action = {
    //                 type: 'HITFRIEZALEFT'
    //               }
    //             this.props.dispatch(action)
    //
    //       this.setState({
    //         attack2: false,
    //         leftAttack2: null,
    //         topAttack2: null
    //       })
    //
    //     } // end of the else if statement for left attack
    //     else if (( this.state.topAttack2 > this.props.enemyAttackTop - 30 && this.state.topAttack2 < this.props.enemyAttackTop + 30 )
    //     && ( this.state.leftAttack2 < this.props.enemyAttackLeft + 5 && this.state.leftAttack2 > this.props.enemyAttackLeft - 5 )
    //   ) {
    //     let action = {
    //       type: 'SETENEMYATTACKTOFALSE'
    //     };
    //     this.props.dispatch(action);
    //
    //     this.setState({
    //       attack2: false,
    //       leftAttack2: null,
    //       topAttack2: null
    //     });
    //
    //     let anotheraction = {
    //       type: 'BLOCKFRIEZAATTACKLEFT'
    //     };
    //     this.props.dispatch(anotheraction);
    //
    //
    //     let misslelandLeft = enemyAttackIntervalArray.pop()
    //     clearInterval(misslelandLeft)
    //
    //
    //   } // end of the else if statement for the top attack2--
    //   else if (
    //     ( this.state.topAttack2 > this.props.enemyAttackTop2 - 30 && this.state.topAttack2 < this.props.enemyAttackTop2 + 30 )
    //     && ( this.state.leftAttack2 < this.props.enemyAttackLeft2 + 5 && this.state.leftAttack2 > this.props.enemyAttackLeft2 - 5 )
    //   ) {
    //
    //     let action = {
    //       type: 'SETENEMYATTACK2TOFALSE'
    //     };
    //     this.props.dispatch(action);
    //
    //     this.setState({
    //       attack2: false,
    //       leftAttack2: null,
    //       topAttack2: null
    //     });
    //
    //     let anotheraction = {
    //       type: 'BLOCKFRIEZAATTACKLEFT'
    //     };
    //     this.props.dispatch(anotheraction);
    //
    //
    //     let misslelandLeft = enemyAttackIntervalArray2.pop()
    //     clearInterval(misslelandLeft)
    //
    //   }
    //
    // }), 7 ) // end of the set Interval for left attack
    //   ) // end of the leftAttackProjectile push
    //   }) // end of the setState

// end of the copy and paste to handlereceived to backend



// this is the stop of the copy and paste



} // this is end for the else if statement for when this.state.attack is true and we entered the attack phase # 2 --


// this is the start of the else if for attack phase # 3

else if ( this.props.playerDirection.characterdirection === 'LEFT'
&& this.state.attack === true
&& this.state.attack2 === true
&& this.state.attack3 === false
&& this.state.leftAttack3 === null ) {

// this is the start for attack # 3
let action = {
  type: "ATTACKLEFT3"
}
// this.props.dispatch(action)
//  here is the start of the copy and paste ---

config = {
  method: 'POST',
  headers: {
  'Accepts': 'application/json',
'Content-Type': 'application/json'
},
  body: JSON.stringify({
    user_id: this.props.player.id,
    top: this.props.top,
    left: this.props.left,
    leftAttack: this.props.attackLeft,
    topAttack: this.props.attackTop,
    degree: this.props.degree,
    type: action
  })
};
fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r => r.json())


//   this.setState({
//     attack3: true,
//     leftAttack3: this.props.attackLeft3,
//     topAttack3: this.props.attackTop3,
//     degree: this.props.degree
//   }, () => {
//
//     leftAttackProjectile3.push(setInterval(
//       () =>  this.setState({
//       leftAttack3: this.state.leftAttack3 - 5,
//       topAttack3: this.state.topAttack3
//     }, () => { if (this.state.leftAttack3 < 0) {
//       this.setState({
//         attack3: false,
//         leftAttack3: null,
//         topAttack3: null
//       })
//     } else if (  (this.state.leftAttack3 < this.props.enemyLeft + 20 && this.state.leftAttack3 > this.props.enemyLeft - 20)
//       && (this.state.topAttack3 > this.props.enemyTop - 50 && this.state.topAttack3 < this.props.enemyTop + 105  )
//             ) {
//
//               action = {
//                 type: 'HITFRIEZALEFT'
//               }
//             this.props.dispatch(action)
//
//       this.setState({
//         attack3: false,
//         leftAttack3: null,
//         topAttack3: null
//       })
//
//     } // end of the else if statement for left attack
//     else if (( this.state.topAttack3 > this.props.enemyAttackTop - 30 && this.state.topAttack3 < this.props.enemyAttackTop + 30 )
//     && ( this.state.leftAttack3 < this.props.enemyAttackLeft + 5 && this.state.leftAttack3 > this.props.enemyAttackLeft - 5 )
//   ) {
//     let action = {
//       type: 'SETENEMYATTACKTOFALSE'
//     };
//     this.props.dispatch(action);
//
//     this.setState({
//       attack3: false,
//       leftAttack3: null,
//       topAttack3: null
//     });
//
//     let anotheraction = {
//       type: 'BLOCKFRIEZAATTACKLEFT'
//     };
//     this.props.dispatch(anotheraction);
//
//
//     let misslelandLeft = enemyAttackIntervalArray.pop()
//     clearInterval(misslelandLeft)
//
//
//   }  else if (
//     ( this.state.topAttack3 > this.props.enemyAttackTop2 - 30 && this.state.topAttack3 < this.props.enemyAttackTop2 + 30 )
//     && ( this.state.leftAttack3 < this.props.enemyAttackLeft2 + 5 && this.state.leftAttack3 > this.props.enemyAttackLeft2 - 5 )
//   ) {
//
//     let action = {
//       type: 'SETENEMYATTACK2TOFALSE'
//     };
//     this.props.dispatch(action);
//
//     this.setState({
//       attack3: false,
//       leftAttack3: null,
//       topAttack3: null
//     });
//
//     let anotheraction = {
//       type: 'BLOCKFRIEZAATTACKLEFT'
//     };
//     this.props.dispatch(anotheraction);
//
//
//     let misslelandLeft = enemyAttackIntervalArray2.pop()
//     clearInterval(misslelandLeft)
//
//
//   }
//
// }), 7 ) // end of the set Interval for left attack
//   ) // end of the leftAttackProjectile push
//   }) // end of the setState



  // this is the end of the copy and paste for attack # 3

  }

  else if (this.props.playerDirection.characterdirection === 'DOWN' && this.state.attack === false && this.state.topAttack === null){
        action = {
          type: "ATTACKDOWN"
        }
        // this.props.dispatch(action)

        config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            user_id: this.props.player.id,
            top: this.props.top,
            left: this.props.left,
            leftAttack: this.props.attackLeft,
            topAttack: this.props.attackTop,
            degree: this.props.degree,
            type: action
          })
        };
        fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())



  //     this.setState({
  //       attack: true,
  //       leftAttack: this.props.attackLeft,
  //       topAttack: this.props.attackTop,
  //       degree: this.props.degree
  //     }, () => {
  //
  //       downAttackProjectile.push(setInterval(
  //         () =>  this.setState({
  //         leftAttack: this.state.leftAttack,
  //         topAttack: this.state.topAttack + 5
  //       }, () => { if (this.state.topAttack > window.innerHeight) {
  //         this.setState({
  //           attack: false,
  //           leftAttack: null,
  //           topAttack: null
  //         })
  //       }  // end of the if statement
  //       else if ( (this.state.topAttack > this.props.enemyTop - 30 && this.state.topAttack < this.props.enemyTop + 30)
  //             && (this.state.leftAttack < this.props.enemyLeft + 40 && this.state.leftAttack > this.props.enemyLeft - 60 )
  //
  //        ) {
  //
  //
  //            action = {
  //              type: 'HITFRIEZADOWN'
  //            }
  //          this.props.dispatch(action)
  //
  //          this.setState({
  //            attack: false,
  //            leftAttack: null,
  //            topAttack: null
  //          })
  //
  //          clearInterval(downAttackProjectile.pop())
  //       }  // end of the else if statement
  //
  //
  //     }), 7 ) // end of the set interval for the downAttackProjectile
  //   ) // end of the push into the downAttackProjectile array
  // }) // end of the setState for the down attack



}  // end of the else if for the down direction pointing for attack 1
 else if (this.props.playerDirection.characterdirection === 'DOWN' && this.state.attack === true && this.state.attack2 === false && this.state.leftAttack2 === null ) {
   // this is the start of the copy and paste for the downward direction


   action = {
     type: "ATTACKDOWN2"
   }
   // this.props.dispatch(action)

   config = {
     method: 'POST',
     headers: {
     'Accepts': 'application/json',
   'Content-Type': 'application/json'
   },
     body: JSON.stringify({
       user_id: this.props.player.id,
       top: this.props.top,
       left: this.props.left,
       leftAttack: this.props.attackLeft,
       topAttack: this.props.attackTop,
       degree: this.props.degree,
       type: action
     })
   };
   fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())



//  this.setState({
//    attack2: true,
//    leftAttack2: this.props.attackLeft2,
//    topAttack2: this.props.attackTop2,
//    degree: this.props.degree
//  }, () => {
//
//    downAttackProjectile2.push(setInterval(
//      () =>  this.setState({
//      leftAttack2: this.state.leftAttack2,
//      topAttack2: this.state.topAttack2 + 5
//    }, () => { if (this.state.topAttack2 > window.innerHeight) {
//      this.setState({
//        attack2: false,
//        leftAttack2: null,
//        topAttack2: null
//      })
//    }  // end of the if statement
//    else if ( (this.state.topAttack2 > this.props.enemyTop - 30 && this.state.topAttack2 < this.props.enemyTop + 30)
//          && (this.state.leftAttack2 < this.props.enemyLeft + 40 && this.state.leftAttack2 > this.props.enemyLeft - 60 )
//
//     ) {
//
//
//         action = {
//           type: 'HITFRIEZADOWN'
//         }
//       this.props.dispatch(action)
//
//       this.setState({
//         attack2: false,
//         leftAttack2: null,
//         topAttack2: null
//       })
//
//       clearInterval(downAttackProjectile2.pop())
//    }  // end of the else if statement
//
//
//  }), 7 ) // end of the set interval for the downAttackProjectile
// ) // end of the push into the downAttackProjectile array
// }) // end of the setState for the down attack




   // this is the end of the copy and paste


 }  // this is the end of the phase 2 attack for the down attack

  else if ( this.props.playerDirection.characterdirection === 'DOWN'
  && this.state.attack === true
  && this.state.attack2 === true
  && this.state.attack3 === false
  && this.state.leftAttack3 === null   ) {
   // this is the start for phase #3 down attack for goku

   action = {
     type: "ATTACKDOWN3"
   }
   // this.props.dispatch(action)


   config = {
     method: 'POST',
     headers: {
     'Accepts': 'application/json',
   'Content-Type': 'application/json'
   },
     body: JSON.stringify({
       user_id: this.props.player.id,
       top: this.props.top,
       left: this.props.left,
       leftAttack: this.props.attackLeft,
       topAttack: this.props.attackTop,
       degree: this.props.degree,
       type: action
     })
   };
   fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())



//  this.setState({
//    attack3: true,
//    leftAttack3: this.props.attackLeft3,
//    topAttack3: this.props.attackTop3,
//    degree: this.props.degree
//  }, () => {
//
//    downAttackProjectile3.push(setInterval(
//      () =>  this.setState({
//      leftAttack3: this.state.leftAttack3,
//      topAttack3: this.state.topAttack3 + 5
//    }, () => { if (this.state.topAttack3 > window.innerHeight) {
//      this.setState({
//        attack3: false,
//        leftAttack3: null,
//        topAttack3: null
//      })
//    }  // end of the if statement
//    else if ( (this.state.topAttack3 > this.props.enemyTop - 30 && this.state.topAttack3 < this.props.enemyTop + 30)
//          && (this.state.leftAttack3 < this.props.enemyLeft + 40 && this.state.leftAttack3 > this.props.enemyLeft - 60 )
//
//     ) {
//
//
//         action = {
//           type: 'HITFRIEZADOWN'
//         }
//       this.props.dispatch(action)
//
//       this.setState({
//         attack3: false,
//         leftAttack3: null,
//         topAttack3: null
//       })
//
//       clearInterval(downAttackProjectile3.pop())
//    }  // end of the else if statement
//
//
//  }), 7 ) // end of the set interval for the downAttackProjectile
// ) // end of the push into the downAttackProjectile array
// }) // end of the setState for the down attack




 }  // this is the end of the phase # 3 down attack for goku



  else if (this.props.playerDirection.characterdirection === 'RIGHT' && this.state.attack === false && this.state.leftAttack === null) {
      action = {
        type: "ATTACKRIGHT"
      }
      // this.props.dispatch(action)

      config = {
        method: 'POST',
        headers: {
        'Accepts': 'application/json',
      'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          user_id: this.props.player.id,
          top: this.props.top,
          left: this.props.left,
          leftAttack: this.props.attackLeft,
          topAttack: this.props.attackTop,
          degree: this.props.degree,
          type: action
        })
      };
      fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())



      // this.setState({
      //   attack: true,
      //   leftAttack: this.props.attackLeft,
      //   topAttack: this.props.attackTop,
      //   degree: this.props.degree
      // }, () => {
      //   rightAttackProjectile.push(setInterval(
      //     () => this.setState({
      //       leftAttack: this.state.leftAttack + 5,
      //       topAttack: this.state.topAttack
      //     }, () => { if (this.state.leftAttack > window.innerWidth) {
      //       this.setState({
      //         attack: false,
      //         leftAttack: null,
      //         topAttack: null
      //       })
      //     }  // end of the if
      //     else if ( (this.state.leftAttack > this.props.enemyLeft - 30 && this.state.leftAttack < this.props.enemyLeft + 30)
      //       && (this.state.topAttack < this.props.enemyTop + 80 && this.state.topAttack > this.props.enemyTop - 30)
      //    ) {
      //
      //      action = {
      //        type: 'HITFRIEZARIGHT'
      //      }
      //    this.props.dispatch(action)
      //
      //    this.setState({
      //      attack: false,
      //      leftAttack: null,
      //      topAttack: null
      //    })
      //    clearInterval(rightAttackProjectile.pop()) // clears the interval if it touches frieza
      //
      //     } // end of the else if
      //     else if (
      //       ( this.state.topAttack > this.props.enemyAttackTop - 35 && this.state.topAttack < this.props.enemyAttackTop + 35 )
      //     && ( this.state.leftAttack < this.props.enemyAttackLeft + 40 && this.state.leftAttack > this.props.enemyAttackLeft - 40 )
      //    ) {
      //
      //
      //      let action = {
      //        type: 'SETENEMYATTACKTOFALSE'
      //      };
      //      this.props.dispatch(action);
      //
      //      this.setState({
      //        attack: false,
      //        leftAttack: null,
      //        topAttack: null
      //      });
      //
      //      let anotheraction = {
      //        type: 'BLOCKFRIEZAATTACKRIGHT'
      //      };
      //      this.props.dispatch(anotheraction);
      //
      //
      //      let misslelandRight = enemyAttackIntervalArray.pop()
      //      clearInterval(misslelandRight)
      //      clearInterval(rightAttackProjectile.pop()) // clears the interval if it touches frieza's attack
      //
      //     } // end of the else if for the frieza attack and player attack collision
      //
      //     else if (
      //       ( this.state.topAttack > this.props.enemyAttackTop2 - 35 && this.state.topAttack < this.props.enemyAttackTop2 + 35 )
      //     && ( this.state.leftAttack < this.props.enemyAttackLeft2 + 40 && this.state.leftAttack > this.props.enemyAttackLeft2 - 40 )
      //
      //     ) {
      //
      //
      //       let action = {
      //         type: 'SETENEMYATTACK2TOFALSE'
      //       };
      //       this.props.dispatch(action);
      //
      //       this.setState({
      //         attack: false,
      //         leftAttack: null,
      //         topAttack: null
      //       });
      //
      //       let anotheraction = {
      //         type: 'BLOCKFRIEZAATTACKRIGHT'
      //       };
      //       this.props.dispatch(anotheraction);
      //
      //
      //
      //
      //       let misslelandRight = enemyAttackIntervalArray2.pop()
      //       clearInterval(misslelandRight)
      //       clearInterval(rightAttackProjectile.pop()) // clears the interval if it touches frieza's attack
      //
      //
      //     }
      //
      //   } ), 7 )) // end of the push into the rightAttackProjectile
      // }
      //
      // )


    } // end of the else if statement for the first phase of the right attack
    // This is the start of the copy and paste for the second phase attack for the right attack2

    else if (this.props.playerDirection.characterdirection === 'RIGHT' && this.state.attack === true && this.state.attack2 === false && this.state.leftAttack2 === null) {


      action = {
        type: "ATTACKRIGHT2"
      }
      // this.props.dispatch(action)


      config = {
        method: 'POST',
        headers: {
        'Accepts': 'application/json',
      'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          user_id: this.props.player.id,
          top: this.props.top,
          left: this.props.left,
          leftAttack: this.props.attackLeft,
          topAttack: this.props.attackTop,
          degree: this.props.degree,
          type: action
        })
      };
      fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())


      // this.setState({
      //   attack2: true,
      //   leftAttack2: this.props.attackLeft2,
      //   topAttack2: this.props.attackTop2,
      //   degree: this.props.degree
      // }, () => {
      //   rightAttackProjectile2.push(setInterval(
      //     () => this.setState({
      //       leftAttack2: this.state.leftAttack2 + 5,
      //       topAttack2: this.state.topAttack2
      //     }, () => { if (this.state.leftAttack2 > window.innerWidth) {
      //       this.setState({
      //         attack2: false,
      //         leftAttack2: null,
      //         topAttack2: null
      //       })
      //     }  // end of the if
      //     else if ( (this.state.leftAttack2 > this.props.enemyLeft - 30 && this.state.leftAttack2 < this.props.enemyLeft + 30)
      //       && (this.state.topAttack2 < this.props.enemyTop + 80 && this.state.topAttack2 > this.props.enemyTop - 30)
      //    ) {
      //
      //      action = {
      //        type: 'HITFRIEZARIGHT'
      //      }
      //    this.props.dispatch(action)
      //
      //    this.setState({
      //      attack2: false,
      //      leftAttack2: null,
      //      topAttack2: null
      //    })
      //    clearInterval(rightAttackProjectile2.pop()) // clears the interval if it touches frieza
      //
      //     } // end of the else if
      //     else if (
      //       ( this.state.topAttack2 > this.props.enemyAttackTop - 35 && this.state.topAttack2 < this.props.enemyAttackTop + 35 )
      //     && ( this.state.leftAttack2 < this.props.enemyAttackLeft + 40 && this.state.leftAttack2 > this.props.enemyAttackLeft - 40 )
      //    ) {
      //
      //      let action = {
      //        type: 'SETENEMYATTACKTOFALSE'
      //      };
      //      this.props.dispatch(action);
      //
      //      this.setState({
      //        attack2: false,
      //        leftAttack2: null,
      //        topAttack2: null
      //      });
      //
      //      let anotheraction = {
      //        type: 'BLOCKFRIEZAATTACKRIGHT'
      //      };
      //      this.props.dispatch(anotheraction);
      //
      //
      //      let misslelandRight = enemyAttackIntervalArray.pop()
      //      clearInterval(misslelandRight)
      //      clearInterval(rightAttackProjectile2.pop()) // clears the interval if it touches frieza's attack
      //
      //     } // end of the else if for the frieza attack and player attack collision
      //
      //
      //     else if (
      //       ( this.state.topAttack2 > this.props.enemyAttackTop2 - 35 && this.state.topAttack2 < this.props.enemyAttackTop2 + 35 )
      //     && ( this.state.leftAttack2 < this.props.enemyAttackLeft2 + 40 && this.state.leftAttack2 > this.props.enemyAttackLeft2 - 40 )
      //
      //     ) {
      //
      //       let action = {
      //         type: 'SETENEMYATTACK2TOFALSE'
      //       };
      //       this.props.dispatch(action);
      //
      //       this.setState({
      //         attack2: false,
      //         leftAttack2: null,
      //         topAttack2: null
      //       });
      //
      //       let anotheraction = {
      //         type: 'BLOCKFRIEZAATTACKRIGHT'
      //       };
      //       this.props.dispatch(anotheraction);
      //
      //
      //       let misslelandRight = enemyAttackIntervalArray2.pop()
      //       clearInterval(misslelandRight)
      //       clearInterval(rightAttackProjectile2.pop()) // clears the interval if it touches frieza's attack
      //
      //
      //     }
      //
      //
      //   } ), 7 )) // end of the push into the rightAttackProjectile
      // }
      //
      // )



    }

    // This is the end for the second phase attack for the right attack2
    // this is the start for the phase attack # 3 for the right
    else if ( this.props.playerDirection.characterdirection === 'RIGHT'
    && this.state.attack === true
    && this.state.attack2 === true
    && this.state.attack3 === false
    && this.state.leftAttack3 === null   ) {
      action = {
        type: "ATTACKRIGHT3"
      }
      // this.props.dispatch(action)


      config = {
        method: 'POST',
        headers: {
        'Accepts': 'application/json',
      'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          user_id: this.props.player.id,
          top: this.props.top,
          left: this.props.left,
          leftAttack: this.props.attackLeft,
          topAttack: this.props.attackTop,
          degree: this.props.degree,
          type: action
        })
      };
      fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())



    //   this.setState({
    //     attack3: true,
    //     leftAttack3: this.props.attackLeft3,
    //     topAttack3: this.props.attackTop3,
    //     degree: this.props.degree
    //   }, () => {
    //     rightAttackProjectile3.push(setInterval(
    //       () => this.setState({
    //         leftAttack3: this.state.leftAttack3 + 5,
    //         topAttack3: this.state.topAttack3
    //       }, () => { if (this.state.leftAttack3 > window.innerWidth) {
    //         this.setState({
    //           attack3: false,
    //           leftAttack3: null,
    //           topAttack3: null
    //         })
    //       }  // end of the if
    //       else if ( (this.state.leftAttack3 > this.props.enemyLeft - 30 && this.state.leftAttack3 < this.props.enemyLeft + 30)
    //         && (this.state.topAttack3 < this.props.enemyTop + 80 && this.state.topAttack3 > this.props.enemyTop - 30)
    //      ) {
    //
    //        action = {
    //          type: 'HITFRIEZARIGHT'
    //        }
    //      this.props.dispatch(action)
    //
    //      this.setState({
    //        attack3: false,
    //        leftAttack3: null,
    //        topAttack3: null
    //      })
    //      clearInterval(rightAttackProjectile3.pop()) // clears the interval if it touches frieza
    //
    //       } // end of the else if
    //       else if (
    //         ( this.state.topAttack3 > this.props.enemyAttackTop - 35 && this.state.topAttack3 < this.props.enemyAttackTop + 35 )
    //       && ( this.state.leftAttack3 < this.props.enemyAttackLeft + 40 && this.state.leftAttack3 > this.props.enemyAttackLeft - 40 )
    //      ) {
    //
    //        let action = {
    //          type: 'SETENEMYATTACKTOFALSE'
    //        };
    //        this.props.dispatch(action);
    //
    //        this.setState({
    //          attack3: false,
    //          leftAttack3: null,
    //          topAttack3: null
    //        });
    //
    //        let anotheraction = {
    //          type: 'BLOCKFRIEZAATTACKRIGHT'
    //        };
    //        this.props.dispatch(anotheraction);
    //
    //
    //        let misslelandRight = enemyAttackIntervalArray.pop()
    //        clearInterval(misslelandRight)
    //        clearInterval(rightAttackProjectile3.pop()) // clears the interval if it touches frieza's attack
    //
    //       } // end of the else if for the frieza attack and player attack collision
    //
    //       else if (
    //         ( this.state.topAttack3 > this.props.enemyAttackTop2 - 35 && this.state.topAttack3 < this.props.enemyAttackTop2 + 35 )
    //       && ( this.state.leftAttack3 < this.props.enemyAttackLeft2 + 40 && this.state.leftAttack3 > this.props.enemyAttackLeft2 - 40 )
    //       ) {
    //
    //         let action = {
    //           type: 'SETENEMYATTACK2TOFALSE'
    //         };
    //         this.props.dispatch(action);
    //
    //         this.setState({
    //           attack3: false,
    //           leftAttack3: null,
    //           topAttack3: null
    //         });
    //
    //         let anotheraction = {
    //           type: 'BLOCKFRIEZAATTACKRIGHT'
    //         };
    //         this.props.dispatch(anotheraction);
    //
    //
    //         let misslelandRight = enemyAttackIntervalArray2.pop()
    //         clearInterval(misslelandRight)
    //         clearInterval(rightAttackProjectile3.pop()) // clears the interval if it touches frieza's attack
    //
    //       }
    //
    //
    //
    //     } ), 7 )) // end of the push into the rightAttackProjectile
    //   }
    //
    // ) // end of the set state.





    } // this is the end for the phase # 3 attack for the right.


         else if (this.props.playerDirection.characterdirection === 'UP'
         && this.state.attack === false
         && this.state.topAttack === null) {

          action = {
            type: "ATTACKUP"
          }
          // this.props.dispatch(action)


          config = {
            method: 'POST',
            headers: {
            'Accepts': 'application/json',
          'Content-Type': 'application/json'
          },
            body: JSON.stringify({
              user_id: this.props.player.id,
              top: this.props.top,
              left: this.props.left,
              leftAttack: this.props.attackLeft,
              topAttack: this.props.attackTop,
              degree: this.props.degree,
              type: action
            })
          };
          fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())



      //   this.setState({
      //     attack: true,
      //     leftAttack: this.props.attackLeft,
      //     topAttack: this.props.attackTop,
      //     degree: this.props.degree
      //   }, () => {
      //     upAttackProjectile.push(setInterval(
      //       () =>  this.setState({
      //       leftAttack: this.state.leftAttack,
      //       topAttack: this.state.topAttack - 5
      //     }, () => { if (this.state.topAttack < 0) {
      //       this.setState({
      //         attack: false,
      //         leftAttack: null,
      //         topAttack: null
      //       }) // end of the setState
      //     } // end of the if statement
      //     else if (
      //       ( this.state.topAttack < this.props.enemyTop + 100 && this.state.topAttack > this.props.enemyTop )
      //       && (this.state.leftAttack > this.props.enemyLeft - 30 && this.state.leftAttack < this.props.enemyLeft + 20)
      //     ) {
      //
      //       action = {
      //         type: 'HITFRIEZAUP'
      //       }
      //     this.props.dispatch(action)
      //
      //     this.setState({
      //       attack: false,
      //       leftAttack: null,
      //       topAttack: null
      //     }) // end of this this state within the else if statement
      //
      //
      //     } // end of the else if
      //   }), 7 ) // end of the setInterval
      // ) // end of the upAttackProjectile
      // })  // end of the setState



          } // end of the else end of the spacebar
          // end of the if statement for the first up attack--
          else if ( this.props.playerDirection.characterdirection === 'UP' && this.state.attack === true && this.state.attack2 === false && this.state.leftAttack2 === null ) {

            // this is the start of the second attack

            action = {
              type: "ATTACKUP2"
            }
            // this.props.dispatch(action)

            config = {
              method: 'POST',
              headers: {
              'Accepts': 'application/json',
            'Content-Type': 'application/json'
            },
              body: JSON.stringify({
                user_id: this.props.player.id,
                top: this.props.top,
                left: this.props.left,
                leftAttack: this.props.attackLeft,
                topAttack: this.props.attackTop,
                degree: this.props.degree,
                type: action
              })
            };
            fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())



          // this.setState({
          //   attack2: true,
          //   leftAttack2: this.props.attackLeft2,
          //   topAttack2: this.props.attackTop2,
          //   degree: this.props.degree
          // }, () => {
          //   upAttackProjectile2.push(setInterval(
          //     () =>  this.setState({
          //     leftAttack2: this.state.leftAttack2,
          //     topAttack2: this.state.topAttack2 - 5
          //   }, () => { if (this.state.topAttack2 < 0) {
          //     this.setState({
          //       attack2: false,
          //       leftAttack2: null,
          //       topAttack2: null
          //     }) // end of the setState
          //   } // end of the if statement
          //   else if (
          //     ( this.state.topAttack2 < this.props.enemyTop + 100 && this.state.topAttack2 > this.props.enemyTop )
          //     && (this.state.leftAttack2 > this.props.enemyLeft - 30 && this.state.leftAttack2 < this.props.enemyLeft + 20)
          //   ) {
          //
          //     action = {
          //       type: 'HITFRIEZAUP'
          //     }
          //   this.props.dispatch(action)
          //
          //   this.setState({
          //     attack2: false,
          //     leftAttack2: null,
          //     topAttack2: null
          //   }) // end of this this state within the else if statement
          //
          //
          //   } // end of the else if
          // }), 7 ) // end of the setInterval
          // ) // end of the upAttackProjectile
          // })  // end of the setState


        } // end of the else if for the up attack for phase # 2
        else if ( this.props.playerDirection.characterdirection === 'UP'
        && this.state.attack === true
        && this.state.attack2 === true
        && this.state.attack3 === false
        && this.state.leftAttack3 === null   ) {

          // start of attack # 3 for the up


          action = {
            type: "ATTACKUP3"
          }
          // this.props.dispatch(action)

          config = {
            method: 'POST',
            headers: {
            'Accepts': 'application/json',
          'Content-Type': 'application/json'
          },
            body: JSON.stringify({
              user_id: this.props.player.id,
              top: this.props.top,
              left: this.props.left,
              leftAttack: this.props.attackLeft,
              topAttack: this.props.attackTop,
              degree: this.props.degree,
              type: action
            })
          };
          fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())



        // this.setState({
        //   attack3: true,
        //   leftAttack3: this.props.attackLeft3,
        //   topAttack3: this.props.attackTop3,
        //   degree: this.props.degree
        // }, () => {
        //   upAttackProjectile3.push(setInterval(
        //     () =>  this.setState({
        //     leftAttack3: this.state.leftAttack3,
        //     topAttack3: this.state.topAttack3 - 5
        //   }, () => { if (this.state.topAttack3 < 0) {
        //     this.setState({
        //       attack3: false,
        //       leftAttack3: null,
        //       topAttack3: null
        //     }) // end of the setState
        //   } // end of the if statement
        //   else if (
        //     ( this.state.topAttack3 < this.props.enemyTop + 100 && this.state.topAttack3 > this.props.enemyTop )
        //     && (this.state.leftAttack3 > this.props.enemyLeft - 30 && this.state.leftAttack3 < this.props.enemyLeft + 20)
        //   ) {
        //
        //     action = {
        //       type: 'HITFRIEZAUP'
        //     }
        //   this.props.dispatch(action)
        //
        //   this.setState({
        //     attack3: false,
        //     leftAttack3: null,
        //     topAttack3: null
        //   }) // end of this this state within the else if statement
        //
        //
        //   } // end of the else if
        // }), 7 ) // end of the setInterval
        // ) // end of the upAttackProjectile
        // })  // end of the setState



          // end of the attack # 3 for the up

        }





      break; // end of the spacebar case

      case 13:

      if (this.props.left < 800) {
        let action = {
          type: 'TELEPORTRIGHT'
        }

        // this.props.dispatch(action)

        config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            user_id: this.props.player.id,
            top: this.props.top,
            left: this.props.left,
            leftAttack: this.props.attackLeft,
            topAttack: this.props.attackTop,
            degree: this.props.degree,
            type: action
          })
        };
        fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())




      } else if (this.props.left >= 800) {
        let action = {
          type: 'TELEPORTLEFT'
        }
        // this.props.dispatch(action)
        config = {
          method: 'POST',
          headers: {
          'Accepts': 'application/json',
        'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            user_id: this.props.player.id,
            top: this.props.top,
            left: this.props.left,
            leftAttack: this.props.attackLeft,
            topAttack: this.props.attackTop,
            degree: this.props.degree,
            type: action
          })
        };
        fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())
      }
      break;

      default:
        fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())


    } // end of the switch statements




    } // end of the handle controls function


// transform: 'rotate(0deg)'


handleReceived = (event) => {
  this.props.dispatch(event.type)
  if (event.type.type === 'ATTACKLEFT') {
    if (this.props.left > 90) {

      this.setState({
        attack: true,
        leftAttack: this.props.attackLeft,
        topAttack: this.props.attackTop,
        degree: this.props.degree
      }, () => {

        leftAttackProjectile.push(setInterval(
          () =>  this.setState({
          leftAttack: this.state.leftAttack - 5,
          topAttack: this.state.topAttack
        }, () => { if (this.state.leftAttack < 0) {
          this.setState({
            attack: false,
            leftAttack: null,
            topAttack: null
          })
          clearInterval(leftAttackProjectile.pop())
        } else if (  (this.state.leftAttack < this.props.enemyLeft + 20 && this.state.leftAttack > this.props.enemyLeft - 20)
          && (this.state.topAttack > this.props.enemyTop - 50 && this.state.topAttack < this.props.enemyTop + 105  )
                ) {

                  let action = {
                    type: 'HITFRIEZALEFT'
                  }
                this.props.dispatch(action)

          this.setState({
            attack: false,
            leftAttack: null,
            topAttack: null
          })
          clearInterval(leftAttackProjectile.pop())

        } // end of the else if statement for left attack
        else if (( this.state.topAttack > this.props.enemyAttackTop - 30 && this.state.topAttack < this.props.enemyAttackTop + 30 )
        && ( this.state.leftAttack < this.props.enemyAttackLeft + 5 && this.state.leftAttack > this.props.enemyAttackLeft - 5 )
      ) {
        let action = {
          type: 'SETENEMYATTACKTOFALSE'
        };
        this.props.dispatch(action);

        this.setState({
          attack: false,
          leftAttack: null,
          topAttack: null
        });

        let anotheraction = {
          type: 'BLOCKFRIEZAATTACKLEFT'
        };
        this.props.dispatch(anotheraction);


        let misslelandLeft = enemyAttackIntervalArray.pop();
        clearInterval(misslelandLeft);
        clearInterval(leftAttackProjectile.pop());


      } // end of the else if for the attack left 1
      // start of the else if for the attack left 2

      else if (
        ( this.state.topAttack > this.props.enemyAttackTop2 - 30 && this.state.topAttack < this.props.enemyAttackTop2 + 30 )
        && ( this.state.leftAttack < this.props.enemyAttackLeft2 + 5 && this.state.leftAttack > this.props.enemyAttackLeft2 - 5 )
        ) {



          let action = {
            type: 'SETENEMYATTACK2TOFALSE'
          };
          this.props.dispatch(action);

          this.setState({
            attack: false,
            leftAttack: null,
            topAttack: null
          });

          let anotheraction = {
            type: 'BLOCKFRIEZAATTACKLEFT'
          };
          this.props.dispatch(anotheraction);


          let misslelandLeft = enemyAttackIntervalArray2.pop()
          clearInterval(misslelandLeft)
          clearInterval(leftAttackProjectile.pop())


      }

      // end of the else if for the blocking frieza's attack

    }), 7 ) // end of the set Interval for left attack
    ) // end of the leftAttackProjectile push
  }) // end of the setState for leftAttack1
}
} else if (event.type.type === 'ATTACKLEFT2') {

  this.setState({
    attack2: true,
    leftAttack2: this.props.attackLeft2,
    topAttack2: this.props.attackTop2,
    degree: this.props.degree
  }, () => {

    leftAttackProjectile2.push(setInterval(
      () =>  this.setState({
      leftAttack2: this.state.leftAttack2 - 5,
      topAttack2: this.state.topAttack2
    }, () => { if (this.state.leftAttack2 < 0) {
      this.setState({
        attack2: false,
        leftAttack2: null,
        topAttack2: null
      })
      clearInterval(leftAttackProjectile2.pop())
    } else if (  (this.state.leftAttack2 < this.props.enemyLeft + 20 && this.state.leftAttack2 > this.props.enemyLeft - 20)
      && (this.state.topAttack2 > this.props.enemyTop - 50 && this.state.topAttack2 < this.props.enemyTop + 105  )
            ) {

              let action = {
                type: 'HITFRIEZALEFT'
              }
            this.props.dispatch(action)

      this.setState({
        attack2: false,
        leftAttack2: null,
        topAttack2: null
      })
      clearInterval(leftAttackProjectile2.pop())
    } // end of the else if statement for left attack
    else if (( this.state.topAttack2 > this.props.enemyAttackTop - 30 && this.state.topAttack2 < this.props.enemyAttackTop + 30 )
    && ( this.state.leftAttack2 < this.props.enemyAttackLeft + 5 && this.state.leftAttack2 > this.props.enemyAttackLeft - 5 )
  ) {
    let action = {
      type: 'SETENEMYATTACKTOFALSE'
    };
    this.props.dispatch(action);

    this.setState({
      attack2: false,
      leftAttack2: null,
      topAttack2: null
    });

    let anotheraction = {
      type: 'BLOCKFRIEZAATTACKLEFT'
    };
    this.props.dispatch(anotheraction);


    let misslelandLeft = enemyAttackIntervalArray.pop()
    clearInterval(misslelandLeft)
    clearInterval(leftAttackProjectile2.pop())


  } // end of the else if statement for the top attack2--
  else if (
    ( this.state.topAttack2 > this.props.enemyAttackTop2 - 30 && this.state.topAttack2 < this.props.enemyAttackTop2 + 30 )
    && ( this.state.leftAttack2 < this.props.enemyAttackLeft2 + 5 && this.state.leftAttack2 > this.props.enemyAttackLeft2 - 5 )
  ) {

    let action = {
      type: 'SETENEMYATTACK2TOFALSE'
    };
    this.props.dispatch(action);

    this.setState({
      attack2: false,
      leftAttack2: null,
      topAttack2: null
    });

    let anotheraction = {
      type: 'BLOCKFRIEZAATTACKLEFT'
    };
    this.props.dispatch(anotheraction);


    let misslelandLeft = enemyAttackIntervalArray2.pop()
    clearInterval(misslelandLeft)
    clearInterval(leftAttackProjectile2.pop())

  }

}), 7 ) // end of the set Interval for left attack
  ) // end of the leftAttackProjectile push
  }) // end of the setState



} // end of the left attack2
else if (event.type.type === 'ATTACKLEFT3') {

  this.setState({
    attack3: true,
    leftAttack3: this.props.attackLeft3,
    topAttack3: this.props.attackTop3,
    degree: this.props.degree
  }, () => {

    leftAttackProjectile3.push(setInterval(
      () =>  this.setState({
      leftAttack3: this.state.leftAttack3 - 5,
      topAttack3: this.state.topAttack3
    }, () => { if (this.state.leftAttack3 < 0) {
      this.setState({
        attack3: false,
        leftAttack3: null,
        topAttack3: null
      })
      clearInterval(leftAttackProjectile3.pop())
    } else if (  (this.state.leftAttack3 < this.props.enemyLeft + 20 && this.state.leftAttack3 > this.props.enemyLeft - 20)
      && (this.state.topAttack3 > this.props.enemyTop - 50 && this.state.topAttack3 < this.props.enemyTop + 105  )
            ) {

              let action = {
                type: 'HITFRIEZALEFT'
              }
            this.props.dispatch(action)

      this.setState({
        attack3: false,
        leftAttack3: null,
        topAttack3: null
      })
      clearInterval(leftAttackProjectile3.pop())
    } // end of the else if statement for left attack
    else if (( this.state.topAttack3 > this.props.enemyAttackTop - 30 && this.state.topAttack3 < this.props.enemyAttackTop + 30 )
    && ( this.state.leftAttack3 < this.props.enemyAttackLeft + 5 && this.state.leftAttack3 > this.props.enemyAttackLeft - 5 )
  ) {
    let action = {
      type: 'SETENEMYATTACKTOFALSE'
    };
    this.props.dispatch(action);

    this.setState({
      attack3: false,
      leftAttack3: null,
      topAttack3: null
    });

    let anotheraction = {
      type: 'BLOCKFRIEZAATTACKLEFT'
    };
    this.props.dispatch(anotheraction);


    let misslelandLeft = enemyAttackIntervalArray.pop()
    clearInterval(misslelandLeft)
    clearInterval(leftAttackProjectile3.pop())

  }  else if (
    ( this.state.topAttack3 > this.props.enemyAttackTop2 - 30 && this.state.topAttack3 < this.props.enemyAttackTop2 + 30 )
    && ( this.state.leftAttack3 < this.props.enemyAttackLeft2 + 5 && this.state.leftAttack3 > this.props.enemyAttackLeft2 - 5 )
  ) {

    let action = {
      type: 'SETENEMYATTACK2TOFALSE'
    };
    this.props.dispatch(action);

    this.setState({
      attack3: false,
      leftAttack3: null,
      topAttack3: null
    });

    let anotheraction = {
      type: 'BLOCKFRIEZAATTACKLEFT'
    };
    this.props.dispatch(anotheraction);


    let misslelandLeft = enemyAttackIntervalArray2.pop()
    clearInterval(misslelandLeft)
    clearInterval(leftAttackProjectile3.pop())

  }

}), 7 ) // end of the set Interval for left attack
  ) // end of the leftAttackProjectile push
  }) // end of the setState



}

// end of the left attack 3
else if (event.type.type === 'ATTACKDOWN') {


  this.setState({
    attack: true,
    leftAttack: this.props.attackLeft,
    topAttack: this.props.attackTop,
    degree: this.props.degree
  }, () => {

    downAttackProjectile.push(setInterval(
      () =>  this.setState({
      leftAttack: this.state.leftAttack,
      topAttack: this.state.topAttack + 5
    }, () => { if (this.state.topAttack > window.innerHeight) {
      this.setState({
        attack: false,
        leftAttack: null,
        topAttack: null
      })
      clearInterval(downAttackProjectile.pop())
    }  // end of the if statement
    else if ( (this.state.topAttack > this.props.enemyTop - 30 && this.state.topAttack < this.props.enemyTop + 30)
          && (this.state.leftAttack < this.props.enemyLeft + 40 && this.state.leftAttack > this.props.enemyLeft - 60 )

     ) {


         let action = {
           type: 'HITFRIEZADOWN'
         }
       this.props.dispatch(action)

       this.setState({
         attack: false,
         leftAttack: null,
         topAttack: null
       })

       clearInterval(downAttackProjectile.pop())
    }  // end of the else if statement


  }), 7 ) // end of the set interval for the downAttackProjectile
) // end of the push into the downAttackProjectile array
}) // end of the setState for the down attack




}
// end of the down attack 1

  else if (event.type.type === 'ATTACKDOWN2') {


    this.setState({
      attack2: true,
      leftAttack2: this.props.attackLeft2,
      topAttack2: this.props.attackTop2,
      degree: this.props.degree
    }, () => {

      downAttackProjectile2.push(setInterval(
        () =>  this.setState({
        leftAttack2: this.state.leftAttack2,
        topAttack2: this.state.topAttack2 + 5
      }, () => { if (this.state.topAttack2 > window.innerHeight) {
        this.setState({
          attack2: false,
          leftAttack2: null,
          topAttack2: null
        })
      }  // end of the if statement
      else if ( (this.state.topAttack2 > this.props.enemyTop - 30 && this.state.topAttack2 < this.props.enemyTop + 30)
            && (this.state.leftAttack2 < this.props.enemyLeft + 40 && this.state.leftAttack2 > this.props.enemyLeft - 60 )

       ) {


           let action = {
             type: 'HITFRIEZADOWN'
           }
         this.props.dispatch(action)

         this.setState({
           attack2: false,
           leftAttack2: null,
           topAttack2: null
         })

         clearInterval(downAttackProjectile2.pop())
      }  // end of the else if statement


    }), 7 ) // end of the set interval for the downAttackProjectile
   ) // end of the push into the downAttackProjectile array
   }) // end of the setState for the down attack




  }

    // end of the down attack 2
  else if (event.type.type === 'ATTACKDOWN3') {


    this.setState({
      attack3: true,
      leftAttack3: this.props.attackLeft3,
      topAttack3: this.props.attackTop3,
      degree: this.props.degree
    }, () => {

      downAttackProjectile3.push(setInterval(
        () =>  this.setState({
        leftAttack3: this.state.leftAttack3,
        topAttack3: this.state.topAttack3 + 5
      }, () => { if (this.state.topAttack3 > window.innerHeight) {
        this.setState({
          attack3: false,
          leftAttack3: null,
          topAttack3: null
        })
      }  // end of the if statement
      else if ( (this.state.topAttack3 > this.props.enemyTop - 30 && this.state.topAttack3 < this.props.enemyTop + 30)
            && (this.state.leftAttack3 < this.props.enemyLeft + 40 && this.state.leftAttack3 > this.props.enemyLeft - 60 )

       ) {


           let action = {
             type: 'HITFRIEZADOWN'
           }
         this.props.dispatch(action)

         this.setState({
           attack3: false,
           leftAttack3: null,
           topAttack3: null
         })

         clearInterval(downAttackProjectile3.pop())
      }  // end of the else if statement


    }), 7 ) // end of the set interval for the downAttackProjectile
   ) // end of the push into the downAttackProjectile array
   }) // end of the setState for the down attack


  }

        // end of the down attack 3
  else if (event.type.type === 'ATTACKRIGHT') {
    this.setState({
      attack: true,
      leftAttack: this.props.attackLeft,
      topAttack: this.props.attackTop,
      degree: this.props.degree
    }, () => {
      rightAttackProjectile.push(setInterval(
        () => this.setState({
          leftAttack: this.state.leftAttack + 5,
          topAttack: this.state.topAttack
        }, () => { if (this.state.leftAttack > window.innerWidth) {

          this.setState({
            attack: false,
            leftAttack: null,
            topAttack: null
          })
          clearInterval(rightAttackProjectile.pop())
        }  // end of the if
        else if ( (this.state.leftAttack > this.props.enemyLeft - 30 && this.state.leftAttack < this.props.enemyLeft + 30)
          && (this.state.topAttack < this.props.enemyTop + 80 && this.state.topAttack > this.props.enemyTop - 30)
       ) {

         let action = {
           type: 'HITFRIEZARIGHT'
         }
       this.props.dispatch(action)

       this.setState({
         attack: false,
         leftAttack: null,
         topAttack: null
       })
       clearInterval(rightAttackProjectile.pop()) // clears the interval if it touches frieza

        } // end of the else if
        else if (
          ( this.state.topAttack > this.props.enemyAttackTop - 35 && this.state.topAttack < this.props.enemyAttackTop + 35 )
        && ( this.state.leftAttack < this.props.enemyAttackLeft + 40 && this.state.leftAttack > this.props.enemyAttackLeft - 40 )
       ) {


         let action = {
           type: 'SETENEMYATTACKTOFALSE'
         };
         this.props.dispatch(action);

         this.setState({
           attack: false,
           leftAttack: null,
           topAttack: null
         });

         let anotheraction = {
           type: 'BLOCKFRIEZAATTACKRIGHT'
         };
         this.props.dispatch(anotheraction);


         let misslelandRight = enemyAttackIntervalArray.pop()
         clearInterval(misslelandRight)
         clearInterval(rightAttackProjectile.pop()) // clears the interval if it touches frieza's attack

        } // end of the else if for the frieza attack and player attack collision

        else if (
          ( this.state.topAttack > this.props.enemyAttackTop2 - 35 && this.state.topAttack < this.props.enemyAttackTop2 + 35 )
        && ( this.state.leftAttack < this.props.enemyAttackLeft2 + 40 && this.state.leftAttack > this.props.enemyAttackLeft2 - 40 )

        ) {


          let action = {
            type: 'SETENEMYATTACK2TOFALSE'
          };
          this.props.dispatch(action);

          this.setState({
            attack: false,
            leftAttack: null,
            topAttack: null
          });

          let anotheraction = {
            type: 'BLOCKFRIEZAATTACKRIGHT'
          };
          this.props.dispatch(anotheraction);




          let misslelandRight = enemyAttackIntervalArray2.pop()
          clearInterval(misslelandRight)
          clearInterval(rightAttackProjectile.pop()) // clears the interval if it touches frieza's attack


        }

      } ), 7 )) // end of the push into the rightAttackProjectile
    }

    )
  } // end of the else if statement for the right attack 1
  else if (event.type.type === 'ATTACKRIGHT2') {


    this.setState({
      attack2: true,
      leftAttack2: this.props.attackLeft2,
      topAttack2: this.props.attackTop2,
      degree: this.props.degree
    }, () => {
      rightAttackProjectile2.push(setInterval(
        () => this.setState({
          leftAttack2: this.state.leftAttack2 + 5,
          topAttack2: this.state.topAttack2
        }, () => { if (this.state.leftAttack2 > window.innerWidth) {
          this.setState({
            attack2: false,
            leftAttack2: null,
            topAttack2: null
          })
          clearInterval(rightAttackProjectile2.pop())
        }  // end of the if
        else if ( (this.state.leftAttack2 > this.props.enemyLeft - 30 && this.state.leftAttack2 < this.props.enemyLeft + 30)
          && (this.state.topAttack2 < this.props.enemyTop + 80 && this.state.topAttack2 > this.props.enemyTop - 30)
       ) {

         let action = {
           type: 'HITFRIEZARIGHT'
         }
       this.props.dispatch(action)

       this.setState({
         attack2: false,
         leftAttack2: null,
         topAttack2: null
       })
       clearInterval(rightAttackProjectile2.pop()) // clears the interval if it touches frieza

        } // end of the else if
        else if (
          ( this.state.topAttack2 > this.props.enemyAttackTop - 35 && this.state.topAttack2 < this.props.enemyAttackTop + 35 )
        && ( this.state.leftAttack2 < this.props.enemyAttackLeft + 40 && this.state.leftAttack2 > this.props.enemyAttackLeft - 40 )
       ) {

         let action = {
           type: 'SETENEMYATTACKTOFALSE'
         };
         this.props.dispatch(action);

         this.setState({
           attack2: false,
           leftAttack2: null,
           topAttack2: null
         });

         let anotheraction = {
           type: 'BLOCKFRIEZAATTACKRIGHT'
         };
         this.props.dispatch(anotheraction);


         let misslelandRight = enemyAttackIntervalArray.pop()
         clearInterval(misslelandRight)
         clearInterval(rightAttackProjectile2.pop()) // clears the interval if it touches frieza's attack

        } // end of the else if for the frieza attack and player attack collision


        else if (
          ( this.state.topAttack2 > this.props.enemyAttackTop2 - 35 && this.state.topAttack2 < this.props.enemyAttackTop2 + 35 )
        && ( this.state.leftAttack2 < this.props.enemyAttackLeft2 + 40 && this.state.leftAttack2 > this.props.enemyAttackLeft2 - 40 )

        ) {

          let action = {
            type: 'SETENEMYATTACK2TOFALSE'
          };
          this.props.dispatch(action);

          this.setState({
            attack2: false,
            leftAttack2: null,
            topAttack2: null
          });

          let anotheraction = {
            type: 'BLOCKFRIEZAATTACKRIGHT'
          };
          this.props.dispatch(anotheraction);


          let misslelandRight = enemyAttackIntervalArray2.pop()
          clearInterval(misslelandRight)
          clearInterval(rightAttackProjectile2.pop()) // clears the interval if it touches frieza's attack


        }


      } ), 7 )) // end of the push into the rightAttackProjectile
    }

    )




  } // end of the right attack # 2
  else if ( event.type.type === 'ATTACKRIGHT3' ) {


    this.setState({
      attack3: true,
      leftAttack3: this.props.attackLeft3,
      topAttack3: this.props.attackTop3,
      degree: this.props.degree
    }, () => {
      rightAttackProjectile3.push(setInterval(
        () => this.setState({
          leftAttack3: this.state.leftAttack3 + 5,
          topAttack3: this.state.topAttack3
        }, () => { if (this.state.leftAttack3 > window.innerWidth) {
          this.setState({
            attack3: false,
            leftAttack3: null,
            topAttack3: null
          })
          clearInterval(rightAttackProjectile3.pop())
        }  // end of the if
        else if ( (this.state.leftAttack3 > this.props.enemyLeft - 30 && this.state.leftAttack3 < this.props.enemyLeft + 30)
          && (this.state.topAttack3 < this.props.enemyTop + 80 && this.state.topAttack3 > this.props.enemyTop - 30)
       ) {

        let action = {
           type: 'HITFRIEZARIGHT'
         }
       this.props.dispatch(action)

       this.setState({
         attack3: false,
         leftAttack3: null,
         topAttack3: null
       })
       clearInterval(rightAttackProjectile3.pop()) // clears the interval if it touches frieza

        } // end of the else if
        else if (
          ( this.state.topAttack3 > this.props.enemyAttackTop - 35 && this.state.topAttack3 < this.props.enemyAttackTop + 35 )
        && ( this.state.leftAttack3 < this.props.enemyAttackLeft + 40 && this.state.leftAttack3 > this.props.enemyAttackLeft - 40 )
       ) {

         let action = {
           type: 'SETENEMYATTACKTOFALSE'
         };
         this.props.dispatch(action);

         this.setState({
           attack3: false,
           leftAttack3: null,
           topAttack3: null
         });

         let anotheraction = {
           type: 'BLOCKFRIEZAATTACKRIGHT'
         };
         this.props.dispatch(anotheraction);


         let misslelandRight = enemyAttackIntervalArray.pop()
         clearInterval(misslelandRight)
         clearInterval(rightAttackProjectile3.pop()) // clears the interval if it touches frieza's attack

        } // end of the else if for the frieza attack and player attack collision

        else if (
          ( this.state.topAttack3 > this.props.enemyAttackTop2 - 35 && this.state.topAttack3 < this.props.enemyAttackTop2 + 35 )
        && ( this.state.leftAttack3 < this.props.enemyAttackLeft2 + 40 && this.state.leftAttack3 > this.props.enemyAttackLeft2 - 40 )
        ) {

          let action = {
            type: 'SETENEMYATTACK2TOFALSE'
          };
          this.props.dispatch(action);

          this.setState({
            attack3: false,
            leftAttack3: null,
            topAttack3: null
          });

          let anotheraction = {
            type: 'BLOCKFRIEZAATTACKRIGHT'
          };
          this.props.dispatch(anotheraction);


          let misslelandRight = enemyAttackIntervalArray2.pop()
          clearInterval(misslelandRight)
          clearInterval(rightAttackProjectile3.pop()) // clears the interval if it touches frieza's attack

        }



      } ), 7 )) // end of the push into the rightAttackProjectile
    }

  ) // end of the set state.


} // end of the right attack 3
else if (event.type.type === 'ATTACKUP') {


  this.setState({
    attack: true,
    leftAttack: this.props.attackLeft,
    topAttack: this.props.attackTop,
    degree: this.props.degree
  }, () => {
    upAttackProjectile.push(setInterval(
      () =>  this.setState({
      leftAttack: this.state.leftAttack,
      topAttack: this.state.topAttack - 5
    }, () => { if (this.state.topAttack < 0) {
      this.setState({
        attack: false,
        leftAttack: null,
        topAttack: null
      }) // end of the setState
    } // end of the if statement
    else if (
      ( this.state.topAttack < this.props.enemyTop + 100 && this.state.topAttack > this.props.enemyTop )
      && (this.state.leftAttack > this.props.enemyLeft - 30 && this.state.leftAttack < this.props.enemyLeft + 20)
    ) {

      let action = {
        type: 'HITFRIEZAUP'
      }
    this.props.dispatch(action)

    this.setState({
      attack: false,
      leftAttack: null,
      topAttack: null
    }) // end of this this state within the else if statement


    } // end of the else if
  }), 7 ) // end of the setInterval
) // end of the upAttackProjectile
})  // end of the setState



} // end of the first up attack
      else if (event.type.type === 'ATTACKUP2') {

        this.setState({
          attack2: true,
          leftAttack2: this.props.attackLeft2,
          topAttack2: this.props.attackTop2,
          degree: this.props.degree
        }, () => {
          upAttackProjectile2.push(setInterval(
            () =>  this.setState({
            leftAttack2: this.state.leftAttack2,
            topAttack2: this.state.topAttack2 - 5
          }, () => { if (this.state.topAttack2 < 0) {
            this.setState({
              attack2: false,
              leftAttack2: null,
              topAttack2: null
            }) // end of the setState
          } // end of the if statement
          else if (
            ( this.state.topAttack2 < this.props.enemyTop + 100 && this.state.topAttack2 > this.props.enemyTop )
            && (this.state.leftAttack2 > this.props.enemyLeft - 30 && this.state.leftAttack2 < this.props.enemyLeft + 20)
          ) {

            let action = {
              type: 'HITFRIEZAUP'
            }
          this.props.dispatch(action)

          this.setState({
            attack2: false,
            leftAttack2: null,
            topAttack2: null
          }) // end of this this state within the else if statement


          } // end of the else if
        }), 7 ) // end of the setInterval
        ) // end of the upAttackProjectile
        })  // end of the setState


      } // end of attack up 2
      else if ( event.type.type === 'ATTACKUP3') {

        this.setState({
          attack3: true,
          leftAttack3: this.props.attackLeft3,
          topAttack3: this.props.attackTop3,
          degree: this.props.degree
        }, () => {
          upAttackProjectile3.push(setInterval(
            () =>  this.setState({
            leftAttack3: this.state.leftAttack3,
            topAttack3: this.state.topAttack3 - 5
          }, () => { if (this.state.topAttack3 < 0) {
            this.setState({
              attack3: false,
              leftAttack3: null,
              topAttack3: null
            }) // end of the setState
          } // end of the if statement
          else if (
            ( this.state.topAttack3 < this.props.enemyTop + 100 && this.state.topAttack3 > this.props.enemyTop )
            && (this.state.leftAttack3 > this.props.enemyLeft - 30 && this.state.leftAttack3 < this.props.enemyLeft + 20)
          ) {

            let action = {
              type: 'HITFRIEZAUP'
            }
          this.props.dispatch(action)

          this.setState({
            attack3: false,
            leftAttack3: null,
            topAttack3: null
          }) // end of this this state within the else if statement


          } // end of the else if
        }), 7 ) // end of the setInterval
        ) // end of the upAttackProjectile
        })  // end of the setState

      } // end of attack up 3







}

  render() {


  if (this.state.leftAttack < 0) {

    while (leftAttackProjectile.length > 0) {

      let leftattackInstance = leftAttackProjectile.pop()
      clearInterval(leftattackInstance)
    }
  }  // this is the first attack left.
  else if (this.state.leftAttack2 < 0) {

    while(leftAttackProjectile2.length > 0) {
      let leftattackInstance = leftAttackProjectile2.pop()
      clearInterval(leftattackInstance)
    }
  }

  else if ( this.state.leftAttack3 < 0 ) {
    while(leftAttackProjectile3.length > 0) {
      let leftattackInstance = leftAttackProjectile3.pop()
      clearInterval(leftattackInstance)
    }
  }

  else if ( this.state.topAttack > window.innerHeight) {

    while(downAttackProjectile.length > 0) {
      let downattackInstance = downAttackProjectile.pop()
      clearInterval(downattackInstance)

    }
  }
  else if (this.state.topAttack2 > window.innerHeight) {

    while(downAttackProjectile2.length > 0) {
      let downattackInstance = downAttackProjectile2.pop()
      clearInterval(downattackInstance)
    }
  } else if (this.state.topAttack3 > window.innerHeight) {
      while(downAttackProjectile3.length > 0) {
        let downattackInstance = downAttackProjectile3.pop()
        clearInterval(downattackInstance)
      }
  }

  else if (this.state.leftAttack > window.innerWidth) {
    while(rightAttackProjectile.length > 0) {

      let rightattackInstance = rightAttackProjectile.pop()
      clearInterval(rightattackInstance)
    }
  }  else if (this.state.leftAttack2 > window.innerWidth) {
    while(rightAttackProjectile2.length > 0) {
      let rightattackInstance = rightAttackProjectile2.pop()
      clearInterval(rightattackInstance)
    }
  } else if (this.state.leftAttack3 > window.innerWidth) {
    while(rightAttackProjectile3.length > 0) {
      let rightattackInstance = rightAttackProjectile3.pop()
      clearInterval(rightattackInstance)
    }
  }

  else if (this.state.topAttack < 0) {

    while(upAttackProjectile.length > 0) {

      let upattackInstance = upAttackProjectile.pop()
      clearInterval(upattackInstance)
    }
  } else if (this.state.topAttack2 < 0) {
      while(upAttackProjectile2.length > 0) {

        let upattackInstance = upAttackProjectile2.pop()
        clearInterval(upattackInstance)
      }
  } else if (this.state.topAttack3 < 0) {
    while(upAttackProjectile3.length > 0) {
      let upattackInstance = upAttackProjectile3.pop()
      clearInterval(upattackInstance)
    }
  }

    return (
      <div>
        <ActionCable
          channel={{ channel: 'MovesChannel' }}
          onReceived={this.handleReceived}
          />
        <div>
          <img src={this.props.playerDirection.image} alt='goku' style={{position: 'absolute', width: `${this.props.playerDirection.width}%`, top: `${this.props.top}px`, left: `${this.props.left}px`}} />
        </div>
        {/*<Score />
        <Healthbar />*/}
        {this.state.attack === true ?
            this.props.level !== 'FOUR' ? <PlayerAttack leftAttackCoordinates={this.state.leftAttack}
            topAttackCoordinates={this.state.topAttack}
            degree={this.state.degree}/> : <PlayerAttack2 leftAttackCoordinates={this.state.leftAttack}
            topAttackCoordinates={this.state.topAttack}
            degree={this.state.degree}/>
          : null
        }

        {this.state.attack2 === true ?
          this.props.level !== 'FOUR' ? <PlayerAttack leftAttackCoordinates={this.state.leftAttack2}
          topAttackCoordinates={this.state.topAttack2}
          degree={this.state.degree}/> : <PlayerAttack2 leftAttackCoordinates={this.state.leftAttack2}
          topAttackCoordinates={this.state.topAttack2}
          degree={this.state.degree}/>
        : null
        }

        {this.state.attack3 === true ?
          this.props.level !== 'FOUR' ? <PlayerAttack leftAttackCoordinates={this.state.leftAttack3}
          topAttackCoordinates={this.state.topAttack3}
          degree={this.state.degree}/> : <PlayerAttack2 leftAttackCoordinates={this.state.leftAttack3}
          topAttackCoordinates={this.state.topAttack3}
          degree={this.state.degree}/>
        : null
        }

      </div>
    )
  }
}








const mapStateToProps = (state) => {


    return {
      player: state.playerCoordinates.player,
      top: state.playerCoordinates.top,
      left: state.playerCoordinates.left,
      playerDirection: state.playerCoordinates.defaultDirection,
      attackLeft: state.playerCoordinates.attackLeft,
      attackTop: state.playerCoordinates.attackTop,
      degree: state.playerCoordinates.degree,
      enemyTop: state.playerCoordinates.enemyCoordinates.enemyTop,
      enemyLeft: state.playerCoordinates.enemyCoordinates.enemyLeft,
      enemyAttack: state.playerCoordinates.enemyAttack,
      enemyAttackDirection: state.playerCoordinates.enemyAttackDirection,
      enemyAttackLeft: state.playerCoordinates.enemyAttackLeft,
      enemyAttackTop: state.playerCoordinates.enemyAttackTop,
      attackLeft2: state.playerCoordinates.attackLeft2,
      attackTop2: state.playerCoordinates.attackTop2,
      attackLeft3: state.playerCoordinates.attackLeft3,
      attackTop3: state.playerCoordinates.attackTop3,
      enemyAttack2: state.playerCoordinates.enemyAttack2,
      enemyAttackLeft2: state.playerCoordinates.enemyAttackLeft2,
      enemyAttackTop2: state.playerCoordinates.enemyAttackTop2,
      enemyAttack2Direction: state.playerCoordinates.enemyAttack2Direction,
      clicked: state.playerCoordinates.clicked,
      level: state.playerCoordinates.level
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
