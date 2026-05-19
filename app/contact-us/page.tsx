import React from "react";
import Navbar from "../components/Header";
import Image from "next/image";
import TeamSection from "../sections/TeamSection";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Page() {
  return (
    <div>
      <Navbar />
 
      <div className="relative w-full h-[260px] lg:h-[360px] overflow-hidden">
        <Image
          src="/banner-sec.png"
          alt="Banner"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-2xl lg:text-3xl font-semibold tracking-wide">
            Contact Us
          </h1>

          <div className="flex gap-2 mt-3 text-sm opacity-90">
            <span>Home</span>
            <span>/</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

     
      <section className="w-full bg-[#e7d4b9] py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto text-center px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl mb-6 leading-tight">
            Experience the Reliance Realty Difference
          </h1>

          <h3 className="text-lg lg:text-xl mb-4">
            “Built on Trust, Managed with Care”
          </h3>

          <p className="text-base lg:text-lg mb-6 max-w-3xl mx-auto">
            Let Reliance Realty design a tailored plan to stabilize and enhance your property.
            Whether you’re facing operational challenges or looking to maximize long-term value,
            we deliver results that speak for themselves.
          </p>

          <h4 className="text-xl lg:text-2xl">
            Contact us today to start the transformation
          </h4>
        </div>

       
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mt-14">

          {/* Image (comes FIRST on mobile) */}
          <div className="relative w-full h-[300px] sm:h-[420px] lg:h-[520px] order-1">
            <Image
              src="/contact-sec.webp"
              alt="City"
              fill
              className="object-cover"
            />
          </div>

          {/* Form */}
          <div className="order-2">
            <ContactForm />
          </div>
        </div>

        
        <div className="w-full h-[300px] sm:h-[380px] lg:h-[480px] max-w-[1400px] mx-auto mt-16 overflow-hidden shadow-xl border border-black/10">
          <iframe
            src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
          />
        </div>
      </section>

      <TeamSection />
      <Footer />
    </div>
  );
}