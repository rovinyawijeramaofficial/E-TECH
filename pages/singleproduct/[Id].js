import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    price: "Rs. 259,999",
    image: "/images/image2.png",
    description:
      "The iPhone 14 Pro Max offers cutting-edge performance, an advanced camera system, and long battery life, perfect for users who demand the best.",
    category: "Electronics",
    colors: ["Space Black", "Silver", "Gold", "Deep Purple"],
    storages: ["128GB", "256GB", "512GB"],
  };

  // Related Products
  const relatedProducts = [
    {
      id: 1,
      name: "Apple iPhone 14 Pro",
      price: "Rs. 199,999",
      image: "/images/iphone14pro.png",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      price: "Rs. 129,999",
      image: "/images/galaxys21.png",
    },
    {
      id: 3,
      name: "Google Pixel 6",
      price: "Rs. 109,999",
      image: "/images/pixel6.png",
    },
    {
      id: 4,
      name: "OnePlus 9 Pro",
      price: "Rs. 119,999",
      image: "/images/oneplus9.png",
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
          <div className="lg:w-1/2">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg mb-4"
            />
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((_, index) => (
                <Image
                  key={index}
                  src={product.image}
                  alt={`Thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  className="border rounded-lg cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{product.name} - {selectedStorage}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="mb-2"><strong>Category:</strong> {product.category}</p>

            {/* Color Selection */}
            <div className="mb-4">
              <h4 className="font-semibold">Choose Your Color:</h4>
              <div className="flex space-x-4 mt-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`border px-4 py-2 rounded-lg ${
                      selectedColor === color ? "bg-black text-white" : "bg-white"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Storage Selection */}
            <div className="mb-4">
              <h4 className="font-semibold">Choose Storage:</h4>
              <div className="flex space-x-4 mt-2">
                {product.storages.map((storage) => (
                  <button
                    key={storage}
                    className={`border px-4 py-2 rounded-lg ${
                      selectedStorage === storage ? "bg-black text-white" : "bg-white"
                    }`}
                    onClick={() => setSelectedStorage(storage)}
                  >
                    {storage}
                  </button>
                ))}
              </div>
            </div>

            {/* Price & Quantity */}
            <div className="mb-4">
              <h4 className="text-3xl font-bold">{product.price}</h4>
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <button
                className="px-4 py-2 border rounded-lg"
                onClick={() => handleQuantityChange("decrement")}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="px-4 py-2 border rounded-lg"
                onClick={() => handleQuantityChange("increment")}
              >
                +
              </button>
            </div>

            {/* Buy & Cart Buttons */}
            <div className="flex space-x-4">
              <button className="bg-black text-white px-6 py-2 rounded-lg">
                Buy Now
              </button>
              <button className="bg-gray-800 text-white px-6 py-2 rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 flex flex-col items-center text-center"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="mb-4"
                />
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-xl font-bold">{product.price}</p>
                <Link href={`/product/${product.id}`} passHref>
                  <button className="bg-black text-white px-4 py-2 rounded-lg mt-2">
                    View Product
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
