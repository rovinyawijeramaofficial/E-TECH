import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { FaSearch } from "react-icons/fa"; 

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-12 bg-white border-b border-gray-300"
      style={{
        height: "120px",
      }}
    >
      {/* Logo */}
      <Link href="/landing" className="font-bold" 
        style={{ 
          width: '95px', 
          height: '28px', 
          fontFamily: 'Kanit', 
          fontWeight: 600, 
          fontSize: '23px', 
          lineHeight: '27.6px', 
          letterSpacing: '10%', 
          color: '#434250',
          marginLeft: "45px",
          textDecoration: 'none',
        }}
      >
        E TECH
      </Link>

      {/* Navigation Links */}
      <nav className="flex space-x-10"
        style={{ 
          height: '22px', 
          fontFamily: 'Kanit', 
          fontWeight: 400, 
          fontSize: '18px', 
          lineHeight: '21.6px', 
          letterSpacing: '10%', 
          color: '#434250',
          marginRight: "100px",
        }}
      >
        <Link href="/product">SHOP</Link>
        <Link href="/product">MOBILE</Link> 
        {["Computing", "Camera", "Accessories"].map((item) => (
          <Link key={item} href="/product">
            {item.toUpperCase()}
          </Link>
        ))}
      </nav>

      {/* Search Bar and Icons */}
      <div className="flex items-center space-x-6">
        {/* Search Input */}
        <div 
          className="relative flex items-center" 
          style={{ 
            width: '275px', 
            height: '44px', 
            border: '1px solid #434250', 
            justifyContent: 'space-between', 
            padding: '10px 20px' 
          }}
        >
          <input
            type="text"
            placeholder="SEARCH"
            className="w-full outline-none text-gray-600 text-sm tracking-widest placeholder-gray-500"
          />

          <div className="relative group">
  <Link href="/product">
    <FaSearch className="cursor-pointer text-gray-500" />
  </Link>
  <span 
    className="absolute left-1/2 transform -translate-x-1/2 top-8 opacity-0 group-hover:opacity-100 text-gray-700 text-sm font-light transition-opacity"
    style={{
      fontFamily: "Kanit",
    }}
  >
    Products
  </span>
</div>

        </div>

        {/* Cart and User Icons */}
        
        <div className="relative group">
        <Link href="/product">
        <Image
          src="/images/ShoppingCart.png"
          alt="ShoppingCart"
          width={21.01}
          height={22.5}
          className="cursor-pointer"
        />
        </Link>
  <span 
    className="absolute left-1/2 transform -translate-x-1/2 top-8 opacity-0 group-hover:opacity-100 text-gray-700 text-sm font-light transition-opacity"
    style={{
      fontFamily: "Kanit",
    }}
  >
    Products
  </span>
</div>

<div className="relative group">
<Link href="/contact-us">
<Image 
          src="/images/User.png"
          alt="User Icon"
          width={16.5}
          height={20.93}
          className="cursor-pointer"
        />
</Link>
  <span 
    className="absolute left-1/2 transform -translate-x-1/2 top-8 opacity-0 group-hover:opacity-100 text-gray-700 text-sm font-light transition-opacity"
    style={{
      fontFamily: "Kanit",
    }}
  >
    ContactUs
  </span>
</div>

      </div>
    </header>
  );
}
