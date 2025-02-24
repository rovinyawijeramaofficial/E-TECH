import React from "react";

const brands = [
  { name: "Apple", logo: "/images/apple-logo.svg" },
  { name: "Samsung", logo: "/images/samsung-logo.svg" },
  { name: "Dell", logo: "/images/dell-logo.svg" },
  { name: "Nokia", logo: "/images/nokia-logo.svg" },
  { name: "Sony", logo: "/images/sony-logo.svg" },
];

export default function BrandsSlider() {
  return (
    <div className="bg-purple-400 py-6 overflow-hidden">
      <div className="animate-marquee flex space-x-12 items-center">
        {brands.map((brand, index) => (
          <img
            key={index}
            src={brand.logo}
            alt={brand.name}
            className="h-10 object-contain"
          />
        ))}
        {/* Duplicate for smooth looping */}
        {brands.map((brand, index) => (
          <img
            key={`duplicate-${index}`}
            src={brand.logo}
            alt={brand.name}
            className="h-10 object-contain"
          />
        ))}
      </div>
    </div>
  );
}
