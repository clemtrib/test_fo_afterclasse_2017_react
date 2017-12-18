const React = require('react');
const ReactDOM = require('react-dom');
const request = require('superagent');
const UsersList = require('./user/UsersList');
const Toolbar = require('./tools/Toolbar');

const urlApi = "http://afterclasse.local";

request
  .get(urlApi + '/students')
  .then(function (res) {
    const element = <UsersList users={JSON.parse(res.text)}/>;
    ReactDOM.render(
      element,
      document.getElementById('content')
    );
  })
  .catch(function (err) {
    const element = "Une erreur est survenue.";
    ReactDOM.render(
      err.message,
      document.getElementById('content')
    );
  });

ReactDOM.render(
  <Toolbar/>,
  document.getElementById('toolbar')
);
