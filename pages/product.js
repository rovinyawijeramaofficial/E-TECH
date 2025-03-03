// pages/product.js
"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from 'next/image';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from 'next/link';



const ProductPage = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'iPhone 13 Pro',
      price: 250000,
      image: '/images/iphone_15.png',
      rating: 4,
      reviews: 125,
      colors: ['Jet Black', 'Pink'],
      brand: 'Apple',
      category: 'Mobile',
      oldPrice: "350,000", 
      newPrice: "300,000",
      offerEnd: "25th of August",
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      price: 230000,
      image: '/images/iphone_15.png',
      rating: 4.5,
      reviews: 200,
      colors: ['Green', 'Silver'],
      brand: 'Samsung',
      category: 'Mobile',
      oldPrice: "250,000", newPrice: "200,000",
      offerEnd: "25th of August",
    },
    {
      id: 3,
      name: 'Sony Alpha Camera',
      price: 300000,
      image: '/images/iphone_15.png',
      rating: 4.8,
      reviews: 150,
      colors: ['Black'],
      brand: 'Sony',
      category: 'Camera',
      oldPrice: "550,000", newPrice: "310,000",
      offerEnd: "21th of September",
    },
    {
      id: 1,
      name: 'iPhone 13 Pro',
      price: 250000,
      image: '/images/iphone_15.png',
      rating: 4,
      reviews: 125,
      colors: ['Jet Black', 'Pink'],
      brand: 'Apple',
      category: 'Mobile',
      oldPrice: "350,000", newPrice: "300,000",
      offerEnd: "25th of August",
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      price: 230000,
      image: '/images/iphone_15.png',
      rating: 4.5,
      reviews: 200,
      colors: ['Green', 'Silver'],
      brand: 'Samsung',
      category: 'Mobile',
      oldPrice: "350,000", newPrice: "300,000",
      offerEnd: "25th of August",
    },
    {
      id: 3,
      name: 'Sony Alpha Camera',
      price: 300000,
      image: '/images/iphone_15.png',
      rating: 4.8,
      reviews: 150,
      colors: ['Black'],
      brand: 'Sony',
      category: 'Camera',
      oldPrice: "350,000", newPrice: "300,000",
      offerEnd: "25th of August",
    },
    {
      id: 1,
      name: 'iPhone 13 Pro',
      price: 250000,
      image: '/images/iphone_15.png',
      rating: 4,
      reviews: 125,
      colors: ['Jet Black', 'Pink'],
      brand: 'Apple',
      category: 'Mobile',
      oldPrice: "350,000", newPrice: "300,000",
      offerEnd: "25th of August",
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      price: 230000,
      image: '/images/iphone_15.png',
      rating: 4.5,
      reviews: 200,
      colors: ['Green', 'Silver'],
      brand: 'Samsung',
      category: 'Mobile',
      oldPrice: "350,000", newPrice: "300,000",
      offerEnd: "25th of August",
    },
    {
      id: 3,
      name: 'Sony Alpha Camera',
      price: 300000,
      image: '/images/iphone_15.png',
      rating: 4.8,
      reviews: 150,
      colors: ['Black'],
      brand: 'Sony',
      category: 'Camera',
      oldPrice: "350,000", newPrice: "300,000",
      offerEnd: "25th of August",
    },
    {
      id: 1,
      name: 'iPhone 13 Pro',
      price: 250000,
      image: '/images/iphone_15.png',
      rating: 4,
      reviews: 125,
      colors: ['Jet Black', 'Pink'],
      brand: 'Apple',
      category: 'Mobile',
      oldPrice: "350,000", newPrice: "300,000",
      offerEnd: "25th of August",
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      price: 230000,
      image: '/images/iphone_15.png',
      rating: 4.5,
      reviews: 200,
      colors: ['Green', 'Silver'],
      brand: 'Samsung',
      category: 'Mobile',
      oldPrice: "30,000", newPrice: "10,000",
      offerEnd: "25th of August",
    },
    {
      id: 3,
      name: 'Sony Alpha Camera',
      price: 300000,
      image: '/images/iphone_15.png',
      rating: 4.8,
      reviews: 150,
      colors: ['Black'],
      brand: 'Sony',
      category: 'Camera',
      oldPrice: "350,000", newPrice: "300,000",
      offerEnd: "25th of August",
    },
  ];

  // Filter options
  const categories = ['Mobile', 'Computing', 'Camera', 'Accessories'];
  
  const brands = [
    {
      name: 'Apple',
      logo: '/images/productbrand1.png',
      width: '21px', // Apple logo width
      height: '24px' // Apple logo height
    },
    {
      name: 'Samsung',
      logo: '/images/productbrand2.png',
      width: '78px', // Samsung logo width
      height: '12px' // Samsung logo height
    },
    {
      name: 'Sony',
      logo: '/images/productbrand3.png',
      width: '69px', // Sony logo width
      height: '12px' // Sony logo height
    }
  ];

  const colors = [
    { name: 'Jet Black', colorCode: '#000000', image: '/images/productcolor1.png' },
    { name: 'Pink', colorCode: '#FFC0CB', image: '/images/productcolor2.png' },
    { name: 'Purple', colorCode: '#800080', image: '/images/productcolor3.png' },
    { name: 'Titanium White', colorCode: '#008000', image: '/images/productcolor4.png' },
    { name: 'Yellow', colorCode: '#FFFF00', image: '/images/productcolor5.png' },
    { name: 'Blue', colorCode: '#0000FF', image: '/images/productcolor6.png' },
    { name: 'Silver', colorCode: '#C0C0C0', image: '/images/productcolor7.png' }
  ];

  const [selectedColor, setSelectedColor] = useState("Jet Black");
  
  // State for filters
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [priceRange, setPriceRange] = useState(300000);

  // Handle checkbox filters
  const toggleFilter = (filterType, value) => {
    const updateFilter = (prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value];

    switch (filterType) {
      case 'category':
        setSelectedCategories(updateFilter(selectedCategories));
        break;
      case 'brand':
        setSelectedBrands(updateFilter(selectedBrands));
        break;
      case 'color':
        setSelectedColors(updateFilter(selectedColors));
        break;
      default:
        break;
    }
  };

  // Filter and sort products
  const filteredProducts = products
    .filter(
      (product) =>
        (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
        (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
        (selectedColors.length === 0 || product.colors.some((color) => selectedColors.includes(color))) &&
        product.price <= priceRange
    )
    .sort((a, b) => {
      switch (sortOption) {
        case 'rating':
          return b.rating - a.rating;
        case 'priceLowToHigh':
          return a.price - b.price;
        case 'priceHighToLow':
          return b.price - a.price;
        default:
          return 0;
      }
    });
      const prevRef = useRef(null);
      const nextRef = useRef(null);
      const swiperRef = useRef(null);
      const [activePage, setActivePage] = useState(1);
    
      useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
          const swiper = swiperRef.current.swiper;
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }
      }, []);

      // Function to move to selected page
  const goToPage = (page) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo((page - 1) * 4);
      setActivePage(page);
    }
  }; 

