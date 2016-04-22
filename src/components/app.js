import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

var Nav = React.createClass({
 render: function() {
   return (
    <ul className="navbar nav-pills">
      <h1>Impressions Hair Design</h1>
      <li role="presentation">Book Now</li>
      <li role="presentation">Products</li>
      <li role="presentation" className="active">Home</li>
    </ul>
  )
 }
});


var Footer = React.createClass({
  render: function() {
    return (
      <span className='footer'>
        Quantum Ventures 2016 | @Matthew Nguyen
      </span>
    )
  }
});


<Link to='/book-online'>Book Online</Link>
// link to about us
// link to contact us
// link to profile
// link to google maps api
