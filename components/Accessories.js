// components/Accessories.js

import React from 'react';
import Image from 'next/image';

const Accessories = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Left Section */}
      <div style={{ width: '400px', border: '1px solid #ddd', borderRadius: '8px', padding: '20px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <Image src="/images/accessories-icon.png" alt="Accessories Icon" width={30} height={30} />
        </div>
        <h2 style={{ marginBottom: '20px' }}>ACCESSORIES</h2>
        <p style={{ marginBottom: '20px' }}>Discover The Latest In Mobile Technology! 100% Genuine Products.</p>
        <button style={{ padding: '10px 20px', backgroundColor: 'transparent', border: '1px solid #666', borderRadius: '5px', cursor: 'pointer' }}>SHOP NOW</button>
      </div>

      {/* Product Cards Container */}
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Product Card 1 */}
        <div style={{ width: '300px', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
          <Image src="/images/baseus-charger.png" alt="Baseus Super Si Quick Charger" width={300} height={350} />
          <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#ffc107', fontSize: '1.2em' }}>★</span>
              ))}
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.9em', color: '#666', marginBottom: '10px' }}>4.3 | 187 Reviews</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
              <Image src="/images/cart-icon.png" alt="Cart Icon" width={20} height={20} />
            </div>
            <h3 style={{ textAlign: 'center', marginBottom: '5px' }}>IPHONE 15 PRO</h3>
            <p style={{ textAlign: 'center', marginBottom: '10px' }}>Iphone</p>
            <p style={{ textAlign: 'center', textDecoration: 'line-through', color: '#999' }}>300,000 LKR</p>
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>250,000 LKR</p>
            <p style={{ textAlign: 'center', fontSize: '0.8em', color: '#666', marginTop: '10px' }}>Offers Valid Till 25th of August</p>
            <div style={{ textAlign: 'center', marginTop: '15px' }}>
              <button style={{ padding: '10px 20px', backgroundColor: '#6750A4', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>BUY NOW</button>
            </div>
          </div>
        </div>

        {/* Product Card 2 (Duplicate of Product Card 1) */}
        <div style={{ width: '300px', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
          <Image src="/images/apple-charger.png" alt="Apple Charger" width={300} height={350} />
          <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#ffc107', fontSize: '1.2em' }}>★</span>
              ))}
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.9em', color: '#666', marginBottom: '10px' }}>4.3 | 187 Reviews</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
              <Image src="/images/cart-icon.png" alt="Cart Icon" width={20} height={20} />
            </div>
            <h3 style={{ textAlign: 'center', marginBottom: '5px' }}>IPHONE 15 PRO</h3>
            <p style={{ textAlign: 'center', marginBottom: '10px' }}>Iphone</p>
            <p style={{ textAlign: 'center', textDecoration: 'line-through', color: '#999' }}>300,000 LKR</p>
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>250,000 LKR</p>
            <p style={{ textAlign: 'center', fontSize: '0.8em', color: '#666', marginTop: '10px' }}>Offers Valid Till 25th of August</p>
            <div style={{ textAlign: 'center', marginTop: '15px' }}>
              <button style={{ padding: '10px 20px', backgroundColor: '#6750A4', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;