const Contact = () => {
  return (
    <div className="contact-section bg-dark-primary text-dark-text">
      <h1>Contact</h1>
      <p>If you have any questions or would like to get in touch, please use the form below or reach out via the provided contact information.</p>
      <form className="contact-form">
        <label htmlFor="name" className="text-dark-text">Name:</label>
        <input type="text" id="name" name="name" required className="bg-dark-secondary text-dark-text border border-dark-hover"/>

        <label htmlFor="email" className="text-dark-text">Email:</label>
        <input type="email" id="email" name="email" required className="bg-dark-secondary text-dark-text border border-dark-hover"/>

        <label htmlFor="message" className="text-dark-text">Message:</label>
        <textarea id="message" name="message" required className="bg-dark-secondary text-dark-text border border-dark-hover"></textarea>

        <button type="submit" className="bg-dark-accent text-dark-text px-4 py-2 rounded hover:bg-purple-700">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
