"use client";

import { useEffect, useState } from "react";
import { Search, Moon, Sun, Menu, X } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const container = "w-full max-w-[2100px] mx-auto px-4 sm:px-6 lg:px-10";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Conditions", href: "#" },
  { name: "Resources", href: "#" },
  { name: "About", href: "#" },
  { name: "Help", href: "#" },
];

const FlagUK = () => (
  <svg
    viewBox="0 0 60 30"
    preserveAspectRatio="xMidYMid slice"
    className="absolute inset-0 h-full w-full"
  >
    <clipPath id="uk-outer">
      <path d="M0,0 v30 h60 v-30 z" />
    </clipPath>
    <clipPath id="uk-inner">
      <path d="M30,15 h30 v15 z v-15 h-30 z h-30 v15 z v-15 h30 z" />
    </clipPath>
    <g clipPath="url(#uk-outer)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path
        d="M0,0 L60,30 M60,0 L0,30"
        clipPath="url(#uk-inner)"
        stroke="#C8102E"
        strokeWidth="4"
      />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

const FlagNO = () => (
  <svg
    viewBox="0 0 60 30"
    preserveAspectRatio="xMidYMid slice"
    className="absolute inset-0 h-full w-full"
  >
    <rect width="60" height="30" fill="#BA0C2F" />
    <rect x="18" width="8" height="30" fill="#FFFFFF" />
    <rect y="11" width="60" height="8" fill="#FFFFFF" />
    <rect x="20" width="4" height="30" fill="#00205B" />
    <rect y="13" width="60" height="4" fill="#00205B" />
  </svg>
);

const Flag = ({ code }: { code: "en" | "no" }) =>
  code === "en" ? <FlagUK /> : <FlagNO />;

type ThemeToggleProps = {
  isDarkMode: boolean;
  onToggle: () => void;
  className?: string;
};

const ThemeToggle = ({ isDarkMode, onToggle, className = "" }: ThemeToggleProps) => (
  <button
    type="button"
    onClick={onToggle}
    className={`flex h-11 items-center gap-2 rounded-full bg-[#a9d9f0] px-3 ${className}`}
    aria-label="Toggle theme"
  >
    <Moon className="h-4 w-4 text-[#1f3f62]" fill="#1f3f62" />
    <div className="relative h-[14px] w-[38px] overflow-visible rounded-full bg-[#c9e6f7]">
      <div
        className={`absolute top-1/2 h-[20px] w-[20px] -translate-y-1/2 rounded-full bg-[#0f2c4a] shadow transition-transform duration-200 ${
          isDarkMode ? "translate-x-[20px]" : "translate-x-[-4px]"
        }`}
      />
    </div>
    <Sun className="h-4 w-4 text-[#1f3f62]" fill="#1f3f62" />
  </button>
);

type LanguageSelectorProps = {
  lang: "en" | "no";
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (code: "en" | "no") => void;
  menuTextClass?: string;
};

const LanguageSelector = ({
  lang,
  isOpen,
  onToggle,
  onSelect,
  menuTextClass = "text-[#1e3f63]",
}: LanguageSelectorProps) => (
  <div className="relative">
    <button
      type="button"
      onClick={onToggle}
      className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#1f3f62]/40 bg-white"
      aria-label="Select language"
    >
      <span className="absolute inset-0">
        <Flag code={lang} />
      </span>
    </button>
    {isOpen && (
      <div className="absolute left-1/2 z-60 mt-2 w-44 -translate-x-1/2 rounded-xl border border-[#1f3f62]/20 bg-white shadow-lg lg:left-auto lg:right-0 lg:translate-x-0">
        {(["en", "no"] as const).map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => onSelect(code)}
            className="flex w-full items-center gap-3 px-3 py-2 text-left hover:bg-[#eef6fb]"
          >
            <span className="relative flex h-9 w-9 overflow-hidden rounded-full border border-[#1f3f62]/30">
              <Flag code={code} />
            </span>
            <span className={`text-[14px] font-medium ${menuTextClass}`}>
              {code === "en" ? "English" : "Norsk"}
            </span>
          </button>
        ))}
      </div>
    )}
  </div>
);

