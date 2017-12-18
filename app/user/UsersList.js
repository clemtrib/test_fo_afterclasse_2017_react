const React = require('react');
const ReactDOM = require('react-dom');
const request = require('superagent');
const UserForm = require('./UserForm');

const urlApi = "http://afterclasse.local";

class UsersListItem extends React.Component {

  updateUser(user) {
    ReactDOM.render(
      <UserForm user={user}/>,
      document.getElementById('content')
    );
  }

  deleteUser(user) {
    let data = JSON.stringify(user.user)
    request
      .delete(urlApi + '/student')
      .send(data)
      .then(function (res) {
        console.log('delete: success');
        // res.body, res.headers, res.status
      })
      .catch(function (err) {
        console.log('delete: failure');
        // err.message, err.response
      });
  }

  render() {
    const users = this.props.usersItem;
    const listUsers = users.map((user) =>
      <tr key={user.id}>
        <td>{user.firstname} {user.lastname.toUpperCase()}</td>
        <td>{user.email.toLocaleLowerCase()}</td>
        <td>+33 (0) {user.phone}</td>
        <td>
          <button className="square" onClick={() => this.updateUser({user})}>
            Updade
          </button>
          <button className="square" onClick={() => this.deleteUser({user})}>
            Delete
          </button>
        </td>
      </tr>
    );
    return listUsers;
  }
}

class UsersList extends React.Component {

  render() {
    const listUsers = this.props.users;
    if (!listUsers) {
      return <p>Une erreur est survenue.</p>
    }
    return (
      <table>
        <thead>
        <tr>
          <th>Nom et prénom</th>
          <th>Email</th>
          <th>Téléphone</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <UsersListItem usersItem={listUsers}/>
        </tbody>
      </table>
    )
  };

}

module.exports = UsersList;
