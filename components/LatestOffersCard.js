import React from "react";
import Link from "next/link";

export default function LatestOffersCard({ product }) {
  const { image, title, brand, oldPrice, newPrice, rating, reviews, offerEnd, Id } = product;

  return (
    <>
      {/* ==== Desktop View (Hidden on Mobile) ==== */}
      <div className="hidden md:flex w-[312px] h-[844.5px] bg-[#FEFEFF] shadow-lg flex-col justify-between text-center mt-6"
        style={{ gap: "30px", padding: "30px" }}>
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

        <div className="text-gray-700 text-sm text-center -mt-4">
          {rating} | {reviews} Reviews
        </div>

        {/* Product Details */}
        <h3 className="text-lg font-semibold text-gray-800 mt-4">{title}</h3>
        <p className="text-md text-gray-600">{brand}</p>

        {/* Price Section */}
        <div className="mt-4">
          <p className="text-sm text-gray-400 line-through">{oldPrice} LKR</p>
          <p className="text-xl font-semibold text-blue-500">{newPrice} LKR</p>
        </div>

        <p className="text-xs text-gray-500 mt-2">Offers Valid Till {offerEnd}</p>

        {/* Buy Now Button */}
        <Link href={`/singleproduct/${Id}`} passHref>
          <button className="mt-4 px-6 py-2 bg-gray-700 text-white rounded-lg">BUY NOW</button>
        </Link>
      </div>

      {/* ==== Mobile View (Hidden on Desktop) ==== */}
      <div className="flex md:hidden w-full bg-[#FEFEFF] shadow-lg flex-col justify-between items-center p-4 text-center rounded-lg">
        {/* Product Image */}
        <img src={image} alt={title} className="h-40 w-40 object-contain" />

        {/* Rating Section */}
        <div className="flex items-center mt-2 text-gray-600 text-xs">
          {Array.from({ length: 5 }, (_, i) => (
            <img
              key={i}
              src={i < 4 ? "/images/Star 1.png" : "/images/Star 2.png"}
              alt={i < 4 ? "Filled Star" : "Empty Star"}
              className="w-4 h-4"
            />
          ))}
          <span className="ml-2">{rating} | {reviews} Reviews</span>
        </div>

        {/* Product Details */}
        <h3 className="text-lg font-semibold text-gray-800 mt-2">{title}</h3>
        <p className="text-sm text-gray-600">{brand}</p>

        {/* Price Section */}
        <div className="mt-2">
          <p className="text-sm text-gray-400 line-through">{oldPrice} LKR</p>
          <p className="text-lg font-bold text-blue-500">{newPrice} LKR</p>
        </div>

        <p className="text-xs text-gray-500 mt-1">Offers Valid Till {offerEnd}</p>

        {/* Buy Now Button */}
        <Link href={`/singleproduct/${Id}`} passHref>
          <button className="mt-3 px-4 py-2 bg-gray-700 text-white rounded-md w-full max-w-xs">BUY NOW</button>
        </Link>
      </div>
    </>
  );
}
