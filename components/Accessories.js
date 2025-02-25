// components/Computing.js

import React from 'react';
import Image from 'next/image';
import LatestOffersCard from './LatestOffersCard'; // Import LatestOffersCard

const Computing = () => {

  // Sample product data (replace with your actual data)
  const product1 = {
    image: "/images/access1.png",
    title: "IPHONE 15 PRO",
    brand: "Iphone",
    oldPrice: "300,000",
    newPrice: "250,000",
    rating: 4.3,
    reviews: 187,
    offerEnd: "25th of August",
    Id: "iphone-15-pro" // Example ID for linking
  };

  const product2 = {
    image: "/images/access2.png",
    title: "IPHONE 15 PRO",
    brand: "Iphone",
    oldPrice: "300,000",
    newPrice: "250,000",
    rating: 4.3,
    reviews: 187,
    offerEnd: "25th of August",
    Id: "iphone-15-pro-2" // Example ID for linking
  };

  return (
    <div className='-mt-4'
    style={{ display: 'flex', justifyContent: 'space-between',gap:"0px", padding: '1.0999px', maxWidth: '1215px', marginLeft: "130px" }}>
      {/* Left Section */}
      <div className='mt-6'
      style={{ 
        width: '735px', 
        height:"844.5px",
        backgroundColor: '#FEFEFF', // Updated background color
        padding: '60px', // Adjusted padding
        borderRadius: '8px', 
        marginLeft:"-30px"
      }}>
        <div className='mt-36'
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '10px',
          }}
          >
          <Image src="/images/keyboard.png" alt="Keyboard Icon" width={80} height={54.89} /> {/* Adjusted height */}
        </div>
      
        <h2 
        style={{
          height: "50px",
          fontFamily: "Kanit",
          fontWeight: 400,
          fontSize: "42px",
          lineHeight: "50.4px",
          letterSpacing: "10%",
          color: "#434250",
          textAlign: "center"
        }}
      >
        ACCESSORIES
      </h2>
        
        <p className='mt-20'
        style={{
          height: "56px",
          fontFamily: "Kanit",
          fontWeight: 400,
          fontSize: "23px",
          lineHeight: "27.6px",
          letterSpacing: "10%",
          color: "#434250",
          textAlign: "center"
        }}
      >
      Discover The Latest In Mobile Technology!<br/>
      100% Genuine Products.
      </p>
      
      <button className='mt-16'
        style={{
          width: "241px", // Updated width
          height: "56px", // Updated height
          fontFamily: "Kanit",
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "24px",
          letterSpacing: "10%",
          border: " 1.5px solid #434250",
          textAlign: "center",
          backgroundColor: "#FEFEFF",
          paddingTop: "16px",
          paddingRight: "64px",
          paddingBottom: "16px",
          paddingLeft: "64px",
          gap: "10px",
          marginLeft:"120px",
          cursor: "pointer"
        }}
      >
        SHOP NOW
      </button>
      
      </div>

      <div className='-mt-5'
    style={{ display: 'flex', justifyContent: 'space-between', padding:'20px', maxWidth: '1310px', marginRight:'-70px'}}>
      {/* Product Cards Container */}
            <div style={{ display: 'flex', gap: '15px' }}>
              {/* Product Card 1 */}
              <LatestOffersCard product={product1} />
      
              {/* Product Card 2 */}
              <LatestOffersCard product={product2} />
            </div>
            </div>  
              
    </div>
     
  );
};

export default Computing;