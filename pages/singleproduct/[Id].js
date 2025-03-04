import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SingleProductDescription from "@/components/SingleProductDescription";
import SingleProductLatestOffers from "@/components/SingleProductLatestOffers";
import SingleProductRecommendedProducts from "@/components/SingleProductRecommendedProducts";
import SingleProductCustomerFeedback from "@/components/SingleProductCustomerFeedback";
import Link from "next/link";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedStorage, setSelectedStorage] = useState("256GB");
  const [selectedColor, setSelectedColor] = useState("Space Black");
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  // Mock product data (Replace with API fetch if needed)
  const productId = id || "1"; // Default to product with id "1" if id is missing
  const product = {
    name: "Apple iPhone 14 Pro Max",
    oldPrice: "350,000 LKR", 
    newPrice: "259,999 LKR",
    image: "/images/iphone14pro.png",
    description:
      "The iPhone 14 Pro Max offers cutting-edge performance, an advanced camera system, and long battery life, perfect for users who demand the best.",
    category: "Electronics",
    colors: ["BLACK", "BLUE", "GREEN", "SILVER"],
    storages: ["256GB", "512GB", "1TB"],
  };

  const colors = [
    { name: 'BLACK', code: '#434250' },
    { name: 'BLUE', code: '#666EEA'},
    { name: 'GREEN', code: '#09B697' },
    { name: 'SILVER', code: '#C5C4C9'}
  ];

  // Related Products
  const relatedProducts = [
    {
      id: 1,
      name: "Apple iPhone 14 Pro",
      price: "Rs. 199,999",
      image: "/images/iphone_15.png",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      price: "Rs. 129,999",
      image: "/images/iphone_15.png",
    },
    {
      id: 3,
      name: "Google Pixel 6",
      price: "Rs. 109,999",
      image: "/images/iphone_15.png",
    },
    {
      id: 4,
      name: "OnePlus 9 Pro",
      price: "Rs. 119,999",
      image: "/images/iphone_15.png",
    },
  ];

  useEffect(() => {
    if (productId) {
      setLoading(false);
    }
  }, [productId]);

  // Handle Quantity Change
  const handleQuantityChange = (action) => {
    setQuantity((prev) =>
      action === "increment" ? prev + 1 : Math.max(1, prev - 1)
    );
  };

  if (loading) {
    return <div className="text-center mt-20">Loading product details...</div>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto py-10 px-4">
        {/* Product Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images */}
          <div style={{
            marginLeft:"80px",
  width: '800px', // lg:w-1/2 translates to 800px width
  height: '820px', // Hug (820px) means the content will determine the height, but we set a default
  border: '2px solid #434250',
  padding: '10px',
  gap: '10px',
  boxSizing: 'border-box' // Include border and padding in the element's total width and height
}}>
  <img
    src={product.image}
    alt={product.name}
    width={780}
    height={800}
    style={{ borderRadius: '10px', marginTop: '56px' }} // Assuming rounded-lg and mb-4 translate to 10px and 4px
  />
            
            <div style={{
  marginTop: '108px',
  display: 'flex',
  marginLeft: '-10px',
  gap: '20px',
}}>
  {[
    { id: 2, image: '/images/singleproduct1.png' },
    { id: 3, image: '/images/singleproduct2.png' },
    { id: 4, image: '/images/singleproduct3.png' }
  ].map((item, index) => (
    <img
      key={item.id}
      src={item.image}
      alt={`Thumbnail ${item.id}`}
      width={106}
      height={106}
      style={{
        cursor: 'pointer'
      }}
    />
  ))}
</div>

          </div>

          {/* Product Details */}
          <div 
          style={{marginLeft:"80px",  marginBottom:"80px"}}
          className="lg:w-1/2">
            
          <h1 style={{
  height: "31px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "26px",
  lineHeight: "31.2px",
  letterSpacing: "10%",
  color: "#434250",
  marginBottom: "15px" // Assuming mb-4 translates to 4px margin-bottom
}}>
  {product.name} - {selectedStorage}
</h1>

<p className="text-[#989EF1] text-sm font-kanit">{product.rating}</p>

{/* Rating Section */}
<div
 style={{
  display: 'flex',
  alignItems: 'center',
  color: '#989EF1',
  fontFamily: 'Kanit',
  fontSize: '16px', // Adjusted font size
  lineHeight: "19.2px",
  letterSpacing: '10%' // Added letter spacing
}}>
  <span style={{ fontSize: '16px' }}>4.3</span> {/* Adjusted font size */}
  <span>|</span>
  <span style={{ fontSize: '16px' }}>187 Reviews</span> {/* Adjusted font size */}

  {/* Star Ratings */}
  <div style={{ display: 'flex', marginLeft: '30px' }}> {/* Adjusted margin */}
    {Array.from({ length: 5 }, (_, i) => (
      <img
        key={i}
        src={i < 4 ? "/images/Star 1.png" : "/images/star 2.png"}
        alt={i < 4 ? "Filled Star" : "Empty Star"}
        style={{ width: '18px', height: '18px' }}
      />
    ))}
  </div>
</div>


<p style={{
  width: "609px",
  height: "72px",
  fontFamily: "Kanit",
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "24px",
  letterSpacing: "10%",
  color: "#434250",
  marginBottom: "30px", // Assuming mb-4 translates to 4px margin-bottom
  marginTop: "25px" // Assuming mt-8 translates to 8px margin-top
}}>
  {product.description}
</p>

<p style={{
  width: "289px",
  height: "35px",
  fontFamily: "Kanit",
  fontWeight: 400,
  fontSize: "29px",
  lineHeight: "34.8px",
  letterSpacing: "10%",
  textDecoration: "line-through",
  color: "#81808A",
  marginBottom: "2px" // Assuming mb-2 translates to 2px margin-bottom
}}>
  {product.oldPrice}
</p>

<p style={{
  width: "289px",
  height: "50px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "42px",
  lineHeight: "50.4px",
  letterSpacing: "10%",
  color: "#989EF1",
  marginBottom: "40px" // Assuming mb-2 translates to 2px margin-bottom
}}>
  {product.newPrice}
</p>


{/* Storage Selection */}
<div className="mb-16">
              
<h4 style={{
  width: "212px",
  height: "24px",
  fontFamily: "Kanit",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "24px",
  letterSpacing: "10%",
  color: "#434250"
}}>
  STORAGE : <span style={{ color: "#989EF1" }}>{selectedStorage}</span>
</h4>

<div style={{
  display: 'flex',
  marginTop: '15px', // Assuming mt-2 translates to 2px margin-top
  gap: '20px' // Assuming space-x-4 translates to 10px gap
}}>
  {product.storages.map((storage) => (
    <button
      key={storage}
      style={{
        border: '2px solid #989EF1',
        padding: '10px 30px', // Adjusted padding to match the image
        backgroundColor: selectedStorage === storage ? '#989EF1' : 'white',
        color: selectedStorage === storage ? 'white' : 'black', // Added text color
        gap: '10px',
        width: '126px', // Added width from the image
        height: '44px' // Added height from the image
      }}
      onClick={() => setSelectedStorage(storage)}
    >
      {storage}
    </button>
  ))}
</div>

            </div>

            {/* Color Selection */}
            <div className="mb-10">
              
              <h4 style={{
                width: "212px",
                height: "24px",
                fontFamily: "Kanit",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "24px",
                letterSpacing: "10%",
                color: "#434250"
              }}>
                COLOUR : <span style={{ color: "#989EF1" }}>{selectedColor}</span>
              </h4>
              <div style={{
  display: 'flex',
  marginTop: '15px', // Assuming mt-2 translates to 2px margin-top
  gap: '20px' // Assuming space-x-4 translates to 10px gap
}}>
               
               <div style={{ marginTop: "-10px", marginLeft: "-15px" }}>
  <div style={{ display: "flex", gap: "0px" }}>
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
        {/* Custom Radio Button (Hidden) */}
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
    width: "60px",
    height: "60px",
    borderColor: selectedColor === color.name ? "#989EF1" : "transparent", // Set borderColor to transparent when not selected
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "0px",
  }}
