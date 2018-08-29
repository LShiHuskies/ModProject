export default function createMove(body) {
  const config = {
    method: 'POST',
    headers: {
  'Accepts': 'application/json',
  'Content-Type': 'application/json'
  },
    body: JSON.stringify(body)
  };
  return fetch(`http://${window.location.hostname}:3000/api/moves`, config).then(r=> r.json())
}
