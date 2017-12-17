var React = require('react');

class UserFormPassword extends React.Component {

  handleChange(event) {

  }

  handleSubmit(event) {

  }

  render() {
    <form onSubmit={this.handleSubmit}>
      <fieldset>
        <legend>Réinitialiser le mot de passe</legend>
        <label htmlFor="firstname">
          Nom :
          <input aria-label="password1" aria-required="true" name="password1" id="password1" type="text"
                 value={this.state.firstname} onChange={this.handleChange}/>
          <input aria-label="password2" aria-required="true" name="password2" id="password2" type="text"
                 value={this.state.firstname} onChange={this.handleChange}/>
        </label>
      </fieldset>
    </form>
  }
};

module.exports = UserFormPassword;
