"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FounderMessage() {
  return (
    <section className="bg-[#efdfc9] py-16 sm:py-20 lg:py-24 overflow-hidden">

      <motion.div
        className="max-w-[1480px] mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-24 items-start"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >

        {/* TEXT FIRST ON MOBILE */}
        <div className="order-1 lg:order-2 lg:max-w-xl">

          <p className="uppercase text-[#b38b47] tracking-[0.25em] mb-3 sm:mb-4 text-xs sm:text-sm">
            Reliance Realty
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[54px] font-semibold text-[#2b2115] mb-6 sm:mb-8">
            A MESSAGE FROM BRIAN NEWMAN, THE FOUNDER OF RELIANCE REALTY:
          </h2>

         
          <div
            className="
              text-[#3b3b3b]
              text-base sm:text-lg lg:text-[20px]
              leading-7 space-y-6 pr-4

              max-h-[300px] sm:max-h-[360px] lg:max-h-none
              overflow-y-auto lg:overflow-visible
              scroll-smooth
            "
          >
            <p>
              <span className="text-blue-600 font-medium">Brian Newman</span> founded Reliance Realty after a decade as Senior Property Manager at Heritage Realty, a boutique firm specializing in the acquisition and repositioning of undervalued real estate. Drawing on that experience, he built Reliance Realty with a clear vision: to provide hands-on, customized property management that delivers real results for property owners.
            </p>

            <p>
              With a portfolio of over 35 buildings and more than 1,200 tenants under management, Brian leads with a deep understanding of the complexities of New York City real estate. His strategic approach is rooted in personalized service—tailoring management plans to each building’s unique goals to maximize ROI.
            </p>

            <p>
              Brian takes great pride in the relationships and trust he has earned from some of NYC’s most prominent landlords, who rely on him to oversee the day-to-day operations of their real estate portfolios with integrity, precision, and care.
            </p>

            <p>
              At the heart of everything Brian does is a commitment to building long-term relationships with the owners he serves and treating every property as if it were his own.
            </p>
          </div>

        </div>

        {/* IMAGES SECOND ON MOBILE */}
        <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
          <div className="relative w-full h-[240px] sm:h-[300px] lg:h-[380px] rounded-3xl overflow-hidden">
            <Image src="/recilance-1.webp" alt="New York Skyline" fill className="object-cover"/>
          </div>

          <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[420px] rounded-3xl overflow-hidden">
            <Image src="/recilance-2.webp" alt="New York Street" fill className="object-cover"/>
          </div>
        </div>

      </motion.div>
    </section>
  );
}