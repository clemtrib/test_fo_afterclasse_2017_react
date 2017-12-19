var React = require('react');
var ReactDOM = require('react-dom');
var UserForm = require('./UserForm');

class Toolbar extends React.Component {

  createUser() {
    const element = <UserForm/>;
    ReactDOM.render(
      <UserForm/>,
      document.getElementById('content')
    );
  }

  render() {
    return (
      <button className="square" onClick={() => this.createUser()}>
        Create
      </button>
    );
  };

}

module.exports = Toolbar;
