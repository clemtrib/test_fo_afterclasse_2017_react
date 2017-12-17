var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios');
//var StudentList = require("./student/list");


const urlApi = "http://afterclasse.local";

/*
function Welcome(props) {
  return (
    <tr>
      <td>{props.user.firstname} {props.user.lastname}</td>
      <td>{props.user.email}</td>
      <td>{props.user.phone}</td>
    </tr>
  );
}

function StudentList (props) {
  const students = props.students;
  const listStudents = students.map((user) =>
    <Welcome user={user} key={user.id}/>
  );
  return listStudents;
}

function getStudentsRest() {
  return axios.get(urlApi + '/students');
}

function getStudents() {

  var promiseObj = getStudentsRest();

  promiseObj.then(function (data) {

    const listStudents = data.data;

    function App() {
      return (
        <table>
          <thead>
            <tr>
              <th>Nom et prénom</th>
              <th>Email</th>
              <th>Téléphone</th>
            </tr>
          </thead>
          <tbody>
          <StudentList students={listStudents}/>
          </tbody>
        </table>
      );
    }

    //
    ReactDOM.render(
      <App/>,
      document.getElementById('content')
    );



  }).catch(function (data) {

    ReactDOM.render(
      <p>Une erreur s'est produite.</p>,
      document.getElementById('content')
    );

  });
}

*/

//getStudents();


class UsersList extends React.Component {

  render() {

    const listUsers = this.props.users;
    if (!listUsers) {
      return <p>Une erreur est survenue.</p>
    }

    function UserListItem(props) {
      const users = props.users;
      const listUsers = users.map((user) =>
        <tr key={user.id}>
          <td>{user.firstname} {user.lastname}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>Supprimer</td>
        </tr>
      );
      return listUsers;
    }

    function App() {
      return (
        <table>
          <thead>
          <tr>
            <th>Nom et prénom</th>
            <th>Email</th>
            <th>Téléphone</th>
          </tr>
          </thead>
          <tbody>
          <UserListItem users={listUsers}/>
          </tbody>
        </table>
      );
    }

    return <App/>;
  }
}


function getStudentsRest() {
  return axios.get(urlApi + '/students');
}


//GET, DELETE, PUT, PATCH
function deleteStudentRest(id) {
  //axios.delete(urlApi + '/student');
}

function getStudents() {
  var promiseObj = getStudentsRest();
  promiseObj.then(function (data) {
    const listStudents = data.data;
    const element = <UsersList users={listStudents}/>;
    render(element);
  }).catch(function (data) {
    const element = "Une erreur est survenue.";
    render(element);
  });
}

function render(element) {
  ReactDOM.render(
    element,
    document.getElementById('content')
  );
}

//
getStudents();

deleteStudentRest();
