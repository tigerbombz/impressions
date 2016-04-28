import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import Nav from './layout/Nav';

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



var Footer = React.createClass({
  render: function() {
    return (
      <span className='footer'>
        Quantum Ventures 2016 | Matthew Nguyen
      </span>
    )
  }
});


<Link to='/book-online'>Book Online</Link>
