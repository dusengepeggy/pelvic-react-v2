"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const container = "w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10";

export default function ExerciseSection() {
  return (
      <section className={`${container} grid grid-cols-1 items-center justify-center gap-8 rounded-4xl bg-white px-4 pb-12 pt-10 shadow-md sm:px-6 md:pb-16 md:pt-14 lg:grid-cols-2 lg:px-10`}>
        <Image
          src="/media/image/bekkenbunn.jpg"
          alt="Pelvic Floor Anatomy"
          width={350}
          height={300}
          className="rounded-2xl shadow-xl object-cover"
        />

        <div>
          <h2 className="text-4xl font-bold text-[#163B5A] leading-20">
            Pelvic Floor Exercises
          </h2>

          <h3 className="text-xl font-bold text-[#163B5A]">
            Learn to strengthen the pelvic floor with targeted exercises
          </h3>

          <p className="text-[#163B5A] text-base leading-normal py-2">
            The pelvic floor consists of muscles that support the pelvic organs. Regular training can prevent and treat problems.
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <button className="px-8 py-4 bg-[#163B5A] text-white rounded-2xl font-semibold hover:bg-[#0f2a42] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              See exercises
            </button>

            <button className="px-8 py-4 bg-white border-3 border-[#42E881] text-[#008832] rounded-2xl font-semibold hover:bg-[#5FA5A0] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group">
              Find a physiotherapist
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>
  );
}

