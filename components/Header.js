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
      <div 
  className="font-bold" 
  style={{ 
    width: '95px', 
    height: '28px', 
    fontFamily: 'Kanit', 
    fontWeight: 600, 
    fontSize: '23px', 
    lineHeight: '27.6px', 
    letterSpacing: '10%', 
    color: '#434250',
    marginLeft:"45px",
  }}
>
  E TECH
</div>

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
        marginRight:"100px",
      }}
      >
        <Link href="/product">
          SHOP
        </Link>
        {["Mobile", "Computing", "Camera", "Accessories"].map((item) => (
          <Link key={item} href={`/${item.toLowerCase()}`} >
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
  <FaSearch className="cursor-pointer text-gray-500" />
</div>

        {/* Cart and User Icons */}
        <Image 
          src="/images/ShoppingCart.png"
          alt="ShoppingCart"
          width={21.01}
          height={22.5}
          className="cursor-pointer"
        />
        <Image 
          src="/images/User.png"
          alt="User Icon"
          width={16.5}
          height={20.93}
          className="cursor-pointer"
        />
      </div> {/* Correctly closed the div here */}
    </header>
  );
}