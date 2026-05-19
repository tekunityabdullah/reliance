import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";
export default function page() {
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
            Danny Newman
          </h1>

          {/* Breadcrumb */}
          <div className="flex gap-2 mt-3 text-sm opacity-90">
            <span className="text-white cursor-pointer">Home</span>
            <span>/</span>
            <span className="text-white">Danny Newman</span>
          </div>
        </div>
      </div>

      <section className="bg-[#efe1cc] py-16">
        <div className="max-w-[1450px] mx-auto px-6">
          <div className="bg-[#e6cfab] rounded-2xl p-6 shadow-md">
            <div className="relative bg-[#bda888] h-[410px] flex justify-center">
              <div className="flex items-center justify-center">
                <Image
                  src="/team-2.webp"
                  alt="Danny Newman"
                  width={260}
                  height={260}
                  className="rounded-2xl object-cover shadow-lg "
                />
              </div>
            </div>

            <div
              className="text-center py-8 relative text-black font-semibold tracking-wide"
              style={{
                background: "radial-gradient(#F4C688, #9B6B27)",
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
              }}
            >
              <h2 className="text-[22px]">DANNY NEWMAN</h2>
            </div>
            {/* Content */}
            <div className="mt-6 text-[18px] leading-6 text-[#3c2f1e]">
              <p className="mt-4">
                Josh moved to New York City in 1998 and has spent the past eight
                years helping clients buy, sell, and rent homes across the city.
                Originally from Atlanta, he blends Southern charm with deep
                local expertise—especially when navigating the complexities of
                co-op and condo boards—to match clients with homes that fit
                their budget and lifestyle. With international experience in NYC
                and Hong Kong and a background as a pastry chef, Josh brings
                exceptional service, meticulous attention to detail, and hard
                work to every transaction. Trust him to find your next home—and
                the best bakery nearby. Josh Erdman Licensed Real Estate
                Salesperson Reliance Realty LLC 579 5th Avenue, FL 2 New York,
                NY 10017 jerdman@reliance.nyc Cell (917) 848-3454
              </p>
            </div>

            {/* Button */}
             <div className="flex justify-between mt-6">
              <Link
                href="/our-team/josh-erdman"
                className="relative inline-flex items-center justify-center
               text-black font-bold tracking-widest uppercase
               text-[16px] px-6 py-3 rounded-full
               transition hover:brightness-110"
                style={{ background: "radial-gradient(#F4C688, #bf904f)" }}
              >
                <span className="mr-2">←</span> Josh Erdman{" "}
                
              </Link>
              <Link
                href="/our-team/brian-newman"
                className="relative inline-flex items-center justify-center
               text-black font-bold tracking-widest uppercase
               text-[16px] px-6 py-3 rounded-full
               transition hover:brightness-110"
                style={{ background: "radial-gradient(#F4C688, #bf904f)" }}
              >
                 Brian Newman <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
