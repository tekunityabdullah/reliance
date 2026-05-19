import React from "react";
import Navbar from "../components/Header";
import Image from "next/image";
import TeamSection from "../sections/TeamSection";
import Footer from "../components/Footer";
import ApplyForm from "../sections/ApplyForm";

export default function Page() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Banner Section */}
      <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[360px] overflow-hidden">
        <Image
          src="/banner-sec.png"
          alt="Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wide">
            Careers
          </h1>

          <div className="flex flex-wrap justify-center gap-2 mt-3 text-xs sm:text-sm opacity-90">
            <span className="text-white cursor-pointer">Home</span>
            <span>/</span>
            <span className="text-white">Careers</span>
          </div>
        </div>
      </div>

      {/* Apply Section */}
      <section className="bg-[#e7d4b9]">
        <div className="pt-10 sm:pt-14 pb-6 text-center px-4 sm:px-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl text-[#251B0E] font-bold">
            Apply Here
          </h1>

          <p className="text-base sm:text-lg lg:text-xl mt-4 max-w-2xl mx-auto">
            Please complete the form below to apply for a position with us.
          </p>
        </div>

        {/* Form */}
        <div className="px-4 sm:px-8 lg:px-16">
          <ApplyForm />
        </div>

        <TeamSection />
      </section>

      <Footer />
    </div>
  );
}