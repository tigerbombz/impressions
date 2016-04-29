import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import Nav from './layout/Nav';
import Footer from './layout/Footer';

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

