const React = require('react');
const ReactDOM = require('react-dom');
const UsersList = require('./user/UsersList');

ReactDOM.render(
  <UsersList/>,
  document.getElementById('content')
);