const options = [
  { label: "Sort by Popularity", value: "popularity" },
  { label: "Sort by Average Rating", value: "rating" },
  { label: "Sort by Latest", value: "latest" },
  { label: "Sort by Price: Low to High", value: "priceLowToHigh" },
  { label: "Sort by Price: High to Low", value: "priceHighToLow" },
];

  return (
     <>
            <Header />
    <div className=" bg-[#fefefe]"
     style={{ 
      display: 'flex', 
      fontFamily: 'Kanit',
      marginLeft:'90px',
      }}>

     {/* Sidebar (Filters) */}
<aside  className=" bg-[#FEFEFF] shadow-xl mt-20 w-[360px] h-[2056px]">

  <div  className=" bg-[#FEFEFF] shadow-xl"
   style={{ 
    height: "473px",
    marginBottom: "20px" // Adds spacing between sections
    }}
  >

<h2 className="mt-10"
style={{
  width: "132px",
  height: "24px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "24px",
  letterSpacing: "10%",
  color: "#434250",
   marginBottom:"30px",
   marginLeft:'30px',
}}>
  CATEGORIES
</h2>

  <hr 
  style={{ 
    border: '2px solid #434250',
    width: "300px",
    marginLeft:'30px',
    marginBottom:"10px"
   }} />

  <div style={{ padding: '10px 0',
    marginLeft:'30px',
 }}> {/* Added container and border */}
    <label style={{ display: 'flex', 
      alignItems: 'center', justifyContent: 'space-between', padding: '15px 0' }}>

<div style={{ display: "flex", alignItems: "center", gap: "210px" }}>
  <span
    style={{
      width: "72px",
      height: "22px",
      fontFamily: "Kanit",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "21.6px",
      letterSpacing: "10%",
      color: "#434250",
      marginBottom:"20px"
    }}
  >
    MOBILE
  </span>
  <img
    src="/images/productdownarrow.png" // Replace with your actual arrow icon path
    alt="Arrow Icon"
    style={{ width: "19px", height: "10px" , cursor: 'pointer'}}
  />
</div>
    </label>

    <label style={{ display: 'flex', 
      alignItems: 'center', justifyContent: 'space-between', padding: '5px 0' }}>

<div style={{ display: "flex", alignItems: "center", gap: "168px", marginBottom: '15px' }}>
  <span
    style={{
      width: "114px",
      height: "22px",
      fontFamily: "Kanit",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "21.6px",
      letterSpacing: "10%",
      color: "#434250",
    }}
  >
    COMPUTING
  </span>
  <img
    src="/images/productuparrow.png" // Replace with your actual arrow icon path
    alt="Arrow Icon"
    style={{ width: "19px", height: "10px" , cursor: 'pointer'}}
  />
</div>
    </label>

    <div style={{ 
      paddingLeft: '10px',
      marginLeft:'30px',
      width: "210px",
      height: "19px",
      fontFamily: "Kanit",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "19.2px",
      letterSpacing: "10%",
      color: "#434250",
       marginBottom: '90px'
     }}> {/* Indent nested items */}
      <label style={{ display: 'block', marginBottom: '15px' }}>
        <input type="checkbox" checked={selectedCategories.includes('MacBook')} onChange={() => toggleFilter('category', 'MacBook')} /> MacBook
      </label>
      <label style={{ display: 'block', marginBottom: '15px' }}>
        <input type="checkbox" checked={selectedCategories.includes('Laptop')} onChange={() => toggleFilter('category', 'Laptop')} /> Laptop
      </label>
      <label style={{ display: 'block', marginBottom: '15px' }}>
        <input type="checkbox" checked={selectedCategories.includes('Desktop')} onChange={() => toggleFilter('category', 'Desktop')} /> Desktop
      </label>
      <label style={{ display: 'block', marginBottom: '15px' }}>
        <input type="checkbox" checked={selectedCategories.includes('Workstation')} onChange={() => toggleFilter('category', 'Workstation')} /> Workstation
      </label>
    </div>
  </div>

  <label style={{ display: 'flex', 
      alignItems: 'center', justifyContent: 'space-between', padding: '35px 0' }}>

<div style={{ display: "flex", alignItems: "center", gap: "168px",marginBottom:"8px"}}>
  <span
    style={{
      width: "114px",
      height: "22px",
      fontFamily: "Kanit",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "21.6px",
      letterSpacing: "10%",
      color: "#434250",
      marginLeft:'30px',
      
    }}
  >
   CAMERA
  </span>
  <img
    src="/images/productdownarrow.png" // Replace with your actual arrow icon path
    alt="Arrow Icon"
    style={{ width: "19px", height: "10px" , cursor: 'pointer'}}
  />
</div>
    </label>

    <label style={{ display: 'flex', 
      alignItems: 'center', justifyContent: 'space-between', padding: '1px 0' }}>

<div style={{ display: "flex", alignItems: "center", gap: "168px"}}>
  <span
    style={{
      width: "114px",
      height: "22px",
      fontFamily: "Kanit",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "21.6px",
      letterSpacing: "10%",
      color: "#434250",
      marginLeft:'30px',
    }}
  >
    ACCESSORIES
  </span>
  <img
    src="/images/productdownarrow.png" // Replace with your actual arrow icon path
    alt="Arrow Icon"
    style={{ width: "19px", height: "10px" , cursor: 'pointer'}}
  />
</div>
    </label>

    </div>

    <div  className=" bg-[#FEFEFF] shadow-xl"
   style={{ 
    height: "285px",
    padding:"30px 0",
    marginBottom: "20px" // Adds spacing between sections
    }}
  >
  
  <h2 className="mt-1"
style={{
  width: "173px",
  height: "24px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "24px",
  letterSpacing: "10%",
  color: "#434250",
   marginBottom:"30px",
   marginLeft:'30px',
}}>
  FILTER BY PRICE</h2>

  <hr 
  style={{ 
    border: '2px solid #434250',
    width: "300px",
    marginLeft:'30px',
    marginBottom:"10px"
   }} />

<h2 className="mt-10"
style={{
  width: "141px",
  height: "24px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "24px",
  letterSpacing: "10%",
  color: "#434250",
   marginBottom:"30px",
   marginLeft:'30px',
}}>
  PRICE RANGE</h2>

  <div style={{ marginBottom: '10px'  }}> {/* Added container and border */}
    
  <div className="w-full flex justify-center mt-4"
  style={{
    width: "300px",
    height: "20px",
     marginLeft:'30px',
  }}
  >
      <input
        type="range"
        min="100000"
        max="400000"
        value={priceRange}
        onChange={(e) => setPriceRange(Number(e.target.value))}
        className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer range-thumb"
      />
      <style jsx>{`
        input[type="range"] {
          -webkit-appearance: none;
        }
        input[type="range"]::-webkit-slider-runnable-track {
          width: 100%;
          height: 4px;
          background: linear-gradient(to right, #a2a2ff 0%, #a2a2ff 75%, #ccc 75%);
          border-radius: 4px;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 8.22px;
          height: 20px;
          background: #a2a2ff;
          border-radius: 2px;
          margin-top: -6px;
        }
        input[type="range"]::-moz-range-thumb {
          width: 8.22px;
          height: 20px;
          marginLeft:241.6px,
          background: #a2a2ff;
          border-radius: 2px;
        }
      `}</style>
    </div>

    <div className="mt-6"
    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

    <span style={{
  width: "184px",
  height: "17px",
  fontFamily: "Kanit",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "16.8px",
  letterSpacing: "10%",
  marginLeft:'30px',
  color: "#000000"
}}>
  Price 0 LKR - 750,000 LKR
</span>
     
<button style={{
  backgroundColor: '#989EF1',
  color: 'white',
  border: 'none',
  marginRight:"45px",
  padding: '10px 20px', // Adjusted padding to match the image
  borderRadius: '0px', // Removed border radius
  width: '88px', // Added width property
  height: '37px',
  fontFamily: 'Kanit', // Added font family
  fontWeight: 400, // Added font weight
  fontSize: '14px', // Added font size
  lineHeight: '16.8px', // Added line height
  letterSpacing: '10%' // Added letter spacing
}}>
  FILTER
</button>

    </div>
    
  </div>
  </div>

  <div  className=" bg-[#FEFEFF] shadow-xl"
   style={{ 
    height: "168px",
    padding:"30px 0",
    marginBottom: "20px" 
    }}
  >
  
  <h2 className="mt-1"
style={{
  width: "186px",
  height: "24px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "24px",
  letterSpacing: "10%",
  color: "#434250",
   marginBottom:"30px",
   marginLeft:'30px',
}}>
 FILTER BY BRAND</h2>

  <hr 
  style={{ 
    border: '2px solid #434250',
    width: "300px",
    marginLeft:'30px',
    marginBottom:"25px"
   }} />

  <div style={{ padding: '10px 0'}}> {/* Added container and border */}
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    {brands.map((brand) => (
  <label key={brand.name} style={{ display: 'flex', alignItems: 'center', margin: '0 5px' }}>
    <input
      type="radio"
      name="brand"
      checked={selectedBrands.includes(brand.name)}
      onChange={() => toggleFilter('brand', brand.name)}
      style={{ marginRight: '5px' }} // Add margin to the radio button
    />
    <img
      src={brand.logo}
      alt={brand.name}
      style={{ width: brand.width, height: brand.height }}
    />
  </label>
))}
    </div>
  </div>
  
  </div>


  <div  className=" bg-[#FEFEFF] shadow-xl"
   style={{ 
    height: "604px",
    padding:"30px 0",
    marginBottom: "20px" 
    }}
  >

<h2 className="mt-1"
style={{
  width: "199px",
  height: "24px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "24px",
  letterSpacing: "10%",
  color: "#434250",
   marginBottom:"30px",
   marginLeft:'30px',
}}>
 FILTER BY COLOR</h2>

  <hr 
  style={{ 
    border: '2px solid #434250',
    width: "300px",
    marginLeft:'30px',
    marginBottom:"25px"
   }} />

<div style={{ padding: "10px 0", marginLeft: "18px" }}>
  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
    {colors.map((color) => (
      <label
        key={color.name}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 10px",
          cursor: "pointer",
        }}
      >
        {/* Color Circle */}
        <img
          src={color.image}
          alt={color.name}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            marginRight: "35px",
          }}
        />

        {/* Color Name */}
        <span
          style={{
            height: "22px",
            fontFamily: "Kanit",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "21.6px",
            letterSpacing: "10%",
            color: "#434250",
            marginRight: "auto",
          }}
        >
          {color.name}
        </span>

        {/* Custom Radio Button */}
        <input
          type="radio"
          name="color"
          checked={selectedColor === color.name}
          onChange={() => setSelectedColor(color.name)}
          className="hidden"
        />

        {/* Radio Button Styling */}
        <div
          className="rounded-full border transition-all relative"
          style={{
            width: "30px",
            height: "30px",
            borderColor: selectedColor === color.name ? "#989EF1" : "#DEDFE4",
            backgroundColor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "20px",
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: selectedColor === color.name ? "#989EF1" : "#DEDFE4",
            }}
          ></div>
        </div>
      </label>
    ))}
  </div>
