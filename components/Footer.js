// components/Footer.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer 
      style={{
        width: '100%',
        backgroundColor: '#434250',
        padding: '60px 120px',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px'
      }}
    >
      <div className='-mt-2'>
      <p className='-mt-2'
  style={{
    width: "372px",
    height: "17px",
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "16.8px",
    letterSpacing: "10%",
    color: "#FEFEFF",
    marginLeft:"764px"
  }}
>
  Get The Latest Update On New Items And Offers...
</p>
</div>

      {/* Newsletter Section */}
      <div
      style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '110px' }}>
      
      <Link href="/landing" >
      <h2 className='-mt-10'
  style={{
    width: "155px",
    height: "38px",
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "32px",
    lineHeight: "38.4px",
    letterSpacing: "10%",
    color: "#FFFFFF",
    marginRight:"500px",
    marginBottom: "20px" // Added margin bottom
  }}
>
  E-TECH
</h2>    
</Link> 
        
<input className='-mt-10'
  type="email" 
  placeholder="YOUR EMAIL ADDRESS"
  style={{
    width: "376px",
    height: "46px",
    border: "1px solid #FEFEFF",
    paddingTop: "15px",
    paddingRight: "30px",
    paddingBottom: "15px",
    paddingLeft: "30px",
    gap: "10px",
    backgroundColor: "transparent",
    color: "#FEFEFF",
    display: "flex",
    marginRight: "-80px",
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "15.6px",
    letterSpacing: "10%"
  }}
/>

<button className='-mt-10'
  style={{
    width: "196px", // Assuming "Hug" translates to content width
    height: "46px", // Assuming "Hug" translates to content height
    border: "1px solid #FEFEFF",
    paddingTop: "15px",
    paddingRight: "60px",
    paddingBottom: "15px",
    paddingLeft: "60px",
    gap: "10px",
    backgroundColor: " #FEFEFF", // Updated background color
    color: "#434250",
    display: "flex",
    marginRight: "1px",
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "15.6px",
    letterSpacing: "10%",
    cursor: "pointer",
    justifyContent: "center", // Center content horizontally
    alignItems: "center" // Center content vertically
  }}
>
  SUBSCRIBE
</button>

      </div>

      <hr style={{ border: '1.5px solid #FFFFFF' }} />

      {/* Main Footer Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 2fr 2fr', gap: '90px' }}>
        {/* Column 1 */}
        <div>
          
          <ul className='-mt-1'
          style={{ 
           width: "128px",
            height: "22px",
            fontFamily: "Kanit",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "38.6px",
            letterSpacing: "10%",
            color: "#FEFEFF",
              }}> 
              
              <Link href="/product">
          <li>SHOP</li>
          </Link>
          <Link href="/product">
            <li>MOBILE</li>
            </Link>

            <Link href="/product">
            <li>COMPUTING</li>
            </Link>

            <Link href="/product">
            <li>CAMERA</li>
            </Link>

            <Link href="/product">
            <li>ACCESSORIES</li>
            </Link>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
        <ul className='-mt-1'
          style={{ 
           width: "232px",
            height: "22px",
            fontFamily: "Kanit",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "38.6px",
            letterSpacing: "10%",
            color: "#FEFEFF",
              }}> 

            <Link href="/about-us" passHref><li>TERMS & CONDITIONS</li></Link>
            <Link href="/about-us" passHref><li>PRIVACY & POLICY</li></Link>
            <Link href="/contact-us" passHref><li>CUSTOMER SERVICE</li></Link>
            <Link href="/contact-us" passHref><li style={{ cursor: 'pointer' }}>CONTACT US</li></Link>
            <Link href="/about-us" passHref><li style={{ cursor: 'pointer' }}>ABOUT US</li></Link>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className='mt-9'
          style={{ 
            width: "203.74px",
            height: "22px",
            fontFamily: "Kanit",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "38.6px",
            letterSpacing: "10%",
            color: "#FEFEFF",
            }}
            >
              FOLLOW US ON
              </h3>
          <div className='mt-5'
           style={{ 
            display: 'flex', 
            gap: '15px', 
            marginBottom: '30px' 
          }}
           >
            <Link href="/contact-us" passHref><Image src="/images/instagram.png" alt="Instagram" width={25} height={25} /></Link>
            <Link href="/contact-us" passHref><Image src="/images/whatsapp.png" alt="WhatsApp" width={25} height={25} /></Link>
            <Link href="/contact-us" passHref><Image src="/images/facebook.png" alt="Facebook" width={25} height={25} /></Link>
          </div>
          
          <h3 className='-mt-5'
          style={{ 
            width: "203.74px",
            height: "22px",
            fontFamily: "Kanit",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "38.6px",
            letterSpacing: "10%",
            color: "#FEFEFF",
            }}
            >
              PAYMENT METHODS
              </h3>
            <div className='mt-4'>
            <Link href="/contact-us" passHref><Image src="/images/payment methods.png" alt="Visa" width={203.74} height={36} /></Link>
            </div>
        </div>

       {/* Column 4 (Contact Info) */}

<div style={{ marginLeft: "80px", display: "flex", flexDirection: "column", gap: "30px" }}>
  
 {/* Location */}
 <Link href="/contact-us" passHref>
<div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
  <Image src="/images/map-marker-Regular.png" alt="Location" width={25} height={25} />
  <div>
    <p style={{
      width: "76px",
      height: "17px",
      fontFamily: "Kanit",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "16.8px",
      letterSpacing: "0.1em",
      color: "#FEFEFF"
    }}>LOCATION</p>
    <p style={{
      width: "145px",
      height: "44px",
      fontFamily: "Kanit",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "21.6px",
      color: "#FEFEFF"
    }}>Address Line 2, Colombo</p>
  </div>
</div>
</Link>


  {/* Email */}
  <Link href="/contact-us" passHref>
  <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
    <Image src="/images/envelope-Regular.png" alt="Email" width={25} height={25} />
    <div>
      <p style={{
        width: "130px",
        height: "17px",
        fontFamily: "Kanit",
        fontWeight: 600,
        fontSize: "14px",
        lineHeight: "16.8px",
        letterSpacing: "0.1em",
        color: "#FEFEFF"
      }}>EMAIL</p>
      <p style={{
        width: "130px",
        height: "22px",
        fontFamily: "Kanit",
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "21.6px",
        color: "#FEFEFF"
      }}>info@etech.lk</p>
    </div>
  </div>
  </Link>

  {/* Phone */}
  <Link href="/contact-us" passHref>
  <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
    <Image src="/images/phone-Regular.png" alt="Phone" width={25} height={25} />
    <div>
      <p style={{
        fontFamily: "Kanit",
        fontWeight: 600,
        fontSize: "14px",
        lineHeight: "16.8px",
        letterSpacing: "0.1em",
        color: "#FEFEFF"
      }}>PHONE</p>
      <p style={{
        fontFamily: "Kanit",
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "21.6px",
        color: "#FEFEFF"
      }}>+94 56 345 862</p>
    </div>
  </div>
  </Link>

</div>


      </div>

      <hr style={{ border: '1.5px solid #FFFFFF' }} />

      {/* Copyright Section */}
      <div style={{ marginLeft: '500px' }}>
  <p className='-mt-5'
    style={{
      width: "345px",
      height: "19px",
      fontFamily: "Kanit",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "19.2px",
      letterSpacing: "10%",
      color: "#FEFEFF"
    }}
  >
    © 2024 Tahira Eliyas. All rights reserved
  </p>
</div>
    </footer>
  );
};

export default Footer;