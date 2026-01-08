"use client";

import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const container = "w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10";

const testimonials = [
  {
    text: "Physiotherapy helped me understand my body better and significantly reduced the pain.",
    attribution: "Woman, 35 years old",
  },
  {
    text: "I thought it was normal to have pain, but after talking to the doctor I found out it wasn't.",
    attribution: "Woman, 28 years old",
  },
  {
    text: "After prostate surgery I had leakage problems, but pelvic floor exercises helped me regain control.",
    attribution: "Man, 58 years old",
  },
  {
    text: "It was difficult to talk about, but getting help was the best thing I did.",
    attribution: "Woman, 42 years old",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className={container}>
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-[#163B5A] mb-3">
          Patient stories and experiences
        </h2>
        <p className="text-base font-semibold text-[#163B5A] mb-2">
          Hear from others who have experienced pelvic floor problems
        </p>
        <p className="text-sm text-[#163B5A] max-w-3xl mx-auto">
          These stories show that you are not alone, and that help is available. Many have found ways to manage their problems.
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-[#E8F4F3] to-[#F0F8F7] rounded-3xl p-8 shadow-lg relative overflow-hidden">
          {/* Decorative quote icon */}
          <div className="absolute top-8 left-8 opacity-10">
            <Quote className="w-24 h-24 text-[#5FA5A0]" />
          </div>

          {/* Testimonial content */}
          <div className="relative z-10">
            <blockquote className=" text-[#163B5A]  leading-relaxed mb-4 italic">
              "{currentTestimonial.text}"
            </blockquote>
            <cite className="text-base text-[#2D6A66] text-[13px] font-semibold  not-italic">
              — {currentTestimonial.attribution}
            </cite>
          </div>

          {/* Pagination dots */}

        </div>
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? "bg-[#163B5A] w-8"
                  : "bg-[#A5D6D3] hover:bg-[#5FA5A0]/50"
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        {/* View more button */}
        <div className="text-center mt-8">
          <button className="px-8 py-4 bg-[#163B5A] text-white rounded-2xl font-semibold hover:bg-[#0f2a42] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2">
            View more stories
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

