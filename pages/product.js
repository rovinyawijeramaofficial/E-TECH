// pages/product.js

import React, { useState } from 'react';
import Image from 'next/image';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    },
  ];

  // Filter options
  const categories = ['Mobile', 'Computing', 'Camera', 'Accessories'];
  const brands = ['Apple', 'Samsung', 'Sony'];
  const colors = ['Jet Black', 'Pink', 'Purple', 'Green', 'Yellow', 'Silver'];

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

  return (
     <>
            <Header />
    <div style={{ display: 'flex', fontFamily: 'Arial, sans-serif' }}>
      {/* Sidebar (Filters) */}
      <aside style={{ width: '250px', padding: '20px', borderRight: '1px solid #ddd' }}>
        <h2>CATEGORIES</h2>
        {categories.map((category) => (
          <label key={category} style={{ display: 'block', marginBottom: '5px' }}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => toggleFilter('category', category)}
            />{' '}
            {category}
          </label>
        ))}

        <h2 style={{ marginTop: '20px' }}>FILTER BY PRICE</h2>
        <div>
          <input
            type="range"
            min="100000"
            max="400000"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
          />
          <p>Up to {priceRange.toLocaleString()} LKR</p>
        </div>

        <h2 style={{ marginTop: '20px' }}>FILTER BY BRAND</h2>
        {brands.map((brand) => (
          <label key={brand} style={{ display: 'block', marginBottom: '5px' }}>
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleFilter('brand', brand)}
            />{' '}
            {brand}
          </label>
        ))}

        <h2 style={{ marginTop: '20px' }}>FILTER BY COLOR</h2>
        {colors.map((color) => (
          <label key={color} style={{ display: 'block', marginBottom: '5px' }}>
            <input
              type="checkbox"
              checked={selectedColors.includes(color)}
              onChange={() => toggleFilter('color', color)}
            />{' '}
            {color}
          </label>
        ))}

        <h2 style={{ marginTop: '20px' }}>SORT PRODUCTS</h2>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          <input
            type="radio"
            name="sort"
            value="rating"
            checked={sortOption === 'rating'}
            onChange={() => setSortOption('rating')}
          />{' '}
          Sort by Average Rating
        </label>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          <input
            type="radio"
            name="sort"
            value="priceLowToHigh"
            checked={sortOption === 'priceLowToHigh'}
            onChange={() => setSortOption('priceLowToHigh')}
          />{' '}
          Sort by Price - Low to High
        </label>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          <input
            type="radio"
            name="sort"
            value="priceHighToLow"
            checked={sortOption === 'priceHighToLow'}
            onChange={() => setSortOption('priceHighToLow')}
          />{' '}
          Sort by Price - High to Low
        </label>
      </aside>

      {/* Product Grid */}
      <main style={{ flex: 1, padding: '20px' }}>
        {filteredProducts.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {filteredProducts.map((product) => (
              <div key={product.id} style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
                <Image src={product.image} alt={product.name} width={200} height={200} />
                <h3>{product.name}</h3>
                <p>{product.price.toLocaleString()} LKR</p>
                <div>
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} style={{ color: i < product.rating ? '#ffc107' : '#e4e4e4' }}>
                        ★
                      </span>
                    ))}
                  <p style={{ margin: '5px 0' }}>{product.reviews} Reviews</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No products match the selected filters.</p>
        )}
      </main>
    </div>

    <Footer/>
</>
  );
};

export default ProductPage;
