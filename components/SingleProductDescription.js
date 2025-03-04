import React from "react";

const SingleProductDescription = () => {
  return (
    <div style={{
        width: "1727px",
        height: "728px",
        backgroundColor: '#F8F8FC', // Corrected background color
        padding: "100px 120px", // Added padding
        gap: "60px", // Added gap

      }}>

      {/* Section Title */}
      <h2 style={{
  width: "289px",
  height: "28px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "23px",
  lineHeight: "27.6px",
  letterSpacing: "10%",
  color: "#989EF1",
  marginLeft: "-40px",
  marginBottom: "30px", // Retained from original code
  paddingBottom: "10px", // Retained from original code
  width: "fit-content" // Retained from original code
}}>
  PRODUCT DESCRIPTION
</h2>

<hr className="-mt-2"
style={{ border: '2px solid #989EF1',
    width: "1387px",
    marginLeft: "-40px",
    marginBottom: "60px",
 }} />

      <div className="grid grid-cols-2">
        {/* Left Column - Specifications */}
        <div className="space-y-3"
        style={{ 
            marginLeft: "-40px",
         }}
        >
          <div style={{
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px solid #434250',
  width: '606px',
  marginBottom: '35px',
  paddingBottom: '35px' // Assuming pb-1 translates to 1px padding-bottom
}}>

          <span style={{
  width: "71px",
  height: "28px",
  fontFamily: "Kanit",
  fontWeight: 400,
  fontSize: "23px",
  lineHeight: "27.6px",
  letterSpacing: "10%",
  color: "#434250"
}}>
  Brand
</span>
<span style={{
  width: "71px",
  height: "28px",
  fontFamily: "Kanit",
  fontWeight: 400,
  fontSize: "23px",
  lineHeight: "27.6px",
  letterSpacing: "10%",
  color: "#434250"
}}>
  Apple
</span>
          </div>
          
          <div style={{
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px solid #434250',
  width: '606px',
  marginBottom: '35px',
  paddingBottom: '35px' // Assuming pb-1 translates to 1px padding-bottom
}}>
          <span style={{
  width: "93px",
  height: "28px",
  fontFamily: "Kanit",
  fontWeight: 400,
  fontSize: "23px",
  lineHeight: "27.6px",
  letterSpacing: "10%",
  color: "#434250"
}}>
  Storage
</span>
<span style={{
  width: "210px",
  height: "28px",
  fontFamily: "Kanit",
  fontWeight: 400,
  fontSize: "23px",
  lineHeight: "27.6px",
  letterSpacing: "10%",
  color: "#434250"
}}>
  1TB, 512GB,256GB
</span>
          </div>
          <div style={{
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px solid #434250',
  width: '606px',
  marginBottom: '35px',
  paddingBottom: '35px' // Assuming pb-1 translates to 1px padding-bottom
}}>
            <span style={{
  width: "52px",
  height: "28px",
  fontFamily: "Kanit",
  fontWeight: 400,
  fontSize: "23px",
  lineHeight: "27.6px",
  letterSpacing: "10%",
  color: "#434250"
}}>
  RAM
</span>
<span style={{
  width: "61px",
  height: "28px",
  fontFamily: "Kanit",
  fontWeight: 400,
  fontSize: "23px",
  lineHeight: "27.6px",
  letterSpacing: "10%",
  color: "#434250",
  marginLeft: "10px",
}}>
  8GB
</span>
          </div>

          <div style={{
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px solid #434250',
  width: '606px',
  marginBottom: '35px',
  paddingBottom: '35px' // Assuming pb-1 translates to 1px padding-bottom
}}>
            <span style={{
  height: "28px",
  fontFamily: "Kanit",
  fontWeight: 400,
  fontSize: "23px",
  lineHeight: "27.6px",
  letterSpacing: "10%",
  color: "#434250",
}}>
  Display
</span><span style={{
  width: "262px",
  height: "28px",
  fontFamily: "Kanit",
  fontWeight: 400,
  fontSize: "23px",
  lineHeight: "27.6px",
  letterSpacing: "10%",
  color: "#434250",
}}>
  Super Retina XDR display
</span>
          </div>

          <div style={{
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px solid #434250',
  width: '606px',
  marginBottom: '35px',
  paddingBottom: '35px' // Assuming pb-1 translates to 1px padding-bottom
}}>
            <span style={{
  width: "54px",
  height: "28px",
  fontFamily: "Kanit",
  fontWeight: 400,
  fontSize: "23px",
  lineHeight: "27.6px",
  letterSpacing: "10%",
  color: "#434250",
}}>
  Chip
</span><span style={{
 width: "99px",
  height: "28px",
  fontFamily: "Kanit",
  fontWeight: 400,
  fontSize: "23px",
  lineHeight: "27.6px",
  letterSpacing: "10%",
  color: "#434250",
}}>
  A17 Pro
</span>
          </div>

        </div>

        {/* Right Column - Camera Details */}
        <div style={{
  width: '656px', // Fill (821px)
  height: '356px',
  marginLeft: "-80px", 
  padding: '40px 0' // 10px top and bottom
}}>
          <p style={{
  fontFamily: "Kanit",
  fontWeight: 275, // Weight is 275, not 400
  fontSize: "23px",
  lineHeight: "27.6px",
  letterSpacing: "10%",
  color: "#434250"
}}>
  48MP Main: 24 mm, ƒ/1.78 aperture, second‑generation <br/> sensor‑shift optical image stabilization, 100% Focus Pixels, support  for super‑high‑resolution photos (24MP and 48MP)
<br/>12MP  Ultra Wide: 13 mm, ƒ/2.2 aperture and 120° field of view, 100% Focus Pixels<br/>
12MP 2x Telephoto (enabled by quad‑pixel  sensor): 48 mm, ƒ/1.78 aperture, second‑generation sensor‑shift optical  image <br/>stabilization, 100% Focus Pixels<br/>
12MP 3x Telephoto: 77 mm, ƒ/2.8 aperture, optical image <br/>stabilization<br/>
3x optical zoom in, 2x optical zoom out; 6x optical zoom range<br/>
Digital zoom up to 15x     
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDescription;
