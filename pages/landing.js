import LatestOffers from "@/components/LatestOffers/";
import Header from "@/components/Header";
import LandingBanner from "@/components/LandingBanner";
import BrandsSlider from "@/components/BrandsSlider";
import AppleProducts from "@/components/AppleProducts";
import Categories from "@/components/Categories";
import IconBar from "@/components/IconBar";
import Footer from "@/components/Footer";
import Image from "next/image";


export default function LandingPage() {
  return (
    <>
      <Header />
      <div className="relative">
        <Image
          src="/images/bgLineWide.jpg"
          alt="line"
          width={100}
          height={30}
          className="absolute top-0 right-0 w-fit h-[670px] object-cover z-0 opacity-5 items-end"
        />

        <Image
          src="/images/bgLineThin.jpg"
          alt="line"
          width={200}
          height={500}
          className="absolute top-0 right-40 w-fit h-[670px] object-cover z-0 opacity-5 items-end"
        />
      </div>

      <LandingBanner />
      <LatestOffers/>
      <BrandsSlider/>
      <AppleProducts/>
      <Categories/>
      <IconBar/>
      <Footer/>

    </>
  );
}