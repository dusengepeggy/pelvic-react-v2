"use client";

import Image from "next/image";

const container = "w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10";

const organizations = [
  {
    name: "Barselambassadørene",
    logo: "/logos/ba-logo.svg",
  },
  {
    name: "Vulvaforeningen",
    logo: "/logos/vulvaforum.svg",
  },
  {
    name: "Kreftforeningen",
    logo: "/logos/american-urological-association.png",
  },
  {
    name: "KPRF Foreningen",
    logo: "/logos/european-association-of-urology.svg",
  },
  {
    name: "PUROILO",
    logo: "/logos/norsk-fysioterapiforbund-faggruppe-for-kvinnehelse.png",
  },
  {
    name: "Prostatakreftforeningen",
    logo: "/logos/international-continence-society.svg",
  },
  {
    name: "Norsk Rettcolitt- og Crohns Forening",
    logo: "/logos/international-pelvic-pain-society.svg",
  },
  {
    name: "Blærekreftforeningen",
    logo: "/logos/international-urogynecological-association.svg",
  },
  {
    name: "Vulvulini Norge",
    logo: "/logos/pelvic-obstetric-and-gynaecological-physiotherapy.png",
  },
  {
    name: "ITMS Forbundet",
    logo: "/logos/uroterapeutisk-forening.png",
  },
  {
    name: "Barnekreftsforeningen",
    logo: "/logos/nsfs-faggruppe-av-sykepleiere-i-urologi.png",
  },
];

export default function OrganizationsSection() {
  return (
    <section className="bg-gradient-to-b from-white to-[#E8F4F3] py-20">
      <div className={container}>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#163B5A] mb-6">
            Patient and User Organizations
          </h2>
          <p className="text-lg text-[#60839f] max-w-3xl mx-auto leading-relaxed">
            Patient and user organizations are advocacy groups that work to raise awareness with diseases and treatment-related safety issues, as well as improve life for patients with kidney and lower urinary tract disorders. Below you will find an overview of relevant organizations offering coordinated aid to patients.
          </p>
        </div>

        {/* Organizations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center min-h-[140px] group"
            >
              <div className="relative w-full h-16 flex items-center justify-center">
                <Image
                  src={org.logo}
                  alt={org.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

