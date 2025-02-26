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
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '40px' }}>
        <div>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>150+</h2>
          <p>PRODUCTS</p>
        </div>
        <div>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>$10K+</h2>
          <p>SALES</p>
        </div>
        <div>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>6K+</h2>
          <p>DAILY VISITORS</p>
        </div>
        <div>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>15</h2>
          <p>OUTLETS</p>
        </div>
      </div>

      {/* How it All Started Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2>How it All Started</h2>
        <p>
          In 2015, we founded [Your Company Name] because we wanted a better way to share experiences. We'd been searching for a [product/service] that we could show us to share great moments with people anywhere in the world - not just snapshots of a journey, but the experience itself. When we couldn't find the right gear to realize this vision, we decided to build it ourselves.
        </p>
      </section>

      {/* Vision Section */}
      <section style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
        <div style={{ flex: 1 }}>
          <h2>VISION</h2>
          <p>
            In 2015, we founded [Your Company Name] because we wanted a better way to share experiences. We'd been searching for a [product/service] that would allow us to share great moments with people anywhere in the world - not just snapshots of a journey, but the experience itself. When we couldn't find the right gear to realize this vision, we decided to build it ourselves.
          </p>
        </div>
        <div style={{ flex: 0.5, textAlign: 'center' }}>
          <Image
            src="/images/vision-icon.png" // Replace with your vision icon path
            alt="Vision Icon"
            width={100} // Adjust as needed
            height={100} // Adjust as needed
          />
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
        <div style={{ flex: 0.5, textAlign: 'center' }}>
          <Image
            src="/images/mission-icon.png" // Replace with your mission icon path
            alt="Mission Icon"
            width={100} // Adjust as needed
            height={100} // Adjust as needed
          />
        </div>
        <div style={{ flex: 1 }}>
          <h2>MISSION</h2>
          <p>
            In 2015, we founded [Your Company Name] because we wanted a better way to share experiences. We'd been searching for a [product/service] that would allow us to share great moments with people anywhere in the world - not just snapshots of a journey, but the experience itself. When we couldn't find the right gear to realize this vision, we decided to build it ourselves.
          </p>
        </div>
      </section>

      {/* Icon Bar Section */}
      
      <div style={{ 
        marginLeft:"-150px"}}>
        <AboutUsIconBar/>
      </div>
    </div>

<Footer/>
</>
  );
};

export default AboutUs;