"use client";

const container = "w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10";

export default function EducationSection() {
  return (
    <section
      className={`${container} rounded-3xl shadow-xl overflow-hidden relative bg-cover bg-center py-2 lg:py-8`}
      style={{
        backgroundImage:
          "url(https://nekib.helsekompetanse.no/wp-content/uploads/2022/10/AdobeStock_259480195_mobil-short-v3-scaled.jpg)",
      }}
    >
        <div className="p-8 lg:p-10 flex flex-col justify-center bg-white rounded-3xl w-fit">
          <h2 className="text-4xl font-bold text-[#163B5A] mb-4">
            Patient Education
          </h2>

          <p className="text-base text-[#163B5A] leading-relaxed mb-6">
            Here you will find videos, audio files and brochures.
          </p>

          <button className="w-full px-6 py-3 bg-[#163B5A] text-white rounded-full font-semibold text-base hover:bg-[#0f2a42] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 self-start">
            See more
          </button>
        </div>
    </section>
  );
}

