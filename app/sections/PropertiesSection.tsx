"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import PropertyCard from "../components/PropertyCard";

type Property = {
  id: number;
  image: string;
  title: string;
  type: string;
  location: string;
};

const properties: Property[] = [
  { id: 1, image: "/properties-sec-1.webp", title: "643 WEST 171 STREET", type: "Residential", location: "Washington Heights 32" },
  { id: 2, image: "/properties-sec-2.webp", title: "505 WEST 164 STREET", type: "Residential", location: "Washington Heights 24" },
  { id: 3, image: "/properties-sec-3.webp", title: "336 FORT WASHINGTON AVE", type: "Residential and Retail", location: "Washington Heights 81" },
  { id: 4, image: "/properties-sec-4.webp", title: "272 WEST 115 STREET", type: "Residential and Retail", location: "Harlem/Morningside 20" },
  { id: 5, image: "/properties-sec-5.webp", title: "1 CONVENT AVE", type: "Residential and Retail", location: "Harlem 26" },
];

export default function PropertiesSection() {
  const swiperRef = useRef<any>(null);

  return (
    <section className="bg-[#E7D4B9] py-16 sm:py-20 lg:py-24 overflow-hidden">

      <motion.div
        className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1 }}
      >

        {/* TOP TEXT */}
        <h3 className="text-sm sm:text-base lg:text-lg text-[#9B6B27] mb-3 sm:mb-4 tracking-[0.25em] text-center lg:text-left">
          FEATURED LISTING
        </h3>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-semibold text-[#251B0E] mb-10 sm:mb-12 lg:mb-16 text-center lg:text-left">
          PREMIUM PROPERTIES
        </h2>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          speed={900}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 1.2, spaceBetween: 16 },
            640: { slidesPerView: 1.5, spaceBetween: 18 },
            768: { slidesPerView: 2, spaceBetween: 22 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1400: { slidesPerView: 3.2, spaceBetween: 34 },
          }}
        >
          {properties.map((property) => (
            <SwiperSlide key={property.id}>
              <PropertyCard {...property} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* NAV BUTTONS */}
        <div className="flex justify-center gap-5 sm:gap-6 mt-10 sm:mt-12 lg:mt-14">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full flex items-center justify-center text-[26px] sm:text-[30px] text-black leading-none hover:brightness-110 transition"
            style={{ background: "radial-gradient(#F4C688,#9B6B27)" }}
          >
            <span className="-translate-y-[2px]">‹</span>
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full flex items-center justify-center text-[26px] sm:text-[30px] text-black leading-none hover:brightness-110 transition"
            style={{ background: "radial-gradient(#F4C688,#9B6B27)" }}
          >
            <span className="-translate-y-[2px]">›</span>
          </button>
        </div>

      </motion.div>
    </section>
  );
}