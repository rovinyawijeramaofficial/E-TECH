import React from "react";
import LatestOffersCard from "./LatestOffersCard";

const products = [
  {
    image: "/images/iphone-15.png",
    title: "IPHONE 15 PRO",
    brand: "Iphone",
    oldPrice: "300,000",
    newPrice: "250,000",
    rating: 4,
    reviews: 187,
    offerEnd: "25th of August",
  },
  // Add more products here as needed
];

export default function LatestOffers() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">LATEST OFFERS</h2>
          <a href="/offers" className="text-blue-600 hover:underline">
            SEE ALL OFFERS &gt;
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <LatestOffersCard key={index} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 space-x-2 text-gray-600">
          {["<", "1", "2", "3", "...", "7", ">"].map((item, index) => (
            <button key={index} className="px-2 py-1 hover:text-black">
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
