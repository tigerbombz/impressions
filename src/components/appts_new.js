import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createAppt } from '../actions/index';

class ApptsNew extends Component {
  render() {
    const { fields: { name, phone, stylist, date, content }, handleSubmit } = this.props;


    return (
      <div className='appt-container'>
        <form onSubmit={handleSubmit(this.props.createAppt)}>
          <h3>Contact Information</h3>

          <div className='form-group'>
            <label>Name</label>
            <input type='text' className='form-control' placeholder='First & Last' {...name} />
          </div>

          <div className='form-group'>
            <label>Phone</label>
            <input type='text' className='form-control' placeholder='(555) 555-5555' {...phone} />
          </div>

          <hr />

          <h3>Appointment Details</h3>
          <div className='form-group'>
            <label>Pick a Stylist </label><br />
            <select name='stylist' {...stylist}>
              <option value='tina'>Tina</option>
              <option value='michelle'>Michelle</option>
            </select>
          </div>

          <div className='form-group'>
            <label>Date & Time</label>
            <input type='datetime-local' className='form-control' {...date} />
          </div>


          <div className='form-group'>
            <label>Im making an appointment for</label>
            <textarea className='form-control' placeholder='Description of service....' {...content}  />
          </div>

          <button type='submit' className='btn btn-primary'>Submit</button><br />

          <span className='disclaimer'>
            Please note that the date and time you requested may not be available. We will contact you to confirm your actual appointment details.
          </span>
        </form>
      </div>
    );
  }
}


//connect: first arg is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateProps, 3rd is mapDispatchToProps

export default reduxForm({
  form: 'ApptsNewForm',
  fields: ['name', 'phone', 'stylist', 'date', 'content']
}, null, { createAppt })(ApptsNew);
