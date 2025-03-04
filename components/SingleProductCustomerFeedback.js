import React from "react";

const reviews = [
  {
    name: "Misty Ingram",
    date: "April 16, 2024",
    rating: 4.3,
    review: `I recently purchased the MageGee Portable 60% Mechanical Gaming Keyboard, and overall, I'm quite satisfied with its performance.
    Firstly, the compact design of this keyboard is a significant selling point. The 60% form factor means it takes up minimal space on my desk, making it perfect for gaming setups with limited room or for on-the-go use. Despite its small size, the keys feel sturdy and responsive, providing a satisfying typing and gaming experience.`,
    images: ["/images/CustomerReviews1.png", "/images/CustomerReviews1.png", "/images/CustomerReviews2.png"],
  },
  {
    name: "Alan Wite",
    date: "April 12, 2024",
    rating: 4.3,
    review: `I recently purchased the MageGee Portable 60% Mechanical Gaming Keyboard, and overall, I'm quite satisfied with its performance.`,
    images: [],
  },
  {
    name: "Andrea Liee",
    date: "April 12, 2024",
    rating: 4.3,
    review: `I recently purchased the MageGee Portable 60% Mechanical Gaming Keyboard, and overall, I'm quite satisfied with its performance.`,
    images: [],
  },
];

