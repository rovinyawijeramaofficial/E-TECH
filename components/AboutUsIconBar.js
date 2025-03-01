
import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const AboutUsIconBar = () => {
  return (
    <div
  style={{
    width: "1725px",
    height: "300px",
    marginLeft: "-160px",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "60px",
    paddingRight: "120px",
    paddingBottom: "60px",
    paddingLeft: "120px",
    backgroundColor: "#FEFEFF"
  }}
>
      <div  className='mt-8' 
      style={{ display: 'flex', gap: '140px', maxWidth: '1725px', width: '100%',  justifyContent: 'center' }}>
        
        {/* Extended Protection */}
        <Link href="/contact-us">  
        <div style={{ marginLeft: '250px' }}>
        <div style={{ textAlign: 'center', maxWidth: '202px' }}>
          <Image src="/images/aboutus_shield-icon.png" alt="Extended Protection" width={31.25} height={39.46} />
          
          <h3 className='mt-9' 
  style={{
    width: "225px",
    height: "24px",
    fontFamily: "Kanit",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "24px",
    letterSpacing: "10%",
    color: "#989EF1",
    marginLeft: "-98px"
  }}
>
  Extended Protection
</h3>
          
<p className='mt-1' 
  style={{
    width: "349px",
    height: "57px",
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "19.2px",
    letterSpacing: "10%",
    color: "#434250",
     marginLeft: "-160px"
  }}
>
Enjoy greater peace of mind <br/>
when you add Extend's hassle-<br/>
free product protection.
</p>
        </div>
        </div>
        </Link>

        {/* Money-back */}
        <Link href="/contact-us">  
        <div style={{ marginLeft: '10px' }}>
        <div style={{ textAlign: 'center', maxWidth: '200px' }}>
          <Image src="/images/aboutus_money-back-icon.png" alt="Money-back" width={43.95} height={43.75} />
          
          <h3 className='mt-9' 
  style={{
    width: "130px",
    height: "24px",
    fontFamily: "Kanit",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "24px",
    letterSpacing: "10%",
    color: "#989EF1",
    marginLeft: "-48px"
  }}
>
  Money-back
</h3>

<p className='mt-1' 
  style={{
    width: "349px",
    height: "38px",
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "19.2px",
    letterSpacing: "10%",
    color: "#434250",
     marginLeft: "-146px"
  }}
>
  Free return and exchange up <br/>to 45 days.
</p>

        </div>
        </div>
        </Link>

        {/* Secure Payment */}
        <Link href="/contact-us"> 
        <div style={{ marginLeft: '10px' }}>
        <div style={{ textAlign: 'center', maxWidth: '200px' }}>
          <Image src="/images/aboutus_secure-payment-icon.png" alt="Secure Payment" width={39.62} height={34.94} />
          
          <h3 className='mt-9' 
  style={{
    width: "175px",
    height: "24px",
    fontFamily: "Kanit",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "24px",
    letterSpacing: "10%",
    color: "#989EF1",
    marginLeft: "-48px"
  }}
>
Secure Payment
</h3>

<p className='mt-1' 
  style={{
    width: "349px",
    height: "19px",
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "19.2px",
    letterSpacing: "10%",
    color: "#434250",
     marginLeft: "-160px"
  }}
>
Highly Secured Payment Gateway
</p>

        </div>
        </div>
        </Link>

        {/* Free Shipping */}
        <Link href="/contact-us"> 
        <div style={{ marginLeft: '10px' }}>
        <div style={{ textAlign: 'center', maxWidth: '200px' }}>
          <Image src="/images/aboutus_free-shipping-icon.png" alt="Free Shipping" width={44.39} height={31.37} />
          
          <h3 className='mt-9' 
  style={{
    width: "150px",
    height: "24px",
    fontFamily: "Kanit",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "24px",
    letterSpacing: "10%",
    color: "#989EF1",
    marginLeft: "-48px"
  }}
>
Free Shipping
</h3>
<p className='mt-1' 
  style={{
    width: "349px",
    height: "38px",
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "19.2px",
    letterSpacing: "10%",
    color: "#434250",
     marginLeft: "-160px"
  }}
>
Complimentary delivery on every <br/>single order.
</p>

        </div>
        </div>
        </Link>

      </div>
    </div>
  );
};

export default AboutUsIconBar;