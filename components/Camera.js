// components/Mobile.js

import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import LatestOffersCard from './LatestOffersCard'; // Import LatestOffersCard

const Mobile = () => {

  // Sample product data (replace with your actual data)
  const product1 = {
    image: "/images/camera15.png",
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
    image: "/images/camera15.png",
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
    <div
    style={{ display: 'flex', justifyContent: 'space-between', padding:'10px', maxWidth: '1310px', marginLeft: "90px" }}>
      

       {/* Left Section */}
      {/* Product Cards Container */}
      <div  className='-mt-9'
      style={{ display: 'flex', gap: '15px' }}>
        {/* Product Card 1 */}
        <LatestOffersCard product={product1} />

        {/* Product Card 2 */}
        <LatestOffersCard product={product2} />
      </div>

      {/* Right Section */}
<div className='-mt-3'
style={{ 
  width: '738px', 
  height:"844.5px",
  backgroundColor: '#FEFEFF', // Updated background color
  padding: '60px', // Adjusted padding
  borderRadius: '8px', 
  gap:"15px",
  marginLeft:"15px"
}}>
  <div className='mt-20'
  style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    marginBottom: '10px',
    }}
    >
    <Image src="/images/camera-icon.png" alt="Camera Icon" width={76.67} height={55} /> {/* Adjusted height */}
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
CAMERA
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

    <div style={{ display: 'flex', marginLeft:'30px', gap: '70px' }}> {/* Reduced gap */}
    <Image src="/images/sony-logo.png" alt="Sony Logo" width={116} height={20} />
    <Image src="/images/canon-logo.png" alt="Canon Logo" width={96.64} height={20} /> {/* Adjusted sizes */}
    <Image src="/images/dji-logo.png" alt="Dji Logo" width={68.21} height={40} />
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
    </div>
  );
};

export default Mobile;