export default function NavbarV2() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "no">("en");
  const [activeLink, setActiveLink] = useState<string>(navLinks[0].name);

  useEffect(() => setMounted(true), []);

  const isDarkMode = mounted && resolvedTheme === "dark";

  const handleToggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  const bgGradient = isDarkMode
    ? "linear-gradient(90deg, #0e2334 0%, #18364c 100%)"
    : "linear-gradient(90deg, #4f9c9c 0%, #82b6c2 100%)";

  return (
    <nav
      className={`${poppins.className} w-full text-[#1e3f63]`}
      style={{ background: bgGradient }}
    >
      <div className={container}>
        <div className="flex h-[76px] items-center">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full">
              <Image
                src="/logopelvic.svg"
                alt="Pelvic logo"
                width={56}
                height={56}
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="ml-8 hidden items-center gap-8 text-[16px] font-medium xl:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link.name);
                }}
                className={`leading-none pb-1 ${
                  activeLink === link.name
                    ? "border-b-2 border-[#0f2c4a] text-[#0f2c4a]"
                    : ""
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="ml-auto hidden items-center gap-3 xl:flex">
            <button
              type="button"
              className="flex h-11 items-center justify-center rounded-full bg-[#a9d9f0] px-6 text-[15px] font-semibold text-[#1e3f63] leading-none"
            >
              For Professionals
            </button>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#a9d9f0] text-[19px] leading-none"
              aria-label="Accessibility"
            >
                <Image
                  src="/icons8-woman-in-manual-wheelchair-48.png"
                  alt="Accessibility"
                  width={24}
                  height={24}
                  className="object-contain"
                  priority
                />
            </button>

            <ThemeToggle isDarkMode={isDarkMode} onToggle={handleToggleTheme} />

            <LanguageSelector
              lang={lang}
              isOpen={isLangOpen}
              onToggle={() => setIsLangOpen((p) => !p)}
              onSelect={(code) => {
                setLang(code);
                setIsLangOpen(false);
              }}
            />

            <div className="relative w-[280px]">
              <input
                type="text"
                placeholder="Search"
                className="h-11 w-full rounded-full border border-[#1f3f62] bg-transparent pl-5 pr-11 text-[14px] font-medium text-[#1f3f62] placeholder-[#4f6c89] focus:outline-none"
              />
              <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#3b6a89]" />
            </div>
          </div>

          <div className="ml-auto flex items-center gap-3 xl:hidden">
            <ThemeToggle isDarkMode={isDarkMode} onToggle={handleToggleTheme} />
            <button
              type="button"
              onClick={() => setIsMenuOpen((p) => !p)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1f3f62]/50 text-[#1f3f62]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className="fixed inset-0 z-50 lg:hidden"
            style={{ background: bgGradient }}
          >
            <div className="flex h-full flex-col px-6 py-6 text-[#1e3f63]">
              <div className="flex items-center justify-between">
                <ThemeToggle isDarkMode={isDarkMode} onToggle={handleToggleTheme} />
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1f3f62]/50 text-[#1f3f62]"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mt-10 flex flex-col items-center gap-5 text-center text-[17px] font-medium">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveLink(link.name);
                    }}
                    className={`pb-1 ${
                      activeLink === link.name
                        ? "border-b-2 border-[#0f2c4a] text-[#0f2c4a]"
                        : "text-[#1e3f63]"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="mt-8 flex flex-col items-center gap-4">
                <button
                  type="button"
                  className="flex h-11 items-center justify-center rounded-full bg-[#a9d9f0] px-6 text-[15px] font-semibold text-[#1e3f63] leading-none"
                >
                  For Professionals
                </button>

                <div className="flex w-full flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#a9d9f0] text-[19px] leading-none"
                    aria-label="Accessibility"
                  >
                    <Image
                      src="/icons8-woman-in-manual-wheelchair-48.png"
                      alt="Accessibility"
                      width={24}
                      height={24}
                      className="object-contain"
                      priority
                    />
                  </button>

                  <LanguageSelector
                    lang={lang}
                    isOpen={isLangOpen}
                    onToggle={() => setIsLangOpen((p) => !p)}
                    onSelect={(code) => {
                      setLang(code);
                      setIsLangOpen(false);
                    }}
                    menuTextClass="text-[#1e3f63]"
                  />

                  <div className="relative w-[280px] max-w-full">
                    <input
                      type="text"
                      placeholder="Search"
                      className="h-11 w-full rounded-full border border-[#1f3f62] bg-transparent pl-5 pr-11 text-[14px] font-medium text-[#1e3f62] placeholder-[#4f6c89] focus:outline-none"
                    />
                    <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#3b6a89]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}