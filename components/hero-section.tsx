"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const container = "w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10";

const healthConditions = [
  {
    id: 1,
    title: "Urinary\nIncontinence",
    icon: "/image-7.svg",
  },
  {
    id: 2,
    title: "Urinary\nRetention",
    icon: "/vector.svg",
  },
  {
    id: 3,
    title: "Fecal\nIncontinence",
    icon: "/fecalincontinence.svg",
  },
  {
    id: 4,
    title: "Constipation",
    icon: "/constipation.svg",
  },
  {
    id: 5,
    title: "Pelvic Pain",
    icon: "/belly--1--1.svg",
  },
  {
    id: 6,
    title: "Pregnancy &\nPostpartum",
    icon: "/vector-2.svg",
  },
];

export default function HeroSection() {
  return (

      <div 
       style={{ background: "#8bb4b6" }}
      className={`${container} grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center ${poppins.className} rounded-4xl my-4 mx-6 md:mx-10 lg:mx-12 relative px-4 pb-12 pt-10 sm:px-6 md:pb-16 md:pt-14 lg:px-10`}>
        <div className="flex w-full  flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-full bg-white/85">
              <Image
                src="/logopelvic.svg"
                alt="Pelvic Floor Portal Logo"
                width={60}
                height={60}
                className="object-contain"
                priority
              />
            </div>
            <div className="pt-1">
              <h1 className="text-[24px] font-bold leading-tight text-[#0f3e62] sm:text-[26px] lg:text-[35px]">
                Welcome to the Pelvic Floor Portal
              </h1>
            </div>
          </div>

          <p className="text-[15px] leading-relaxed text-[#0f3e62]">
            This is a knowledge portal where you will find up-to-date, quality-assured
            information on conditions, assessment and treatment within incontinence and
            pelvic floor disorders for both women and men. Here we include that the portal
            applies to both genders.
          </p>
          <p className="text-[13px] font-semibold text-[#0f3e62]">
            Presented by the National Center for Pelvic Floor Health (NBH)
          </p>
        </div>

        <div className="flex w-full justify-center lg:justify-end">
          <div className="flex w-full max-w-[560px] flex-col rounded-3xl border-2 border-white/70 bg-[#dbe7e6] p-4 shadow-sm sm:p-5">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {healthConditions.map((condition) => (
                <div
                  key={condition.id}
                  className="flex min-h-[136px] flex-col items-center justify-start rounded-2xl border border-[#e1e7ed] bg-[#f7f9fb] px-5 py-9 text-center"
                >
                  <div className="mb-3 flex h-14 w-14 items-center justify-center">
                    <Image
                      src={condition.icon}
                      alt={condition.title.replace("\n", " ")}
                      width={40}
                      height={40}
                      className="object-center"
                    />
                  </div>
                  <div className="mb-3 h-px w-full bg-linear-to-r from-transparent via-[#5FA5A0] to-transparent" />
                  <h3 className="whitespace-pre-line text-[13px] font-semibold leading-snug text-[#0f3e62]">
                    {condition.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}

