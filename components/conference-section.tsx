"use client";

import { Calendar, MapPin } from "lucide-react";

const container = "w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10";

export default function ConferenceSection() {
  return (
    <section className="bg-white py-20">
      <div className={container}>
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1600&h=900&fit=crop')",
            }}
          >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#163B5A]/90 via-[#2D6A66]/85 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full px-12 lg:px-16">
              {/* Left side - Info cards */}
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium opacity-90">Date</p>
                      <p className="text-xl font-bold">June 1-2, 2026</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium opacity-90">Location</p>
                      <p className="text-xl font-bold">Alta, Norway</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Main content */}
              <div className="flex flex-col justify-center text-white">
                <div className="text-6xl font-bold mb-4 opacity-90">2026</div>
                <h2 className="text-4xl font-bold mb-6 leading-tight">
                  8th Arctic Pelvic Floor Meeting
                </h2>
                <p className="text-lg leading-relaxed mb-8 opacity-90">
                  Join us for the 8th Arctic Pelvic Floor Meeting in the beautiful city of Alta. Connect with healthcare professionals and researchers in the field of pelvic floor health.
                </p>
                <button className="px-8 py-4 bg-white text-[#163B5A] rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 self-start">
                  More Info...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

