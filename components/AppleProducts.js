// components/AppleProducts.js

import React from 'react';
import Image from 'next/image';

const AppleProducts = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      {/* Image Section */}
      <div style={{ width: '80%', maxWidth: '600px', marginBottom: '20px' }}>
        <Image 
          src="/path/to/your/apple-products-image.png" // Replace with your image path
          alt="Apple Products"
          width={600} // Adjust as needed
          height={400} // Adjust as needed
          layout="responsive"
        />
      </div>

      {/* Product Information Section */}
      <div style={{ width: '80%', maxWidth: '600px', border: '2px dashed #000', padding: '20px', textAlign: 'center' }}>
        <div style={{ marginBottom: '10px' }}>
          <Image 
            src="/path/to/your/apple-logo.png" // Replace with your Apple logo path
            alt="Apple Logo"
            width={50} // Adjust as needed
            height={50} // Adjust as needed
          />
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>PRODUCTS</h2>
        <p style={{ fontSize: '1rem', marginBottom: '10px' }}>BUY ALL APPLE PRODUCTS FOR BEST PRICE IN SRI LANKA.</p>
        <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '20px' }}>
          Apple Inc is an American multinational corporation and technology company headquartered in Cupertino, California, in Silicon Valley. It is best known for its consumer electronics, software, and services. Apple Inc is an American multinational corporation and technology company headquartered in Cupertino, California, in Silicon Valley. It is best known for its consumer electronics, software, and services.
        </p>
        <button style={{ padding: '10px 20px', backgroundColor: '#f0f0f0', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}>
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default AppleProducts;