import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import Link from 'next/link';

export default function LatestOffersCard({ product }) {
  const { image, title, brand, oldPrice, newPrice, rating, reviews, offerEnd, Id } = product;

  return (
    <div className="bg-white p-4 rounded-xl shadow-md text-center">
      <div className="flex justify-center mb-4">
        <img src={image} alt={title} className="h-40 object-contain" />
      </div>

      <div className="flex justify-center items-center text-sm text-gray-500 mb-2">
        {Array.from({ length: 5 }, (_, i) =>
          i < rating ? (
            <FaStar key={i} className="text-blue-500" />
          ) : (
            <FaRegStar key={i} className="text-gray-300" />
          )
        )}
        <span className="ml-2">{rating} | {reviews} Reviews</span>
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500">{brand}</p>

      <div className="mt-2">
        <p className="line-through text-gray-400">{oldPrice} LKR</p>
        <p className="text-xl font-bold text-blue-600">{newPrice} LKR</p>
      </div>

      <p className="text-sm text-gray-500 my-2">Offers Valid Till {offerEnd}</p>

      <Link href={`/singleproduct/${Id}`} passHref>
        <button className="bg-black text-white py-2 px-4 rounded-md mt-2 hover:bg-gray-800">
          BUY NOW
        </button>
      </Link>
    </div>
  );
}