</div>


  </div>

  <div  className=" bg-[#FEFEFF] shadow-xl"
   style={{ 
    height: "414px",
    padding:"30px 0",
    marginBottom: "20px" 
    }}
  >

<h2 className="mt-1"
style={{
  width: "177px",
  height: "24px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "24px",
  letterSpacing: "10%",
  color: "#434250",
   marginBottom:"30px",
   marginLeft:'30px',
}}>
 SORT PRODUCTS</h2>

  <hr 
  style={{ 
    border: '2px solid #434250',
    width: "300px",
    marginLeft:'30px',
    marginBottom:"25px"
   }} />


  <div 
  style={{ 
    padding: '10px 0',
      height: "22px",
      fontFamily: "Kanit",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "21.6px",
      letterSpacing: "10%",
      color: "#434250",
      marginLeft: "30px",
   }}
   > {/* Added container */}


    <div
     style={{ 
        marginRight: "30px",
     }}
    >
      {options.map((option) => (
        <label
          key={option.value}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 0",
            cursor: "pointer",
          }}
        >
          <span>{option.label}</span>

          {/* Hidden Radio Button */}
          <input
            type="radio"
            name="sort"
            value={option.value}
            checked={sortOption === option.value}
            onChange={() => setSortOption(option.value)}
            className="hidden"
          />

          {/* Custom Radio Button */}
          <div
            className="rounded-full border transition-all relative"
            style={{
              width: "30px",
              height: "30px",
              borderColor: sortOption === option.value ? "#989EF1" : "#DEDFE4",
              backgroundColor: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "20px",
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: sortOption === option.value ? "#989EF1" : "#DEDFE4",
              }}
            ></div>
          </div>
        </label>
      ))}
    </div>
    
  </div>
  </div>

