// Contactus.js

import React, { useState } from 'react';
import axios from 'axios';
import '../styles/contactus.css';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    message: '',
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      #const response = await axios.post('http://myloader-54490939.us-east-1.elb.amazonaws.com/contactus', formData);
      const response = await axios.post('https://backend-936800529124.us-central1.run.app', formData);
      console.log('Form submission response:', response.data);

      // Display success message and clear form
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone_number: '',
        message: '',
      });
    } catch (error) {
      // Handle errors
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="contactus-container">
      <h2>Contact Me</h2>
      {submitSuccess && <p className="success-message">Message sent successfully!</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone_number">Phone Number:</label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contactus;


