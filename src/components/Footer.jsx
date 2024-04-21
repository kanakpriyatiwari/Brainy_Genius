import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="left-section">
        <ul>
         
          <li>Frequently Asked Questions</li>
        
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="right-section">
        <div className="customer-support">
          <h3 id="customer-support">Customer Support</h3>
          <div className="contact-info">
            <p>CALL SUPPORT</p>
            <p>+91 123456</p>
            <p>+91 123456</p>
            
            <p>E-MAIL </p>
           
            <p>OFFICE ADDRESS</p>
            <p>Street - 4, Vaishali Vihar</p>
            <p>Gurgaon,Haryana</p>
      <div id="subscribe-box">
        <h4>Stay in Know</h4>
        <input id='input-box' type="text" className='form-control' placeholder='Email Id' />
      </div>
      <button id='btn-subscribe' className='btn btn-primary'>Subscribe</button>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
