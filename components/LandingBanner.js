import Image from "next/image";

const LandingBanner = () => {
  return (
    <div className="w-full relative overflow-hidden">
      {/* Desktop View */}
      <div className="hidden md:block w-full h-[997px] relative bg-black overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/LandingBanner.png"
          alt="DJI RS 4 PRO"
          fill
          style={{ objectFit: "cover" }}
          priority
        />

        {/* Product Names */}
        <div className="absolute z-20 flex flex-col items-start" style={{ top: "10%", left: "8%" }}>
          <div
            style={{
              width: "164px",
              height: "19px",
              fontFamily: "Kanit",
              fontWeight: 275,
              fontSize: "16px",
              lineHeight: "19.2px",
              letterSpacing: "10%",
              color: "#D9D9D9", // Less bright white
              marginBottom: "10px",
            }}
          >
            OSMO POCKET 3
          </div>
          <div
            style={{
              width: "164px",
              height: "19px",
              fontFamily: "Kanit",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "19.2px",
              letterSpacing: "10%",
              color: "#FEFEFF",
              marginBottom: "10px",
            }}
          >
            DJI RS 4 PRO
          </div>
          <div
            style={{
              fontFamily: "Kanit",
              fontWeight: 275,
              fontSize: "16px",
              lineHeight: "19.2px",
              letterSpacing: "10%",
              color: "#D9D9D9", // Less bright white
            }}
          >
            IPHONE 15 PRO
          </div>
        </div>

        {/* Slide Navigator (Vertical Bar) */}
        <div
          className="absolute z-20"
          style={{
            top: "15%",
            left: "6%",
            width: "22px",
            height: "2px",
            backgroundColor: "#FEFEFF",
            transform: "rotate(-90deg)",
            transformOrigin: "left top",
          }}
        ></div>

{/* Left and Right Arrows */}
<div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-8 z-20">
  {/* Left Arrow */}
  <button className="bg-transparent p-2 flex items-center">
    <Image src="/images/left-arrow.png" alt="Previous" width={20} height={20} className="h-8 w-auto" />
  </button>

  {/* Right Arrow */}
  <button className="bg-transparent p-2 flex items-center">
    <Image src="/images/right-arrow.png" alt="Next" width={20} height={20} className="h-8 w-auto" />
  </button>
</div>


        {/* "NEW" text */}
        <div className="absolute z-20 text-[#FEFEFF]" 
        style={{ 
          top: "55%", 
          left: "6%", 
          fontFamily: "Kanit",
          fontWeight: 400,
          fontSize: "23px", 
          lineHeight: "27.6px" 
            }}
            >
          NEW
        </div>

        {/* Main Heading */}
        <div className="absolute z-20 text-[#FEFEFF]" 
        style={{ 
          top: "58%",
          left: "6.1%" 
          }}
          >
          <h1 style={{ 
            fontFamily: "Kanit",
            fontWeight: 400, 
            fontSize: "64px",
            lineHeight: "76.8px",
            margin: 0 
            }}
               >
            RONIN RS 4 PRO
          </h1>
        </div>

        {/* Subheading */}
<div className="absolute z-20 text-white" 
  style={{ 
    top: "67%", 
    left: "6.1%" 
  }}
>
  <p style={{ 
    fontFamily: "Kanit", 
    fontWeight: "400", 
    fontSize: "23px", 
    lineHeight: "27.6px", 
    margin: 0,
    marginTop:"20px"
  }}>
    TRANSCEND POTENTIAL 
  </p>
  <br/>
  <p 
  style={{
 
  fontFamily: "Kanit",
  fontWeight: "275",
  fontSize: "14px",
  lineHeight: "16.8px",
  margin: 0,
  color: "#D9D9D9" // Less bright white (light gray)
}}>
    In publishing and graphic design. Lorem ipsum is placeholder text commonly used to demonstrate <br />
    the visual form of a document or a typeface without relying on meaningful content. Lorem <br />
    may be used as a placeholder before the final copy is available.
  </p>
</div>

        {/* Buttons */}
        <div className="absolute z-20 flex gap-4" 
        style={{ 
          bottom: "13%", 
          left: "6.1%",
          
          }}
          >
          <button className="bg-transparent border border-white text-white px-8 py-3 " 
          style={{ 
            fontFamily: "Kanit", 
            fontWeight: 400, 
            fontSize: "20px", 
            lineHeight: "24px" 
            }}
            >
              BUY NOW
            </button>
          <button className="bg-transparent border border-white text-white px-8 py-3 " 
          style={{ 
            fontFamily: "Kanit", 
            fontWeight: 400, 
            fontSize: "20px", 
            lineHeight: "24px" 
            }}
            >
            LEARN MORE
            </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full h-[524px] sm:h-[863px] relative overflow-hidden">
        {/* Background Container */}
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/images/LandingBanner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: "-1",
          }}
        ></div>

        {/* Text Overlays */}
        <div
          className="absolute z-20 flex flex-col justify-center items-start w-full px-4 sm:px-8"
          style={{ bottom: "10%" }}
        >
          {/* Text Container */}
          <div className="text-white">
            {/* Main Heading */}
            <h1
              style={{
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "36px",
                lineHeight: "42px",
                margin: 0,
              }}
            >
              RONIN RS 4 PRO
            </h1>

            {/* Subheading */}
            <p
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22px",
                margin: 0,
                marginTop: "10px",
              }}
            >
              TRANSCEND POTENTIAL <br />
              In publishing and graphic design. Lorem ipsum is placeholder text commonly used to demonstrate <br />
              the visual form of a document or a typeface without relying on meaningful content. Lorem <br />
              may be used as a placeholder before the final copy is available.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="absolute z-20 flex gap-4" style={{ bottom: "2%", left: "4%" }}>
          <button className="bg-transparent border border-white text-white px-4 py-2 rounded-full" style={{ fontFamily: "Poppins", fontWeight: 500, fontSize: "14px", lineHeight: "18px" }}>BUY NOW</button>
          <button className="bg-transparent border border-white text-white px-4 py-2 rounded-full" style={{ fontFamily: "Poppins", fontWeight: 500, fontSize: "14px", lineHeight: "18px" }}>LEARN MORE</button>
        </div>
      </div>
    </div>
  );
};

export default LandingBanner;