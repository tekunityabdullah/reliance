"use client";

import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    image: "/we-do-1.webp",
    title: "Property Management",
    description:
      "Managing apartment buildings in New York City requires more than just organization—it demands deep expertise.",
  },
  {
    image: "/we-do-2.webp",
    title: "Apartment Rentals/Sales",
    description:
      "At Reliance Realty, we know New York City like no one else. Whether you’re seeking a luxury penthouse in Manhattan.",
  },
  {
    image: "/we-do-3.webp",
    title: "Building Sales",
    description:
      "When it comes to selling your property, experience, discretion, and the right connections make all the difference.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#efdfc9] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >

          {/* Heading */}
          <div className="text-center max-w-[900px] mx-auto">
            <p className="text-[#c9a84c] tracking-[0.25em] uppercase mb-3 sm:mb-4 text-xs sm:text-sm">
              Our Services
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-semibold text-[#2b2115] mb-5 sm:mb-6">
              WHAT WE DO
            </h2>

            <p className="text-[#3b3b3b] leading-relaxed text-base sm:text-lg">
              Property management is all about making the right calls. Whether it’s
              choosing tenants, handling repairs, or interpreting rent laws, every
              decision matters—and our clients count on us to get it right.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-12 sm:mt-16 lg:mt-20">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}