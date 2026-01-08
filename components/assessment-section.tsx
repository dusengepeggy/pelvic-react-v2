"use client";

const container = "w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10";

export default function AssessmentSection() {
  return (
    <section className="bg-[#E8F4F3] py-20">
      <div className={container}>
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left side - Illustration */}
            <div className="relative bg-gradient-to-br from-[#5FA5A0] to-[#2D6A66] p-16 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Stylized pelvic diagram */}
                <div className="relative aspect-square">
                  {/* Main container */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      {/* Background circle */}
                      <circle 
                        cx="100" 
                        cy="100" 
                        r="80" 
                        fill="rgba(255,255,255,0.1)" 
                        stroke="rgba(255,255,255,0.3)" 
                        strokeWidth="2"
                      />
                      
                      {/* Stylized pelvic shape */}
                      <path
                        d="M 60 80 Q 60 60, 80 60 L 120 60 Q 140 60, 140 80 L 140 120 Q 140 140, 120 140 L 80 140 Q 60 140, 60 120 Z"
                        fill="rgba(255,255,255,0.2)"
                        stroke="white"
                        strokeWidth="2"
                      />
                      
                      {/* Center indicator */}
                      <circle cx="100" cy="100" r="15" fill="white" opacity="0.8" />
                      <circle cx="100" cy="100" r="8" fill="rgba(47,106,102,0.8)" />
                      
                      {/* Decorative lines */}
                      <line x1="100" y1="40" x2="100" y2="70" stroke="white" strokeWidth="2" opacity="0.6" />
                      <line x1="100" y1="130" x2="100" y2="160" stroke="white" strokeWidth="2" opacity="0.6" />
                      <line x1="40" y1="100" x2="70" y2="100" stroke="white" strokeWidth="2" opacity="0.6" />
                      <line x1="130" y1="100" x2="160" y2="100" stroke="white" strokeWidth="2" opacity="0.6" />
                      
                      {/* Text labels */}
                      <text x="100" y="30" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">
                        Assessment
                      </text>
                      <text x="100" y="180" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">
                        Treatment
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-[#163B5A] mb-6 leading-tight">
                Assessment and treatment of pelvic floor dysfunctions
              </h2>
              
              <p className="text-lg text-[#60839f] leading-relaxed mb-8">
                Read about how healthcare personnel can evaluate and provide you with proper treatment for various pelvic floor problems. Here, health professionals can explore approaches to pelvic floor conditions.
              </p>

              <button className="px-8 py-4 bg-[#163B5A] text-white rounded-full font-semibold text-lg hover:bg-[#0f2a42] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 self-start">
                Go to course
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

