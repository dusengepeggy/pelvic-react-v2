"use client";

import Image from "next/image";

const container = "w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10";

export default function EducationSection() {
  return (
    <section className={` ${container} bg-white rounded-3xl shadow-xl overflow-hidden`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left side - Text content */}
        <div className="p-8 lg:p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#163B5A] mb-4">
            Patient Education
          </h2>

          <p className="text-base text-[#60839f] leading-relaxed mb-6">
            Here you will find videos, audio files and brochures.
          </p>

          <button className="px-6 py-3 bg-[#163B5A] text-white rounded-full font-semibold text-base hover:bg-[#0f2a42] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 self-start">
            See more
          </button>
        </div>

        {/* Right side - Image */}
        <div className="relative h-[400px] lg:h-auto">
          <Image
            src="https://nekib.helsekompetanse.no/wp-content/uploads/2022/10/AdobeStock_259480195_mobil-short-v3-scaled.jpg"
            alt="Patient using educational resources on mobile device"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

