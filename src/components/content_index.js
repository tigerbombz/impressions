import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAppts } from '../actions/index'
import { Link } from 'react-router';


class ContentIndex extends Component {
  componentWillMount() {
    this.props.fetchAppts();
  }


  render() {
    return (
      <div>

      </div>
    );
  }
}

export default connect(null, { fetchAppts })(ContentIndex);
