import React from "react";
import Navbar from "../components/Header";
import Image from "next/image";
import TeamSection from "../sections/TeamSection";
import Footer from "../components/Footer";
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
            Company
          </h1>

          {/* Breadcrumb */}
          <div className="flex gap-2 mt-3 text-sm opacity-90">
            <span className="text-white cursor-pointer">Home</span>
            <span>/</span>
            <span className="text-white">Company</span>
          </div>
        </div>
      </div>
     <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#efdfc9] py-20 lg:py-32">
  <div className="max-w-[1500px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

    {/* LEFT CONTENT */}
    <div className="order-1">
      <p className="text-[#b2873a] tracking-widest text-sm mb-4 lg:mb-6">
        Company
      </p>

      {/* desktop size unchanged */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1e1e1e] mb-6 lg:mb-8">
        What Sets Reliance Realty Apart?
      </h2>

      <p className="text-base lg:text-lg text-[#2b2b2b] leading-relaxed mb-5 lg:mb-6">
        At Reliance Realty, we manage your property with the same care, attention, and commitment as we do our own. As experienced property owners and managers, we take a proactive, hands-on approach to every building we oversee—because we understand what’s at stake.
      </p>

      <p className="text-base lg:text-lg text-[#2b2b2b] leading-relaxed mb-5 lg:mb-6">
        Our comprehensive management solution blends cutting-edge marketing strategies with proven operational practices tailored to New York City’s competitive real estate market. Our expert team leverages deep industry knowledge to reduce operating expenses, increase cash flow, and maximize your property’s long-term value.
      </p>

      <p className="text-base lg:text-lg text-[#2b2b2b] leading-relaxed mb-5 lg:mb-10">
        From tenant relations and regular on-site inspections to environmental compliance, energy management, and financial reporting, we handle the full spectrum of property management with precision. We utilize top-tier software tools to streamline operations, ensure transparency, and deliver detailed accounting and performance reports.
      </p>

      <p className="text-base lg:text-lg text-[#2b2b2b] leading-relaxed mb-6 lg:mb-10">
        Whether it’s navigating complex regulations, managing insurance and financing, or optimizing real estate tax strategies, Reliance Realty provides the expertise and insight you need.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    {/* desktop height untouched */}
    <div className="order-2 relative w-full h-[350px] sm:h-[450px] lg:h-[700px] rounded-[30px] overflow-hidden shadow-xl">
      <Image
        src="/companey-sec.webp"
        alt="City"
        fill
        className="object-cover"
      />
    </div>

  </div>

  {/* SECOND TEXT BLOCK */}
  <div className="max-w-[1500px] mx-auto px-6 lg:px-8 mt-14 lg:mt-0">
    <h2 className="text-[#000000] text-2xl font-semibold lg:text-3xl mb-4">
      RESPONSIVENESS MATTERS
    </h2>

    <p className="text-base lg:text-lg mb-4">
      Why do most people switch property management companies? In most cases, it’s because of poor responsiveness and lack of follow-through.
    </p>

    <p className="text-base lg:text-lg mb-4">
      Whether you’re an owner, board member, tenant, or shareholder, you deserve timely answers—whether by phone, text, email, or voicemail.
    </p>

    <p className="text-base lg:text-lg mb-4">
      At Reliance Realty responsiveness isn’t a feature — it’s the foundation of everything we do.
    </p>
  </div>
</section>
      <section>
        <TeamSection />
      </section>
      <Footer />
    </div>
  );
}
