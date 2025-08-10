import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" />

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />

        <label>Message:</label>
        <textarea placeholder="Enter your message"></textarea>

        <button type="button">Send</button>
      </form>
    </div>
  )
}

export default Contact
