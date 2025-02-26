import { useState } from "react";
import Image from 'next/image';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
<>
    <Header />
    <div className="container mx-auto p-20">

{/* Header Image */}
      <div className="w-full flex justify-center">
        <Image src="/images/contact_banner.png" alt="Contact Us" width={1488} height={600}/>
      </div>
<br/><br/><br/>
      <div>
      <h2 
      style={{
  width: "1488px",
  height: "31px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "26px",
  lineHeight: "31.2px",
  letterSpacing: "10%",
  color: "#989EF1"
}}>
  STILL YOU ARE IN TROUBLE? LET'S REACH US.
</h2>
        
<p style={{
  width: "1488px",
  height: "44px",
  fontFamily: "Kanit",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "21.6px",
  letterSpacing: "10%",
  color: "#434250",
  marginTop: "18px" // Added margin top to match the original layout
}}>
  We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us. Our team is here to <br/>help you with anything you need.
</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
        <input 
  type="text" 
  name="name" 
  placeholder="Your Name" 
  style={{
    width: "650px",
    height: "57px", // Assuming "Hug" translates to content height
    border: "2px solid #434250",
    padding: "20px",
    gap: "125px",
    backgroundColor: "#FFFFFF",
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "16.8px",
    letterSpacing: "10%",
    color: "#434250"
  }} 
  onChange={handleChange} 
  required 
/>

<input className="mx-6"
  type="text" 
  name="email"
  placeholder="Email"
  style={{
    width: "650px",
    height: "57px", // Assuming "Hug" translates to content height
    border: "2px solid #434250",
    padding: "20px",
    backgroundColor: "#FFFFFF",
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "16.8px",
    letterSpacing: "10%",
    color: "#434250"
  }} 
  onChange={handleChange} 
  required 
/>

    <input 
  type="text" 
  name="contactNumber"
  placeholder="Contact Number" 
  style={{
    width: "650px",
    height: "57px", // Assuming "Hug" translates to content height
    border: "2px solid #434250",
    padding: "20px",
    gap: "125px",
    marginTop: "25px",
    backgroundColor: "#FFFFFF",
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "16.8px",
    letterSpacing: "10%",
    color: "#434250"
  }} 
  onChange={handleChange} 
  required 
/>       
          
<input className="mx-6"
  type="text" 
  name="subject"
  placeholder="Subject"
  style={{
    width: "650px",
    height: "57px", // Assuming "Hug" translates to content height
    border: "2px solid #434250",
    padding: "20px",
    marginTop: "25px",
    backgroundColor: "#FFFFFF",
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "16.8px",
    letterSpacing: "10%",
    color: "#434250"
  }} 
  onChange={handleChange} 
  required 
/>
        </div>

        <textarea
  name="message" 
  placeholder="Your Message" 
  style={{
    width: "1365px",
    height: "162px",
    border: "2px solid #434250",
    paddingTop: "60px",
    paddingRight: "20px",
    paddingBottom: "10px",
    paddingLeft: "20px",
    gap: "125px",
    backgroundColor: "#FFFFFF",
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "16.8px",
    letterSpacing: "10%",
    color: "#434250",
    marginTop: "40px"
  }} 
  onChange={handleChange} 
  required
></textarea>

<button 
  type="submit" 
  style={{
    width: "263px", // Assuming "Hug" translates to content width
    height: "56px", // Assuming "Hug" translates to content height
    border: "1px solid #434250",
    paddingTop: "16px",
    paddingRight: "64px",
    paddingBottom: "16px",
    paddingLeft: "64px",
    gap: "10px",
    backgroundColor: "#434250",
    color: "#FFFFFF",
    marginTop: "40px", // Added marginTop to match the original layout
    cursor: "pointer",
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "24px",
    letterSpacing: "10%",
    color: "#FEFEFF",
    display: "flex", // Add display flex to use gap
    justifyContent: "center", // Center content horizontally
    alignItems: "center" // Center content vertically
  }}
>
  SUBMIT NOW
</button>

      </form>

      <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24">
          
          <div>
          <p style={{
  width: "64px",
  height: "17px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "16.8px",
  letterSpacing: "10%",
  color: "#989EF1"
}}>
  HOTLINE
</p>

<p style={{
  width: "165px",
  height: "28px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "23px",
  lineHeight: "27.6px",
  letterSpacing: "10%",
  color: "#434250"
}}>
  +95 423 8890
</p>

<p style={{
  width: "198px",
  height: "28px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "23px",
  lineHeight: "27.6px",
  letterSpacing: "10%",
  color: "#434250"
}}>hello@eteh.com</p>
          </div>

          <div className="-mx-14">
          <p style={{
  width: "243px",
  height: "17px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "16.8px",
  letterSpacing: "10%",
  color: "#989EF1"
}}>PURCHASING & ORDER SUPPORT</p>

<p style={{
  width: "165px",
  height: "28px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "23px",
  lineHeight: "27.6px",
  letterSpacing: "10%",
  color: "#434250"
}}>
  +95 423 8890
