"use client";

import Image from "next/image";
import { Mail, Facebook } from "lucide-react";

const container = "w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-[#163B5A] to-[#0f2a42] text-white py-16">
      <div className={container}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <Image 
                src="/logopelvic.svg" 
                alt="Pelvic Floor Portal Logo" 
                width={60} 
                height={60}
                className="flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold">Pelvic Floor Portal</h3>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              The Pelvic Floor Portal is presented by<br />
              National Center for Pelvic Floor Health (NBH)<br />
              University Hospital of Northern Norway
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick links</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Home
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Conditions
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Resources
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">
                About
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-4">
              <a 
                href="mailto:nbh@unn.no" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>nbh@unn.no</span>
              </a>
              <p className="text-xs text-gray-400 leading-relaxed">
                Never send personal information. Personal medical questions cannot unfortunately be answered by email.
              </p>
              <div className="space-y-2 pt-2">
                <a 
                  href="https://www.unn.no/nbh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  NBH website
                </a>
                <a 
                  href="https://www.facebook.com/nbh.unn/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Privacy
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Accessibility
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Terms of use
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 Pelvic Floor Portal. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Powered by <a href="http://www.cgamman.no" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">CGamman AS</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
