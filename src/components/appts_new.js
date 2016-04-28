import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createAppt } from '../actions/index';
import { Link } from 'react-router';



class ApptsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createAppt(props)
      .then(() => {
        this.context.router.push('/');
      });
  }


  render() {
    const { fields: { name, phone, stylist, date, content }, handleSubmit } = this.props;


    return (
      <div className='appt-container'>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <h3>Contact Information</h3>

          <div className={`form-group col-md-6 ${name.touched && name.invalid ? 'has-danger' : ''}`}>
            <label>Name</label>
            <input type='text' className='form-control' placeholder='First & Last' {...name} />
            <div className='text-help'>
              {name.touched ? name.error : ''}
            </div>
          </div>

          <div className={`form-group col-md-6 ${phone.touched && phone.invalid ? 'has-danger' : ''}`}>
            <label>Phone</label>
            <input type='text' className='form-control' placeholder='(555) 555-5555' {...phone} />
            </div>
            <div className='text-help'>
              {phone.touched ? phone.error : ''}
            </div>

          <hr />

          <h3>Appointment Details</h3>
          <div className={`form-group ${stylist.touched && stylist.invalid ? 'has-danger' : ''}`}>
            <label>Pick a Stylist </label><br />
            <select name='stylist' {...stylist}>
              <option value='tina'>Tina</option>
              <option value='michelle'>Michelle</option>
            </select>
            <div className='text-help'>
              {stylist.touched ? stylist.error : ''}
            </div>
          </div>

          <div className={`form-group ${date.touched && date.invalid ? 'has-danger' : ''}`}>
            <label>Date & Time</label>
            <input type='datetime-local' className='form-control' {...date} />
            <div className='text-help'>
              {date.touched ? date.error : ''}
            </div>
          </div>


          <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
            <label>Im making an appointment for</label>
            <textarea className='form-control' placeholder='Description of service....' {...content}  />
            <div className='text-help'>
              {content.touched ? content.error : ''}
            </div>
          </div>

          <button type='submit' className='btn btn-primary'>Submit</button>
          <Link to='/' className='btn btn-danger'>Cancel</Link><br />

          <span className='disclaimer'>
            Please note that the date and time you requested may not be available. We will contact you to confirm your actual appointment details.
          </span>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors ={};

  if (!values.name) {
    errors.name = 'Enter a name';
  }
  if (!values.phone) {
    errors.phone = 'Enter a phone number';
  }
  if (!values.stylist) {
    errors.stylist = 'Pick a stylist';
  }
  if (!values.date) {
    errors.date = 'Pick a date and time';
  }
  if (!values.content) {
    errors.content = 'How can we help you?';
  }

  return errors;
}


//connect: first arg is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateProps, 3rd is mapDispatchToProps

export default reduxForm({
  form: 'ApptsNewForm',
  fields: ['name', 'phone', 'stylist', 'date', 'content'],
  validate
}, null, { createAppt })(ApptsNew);
