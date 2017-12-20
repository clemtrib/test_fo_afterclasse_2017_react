const React = require('react');
const ReactDOM = require('react-dom');
const request = require('superagent');
const urlApi = "http://afterclasse.local";

class UserForm extends React.Component {

  initData() {
    const user = {
      new: true,
      id: "",
      lastname: "",
      firstname: "",
      address1: "",
      address2: "",
      postcode: "",
      city: "",
      phone: "",
      email: "",
    };
    const error = {};
    this.state = {user: user, submitted: "false", errors: error};
  }

  defineData(user) {
    this.state.user = {
      new: false,
      id: typeof(user.id) === "number" ? user.id : "",
      lastname: typeof(user.lastname) === "string" ? user.lastname : "",
      firstname: typeof(user.firstname) === "string" ? user.firstname : "",
      address1: typeof(user.address1) === "string" ? user.address1 : "",
      address2: typeof(user.address2) === "string" ? user.address2 : "",
      postcode: typeof(user.postcode) === "string" ? user.postcode : "",
      city: typeof(user.city) === "string" ? user.city : "",
      phone: typeof(user.phone) === "string" ? user.phone : "",
      email: typeof(user.email) === "string" ? user.email : ""
    };
  }

  constructor(props) {
    super(props);
    ReactDOM.render(
      <p></p>,
      document.getElementById('toolbar')
    );
    this.initData();
    if (typeof(props.user) != 'undefined') {
      const user = props.user.user;
      this.defineData(user);
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const user = this.state.user;
    user[name] = value;
    this.setState({
      user: user
    });
  }

  handleSubmit(event) {
    const _this = this;
    event.preventDefault();
    let data = JSON.stringify(this.state.user)
    if (!this.state.user.new) {
      request
        .patch(urlApi + '/student')
        .send(data)
        .then(function () {
          location.reload();
        });
    } else {
      request
        .put(urlApi + '/student')
        .send(data)
        .then(function () {
          location.reload();
        });
    }
  }

  render() {
    switch (this.state.submitted) {
      case "success" :
      case "failure" :
        return null;
        break;
      case "false" :
        const u = this.state.user;
        return (
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Coordonnées</legend>
              <label htmlFor="firstname">
                Prénom :
                <input aria-label="firstname" aria-required="true" name="firstname" id="firstname" type="text"
                       value={u.firstname} onChange={this.handleChange} required={true} minLength={3}
                       maxLength={128}/>
              </label>
              <label htmlFor="lastname">
                Nom :
                <input aria-label="lastname" aria-required="true" name="lastname" id="lastname" type="text"
                       value={u.lastname} onChange={this.handleChange} required={true} minLength={3}
                       maxLength={128}/>
              </label>
              <label htmlFor="address1">
                Adresse :
                <input aria-label="address1" aria-required="true" name="address1" id="address1" type="text"
                       value={u.address1} onChange={this.handleChange} minLength={3} maxLength={255}/>
                <input aria-label="address2" aria-required="false" name="address2" id="address2" type="text"
                       value={u.address2} onChange={this.handleChange} minLength={3} maxLength={255}/>
              </label>
              <label htmlFor="postcode">
                Code postal :
                <input aria-label="postcode" aria-required="true" name="postcode" id="postcode" type="text"
                       value={u.postcode} onChange={this.handleChange} minLength={5} maxLength={5}/>
              </label>
              <label htmlFor="city">
                Ville :
                <input aria-label="city" aria-required="true" name="city" id="city" type="text"
                       value={u.city} onChange={this.handleChange} minLength={3} maxLength={128}/>
              </label>
              <label htmlFor="phone">
                Téléphone :
                <input aria-label="phone" aria-required="true" name="phone" id="phone" type="text"
                       value={u.phone} onChange={this.handleChange} required={true} minLength={10}
                       maxLength={10}/>
              </label>
              <label htmlFor="email">
                Email :
                <input aria-label="email" aria-required="true" name="email" id="email" type="email"
                       value={this.state.user.email} onChange={this.handleChange} required={true} maxLength={255}/>
              </label>
              <input type="submit" value="Enregistrer"/>
            </fieldset>
          </form>
        );
        break;
    }
  }

}

module.exports = UserForm;
