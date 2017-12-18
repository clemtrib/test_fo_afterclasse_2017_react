const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');
const UsersList = require('./user/UsersList');
const Toolbar = require('./tools/Toolbar');

const urlApi = "http://afterclasse.local";

function getStudentsRest() {
  return axios.get(urlApi + '/students');
}

function getStudents() {
  var promiseObj = getStudentsRest();
  promiseObj.then(function (data) {
    const listStudents = data.data;
    const element = <UsersList users={listStudents}/>;
    ReactDOM.render(
      element,
      document.getElementById('content')
    );
  }).catch(function (data) {
    const element = "Une erreur est survenue.";
    ReactDOM.render(
      element,
      document.getElementById('content')
    );
  });
}

//
getStudents();

ReactDOM.render(
  <Toolbar/>,
  document.getElementById('toolbar')
);
