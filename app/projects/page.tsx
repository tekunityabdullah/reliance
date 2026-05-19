import React from "react";
import Navbar from "../components/Header";
import Image from "next/image";
import TeamSection from "../sections/TeamSection";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div className="bg-white text-[#1f1f1f]">
      <Navbar />

      {/* Banner */}
      <section className="relative w-full h-[360px] overflow-hidden">
        <Image
          src="/banner-sec.png"
          alt="Projects Banner"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-3xl lg:text-4xl font-semibold tracking-wide">
            Projects
          </h1>

          <div className="flex gap-2 mt-3 text-sm opacity-90">
            <span>Home</span>
            <span>/</span>
            <span>Projects</span>
          </div>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="bg-[#efdfc9] py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20">

          {/* RIGHT CONTENT → FIRST ON MOBILE */}
          <div
            className="
            order-1 lg:order-2
            h-[85vh] overflow-y-auto pr-2
            lg:h-auto lg:overflow-visible lg:pr-6
            "
          >
            <p className="text-[#b2873a] tracking-[4px] uppercase text-sm mb-3">
              RELIANCE REALTY
            </p>

            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
              CASE STUDY
            </h2>

            <h3 className="text-xl lg:text-2xl font-semibold mb-6">
              Transform Your Building into a High-Value Asset
            </h3>

            <p className="text-base lg:text-lg leading-relaxed mb-6 text-[#2b2b2b]">
              Since the enactment of the Housing Stability and Tenant Protection
              Act of 2019, many NYC landlords have faced steep challenges
              navigating the transformed rent stabilization landscape and
              declining property values. While selling may seem like the easiest
              way out, partnering with Reliance Realty often yields far greater
              long-term rewards.
            </p>

            <p className="text-base lg:text-lg leading-relaxed mb-10 text-[#2b2b2b]">
              Our expert, hands-on management approach unlocks hidden value,
              stabilizes operations, and dramatically improves building
              performance. Whether you plan to hold for cash flow or prepare for
              a profitable future sale, we help you achieve your goals.
            </p>

            <h3 className="text-lg lg:text-xl font-semibold mb-3">
              Turning Around a Troubled Portfolio
            </h3>

            <p className="text-base lg:text-lg leading-relaxed mb-6 text-[#2b2b2b]">
              In April 2025, Reliance Realty assumed management of a distressed
              5-building, 139-unit portfolio in Washington Heights. The
              properties had over 500 violations and were close to entering
              HPD’s Alternative Enforcement Program.
            </p>

            <h4 className="text-base lg:text-lg font-semibold mb-3">
              The situation was further complicated by:
            </h4>

            <ul className="list-disc pl-6 space-y-2 text-base lg:text-lg text-[#2b2b2b] mb-10">
              <li>Active tenant association with legal counsel</li>
              <li>Widespread rent non-payment and court actions</li>
              <li>$15,000/month rent reduction orders</li>
            </ul>

            <h4 className="text-base lg:text-lg font-semibold mb-3">
              Our Solution:
            </h4>

            <ul className="list-disc pl-6 space-y-2 text-base lg:text-lg text-[#2b2b2b] mb-10">
              <li>Collaborated with residents to build trust</li>
              <li>Cured all violations and restored compliance</li>
              <li>Recovered $15,000/month income</li>
              <li>Negotiated back rent with agencies</li>
              <li>Secured funding for repairs and compliance</li>
            </ul>

            <h3 className="text-lg lg:text-xl font-semibold mb-4">
              The Result
            </h3>

            <p className="text-base lg:text-lg leading-relaxed mb-10 text-[#2b2b2b]">
              The portfolio is now financially stable, code-compliant and
              generating strong returns. A high-risk liability became a thriving
              investment.
            </p>

            <div className="space-y-4 pb-20 lg:pb-0">
              <h3 className="text-lg lg:text-xl font-semibold">
                Your Building Can Be Next
              </h3>

              <p className="text-base lg:text-lg text-[#2b2b2b]">
                Let Reliance Realty design a tailored plan to stabilize and
                enhance your property and maximize long-term value.
              </p>

              <p className="font-semibold text-base lg:text-lg">
                Contact us today to start the transformation.
              </p>
            </div>
          </div>

          {/* LEFT IMAGES */}
          <div className="order-2 lg:order-1 flex flex-col gap-6 lg:gap-8">
            <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[380px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/project-sec-1.webp"
                alt="City skyline"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[900px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/project-sec-2.webp"
                alt="Responsiveness"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/25 flex flex-col justify-center px-6 lg:px-10">
                <h3 className="text-white text-2xl lg:text-[34px] leading-tight font-semibold">
                  RESPONSIVENESS <br /> ISN’T OPTIONAL
                </h3>
                <p className="text-white/90 mt-3 text-base lg:text-lg">
                  Every moment shapes trust.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <TeamSection />
      <Footer />
    </div>
  );
}