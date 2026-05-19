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
            Amanda Schmieder
          </h1>

          {/* Breadcrumb */}
          <div className="flex gap-2 mt-3 text-sm opacity-90">
            <span className="text-white cursor-pointer">Home</span>
            <span>/</span>
            <span className="text-white">Amanda Schmieder</span>
          </div>
        </div>
      </div>

      <section className="bg-[#efe1cc] py-16">
        <div className="max-w-[1450px] mx-auto px-6">
          <div className="bg-[#e6cfab] rounded-2xl p-6 shadow-md">
            <div className="relative bg-[#bda888] h-[410px]  flex justify-center">
              <div className="flex items-center justify-center">
                <Image
                  src="/team-4.webp"
                  alt="Amanda Schmieder"
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
              <h2 className="text-[22px]">AMANDA SCHMIEDER</h2>
            </div>
            {/* Content */}
            <div className="mt-6 text-[18px] leading-6 text-[#3c2f1e]">
              <p className="mt-4">
                Amanda Schmieder Cummings is from Atlanta and has enjoyed living
                in NYC for 21 years. She moved here after earning an M.F.A. in
                Acting from UC-Irvine and brings that commanding stage presence
                to the city streets. Amanda's strength when navigating the New
                York Real Estate Market is her straightforward, down-to-earth
                approach to dealing with others. She is extremely hardworking
                and devoted to her clients. Having spent over half of her life
                in the customer service industry she prides herself on finding
                the client exactly what they need.
              </p>
            </div>

            {/* Button */}
            <div className="flex justify-between mt-6">
            <Link
  href="/our-team/chuck-newman"
  className="relative inline-flex items-center justify-center
             text-black font-bold tracking-widest uppercase
             text-[16px] px-6 py-3 rounded-full
             transition hover:brightness-110"
  style={{ background: "radial-gradient(#F4C688, #bf904f)" }}
>
  <span className="mr-2">←</span>
  Chuck Newman
</Link>
              <Link
                href="/our-team/josh-erdman"
                className="relative inline-flex items-center justify-center
               text-black font-bold tracking-widest uppercase
               text-[16px] px-6 py-3 rounded-full
               transition hover:brightness-110"
                style={{ background: "radial-gradient(#F4C688, #bf904f)" }}
              >
                Josh Erdman <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
