const createMove = (state) => {
  const config = {
    method: 'POST',
    headers: {
  Accepts: 'application/json',
  'Content-Type': 'application/json'
  },
    body: JSON.stringify(state)
  };

  return fetch(`http://localhost:3000/user_games`).then(r=> r.json())
}

export default createMove;
