// components/AppleProducts.js

import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const AppleProducts = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', backgroundColor: 'white' }}>
       {/* Image Section */}
      <div style={{ width: '80%', maxWidth: '600px', marginBottom: '20px' }}>
      <br/><br/><br/> 
        <Image 
          src="/images/Apple Products.png" 
          alt="Apple Products"
          width={689} 
          height={353} 
          layout="responsive"
        />
      </div>

      {/* Product Information Section */}
      <div className="mt-5"
  style={{ 
    width: '1288px', 
    borderTop: '1.5px solid #434250', // Updated to apply border to all sides
    paddingTop: '40px', 
    textAlign: 'center', 
    paddingBottom: '40px' 
  }}
>
<div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
  <div style=
  {{ 
    marginLeft:"540px"
     }}> {/* Add margin to separate logo and text */}
    <Image 
      src="/images/Apple Logo.png" 
      alt="Apple Logo"
      width={42.71} 
      height={50} 
    />
  </div>

 <h2 
    style={{
      width: "182px",
      height: "38px",
      fontFamily: "Kanit",
      fontWeight: 600,
      fontSize: "32px",
      lineHeight: "38.4px",
      letterSpacing: "10%",
      color: "#434250",
      marginLeft:"10px"
    }}
  >
    PRODUCTS
  </h2>
  
</div>

<br/>
<p 
  style={{
    width: "1488px",
    height: "38px",
    fontFamily: "Kanit",
    fontWeight: 500,
    fontSize: "32px",
    lineHeight: "38.4px",
    letterSpacing: "5%",
    color: "#434250",
    marginLeft:"-90px"
  }}
>
  BUY ALL APPLE PRODUCTS FOR BEST PRICE IN SRI LANKA.
</p>

      <br/> 
<p 
  style={{
    width: "1488px",
    height: "66px",
    fontFamily: "Kanit",
    fontWeight: 275,
    fontSize: "18px",
    lineHeight: "21.6px",
    letterSpacing: "10%", // Adjusted from "10%" to an exact value
    color: "#434250",
    marginLeft:"-80px"
  }}
>
  Apple Inc. is an American multinational corporation and technology company headquartered in Cupertino, California, in Silicon Valley. It is best known for <br/>
  its consumer electronics, software, and services.Apple Inc. is an American multinational corporation and technology company headquartered in Cupertino, <br/>California, in Silicon Valley. It is best known for 
  its consumer electronics, software, and services.
</p>

<br/><br/>

<Link href="/product">          
<button 
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
    cursor: "pointer"
  }}
>
  SHOP NOW
</button>
</Link>

<br/><br/>
      </div>
    </div>
  );
};

export default AppleProducts;