var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var axios = require('axios');

const urlApi = "http://afterclasse.local";

function getStudents() {
  return axios.get(urlApi + '/students');
}

var promiseObj = getStudents();
promiseObj.then(function (data) {
  console.log(data);
}).catch(function (data) {
  console.log('failure');
});

var Content = createReactClass({
  render: function() {
    return (
      <div>
        <b>Congratulations</b>, you are now ready to implement your client side application! Enjoy :-)
      </div>
    );
  }
});

ReactDOM.render(<Content />, document.getElementById('content'));


/*

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>Hello, {formatName(user)}!</h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

*/
