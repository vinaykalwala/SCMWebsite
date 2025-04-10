import React from "react"
import "../styles/footer.css"
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h4><span className="company-name">SCM LAW FIRM </span></h4>
          <p>
            Delivering expert legal solutions with professionalism and integrity.
          </p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/services'>Services</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><b>Address:</b>  H.No 2-8-219/3, Flat No 303, <br/> Sree Sai Avenue, Beside R&B Guest House, Mukarampura, Karimnagar, Telangana 505001</p>
          <p><b>Phone:</b> <a href="https://wa.me/9666077777" target="_blank" rel="noreferrer">+91 9666077777</a>,  <a href="https://wa.me/7799669999" target="_blank" rel="noreferrer">+91 7799669999</a></p>
          <p><b>Email:</b> <a href="mailto:scmlawfirm@gmail.com">scmlawfirm@gmail.com</a>, <a href="mailto:sanachandramohan@gmail.com">sanachandramohan@gmail.com</a></p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} <span className="company-name">SCM LAW FIRM</span>. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
