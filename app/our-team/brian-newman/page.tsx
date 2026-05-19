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
            Company
          </h1>

          {/* Breadcrumb */}
          <div className="flex gap-2 mt-3 text-sm opacity-90">
            <span className="text-white cursor-pointer">Home</span>
            <span>/</span>
            <span className="text-white">Brian Newman</span>
          </div>
        </div>
      </div>

      <section className="bg-[#efe1cc] py-16">
        <div className="max-w-[1450px] mx-auto px-6">
          <div className="bg-[#e6cfab] rounded-2xl p-6 shadow-md">
            <div className="relative bg-[#bda888] h-[410px] flex justify-center">
              <div className="flex items-center justify-center">
                <Image
                  src="/team-1.webp"
                  alt="Brian Newman"
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
              <h2 className="text-[22px]">BRIAN NEWMAN</h2>
            </div>

            <div className="bg-[#f4f4f4] p-6 mt-8 rounded-lg flex justify-center">
              <div className="bg-white shadow-xl border w-full max-w-[850px] h-[900px]">
                <iframe
                  src="/brian-newman.pdf"
                  title="Brian Newman PDF"
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="flex justify-start mt-6">
              <Link
                href="/our-team/danny-newman"
                className="relative inline-flex items-center justify-center
               text-black font-bold tracking-widest uppercase
               text-[16px] px-6 py-3 rounded-full
               transition hover:brightness-110"
                style={{ background: "radial-gradient(#F4C688, #bf904f)" }}
              >
                <span className="mr-2">←</span> Danny Newman{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
