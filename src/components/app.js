import React from 'react';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Home</li>
          <li>Book Now</li>
          <li>Location</li>
          <li>About Us</li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
