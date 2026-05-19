"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Service = {
  title: string;
  desc: string;
  icon: string;
};

const services: Service[] = [
  {
    title: "ACCOUNTING AND FINANCIAL REPORTS",
    desc: "Reliance Realty provides owners with clear, concise and accurate financial reporting.",
    icon: "/service-1.webp",
  },
  {
    title: "MANAGING AGENTS",
    desc: "We are a family-owned business that embodies boutique management at its finest.",
    icon: "/service-2.webp",
  },
  {
    title: "MANAGEMENT SOFTWARE",
    desc: "Technology is at the heart of everything we do. Our cloud-based property management tools.",
    icon: "/service-3.webp",
  },
  {
    title: "LEASE ADMINISTRATION",
    desc: "As part of our ongoing responsibility as property manager.",
    icon: "/service-4.webp",
  },
];

export default function ServicesSec() {
  const swiperRef = useRef<any>(null);

  return (
    <section className="bg-[#251B0E] text-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-16">
          <div>
            <p className="text-[#9B6B27] tracking-[0.25em] text-sm mb-4">
              OUR SERVICES
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              PROPERTY <br /> MANAGEMENT SERVICES
            </h2>
          </div>

          <button
            className="self-start md:self-auto relative inline-flex items-center justify-center text-black font-bold tracking-widest uppercase text-[16px] md:text-[18px] px-7 py-3 rounded-full hover:brightness-110 transition"
            style={{ background: "radial-gradient(#F4C688, #9B6B27)" }}
          >
            EXPLORE <span className="ml-2 text-[26px]">»</span>
          </button>
        </div>

        {/* SLIDER */}
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {services.map((service, i) => (
              <SwiperSlide key={i}>
                <div className="relative bg-[#30271a] rounded-3xl p-10 h-[320px] flex flex-col justify-between group hover:bg-[#4a3018] transition overflow-hidden">

                  {/* glow hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition shadow-[0_0_70px_rgba(255,170,60,0.25)] rounded-3xl pointer-events-none" />

                  <div>
                    <div className="w-14 h-14 mb-6 relative">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <h3 className="font-semibold text-lg mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <p className="text-[#F4C688] mt-6 font-medium text-lg cursor-pointer">
                    Learn More
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* NAVIGATION ARROWS */}
          <div className="flex justify-center gap-5 mt-12">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-[44px] h-[44px] rounded-full flex items-center justify-center text-black hover:brightness-110 transition"
              style={{ background: "radial-gradient(#F4C688,#9B6B27)" }}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-[44px] h-[44px] rounded-full flex items-center justify-center text-black hover:brightness-110 transition"
              style={{ background: "radial-gradient(#F4C688,#9B6B27)" }}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}