import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Navbar />

      {/* ================= BANNER ================= */}
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
            Chuck Newman
          </h1>

          <div className="flex gap-2 mt-3 text-sm opacity-90">
            <span>Home</span>
            <span>/</span>
            <span>Chuck Newman</span>
          </div>
        </div>
      </div>

      {/* ================= PROFILE SECTION ================= */}
      <section className="bg-[#efe1cc] py-12 lg:py-20 px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#e6cfab] rounded-3xl shadow-xl overflow-hidden">

            {/* ===== TOP IMAGE AREA ===== */}
            <div className="bg-[#bda888] flex justify-center items-center py-10 lg:py-16">
              <Image
                src="/team-5.webp"
                alt="Chuck Newman"
                width={260}
                height={260}
                className="rounded-2xl object-cover shadow-2xl"
              />
            </div>

            {/* ===== NAME STRIP ===== */}
            <div
              className="text-center py-6 text-black font-semibold tracking-wider"
              style={{
                background: "radial-gradient(#F4C688, #9B6B27)",
                clipPath: "polygon(0 0,100% 0,100% 85%,50% 100%,0 85%)",
              }}
            >
              <h2 className="text-xl lg:text-2xl">CHUCK NEWMAN</h2>
            </div>

            {/* ===== CONTENT ===== */}
            <div className="px-6 lg:px-16 py-10 text-[#3c2f1e]">
              <p className="text-base lg:text-lg leading-relaxed mb-6">
                <b>Real Estate Specialist | Reliance Realty</b> Chuck Newman has
                been a key part of Reliance Realty since 2012, known for
                delivering strong results across New York City's complex rental
                market. With over a decade of experience, he specializes in
                maximizing rental income through unit conversions, renovations,
                and innovative leasing strategies.
              </p>

              <p className="text-base lg:text-lg leading-relaxed mb-6">
                He began his career managing a 300-unit doorman building in
                Turtle Bay, later scaling this strategy across Upper Manhattan,
                the Bronx and Queens—consistently increasing NOI and
                outperforming projections for major landlords and developers.
              </p>

              <h3 className="font-semibold text-xl mt-8 mb-3">
                Expertise Includes:
              </h3>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base lg:text-lg">
                <li>Housing Voucher Strategy</li>
                <li>Portfolio Positioning & Rent Roll Improvement</li>
                <li>Value-Add Renovations</li>
                <li>Strategic Asset Planning</li>
              </ul>

              <p className="text-base lg:text-lg leading-relaxed mt-6">
                From Midtown luxury buildings to workforce housing near Columbia
                and Mount Sinai, Chuck brings the insight and execution needed
                to unlock hidden value.
              </p>

              {/* ===== NEXT MEMBER BUTTON ===== */}
              <div className="flex justify-center lg:justify-end mt-10">
                <Link
                  href="/our-team/amanda-schmieder"
                  className="inline-flex items-center justify-center
                  text-black font-semibold uppercase
                  text-sm lg:text-base px-6 py-3 rounded-full
                  transition hover:brightness-110"
                  style={{ background: "radial-gradient(#F4C688, #bf904f)" }}
                >
                  Amanda Schneider <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}