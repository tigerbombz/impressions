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
        <div className='main_div'>
          <img src={'https://www.salonpricelady.com/wp-content/uploads/2016/02/hair-salon-inside.jpg'} alt='main' style={{width: 1110, height: 450}} className='main' />
        </div>
        <div className='quote'>
          <span className='words'>
            THE ULTIMATE EXPERIENCE IN LUXURY HAIR CARE
          </span>
        </div>
        <div className='image_container'>
          <div className='box col-md-3 col-sm-3'>
            <img src={'http://absolutbusinessbrokers.com.au/wp-content/uploads/2015/03/hair-salon-business-fro-sale-B11983.jpg'} style={{width: 250, height: 250}} />
            <label> Hair Color </label>
          </div>
          <div className='box col-md-3 col-sm-3'>
            <img src={'http://arsengurgov.com/wp-content/uploads/2016/02/dry-hair-cut-Arsen-Gurgov-NYC-Hairstylist-.jpg'} style={{width: 250, height: 250}} />
            <label> Haircut & Style </label>
          </div>
          <div className='box col-md-3 col-sm-3'>
            <img src={'http://im.hunt.in/cg/panipat/City-Guide/beauty-parlour-1.jpg'} style={{width: 250, height: 250}} />
            <label> Beauty Service </label>
          </div>
          <div className='box col-md-3 col-sm-3'>
            <img src={'http://providenceplacebridal.com/wp-content/uploads/2015/04/wedding-hair-2.jpg'} style={{width: 250, height: 250}} />
            <label> Bridal</label>
          </div>
          <footer>
            Quantum Ventures 2016 | Matthew Nguyen
          </footer>
        </div>

      </div>
    );
  }
}

export default connect(null, { fetchAppts })(ContentIndex);
