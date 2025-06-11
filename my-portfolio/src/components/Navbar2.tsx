import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function NavbarGalery() {
  return (
    <nav className="w-full py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-2 sm:py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Mobile: Unified container, Desktop: Separate back button */}
          <div className="flex items-center w-full sm:w-auto">
            {/* Desktop back button (hidden on mobile) */}
            <Link
              href="/"
              className="hidden sm:flex items-center justify-center w-11 h-11 md:w-12 md:h-12 bg-[#0B0B0B] rounded-full transition-colors group mr-auto"
            >
              <ArrowLeft className="w-5 h-5 text-white group-hover:text-[#2BB6C0]" />
            </Link>

            {/* Mobile unified container */}
            <div className="flex sm:hidden items-center justify-between w-full px-3 py-1.5 rounded-full bg-[#0B0B0B]">
              {/* Back button inside unified container */}
              <Link
                href="/"
                className="flex items-center justify-center w-8 h-8 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 text-white group-hover:text-[#2BB6C0]" />
              </Link>

              {/* Profile section - positioned to the right */}
              <div className="flex items-center gap-1.5">
                {/* Logo */}
                <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-blue">
                  <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={30}
                    height={30}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Nama */}
                <span className="text-xs font-semibold text-white">allam</span>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/allam-permata-putra-281722364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3"
                >
                  <div className="w-4 h-4 hover:text-blue-400 transition-colors cursor-pointer flex items-center justify-center">
                    <span className="text-xs font-semibold">in</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Desktop profile section */}
          <div
            className="hidden sm:flex items-center gap-3 px-4 py-2 rounded-full"
            style={{ backgroundColor: '#0B0B0B' }}
          >
            <div className="flex items-center gap-2">
              {/* Logo */}
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden flex items-center justify-center bg-blue">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={30}
                  height={30}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Nama */}
              <span className="text-sm font-semibold text-white">allam</span>
            </div>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/allam-permata-putra-281722364"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 md:ml-7"
            >
              <div className="w-5 h-5 hover:text-blue-400 transition-colors cursor-pointer flex items-center justify-center">
                <span className="text-sm font-semibold">in</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}