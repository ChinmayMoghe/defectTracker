const BASE_API_ENDPOINT = 'http://localhost:4000/api/v1';
const PARAMETERS = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT',
    'Access-Control-Allow-Headers': 'Content-Type',
  },
  body: {}
};
export const loginUserService = ({ user }) => {
  const LOGIN_API_ENDPOINT = `${BASE_API_ENDPOINT}/login`;

  PARAMETERS.body = new URLSearchParams({
    'username': user.username,
    'password': user.password
  }).toString();

  return fetch(LOGIN_API_ENDPOINT, PARAMETERS)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const registrationService = ({ user }) => {
  const REGISTER_API_ENDPOINT = `${BASE_API_ENDPOINT}/adduser`;

  PARAMETERS.body = new URLSearchParams({
    'empID': user.empID,
    'password': user.password,
    'role':user.role
  }).toString();

  return fetch(REGISTER_API_ENDPOINT, PARAMETERS)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};