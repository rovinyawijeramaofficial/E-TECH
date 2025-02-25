import React from "react";
import Link from "next/link";

export default function LatestOffersCard({ product }) {
  const { image, title, brand, oldPrice, newPrice, rating, reviews, offerEnd, Id } = product;

  return (
    <div className="w-[312px] h-[844.5px] bg-[#FEFEFF] rounded-xl shadow-lg flex flex-col justify-between text-center mt-6"
    style={{
      gap:"30px",
      padding:"30px"
    }}
    >
      {/* Product Image */}
      <div className="flex justify-center mb-6 -mt-3">
        <img src={image} alt={title} className="h-[348px] w-[280px] p-[10px] gap-[10px] object-contain" />
      </div>

{/* Rating Section */}
<div className="flex justify-center items-center text-sm text-gray-600 mb-4 -mt-10">
  {Array.from({ length: 5 }, (_, i) => (
    <img
      key={i}
      src={i < 4 ? "/images/Star 1.png" : "/images/Star 2.png"}
      alt={i < 4 ? "Filled Star" : "Empty Star"}
      style={{ width: '20px', height: '20px', cursor: 'pointer' }}
      onClick={() => console.log(`Star ${i + 1} clicked`)}
    />
  ))}
</div>

<div 
  style={{
    width: "114px",
    height: "16px",
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "15.6px",
    letterSpacing: "10%",
    color: "#434250",
    marginLeft: "68px", // Align text to center
    marginTop: "-32px" // Adjust marginTop to match -mt-8 in Tailwind
  }}
>
  4.3 | 187 Reviews
</div>

<img 
    src="/images/ShoppingCart.png" 
    alt="Shopping Cart Icon" 
    style={{ 
      width: "21.01px", // Adjust size as needed
      height: "19.5px", // Adjust size as needed
      marginLeft: "108px" // Add spacing between image and text
    }} 
  />
      {/* Product Details */}
      <h3 
  style={{
    width: "140px",
    height: "22px",
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "21.6px",
    letterSpacing: "10%",
    color: "#434250",
    marginLeft: "58px",
    
  }}
>
  {title}
</h3>

<p 
  style={{
    width: "65px",
    height: "22px",
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "21.6px",
    letterSpacing: "10%",
    color: "#434250",
    marginLeft: "89px",
     marginTop: "-22px"
  }}
>
  {brand}
</p>

      {/* Price Section */}
      <div >
      <p 
  style={{
    width: "111px",
    height: "19px",
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "19.2px",
    letterSpacing: "10%",
    color: "#81808A",
    marginLeft: "68px",
    textDecoration: "line-through" // Add strikethrough
  }}
>
  {oldPrice} LKR
</p>
<p 
  style={{
    width: "159px",
    height: "28px",
    fontFamily: "Kanit",
    fontWeight: 600,
    fontSize: "23px",
    lineHeight: "27.6px",
    letterSpacing: "10%",
    marginLeft: "45px",
    color: "#989EF1"
  }}
>
  {newPrice} LKR
</p>
      </div>

      <p 
  style={{
    width: "259px",
    height: "19px",
    fontFamily: "Kanit",
    fontWeight: 275,
    fontSize: "16px",
    lineHeight: "19.2px",
    letterSpacing: "10%",
    color: "#81808A"
  }}
>
  Offers Valid Till {offerEnd}
</p>

      {/* Buy Now Button */}
      <Link href={`/singleproduct/${Id}`} passHref>
      <button 
  style={{
    width: "179px", // Updated width
    height: "44px", // Updated height
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "24px",
    letterSpacing: "10%",
    color: "#FFFFFF",
    textAlign: "center",
    backgroundColor: "#434250",
    paddingTop: "10px",
    paddingRight: "40px",
    paddingBottom: "10px",
    paddingLeft: "40px",
    gap: "10px"
  }}
>
  BUY NOW
</button>
      </Link>
    </div>
  );
}
