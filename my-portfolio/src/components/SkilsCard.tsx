"use client";

import React from 'react';

interface SkillsCardProps {
  title: string;
  image?: string;
  linkTo?: string; // Add a prop for the link destination
}

const SkillsCard: React.FC<SkillsCardProps> = ({ title, image, linkTo }) => {
  return (
    <div className=" w-115 h-91">
      {/* SVG clip path */}
      <svg className="absolute w-0 h-0">
        <defs>
          <clipPath id="skillsClip" clipPathUnits="objectBoundingBox">
            <path
              transform="scale(0.00163, 0.00207)" // hasil 1/width (1/613) dan 1/height (1/484) asli SVG
              d="M573 0C595.091 0 613 17.9086 613 40V309.842C613 328.058 587.21 339.708 569.504 335.43C562.929 333.842 556.063 333 549 333C500.951 333 462 371.951 462 420C462 427.063 462.842 433.929 464.43 440.504C468.708 458.21 457.058 484 438.842 484H40C17.9086 484 0 466.091 0 444V40C3.47946e-06 17.9086 17.9086 2.01331e-07 40 0H573Z"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Card dengan clip-path */}
      <div
        className="
          relative
          w-full
          h-full
          overflow-hidden
          cursor-default
          z-10
        "
        style={{
          clipPath: 'url(#skillsClip)',
          backgroundColor: '#2BB6C0', // Changed from #f97316
        }}
      >
        {image && (
          <>
            {/* Layer 2 - Blur dan shadow */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-80 z-5 opacity-30 blur-[2px] overflow-hidden rounded-[20px]">
              <img
                src={image}
                alt="skill background shadow"
                className="w-full h-60 object-cover"
              />
            </div>

            {/* Layer 1 */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-100 z-20 opacity-40 blur-[1px] overflow-hidden rounded-[20px]">
              <img
                src={image}
                alt="skill background shadow"
                className="w-full h-60 object-cover"
              />
            </div>

            {/* Gambar utama */}
            <div className="absolute bottom-0 left-0 w-full z-20 overflow-hidden rounded-[20px]">
              <img
                src={image}
                alt="skill background"
                className="w-full h-60 object-cover"
              />
            </div>
          </>
        )}

        {/* Title */}
        <div className="absolute top-8 left-5 text-white text-xl font-semibold tracking-wide z-30">
          {title}
        </div>
      </div>

      {/* Lingkaran dengan panah - wrapped in <a> tag */}
      {linkTo && (
        <a
  href={linkTo}
  className="absolute bottom-0 right-0 w-22 h-22 rounded-full z-20 flex items-center justify-center 
  transition-all duration-300 hover:scale-110"
  style={{
    background: 'linear-gradient(135deg, #2BAAB3 0%, #2299A2 100%)',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = 'linear-gradient(135deg, #3B3B3B 0%)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = 'linear-gradient(135deg, #2BAAB3 0%, #2299A2 100%)';
  }}
>



          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform rotate-[30deg]"
          >
            <path
              d="M12 4L12 20M12 4L6 10M12 4L18 10"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      )}
    </div>
  );
};

export default SkillsCard;