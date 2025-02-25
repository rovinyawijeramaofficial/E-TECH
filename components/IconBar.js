// components/IconBar.js

import React from 'react';
import Image from 'next/image';

const IconBar = () => {
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
        <div style={{ marginLeft: '250px' }}>
        <div style={{ textAlign: 'center', maxWidth: '202px' }}>
          <Image src="/images/shield-icon.png" alt="Extended Protection" width={31.25} height={39.46} />
          
          <h3 className='mt-3' 
  style={{
    width: "202px",
    height: "22px",
    fontFamily: "Kanit",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "21.6px",
    letterSpacing: "10%",
    color: "#434250",
    marginLeft: "-90px"
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

        {/* Money-back */}
        <div style={{ marginLeft: '10px' }}>
        <div style={{ textAlign: 'center', maxWidth: '200px' }}>
          <Image src="/images/money-back-icon.png" alt="Money-back" width={43.95} height={43.75} />
          
          <h3 className='mt-3' 
  style={{
    width: "122px",
    height: "22px",
    fontFamily: "Kanit",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "21.6px",
    letterSpacing: "10%",
    color: "#434250",
    marginLeft: "-40px"
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

        {/* Secure Payment */}
        <div style={{ marginLeft: '10px' }}>
        <div style={{ textAlign: 'center', maxWidth: '200px' }}>
          <Image src="/images/secure-payment-icon.png" alt="Secure Payment" width={39.62} height={34.94} />
          
          <h3 className='mt-3' 
  style={{
    width: "159px",
    height: "22px",
    fontFamily: "Kanit",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "21.6px",
    letterSpacing: "10%",
    color: "#434250",
    marginLeft: "-65px"
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

        {/* Free Shipping */}
        <div style={{ marginLeft: '10px' }}>
        <div style={{ textAlign: 'center', maxWidth: '200px' }}>
          <Image src="/images/free-shipping-icon.png" alt="Free Shipping" width={44.39} height={31.37} />
          
          <h3 className='mt-3' 
  style={{
    width: "135px",
    height: "22px",
    fontFamily: "Kanit",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "21.6px",
    letterSpacing: "10%",
    color: "#434250",
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

      </div>
    </div>
  );
};

export default IconBar;