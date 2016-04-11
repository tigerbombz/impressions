import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Impressions Hair Design</h1>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

var Nav = React.createClass({
 render: function() {
   return (
    <ul className="nav nav-pills">
      <li role="presentation" className="active">Home</li>
      <li role="presentation">Profile</li>
      <li role="presentation">Messages</li>
    </ul>
  )
 }
});



<Link to='/book-online'>Book Online</Link>
