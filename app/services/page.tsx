import React from "react";
import Navbar from "../components/Header";
import Image from "next/image";
import TeamSection from "../sections/TeamSection";
import Footer from "../components/Footer";
import ServicesSec from "../sections/ServicesSec";
import ServicesSection from "../sections/ServicesSection";
export default function Page() {
  return (
    <div>
      <Navbar />

      {/* Banner Section */}
      <div className="relative w-full h-[360px] overflow-hidden">
        <Image
          src="/banner-sec.png"
          alt="Banner"
          fill
          priority
          className="object-cover"
        />


        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          
          {/* Title */}
          <h1 className="text-2xl lg:text-3xl font-semibold tracking-wide">
            Services
          </h1>

          {/* Breadcrumb */}
          <div className="flex gap-2 mt-3 text-sm opacity-90">
            <span className="text-white cursor-pointer">Home</span>
            <span>/</span>
            <span className="text-white">Services</span>
          </div>

        </div>
      </div>
      <section>
        <ServicesSection />
        <ServicesSec />
        <TeamSection />
      </section>
        <Footer />
    </div>
  );
}