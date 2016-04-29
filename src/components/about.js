import React from 'react';
import { Component } from 'react';

const tina = require('../images/tina.png');
const michelle = require('../images/michelle.png');


export default class About extends Component {
  render() {
    return (
      <div>
        <div className='about_container'>
          <div className='row about_row'>
            <div className='tina col-md-7 col-xs-12'>
              <h3>TINA LE, MASTER STYLIST & FOUNDER</h3>
              <p>Aliquam sagittis porttitor vehicula. Duis euismod vitae felis a cursus. Donec ut ultrices velit. Maecenas vel urna nec arcu ultricies iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam mattis arcu sed magna dignissim, non cursus sapien malesuada. Mauris cursus pharetra justo, a molestie urna sollicitudin ut. Quisque orci dui, ornare vitae odio accumsan, pharetra tincidunt magna. Vestibulum ac nisi est. Proin mollis maximus enim, sed iaculis libero blandit nec. Quisque in magna lectus. Vivamus hendrerit diam vel libero posuere fringilla. In quis elementum nulla. Maecenas justo diam, fringilla in sodales ac, feugiat et quam.</p>
            </div>
            <div className='about_pic col-md-5 col-xs-12'>
              <img src={tina} />
            </div>
          </div>
          <div className='row about_row'>
            <div className='about_pic col-md-5 col-xs-12'>
              <img src={michelle} />
            </div>
            <div className='michelle col-md-7 col-xs-12'>
              <h3>MICHELLE NGUYEN, MASTER COLORIST & DAUGHTER</h3>
              <p>Aliquam sagittis porttitor vehicula. Duis euismod vitae felis a cursus. Donec ut ultrices velit. Maecenas vel urna nec arcu ultricies iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam mattis arcu sed magna dignissim, non cursus sapien malesuada. Mauris cursus pharetra justo, a molestie urna sollicitudin ut. Quisque orci dui, ornare vitae odio accumsan, pharetra tincidunt magna. Vestibulum ac nisi est. Proin mollis maximus enim, sed iaculis libero blandit nec. Quisque in magna lectus. Vivamus hendrerit diam vel libero posuere fringilla. In quis elementum nulla. Maecenas justo diam, fringilla in sodales ac, feugiat et quam.</p>

            </div>
          </div>

        </div>
      </div>
    )
  }
}
