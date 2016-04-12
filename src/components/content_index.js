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
        <img src={'http://media.animevice.com/uploads/2/21764/364936-yoshi_1.jpg'} alt='yoshi' />
        //add main pic here
        //make new div for other pictures after
      </div>
    );
  }
}

export default connect(null, { fetchAppts })(ContentIndex);
