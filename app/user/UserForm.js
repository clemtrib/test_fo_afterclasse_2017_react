const React = require('react');
const request = require('superagent');
const urlApi = "http://afterclasse.local";

class UserForm extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
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

    if (typeof(props.user) != 'undefined') {
      const user = props.user.user;
      this.state = {
        new: false,
        id: user.lastname,
        lastname: user.lastname,
        firstname: user.firstname,
        address1: user.address1,
        address2: user.address2,
        postcode: user.postcode,
        city: user.city,
        phone: user.phone,
        email: user.email
      };
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {

    event.preventDefault();

    let data = JSON.stringify(this.state)

    if (!this.state.new) {
      request
        .patch(urlApi + '/student')
        .send(data)
        .then(function (res) {
          console.log('update: success');
          // res.body, res.headers, res.status
        })
        .catch(function (err) {
          console.log('update: failure');
          // err.message, err.response
        });
    } else {
      request
        .put(urlApi + '/student')
        .send(data)
        .then(function (res) {
          console.log('update: success');
          // res.body, res.headers, res.status
        })
        .catch(function (err) {
          console.log('update: failure');
          // err.message, err.response
        });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Coordonnées :</legend>
          <label htmlFor="firstname">
            Nom :
            <input aria-label="firstname" aria-required="true" name="firstname" id="firstname" type="text"
                   value={this.state.firstname} onChange={this.handleChange}/>
          </label>
          <label htmlFor="lastname">
            Prénom :
            <input aria-label="lastname" aria-required="true" name="lastname" id="lastname" type="text"
                   value={this.state.lastname} onChange={this.handleChange}/>
          </label>
          <label htmlFor="address1">
            Adresse :
            <input aria-label="address1" aria-required="true" name="address1" id="address1" type="text"
                   value={this.state.address1} onChange={this.handleChange}/>
            <input aria-label="address2" aria-required="false" name="address2" id="address2" type="text"
                   value={this.state.address2} onChange={this.handleChange}/>
          </label>
          <label htmlFor="postcode">
            Code postal :
            <input aria-label="postcode" aria-required="true" name="postcode" id="postcode" type="text"
                   value={this.state.postcode} onChange={this.handleChange}/>
          </label>
          <label htmlFor="city">
            Ville :
            <input aria-label="city" aria-required="true" name="city" id="city" type="text" value={this.state.city}
                   onChange={this.handleChange}/>
          </label>
          <label htmlFor="postcode">
            Téléphone :
            <input aria-label="postcode" aria-required="true" name="postcode" id="postcode" type="text" type="text"
                   value={this.state.phone} onChange={this.handleChange}/>
          </label>
          <label htmlFor="email">
            Email :
            <input aria-label="email" aria-required="true" name="email" id="email" type="text" type="text" type="text"
                   value={this.state.email} onChange={this.handleChange}/>
          </label>
        </fieldset>
        <input type="submit" value="Submit"/>
      </form>
    );
  }

}

module.exports = UserForm;
