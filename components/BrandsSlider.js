import React from "react";

const brands = [
  { name: "Apple", logo: "/images/brand1.png" },
  { name: "Samsung", logo: "/images/brand2.png" },
  { name: "Dell", logo: "/images/brand3.png" },
  { name: "Nokia", logo: "/images/brand4.png" },
  { name: "Sony", logo: "/images/brand5.png" },
];

export default function BrandsSlider() {
  return (
    <div
  style={{
    width: "1728px",
    height: "160px",
    marginTop: "7.5px",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "60px",
    paddingRight: "120px",
    paddingBottom: "60px",
    paddingLeft: "120px",
    backgroundColor: "#989EF1"
  }}
>
      <div className="animate-marquee flex space-x-24 items-center">
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
