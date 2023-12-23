import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [clicked, setClicked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 2000);
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title"></h3>
          <p className="contact__detail">
            You can personally send me an email! &#x1F44B; &#x1F4E7;
          </p>
        </div>

          <form action="" className="contact__form">
            <div className="contact__form-group">
              <div className="contact__form-div">
                <input
                  type="text"
                  className="contact__form-input"
                  placeholder="Insert your name"
                />
              </div>

              <div className="contact__form-div">
                <input
                  type="email"
                  className="contact__form-input"
                  placeholder="person@yahoo.com"
                />
              </div>
            </div>

            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert Your Subject"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write Your Message"
              ></textarea>
            </div>

            {/* Updated button */}
            <button
              className={`btn ${clicked ? 'send-animation' : ''} ${submitted ? 'submitted' : ''}`}
              onClick={handleClick}
              disabled={submitted}
            >
              {submitted ? 'Thank You!' : clicked ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          
          {/* Popup card for submission message */}
          {submitted && (
            <div className="popup-card active">
              <p>Your message has been successfully submitted.</p>
              <p>David will reply to your email.</p>
            </div>
          )}
      </div>
    </section>
  );
};

export default Contact;