</p>

<p style={{
  width: "301px",
  height: "28px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "23px",
  lineHeight: "27.6px",
  letterSpacing: "10%",
  color: "#434250"
}}>ordersupport@eteh.com</p>
          </div>

          <div>
          <p style={{
  width: "81px",
  height: "17px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "16.8px",
  letterSpacing: "10%",
  color: "#989EF1"
}}>SUPPLIERS</p>
            
            <p style={{
  width: "165px",
  height: "28px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "23px",
  lineHeight: "27.6px",
  letterSpacing: "10%",
  color: "#434250"
}}>
  +95 423 8890
</p>

<p style={{
  width: "252px",
  height: "28px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "23px",
  lineHeight: "27.6px",
  letterSpacing: "10%",
  color: "#434250"
}}>suppliers@eteh.com</p>
          </div>

          <div>
          <p style={{
  width: "159px",
  height: "17px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "16.8px",
  letterSpacing: "10%",
  color: "#989EF1"
}}>TECHNICAL SUPPORT</p>
            
            <p style={{
  width: "165px",
  height: "28px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "23px",
  lineHeight: "27.6px",
  letterSpacing: "10%",
  color: "#434250"
}}>
  +95 423 8890
</p>

<p style={{
  width: "352px",
  height: "28px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "23px",
  lineHeight: "27.6px",
  letterSpacing: "10%",
  color: "#434250"
}}>technicalsupport@eteh.com</p>
          </div>

        </div>
      </div>
      </div>

      <div style={{
 width:"100%",
  height: "619.45px", // Assuming "Hug" translates to content height
  paddingTop: "100px",
  paddingRight: "120px",
  paddingBottom: "100px",
  paddingLeft: "120px",
  gap: "60px",
  backgroundColor: "#F4F5FA",
  position: "absolute", // Added position absolute to use top
}}>

<div 
style={{ 
  marginLeft:"650px" 
  }}>
  <img 
    src="/images/contactmap.png" 
    alt="Map" 
    style={{ 
      width: '56px', 
      height: '70px', 
      marginBottom: '22px' // Add margin to separate image from text
    }} 
  />
  <p style={{
    width: "140px",
    height: "31px",
    fontFamily: "Kanit",
    fontWeight: 600,
    fontSize: "26px",
    lineHeight: "31.2px",
    letterSpacing: "10%",
    color: "#434250",
    marginLeft:"-45px",
    marginBottom: '10px' // Add margin to separate text lines
  }}>
    LOCATION
  </p>
  <p style={{
    width: "460px",
    height: "28px",
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "23px",
    lineHeight: "27.6px",
    letterSpacing: "10%",
    marginLeft:"-145px",
    color: "#434250"
  }}>
    Address Line 2, Colombo, Sri Lanka.
  </p>
</div>

<hr style={{ 
  border: '2px solid #989EF1',
  width: "1380px",
  marginTop: "50px",
  marginLeft:"-45px",
   }} />

<div
style={{
  width: "1488px",
  marginLeft:"-65px",
  marginTop: "30px", // Assuming "mt-6" translates to 24px
  paddingTop: "34px", // Assuming "pt-6" translates to 24px
  textAlign: "center"
}}>

<p style={{
  width: "321px",
  height: "31px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "26px",
  lineHeight: "31.2px",
  letterSpacing: "10%",
  color: "#434250",
  marginLeft:"580px",
  marginBottom: '20px'
}}>
  GET IN TOUCH WITH US
</p>
        <div className="flex justify-center space-x-8 mt-4 ">
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#434250' }}>
  <img src="/images/contactinstagram.png" alt="Instagram" style={{ width: '64.43px', height: '64.45px' }}  />
  <span style={{
    width: "194px",
    height: "31px",
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "26px",
    lineHeight: "31.2px",
    letterSpacing: "10%",
    color: "#434250"
  }}>
    @etechofficial
  </span>
</a>
          <a href="#" className="flex items-center space-x-2 text-blue-500">
          <img src="/images/contactwhatssap.png" alt="Whatsapp" style={{ width: '64px', height: '63px' }} /> 
          <span style={{
    width: "212px",
    height: "31px",
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "26px",
    lineHeight: "31.2px",
    letterSpacing: "10%",
    color: "#434250"
  }}>+94 11 234 6788</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-blue-500">
          <img src="/images/contactfb.png" alt="Facebook" style={{ width: '65px', height: '63px' }} /> 
          <span style={{
    width: "194px",
    height: "31px",
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "26px",
    lineHeight: "31.2px",
    letterSpacing: "10%",
    color: "#434250"
  }}>@etechofficial</span>
          </a>
        </div>
      </div>
      </div>

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div className="-mt-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31686.439598579787!2d79.864!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sColombo!5e0!3m2!1sen!2slk!4v1646157712541!5m2!1sen!2slk"
          width="100%"
          height="723"
          style={{ border: 0
           }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    
<Footer/>
    </>
  );
}