const SingleProductCustomerFeedback = () => {
  return (
    <div style={{
        width: "1727px",
        padding: "60px 120px", // Added padding
        gap: "60px", // Added gap

      }}>

        {/* Section Title */}
        <h2 style={{
  width: "301px",
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
  CUSTOMER FEEDBACK
</h2>

<hr className="-mt-2"
style={{ border: '2px solid #989EF1',
    width: "1387px",
    marginLeft: "-40px",
    marginBottom: "60px",
 }} />

      <div className="grid grid-cols-2 gap-6">
        {/* Customer Reviews - Rating Breakdown */}
        <div>
        <h3 style={{
  width: "310px",
  height: "28px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "23px",
  lineHeight: "27.6px",
  letterSpacing: "10%",
  color: "#000000",
  marginLeft: "-40px",
  marginBottom: "10px", // Retained from original code
  paddingBottom: "10px", // Retained from original code
  width: "fit-content" // Retained from original code
}}>
  Customer Reviews
</h3>
          <p className="text-gray-600 text-sm flex items-center space-x-1">
            <span
            style={{
                width: "215px",
                height: "19px",
                fontFamily: "Kanit",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19.2px",
                letterSpacing: "10%",
                color: "#434250",
                marginLeft: "-40px",
                marginBottom: "30px", // Retained from original code
                paddingBottom: "10px", // Retained from original code
                width: "fit-content" // Retained from original code
              }}
            >4.3 Out of 5 | 187 Reviews</span>
            <div 
             style={{
                width: "215px",
                height: "19px",
                fontFamily: "Kanit",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19.2px",
                letterSpacing: "10%",
                color: "#434250",
                marginLeft: "16px",
                marginBottom: "30px", // Retained from original code
                paddingBottom: "10px", // Retained from original code
                width: "fit-content" // Retained from original code
              }}
            className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <img
                  key={i}
                  src={i < 4 ? "/images/Star 1.png" : "/images/Star 2.png"}
                  alt={i < 4 ? "Filled Star" : "Empty Star"}
                  className="w-[16px] h-[16px]"
                />
              ))}
            </div>
          </p>

          {/* Rating Bars */}
          <div 
           style={{
            width: "62px",
            height: "24px",
            fontFamily: "Kanit",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "44px",
            letterSpacing: "10%",
            color: "#000000",
            marginLeft: "-40px",
            marginBottom: "30px", // Retained from original code
            paddingBottom: "30px", // Retained from original code
            width: "fit-content" // Retained from original code
          }}
          className="mt-2 space-y-1">
            {[
              { stars: "5 Star", percent: 65 },
              { stars: "4 Star", percent: 25 },
              { stars: "3 Star", percent: 5 },
              { stars: "2 Star", percent: 3 },
              { stars: "1 Star", percent: 2 },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span>{item.stars}</span>
                
                <div style={{
  width: "283px",
  height: "30px",
  border: "1px solid #434250",
  position: "relative", // Needed for absolute positioning of inner div
  left: "22px" // Added left positioning
}}>
  <div
    style={{
      height: "100%", // Fill the height of the parent
      backgroundColor: "#989EF1",
      width: `${item.percent}%`
    }}
  ></div>
</div>
<span style={{
  width: "41px",
  height: "24px",
  fontFamily: "Kanit",
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "24px",
  letterSpacing: "10%",
  marginLeft: "50px",
  color: "#000000" // Black color
}}>
  {item.percent}%
</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div
            style={{
                width: "800px",
                padding:"60px",
                gap:"26px",
                marginLeft: "-208px",
              }}
            key={index} className="bg-[#F0F1FD] p-4 shadow-sm">
              {/* Review Header */}
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">

                <div style={{
  width: '60px', // Hug (60px)
  height: '60px', // Hug (60px)
  borderRadius: '147px', // Radius 147px
  padding: '20px', // Padding 10px
  gap: '10px', // Gap 10px
  backgroundColor: '#FEFEFF' // Colors #FEFEFF
}}>
  <img
    src="/images/CustomerReviews3.png" // Replace with the actual path to your image
    alt="User Icon"
    style={{
      width: '19.37px', // Fill the container
      height: '24.38px', // Fill the container
    }}
  />
</div>
<span style={{
  height: "28px",
  fontFamily: "Kanit",
  fontWeight: 400,
  fontSize: "23px",
  lineHeight: "27.6px",
  letterSpacing: "10%",
  color: "#434250",
  marginLeft: "20px",
}}>
  {review.name}
</span>
                </div>
                <div className="flex items-center">
                <span style={{
  width: "100px",
  height: "19px",
  fontFamily: "Kanit",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19.2px",
  letterSpacing: "10%",
  color: "#434250",
  textAlign: "center" // Add text-align: center
}}>
  4.3 Out of 5
</span>
                  <div className="flex ml-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <img
                        key={i}
                        src={i < 4 ? "/images/Star 1.png" : "/images/Star 2.png"}
                        alt={i < 4 ? "Filled Star" : "Empty Star"}
                        className="w-[14px] h-[14px]"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Content */}
              <p style={{
  width: "780px",
  height: "19px",
  fontFamily: "Kanit",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19.2px",
  letterSpacing: "10%",
  color: "#434250",
  marginTop: "20px" // Assuming mt-1 translates to 4px margin-top
}}>
  {review.date}
</p>

<p style={{
  width: "610px",
  height: "133px",
  fontFamily: "Kanit",
  fontWeight: 275,
  fontSize: "16px",
  lineHeight: "19.2px",
  letterSpacing: "10%",
  color: "#434250",
  marginTop: "20px" // Assuming mt-2 translates to 8px margin-top
}}>
  {review.review}
</p>

              {/* Review Images */}
              {review.images.length > 0 && (
                <div className="flex space-x-2 mt-2">
                  {review.images.map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={img}
                      alt="Review"
                      className="w-[96px] h-[96px]"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <hr className="mt-10"
style={{ border: '2px solid #989EF1',
    width: "804px",
    marginLeft: "545px",
    marginBottom: "60px",
 }} />

       {/* See More Reviews Link */}
<div className="-mt-10"
style={{ textAlign: 'center', marginLeft: '-230px' }}> {/* Assuming mt-4 translates to 16px margin-top */}
  <a
    href="#"
    style={{
      width: '188px',
      height: '24px',
      fontFamily: 'Kanit',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '24px',
      letterSpacing: '10%',
      color: '#989EF1',
      textDecoration: 'none' // Remove default underline
    }}
    onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')} // Add underline on hover
    onMouseLeave={(e) => (e.target.style.textDecoration = 'none')} // Remove underline on mouse leave
  >
    See More Reviews <span style={{
  width: '6.13px',
  height: '11.38px',
  position: 'relative', // Needed for top and left positioning
  top: '1.31px',
  left: '10.06px',
  transform: 'rotate(-180deg)',
  color: '#989EF1' // Added color to match the border and fill
}}>
  &gt;
</span>
  </a>
</div>

    </div>
  );
};

export default SingleProductCustomerFeedback;
