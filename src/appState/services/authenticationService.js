export const loginUserService = ({ user }) => {
  const LOGIN_API_ENDPOINT = 'http://localhost:4000/api/v1/login';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    body: new URLSearchParams({
      'username': user.username,
      'password': user.password
    }).toString()
  };

  return fetch(LOGIN_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};