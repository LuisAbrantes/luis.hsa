import React from 'react';

const Contact = () => {
  return (
    <div className="contact-section">
      <h1>Contact</h1>
      <p>If you have any questions or would like to get in touch, please use the form below or reach out via the provided contact information.</p>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
