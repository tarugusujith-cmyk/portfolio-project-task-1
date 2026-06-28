import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="6"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;