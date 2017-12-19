const React = require('react');
const ReactDOM = require('react-dom');
const request = require('superagent');
const UserForm = require('./UserForm');
const UserToolbar = require('./UserToolbar');

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
        <td>{user.phone}</td>
        <td>
          <button className="square" onClick={() => this.updateUser({user})}>
            Update
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

  constructor(props) {
    super(props);
    this.state = {
      listUsers: []
    }
  }

  componentDidMount() {
    var _this = this;
    
    request
      .get(urlApi + '/students')
      .then(function (res) {
        _this.setState({
          listUsers: JSON.parse(res.text)
        });
      })
      .catch(function (err) {
        console.log("Une erreur est survenue lors du chargement.");
      });
  }

  render() {
    ReactDOM.render(
      <UserToolbar/>,
      document.getElementById('toolbar')
    );
    if (this.state.listUsers.length === 0) {
      return <p>Il n'y a pas de données.</p>
    }
    return (
      <table>
        <thead>
        <tr>
          <th>Nom</th>
          <th>Email</th>
          <th>Téléphone</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <UsersListItem usersItem={this.state.listUsers}/>
        </tbody>
      </table>
    )
  };

}

module.exports = UsersList;
