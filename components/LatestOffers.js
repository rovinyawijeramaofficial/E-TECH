"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LatestOffersCard from "./LatestOffersCard";

const products = [
  { image: "/images/iphone_15.png", title: "IPHONE 15 PRO", brand: "Iphone", oldPrice: "300,000", newPrice: "250,000", rating: 4, reviews: 187, offerEnd: "25th of August", Id: "iphone-15-pro" },
  { image: "/images/iphone_15.png", title: "IPHONE 15 PRO", brand: "Iphone", oldPrice: "300,000", newPrice: "250,000", rating: 5, reviews: 250, offerEnd: "25th of August", Id: "product-2" },
  { image: "/images/iphone_15.png", title: "IPHONE 15 PRO", brand: "Iphone", oldPrice: "300,000", newPrice: "250,000", rating: 3, reviews: 120, offerEnd: "25th of August", Id: "product-3" },
  { image: "/images/iphone_15.png", title: "IPHONE 15 PRO", brand: "Iphone", oldPrice: "300,000", newPrice: "250,000", rating: 4, reviews: 90, offerEnd: "25th of August", Id: "product-4" },
  { image: "/images/iphone_15.png", title: "IPHONE 15 PRO", brand: "Iphone", oldPrice: "300,000", newPrice: "250,000", rating: 4, reviews: 90, offerEnd: "25th of August", Id: "product-5" },
  { image: "/images/iphone_15.png", title: "IPHONE 15 PRO MAX", brand: "Iphone", oldPrice: "350,000", newPrice: "300,000", rating: 5, reviews: 300, offerEnd: "30th of August", Id: "product-6" },
  { image: "/images/iphone_15.png", title: "IPHONE 14 PRO", brand: "Iphone", oldPrice: "280,000", newPrice: "230,000", rating: 4, reviews: 150, offerEnd: "20th of August", Id: "product-7" },
  { image: "/images/iphone_15.png", title: "IPHONE 13 MINI", brand: "Iphone", oldPrice: "200,000", newPrice: "180,000", rating: 4, reviews: 110, offerEnd: "15th of August", Id: "product-8" },
  { image: "/images/iphone_15.png", title: "IPHONE 12", brand: "Iphone", oldPrice: "170,000", newPrice: "150,000", rating: 3, reviews: 90, offerEnd: "10th of August", Id: "product-9" },
  { image: "/images/iphone_15.png", title: "IPHONE SE", brand: "Iphone", oldPrice: "140,000", newPrice: "120,000", rating: 4, reviews: 80, offerEnd: "5th of August", Id: "product-10" },
];

export default function LatestOffers() {
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

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-10 md:px-28 mt-12 relative">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
        <h2 
  style={{
    width: "192px",
    height: "28px",
    fontFamily: "Kanit",
    fontWeight: 600,
    fontSize: "23px",
    lineHeight: "27.6px",
    letterSpacing: "10%",
    color: "#434250"
  }}
>
  LATEST OFFERS
</h2>

<a 
  href="/product" 
  style={{
    width: "156px",
    height: "22px",
    fontFamily: "Kanit",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "21.6px",
    letterSpacing: "10%",
    color: "#434250",
    textDecoration: "none",
    display: "inline-flex", // Use inline-flex for easy alignment
    alignItems: "center" // Vertically align items
  }}
>
  SEE ALL OFFERS
  <img 
    src="/images/seealloffersarrrow.png" 
    alt="See All Offers Arrow" 
    style={{ marginLeft: "5px" }} // Add some spacing between text and arrow
  />
</a>
        </div>

        {/* Swiper with Navigation & Pagination */}
        <div className="relative w-full overflow-visible">
          {/* Left Arrow */}
          <button ref={prevRef} className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 z-10 hover:scale-110 transition"
            style={{ width: "15px", height: "30px" }}>
            <img src="/images/offerscardleftarrow.png" alt="Previous" className="w-full h-full" />
          </button>

          <Swiper
            ref={swiperRef}
            slidesPerView={4}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 4 },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            modules={[Navigation]}
            className="mySwiper overflow-visible"
            onSlideChange={(swiper) => setActivePage(Math.floor(swiper.activeIndex / 4) + 1)}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index} className="pb-10">
                <LatestOffersCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right Arrow */}
          <button ref={nextRef} className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 z-10 hover:scale-110 transition"
            style={{ width: "15px", height: "30px" }}>
            <img src="/images/offerscardrightarrow.png" alt="Next" className="w-full h-full" />
          </button>
        </div>

        {/* Pagination Below Swiper */}
<div className="flex justify-center items-center mt-3 -space-x-2">
  {["<", 1, 2, 3, "...", 7, ">"].map((item, index) => (
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

      </div>
    </section>
  );
}
