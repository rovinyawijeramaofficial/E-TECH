// components/Computing.js

import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import LatestOffersCard from './LatestOffersCard'; // Import LatestOffersCard

const Computing = () => {

  // Sample product data (replace with your actual data)
  const product1 = {
    image: "/images/macbook15.png",
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
    image: "/images/macbook15.png",
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
      <div className='mt-6  bg-[#FEFEFF] shadow-lg'
      style={{ 
        width: '735px', 
        height:"844.5px",
        backgroundColor: '#FEFEFF', // Updated background color
        padding: '60px', // Adjusted padding
        marginLeft:"-30px"
      }}>
        <div className='mt-20'
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '10px',
          }}
          >
          <Image src="/images/macbook.png" alt="Mobile Icon" width={106} height={64.8} /> {/* Adjusted height */}
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
        COMPUTING
      </h2>
       
        <div className='mt-16'
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginBottom: '90px', 
          padding: '0 20px', // Added padding
          borderTop: '2px solid #434250', // Added top border
          borderBottom: '2px solid #434250', // Added bottom border
          paddingTop: '30px', // Added top padding
          paddingBottom: '30px' // Added bottom padding
        }}>

<div style={{ display: 'flex', marginLeft:'50px', gap: '80px' }}> {/* Reduced gap */}
  <Image src="/images/apple-logo.png" alt="Apple Logo" width={35} height={40} />
  <Image src="/images/dell-logo.png" alt="Dell Logo" width={84.44} height={26.35} />
  <Image src="/images/msi-logo.png" alt="MSI Logo" width={82.22} height={21} />
</div>
        </div>

        
        <p className='-mt-4'
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
      
      <Link href="/product">  
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
      </Link>
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