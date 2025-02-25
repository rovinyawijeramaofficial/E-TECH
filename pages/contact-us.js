// pages/contact-us.js

import React from 'react';

const ContactUs = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '40px 20px' }}>
      {/* E-TECH Section */}
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>E-TECH</h1>
      </div>

      {/* Troubles Section */}
      <div style={{ marginBottom: '40px' }}>
        <p style={{ fontSize: '1.2rem' }}>STILL YOU ARE TROUBLES</p>
      </div>

      {/* Technical Support Section */}
      <div style={{ marginBottom: '40px' }}>
        <a href="http://technicalsupportsh.com" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
          technicalsupportsh.com
        </a>
      </div>

      {/* Location Section */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>LOCATION</h2>
        <p>Kahantota Goda</p>
        <p>Arangaza Junction</p>
        <p>Hokandara</p>
        <p>Mullegama North</p>
        <p>Hokandara</p>
        <p>Athurugiriya</p>
        <p>Colombo, Sri Lanka</p>
      </div>

      {/* Get in Touch Section */}
      <div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>GET IN TOUCH WITH US</h2>
        <p>+94 11 234 5678</p>
        <p>etechofficial</p>
      </div>
    </div>
  );
};

export default ContactUs;