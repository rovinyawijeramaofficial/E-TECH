// components/Footer.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from next/link

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#282828', color: '#fff', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top Section (Newsletter) */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <p style={{ fontSize: '0.8rem', color: '#ccc' }}>Get The Latest Update On New Items And Offers...</p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input type="email" placeholder="YOUR EMAIL ADDRESS" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #444', backgroundColor: '#333', color: '#fff' }} />
            <button style={{ padding: '10px 20px', backgroundColor: '#fff', color: '#000', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>SUBSCRIBE</button>
          </div>
        </div>

        {/* Main Content Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
          {/* Column 1 (E-TECH) */}
          <div>
            <h2 style={{ marginBottom: '20px' }}>E-TECH</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>SHOP</li>
              <li>MOBILE</li>
              <li>COMPUTING</li>
              <li>CAMERA</li>
              <li>ACCESSORIES</li>
            </ul>
          </div>

          {/* Column 2 (Terms, Privacy, Contact) */}
          <div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>TERMS & CONDITIONS</li>
              <li>PRIVACY & POLICY</li>
              <li>CUSTOMER SERVICE</li>
              <Link href="/contact-us" passHref>
                <li style={{ cursor: 'pointer' }}>CONTACT US</li>
              </Link>
              <Link href="/about-us" passHref> {/* Add Link for About Us */}
                <li style={{ cursor: 'pointer' }}>ABOUT US</li>
              </Link>
            </ul>
          </div>

          {/* Column 3 (Follow, Payment) */}
          <div>
            <h3 style={{ marginBottom: '10px' }}>FOLLOW US ON</h3>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <Image src="/images/instagram.png" alt="Instagram" width={25} height={25} />
              <Image src="/images/whatsapp.png" alt="WhatsApp" width={25} height={25} />
              <Image src="/images/facebook.png" alt="Facebook" width={25} height={25} />
            </div>
            <h3 style={{ marginBottom: '10px' }}>PAYMENT METHODS</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Image src="/images/visa.png" alt="Visa" width={35} height={25} />
              <Image src="/images/mastercard.png" alt="Mastercard" width={35} height={25} />
              <Image src="/images/amex.png" alt="Amex" width={35} height={25} />
              <Image src="/images/discover.png" alt="Discover" width={35} height={25} />
            </div>
          </div>

          {/* Column 4 (Location, Email, Phone) */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <Image src="/images/location.png" alt="Location" width={20} height={20} style={{ marginRight: '10px' }} />
              <div>
                <p style={{ fontSize: '0.9rem', marginBottom: '2px' }}>LOCATION</p>
                <p style={{ fontSize: '0.8rem' }}>Address Line 2, Colombo</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <Image src="/images/email.png" alt="Email" width={20} height={20} style={{ marginRight: '10px' }} />
              <div>
                <p style={{ fontSize: '0.9rem', marginBottom: '2px' }}>EMAIL</p>
                <p style={{ fontSize: '0.8rem' }}>info@etech.lk</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/images/phone.png" alt="Phone" width={20} height={20} style={{ marginRight: '10px' }} />
              <div>
                <p style={{ fontSize: '0.9rem', marginBottom: '2px' }}>PHONE</p>
                <p style={{ fontSize: '0.8rem' }}>+94 56 345 862</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section (Copyright) */}
        <div style={{ borderTop: '1px solid #444', paddingTop: '20px', textAlign: 'center', fontSize: '0.8rem' }}>
          <p>© 2024 Tahira Eliyas. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;