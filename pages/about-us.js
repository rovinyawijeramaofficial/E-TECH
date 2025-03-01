// pages/about-us.js

import React from 'react';
import Image from 'next/image';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUsIconBar from "@/components/AboutUsIconBar";

const AboutUs = () => {
  return (
    <>
        <Header />
        {/* Hero Image */}
      <div style={{ marginBottom: '40px' }}>
        <Image
          src="/images/aboutus_banner.png" // Replace with your image path
          alt="About Us Building"
          width={1728} // Adjust as needed
          height={748} // Adjust as needed
          layout="responsive"
        />
      </div>

    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      

      {/* Statistics Section */}
      <div style={{ display: 'flex', marginBottom: '40px' }}>

        <div 
        style={{
          marginLeft:"-80px",
           width: "219px",
        }} >
        <h2 style={{
  height: "24px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "24px",
  letterSpacing: "10%",
  color: "#434250",
}}>
  PRODUCTS
</h2>
<p style={{
  height: "115px",
  fontFamily: "Kanit",
  fontWeight: 500,
  fontSize: "96px",
  lineHeight: "115.2px",
  letterSpacing: "10%",
  color: "#989EF1",
}}>
  150+
</p>
        </div>

<div className='mx-6'></div>

        <div className='mx-36'
        tyle={{width: "294px"
        }}>
        <h2 style={{
  height: "24px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "24px",
  letterSpacing: "10%",
  color: "#434250",
}}>SALES</h2>
          <p style={{
  height: "115px",
  fontFamily: "Kanit",
  fontWeight: 500,
  fontSize: "96px",
  lineHeight: "115.2px",
  letterSpacing: "10%",
  color: "#989EF1"
}}>$10K+</p>
        </div>

        <div className='-mx-9'></div>

        <div 
        style={{width: "182px",
 marginLeft:"130px"
        }}>
        <h2 style={{
  height: "24px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "24px",
  letterSpacing: "10%",
  color: "#434250", 
}}>DAILY VISITORS</h2>
          <p style={{
  height: "115px",
  fontFamily: "Kanit",
  fontWeight: 500,
  fontSize: "96px",
  lineHeight: "115.2px",
  letterSpacing: "10%",
  color: "#989EF1"
}}>6K+</p>
        </div>

        <div className='-mx-6'></div>
        <div
        style={{width: "95px",
          marginLeft:"245px"
        }}>
        <h2 style={{
  height: "24px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "24px",
  letterSpacing: "10%",
  color: "#434250",
}}>OUTLETS</h2>
          <p style={{
  height: "115px",
  fontFamily: "Kanit",
  fontWeight: 500,
  fontSize: "96px",
  lineHeight: "115.2px",
  letterSpacing: "10%",
  color: "#989EF1"
}}>15</p>
        </div>
      </div>

<br/>
      {/* How it All Started Section */}
      <section 
      style={{ marginBottom: '100px', marginLeft:"-80px"}}>
      <h2 style={{
  width: "1488px",
  height: "31px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "26px",
  lineHeight: "31.2px",
  letterSpacing: "10%",
  color: "#989EF1"
}}>
  How It All Started
</h2>

    <div className='mt-3'></div>   

<p style={{
  width: "1100px",
  height: "112px",
  fontFamily: "Kanit",
  fontWeight: 275,
  fontSize: "23px",
  lineHeight: "27.6px",
  letterSpacing: "10%",
  color: "#434250"
}}>
  In 2015, we founded Insta360 because we wanted a better way to share experiences. We’d been searching for a 360 camera that would allow us to share great moments with people anywhere in the world — not just snapshots or partial glimpses, but full, immersive moments. When we couldn’t find the right gear to realize this vision, we decided to build it ourselves. We haven’t stopped building since.
</p>
      </section>


{/* Vision Section */}
<section style={{ 
  marginBottom: '120px', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'space-between',
  marginLeft: "-80px" 
}}>
  <div style={{ flex: 1, maxWidth: '90%' }}>
    <h2 style={{
      width: "1488px",
      height: "31px",
      fontFamily: "Kanit",
      fontWeight: 600,
      fontSize: "26px",
      lineHeight: "31.2px",
      letterSpacing: "10%",
      color: "#989EF1"
    }}>
      VISION
    </h2>
    
      <div style={{ marginTop: '12px' }}></div> {/* Replaced className='mt-3' with inline style */}
    <p style={{
      width: "800px",
      height: "140px",
      fontFamily: "Kanit",
      fontWeight: 275,
      fontSize: "23px",
      lineHeight: "27.6px",
      letterSpacing: "10%",
      color: "#434250"
    }}>
      In 2015, we founded Insta360 because we wanted a better way to share experiences. We’d been searching for a 360 camera that would allow us to share great moments with people anywhere in the world — not just snapshots or partial glimpses, but full, immersive moments. When we couldn’t find the right gear to realize this vision, we decided to build it ourselves. We haven’t stopped building since.
    </p>
  </div>
  
  <div style={{ flex: 0.4, textAlign: 'right' }}>
    <div style={{
      width: "322px",
      height: "322px",
      backgroundColor: "#F4F4FC",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      marginLeft:"-117px"
    }}>
      <div style={{
        backgroundColor: "#D1D4FA",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Image
          src="/images/vision-icon.png" // Update with correct path
          alt="Vision Icon"
          width={322}
          height={322}
        />
      </div>
    </div>
  </div>
</section>


      {/* Mission Section */}
<section style={{ 
  marginBottom: '120px', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'space-between',
  marginLeft: "-80px" 
}}>
  <div style={{ flex: 0.5, maxWidth: '90%' }}>
    <h2 style={{
      width: "1488px",
      height: "31px",
      fontFamily: "Kanit",
      fontWeight: 600,
      fontSize: "26px",
      lineHeight: "31.2px",
      letterSpacing: "10%",
      color: "#989EF1",
      marginLeft: "480px" 
    }}>
      MISSION
    </h2>
    
      <div style={{ marginTop: '12px' }}></div> {/* Replaced className='mt-3' with inline style */}
    <p style={{
      width: "800px",
      height: "140px",
      fontFamily: "Kanit",
      fontWeight: 275,
      fontSize: "23px",
      lineHeight: "27.6px",
      letterSpacing: "10%",
      color: "#434250",
       marginLeft: "480px" 
    }}>
      In 2015, we founded Insta360 because we wanted a better way to share experiences. We’d been searching for a 360 camera that would allow us to share great moments with people anywhere in the world — not just snapshots or partial glimpses, but full, immersive moments. When we couldn’t find the right gear to realize this vision, we decided to build it ourselves. We haven’t stopped building since.
    </p>
  </div>
  
  <div style={{ flex: 0.4, textAlign: 'left' }}>
    <div style={{
      width: "322px",
      height: "322px",
      backgroundColor: "#F4F4FC",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      marginLeft:"-1240px"
    }}>
      <div style={{
        backgroundColor: "#D1D4FA",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Image
         src="/images/mission-icon.png" // Update with correct path
          alt="Vision Icon"
          width={322}
          height={322}
        />
      </div>
    </div>
  </div>
</section>
      
<hr style={{ 
  border: '2px solid #989EF1',
   width: "1328px",
    marginLeft:"-80px"
 }} />


      {/* Icon Bar Section */}
      
      <div style={{ 
        marginLeft:"-150px"}}>
        <AboutUsIconBar/>
      </div>

      <hr style={{ 
  border: '2px solid #989EF1',
   width: "1328px",
    marginLeft:"-80px"
 }} />

 <br/> <br/>
    </div>

<Footer/>
</>
  );
};

export default AboutUs;