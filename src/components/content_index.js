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
        <img src={'https://www.salonpricelady.com/wp-content/uploads/2016/02/hair-salon-inside.jpg'} alt='main' style={{width: 910, height: 450}} className='main' />
        <div className='quote'>
          <span className='words'>
            THE ULTIMATE EXPERIENCE IN LUXURY HAIR CARE
          </span>
        </div>
        <div className='image_container col-lg-12'>
          <div className='box col-md-3'>
          </div>
          <div className='box col-md-3'>
          </div>
          <div className='box col-md-3'>
          </div>
          <div className='box col-md-3'>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchAppts })(ContentIndex);
