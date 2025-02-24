// components/IconBar.js

import React from 'react';
import Image from 'next/image';

const IconBar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px 20px', backgroundColor: '#f9f9f9' }}>
      <div style={{ display: 'flex', gap: '50px', maxWidth: '1200px', width: '100%', justifyContent: 'center' }}>
        {/* Extended Protection */}
        <div style={{ textAlign: 'center', maxWidth: '200px' }}>
          <Image src="/images/shield-icon.png" alt="Extended Protection" width={40} height={40} />
          <h3 style={{ fontSize: '1.1rem', marginTop: '10px', marginBottom: '5px' }}>Extended Protection</h3>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>Enjoy greater peace of mind when you add Extend's hassle-free product protection.</p>
        </div>

        {/* Money-back */}
        <div style={{ textAlign: 'center', maxWidth: '200px' }}>
          <Image src="/images/money-back-icon.png" alt="Money-back" width={40} height={40} />
          <h3 style={{ fontSize: '1.1rem', marginTop: '10px', marginBottom: '5px' }}>Money-back</h3>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>Free return and exchange up to 45 days.</p>
        </div>

        {/* Secure Payment */}
        <div style={{ textAlign: 'center', maxWidth: '200px' }}>
          <Image src="/images/secure-payment-icon.png" alt="Secure Payment" width={40} height={40} />
          <h3 style={{ fontSize: '1.1rem', marginTop: '10px', marginBottom: '5px' }}>Secure Payment</h3>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>Highly Secured Payment Gateway</p>
        </div>

        {/* Free Shipping */}
        <div style={{ textAlign: 'center', maxWidth: '200px' }}>
          <Image src="/images/free-shipping-icon.png" alt="Free Shipping" width={40} height={40} />
          <h3 style={{ fontSize: '1.1rem', marginTop: '10px', marginBottom: '5px' }}>Free Shipping</h3>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>Complimentary delivery on every single order.</p>
        </div>
      </div>
    </div>
  );
};

export default IconBar;