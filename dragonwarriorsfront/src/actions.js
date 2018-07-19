export function doSomething(thing) {

  return {
    type: 'SELECT',
    payload: thing
  };
}


export function moveLeft() {

  return {
    type: 'MOVE LEFT'
  }
}
