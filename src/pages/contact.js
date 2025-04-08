import React, { useState } from 'react'
import Banner from '../assets/contactus.jpg'
import "../styles/contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [successMessage, setSuccessMessage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted", formData)
    setSuccessMessage("Your message has been sent successfully!")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section className="contact">
      <div className="banner">
        <img src={Banner} alt="law-banner" />
        <div className='banner-content'>
          <h1>Contact Us</h1>
          <p>We're here to assist you with any legal inquiries or concerns. Get in touch with us today!</p>
        </div>
      </div>
      <div className='contact-content'>
        <h2 className='title'>Contact <span className="company-name">SCM LAW FIRM</span></h2>
        <p>
          At <span className="company-name">SCM LAW FIRM</span>, we pride ourselves on delivering expert legal solutions tailored to meet the
          unique needs of our clients. With over 27 years of experience, our firm has built a reputation for
          excellence, integrity, and dedication to justice.
        </p>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h2 className='title'>Get In Touch</h2>
          <p>
            At <span className="company-name">SCM LAW FIRM</span>, we pride ourselves on delivering expert legal solutions tailored to meet the
            unique needs of our clients. With over 27 years of experience, our firm has built a reputation for
            excellence, integrity, and dedication to justice
          </p>
          <p>
            Feel free to reach out for any legal assistance or inquiries. Our team will respond promptly to your messages.
          </p>
          <div>
            <p><strong>Address:</strong> H.No 2-8-219/3, Flat No 303, Sree Sai Avenue, Beside R&B Guest House, Mukarampura,
            Karimnagar, Telangana 505001, India</p>
            <p><b>Phone:</b> <a href="https://wa.me/9666077777" target="_blank" rel="noreferrer"><strong>+91 9666077777</strong></a>,  <a href="https://wa.me/7799669999" target="_blank" rel="noreferrer"><strong>+91 7799669999</strong></a></p>
            <p><b>Email:</b> <a href="mailto:scmlawfirm@gmail.com"><strong>scmlawfirm@gmail.com</strong></a>, <a href="mailto:sanachandramohan@gmail.com"><strong>sanachandramohan@gmail.com</strong></a></p>
          </div>
        </div>
        <div className="contact-form">
          <h2 className='title'>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      </div>
    </section>
  )
}

export default Contact
