"use client";

import Image from "next/image";
import Navbar from "./components/Header";
import PropertiesSection from "./sections/PropertiesSection";
import ServicesSection from "./sections/ServicesSection";
import FounderMessage from "./sections/FounderMessage";
import ServicesSec from "./sections/ServicesSec";
import TeamSection from "./sections/TeamSection";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />

        {/* HERO SECTION */}
        <section className="relative w-full h-[700px] lg:h-[800px] overflow-hidden">
          {/* Background Image */}
          <motion.div
            initial={{ x: -800, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/banner.png"
              alt="City"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          {/* HERO CONTENT */}
          <div className="relative max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-32 h-full">
            <div className="pt-28 lg:pt-32 grid lg:grid-cols-2 gap-10 lg:gap-0 items-start">
              {/* LEFT TEXT */}
              <div className="text-white max-w-2xl lg:max-w-4xl">
                <h1
                  className="
          text-3xl sm:text-4xl lg:text-4xl
          font-semibold leading-[1.2] tracking-wide
        "
                >
                  RELIANCE REALTY IS AN <br className="hidden sm:block" />
                  INDUSTRY LEADER IN PROPERTY <br className="hidden sm:block" />
                  MANAGEMENT
                </h1>
              </div>

              {/* RIGHT TEXT */}
              <div className="text-white/90 max-w-md lg:ml-auto">
                <p className="text-base sm:text-lg leading-relaxed">
                  We leverage the latest tools and cutting-edge technology to
                  deliver exceptional service to our tenants and maximize our
                  owners’ return on investment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
   <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#efdfc9] py-16 sm:py-20 lg:py-28 xl:py-32">
  <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-24 items-center">

    {/* LEFT CONTENT — FIRST ON MOBILE */}
    <motion.div
      initial={{ x: -120, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="order-1"
    >
      <p className="text-[#b2873a] tracking-[0.25em] text-xs sm:text-sm mb-4 sm:mb-6">
        RELIANCE REALTY
      </p>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-semibold text-[#1e1e1e] mb-6 sm:mb-8">
        ABOUT US
      </h2>

      <p className="text-base sm:text-lg text-[#2b2b2b] leading-relaxed mb-5 sm:mb-6">
        At Reliance Realty, we don’t just manage properties — we manage peace of mind.
      </p>

      <p className="text-base sm:text-lg text-[#2b2b2b] leading-relaxed mb-5 sm:mb-6">
        With over <span className="font-semibold">25 years of hands-on experience</span>, 
        we’ve earned the trust of some of NYC’s most respected landlords. From walk-ups 
        to multifamily buildings across all five boroughs, we’ve seen it all — and solved it all.
      </p>

      <p className="text-base sm:text-lg text-[#2b2b2b] leading-relaxed mb-8 sm:mb-10">
        What sets us apart? <span className="font-semibold">Partnership.</span>
        <br />
        We act as a true extension of the owner. Whether it’s a routine repair or a major capital project,
        our clients trust us to make smart decisions so they can focus on what they do best — finding their 
        next deal, growing their portfolio, or enjoying more freedom.
      </p>

      {/* BUTTON */}
      <button
        className="inline-flex items-center justify-center
        text-black font-bold tracking-widest uppercase
        text-sm sm:text-base lg:text-[18px]
        px-5 sm:px-6 py-2.5 sm:py-3
        rounded-full transition-all hover:brightness-110"
        style={{ background: "radial-gradient(#F4C688, #9B6B27)" }}
      >
        Contact
        <span className="ml-2 text-xl sm:text-2xl lg:text-[28px] leading-none font-bold">»</span>
      </button>
    </motion.div>

    {/* RIGHT IMAGE — SECOND ON MOBILE */}
    <motion.div
      initial={{ x: 120, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] lg:h-[560px] xl:h-[640px] rounded-[22px] sm:rounded-[26px] lg:rounded-[30px] overflow-hidden shadow-xl order-2"
    >
      <Image
        src="/about-us.webp"
        alt="About Reliance Realty"
        fill
        className="object-cover"
      />
    </motion.div>

  </div>
</section>
      <PropertiesSection />
      <ServicesSection />
      <FounderMessage />
      <ServicesSec />
      <TeamSection />
      <Footer />
    </>
  );
}
