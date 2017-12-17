var React = require('react');
var ReactDOM = require('react-dom');
var UserForm = require('./UserForm');

class UsersListItem extends React.Component {

  updateUser(user) {
    ReactDOM.render(
      <UserForm user={user}/>,
      document.getElementById('content')
    );
  }

  deleteUser(user) {

  }

  render() {
    const users = this.props.usersItem;
    const listUsers = users.map((user) =>
      <tr key={user.id}>
        <td>{user.firstname} {user.lastname}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
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
          <th>Actions</th>
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
