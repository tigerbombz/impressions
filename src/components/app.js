import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Impressions Hair Design</h1>
        {this.props.children}
      </div>
    );
  }
}




<Link to='/book-online'>Book Online</Link>