</aside>

      {/* Product Grid */}
      
      <main className="-mt-28"
      style={{ 
        flex: 1, 
        padding: '150px',
        marginLeft:'-110px'
        
         }}>
      {filteredProducts.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {filteredProducts.map((product) => (
            <div key={product.id} className="w-[312px] h-[844.5px] bg-[#FEFEFF] rounded-xl shadow-lg flex flex-col justify-between text-center mt-6" style={{ gap: "30px", padding: "30px" }}>
              {/* Product Image */}
              <div className="flex justify-center mb-6 -mt-3">
                <Image src={product.image} alt={product.name} width={280} height={348} className="p-[10px] gap-[10px] object-contain" />
              </div>

              {/* Rating Section */}
              <div className="flex justify-center items-center text-sm text-gray-600 mb-4 -mt-10">
                {Array.from({ length: 5 }, (_, i) => (
                  <Image
                    key={i}
                    src={i < product.rating ? "/images/Star 1.png" : "/images/Star 2.png"}
                    alt={i < product.rating ? "Filled Star" : "Empty Star"}
                    width={20}
                    height={20}
                  />
                ))}
              </div>
              <div style={{ width: "114px", fontFamily: "Kanit", fontSize: "13px", color: "#434250", marginLeft: "68px", marginTop: "-32px" }}>
                {product.rating} | {product.reviews} Reviews
              </div>
              <Image src="/images/ShoppingCart.png" alt="Shopping Cart Icon" width={21} height={19.5} style={{ marginLeft: "108px" }} />

              {/* Product Details */}
              <h3 style={{ width: "140px", fontFamily: "Kanit", fontSize: "18px", color: "#434250", marginLeft: "58px" }}>{product.name}</h3>
              <p style={{ width: "65px", fontFamily: "Kanit", fontSize: "18px", color: "#434250", marginLeft: "89px", marginTop: "-22px" }}>{product.brand}</p>

              {/* Price Section */}
              <div>
                <p style={{ width: "111px", fontFamily: "Kanit", fontSize: "16px", color: "#81808A", marginLeft: "68px", textDecoration: "line-through" }}>{product.oldPrice} LKR</p>
                <p style={{ width: "159px", fontFamily: "Kanit", fontSize: "23px", fontWeight: 600, color: "#989EF1", marginLeft: "45px" }}>{product.newPrice} LKR</p>
              </div>
              <p style={{ width: "259px", fontFamily: "Kanit", fontSize: "16px", color: "#81808A" }}>Offers Valid Till {product.offerEnd}</p>

              {/* Buy Now Button */}
              <Link href={`/singleproduct/${product.id}`} passHref>
                <button style={{ width: "179px", height: "44px", fontFamily: "Kanit", fontSize: "20px", color: "#FFFFFF", backgroundColor: "#434250", textAlign: "center", padding: "10px 40px", gap: "10px" }}>
                  BUY NOW
                </button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No products match the selected filters.</p>
      )}
    </main>
      
    </div>
    
{/* Pagination Below Swiper */}
<div
style={{marginLeft:"400px"}}
className="flex justify-center items-center -mt-16 -space-x-2">
  {["<", 1, 2, 3, "...", 15, ">"].map((item, index) => (
    <button
      key={index}
      style={{
        fontFamily: "Kanit",
        fontWeight: 400,
        fontSize: "23px",
        lineHeight: "27.6px",
        padding: "5px 10px",
        borderRadius: "4px",
        color: item === activePage ? "#989EF1" : "#434250",
        border: "none",
        cursor: "pointer",
        background: "transparent",
        
      }}
      className={`hover:bg-gray-200 transition`}
      onClick={() => {
        if (item === "<" && activePage > 1) goToPage(activePage - 1);
        else if (item === ">" && activePage < 7) goToPage(activePage + 1);
        else if (typeof item === "number") goToPage(item);
      }}
    >
      {item}
    </button>
  ))}
</div>
<br/><br/><br/>
    <Footer/>
</>
  );
};

export default ProductPage;
