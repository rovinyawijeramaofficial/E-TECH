export const filterProducts = (products, filters) => {
    const { selectedCategories, selectedBrands, selectedColors, sortOption, priceRange } = filters;
  
    return products
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
  };
  