import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className='container'>
        <div className='row contact_row col-md-12 col-xs-12'>
          <h1>CONTACT US</h1>
          <p>We are happy to answer any questions you have so please feel free to reach out to us for your haircare needs.</p>
        </div>
        <div className='row col-md-12 col-xs-12'>
          <ul className='contactIcons'>
            <li className='listIcons'>
              <div className='eachIcon'>
                <i className="fa fa-phone fa-3x" aria-hidden="true"></i>
                <h5>Phone</h5>
                <p>1.408.251.4664</p>
              </div>
            </li>
            <li className='listIcons'>
              <div className='eachIcon'>
                <i className="fa fa-building fa-3x" aria-hidden="true"></i>
                <h5>Address</h5>
                <p>3037 McKee Rd, San Jose, CA 95127</p>
              </div>
            </li>
            <li className='listIcons'>
              <div className='eachIcon'>
                <i className="fa fa-yelp fa-3x" aria-hidden="true"></i>
                <h5>Yelp</h5>
                <a href="https://www.yelp.com/biz/impressions-hair-design-san-jose">Impressions Hair Design</a>
              </div>
            </li>
          </ul>
        </div>
        <div className='row google_map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.6455592366115!2d-121.83876918466481!3d37.374562779834314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcd0a74738fcb%3A0xb7bf9d47a942c2f6!2sImpressions+Hair+Design!5e0!3m2!1sen!2sus!4v1461899297009" width="1000" height="450" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
