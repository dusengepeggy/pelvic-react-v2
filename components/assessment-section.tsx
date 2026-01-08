"use client";

const container = "w-full max-w-[1200px]  mx-auto p-4 sm:p-6 lg:p-10 bg-[#D1E7FF] rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row  md:gap-10 items-center";

export default function AssessmentSection() {
  return (
    <section className={container}>
      <div className="bg-white rounded-3xl p-2 md:p-4 flex items-center justify-center shrink-0 min-w-[200px]">
        <img
          src="/assessment.png"
          alt="Assessment and treatment of pelvic floor dysfunctions"
          className="w-full max-w-[300px] h-auto object-contain"
          width={300}
          height={300}
        />
      </div>

      <div className="flex flex-col justify-center flex-1">
        <h2 className="text-4xl font-bold text-[#163B5A] mb-6 leading-tight">
          Assessment and treatment of pelvic floor dysfunctions
        </h2>

        <p className="text-[#163B5A] leading-relaxed mb-8">
          Read about how healthcare personnel can evaluate and provide you with proper treatment for various pelvic floor problems. Here, health professionals can explore approaches to pelvic floor conditions.
        </p>

        <button className="px-8 py-4 bg-[#163B5A] text-white rounded-2xl font-semibold hover:bg-[#0f2a42] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 self-start">
          Go to course
        </button>
      </div>
    </section>
  );
}

