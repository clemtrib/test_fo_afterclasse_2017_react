var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios');
var UsersList = require('./user/UsersList');
var Toolbar = require('./tools/Toolbar');

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