>
          <div
            className="rounded-full"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: color.code,
            }}
          ></div>
        </div>
      </label>
    ))}
  </div>
</div>
              </div>
              
                          </div>



            {/* Price & Quantity */}
            <div className="mb-6">
              
              <h4 style={{
                width: "110px",
                height: "24px",
                fontFamily: "Kanit",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "24px",
                letterSpacing: "10%",
                color: "#434250"
              }}>
                QUANTITY
              </h4>

              <h4 className="text-3xl font-bold">{product.price}</h4>
            </div>

            <div className="flex items-center space-x-4 mb-16">
              <button
                className="bg-[#989EF1] px-4 py-2 border rounded-lg"
                onClick={() => handleQuantityChange("decrement")}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="bg-[#989EF1] px-4 py-2 border rounded-lg"
                onClick={() => handleQuantityChange("increment")}
              >
                +
              </button>
            </div>

            {/* Buy & Cart Buttons */}
            <div className="flex space-x-4">
      <button 
  style={{
    width: "227px", // Updated width
    height: "56px", // Updated height
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "24px",
    letterSpacing: "10%",
    color: "#FEFEFF",
    textAlign: "center",
    backgroundColor: "#434250",
    paddingTop: "10px",
    paddingRight: "40px",
    paddingBottom: "10px",
    paddingLeft: "40px",
    gap: "10px"
  }}
>
  BUY NOW
</button>

<button 
  style={{
    width: "272px", // Updated width
    height: "56px", // Updated height
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "24px",
    letterSpacing: "10%",
    color: "#FEFEFF",
    textAlign: "center",
    backgroundColor: "#434250",
    paddingTop: "10px",
    paddingRight: "40px",
    paddingBottom: "10px",
    paddingLeft: "40px",
    gap: "10px"
  }}
>
ADD TO CART
</button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-32">
        <SingleProductDescription/>
        <SingleProductRecommendedProducts/>
        <SingleProductCustomerFeedback/>
        </div>
      </div>

      <SingleProductLatestOffers/>
      <Footer />
    </>
  );
};

export default SingleProduct;
