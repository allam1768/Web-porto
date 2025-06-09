import React from 'react';

interface SkillsCardProps {
  title: string;
  image?: string;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ title, image }) => {
  return (
    <div className="relative w-80 h-96">
      {/* SVG clip path */}
      <svg className="absolute w-0 h-0">
        <defs>
          <clipPath id="skillsClip" clipPathUnits="objectBoundingBox">
            <path
              transform="scale(0.00238, 0.00207)" // hasil 1/width dan 1/height asli SVG
              d="M371 0C393.091 0 411 17.9086 411 40V324.842C411 340.058 395.21 351.708 380.504 348.43C375.429 347.342 370.063 346.5 364.5 346.5C325.951 346.5 294.5 377.951 294.5 416.5C294.5 421.563 295.158 426.429 296.43 431.004C299.208 448.21 288.058 466 269.842 466H40C17.9086 466 0 448.091 0 426V40C3.47946e-06 17.9086 17.9086 6.5634e-07 40 0H371Z"
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
          bg-[#f97316]
          overflow-hidden 
          cursor-default
          z-10
        "
        style={{
          clipPath: 'url(#skillsClip)',
        }}
      >
        {image && (
          <>
            {/* Layer 2 - Blur dan shadow */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-64 z-5 opacity-30 blur-[2px] overflow-hidden rounded-[20px]">
              <img
                src={image}
                alt="skill background shadow"
                className="w-full h-50 object-cover"
              />
            </div>

            {/* Layer 1 */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-72 z-10 opacity-40 blur-[1px] overflow-hidden rounded-[20px]">
              <img
                src={image}
                alt="skill background shadow"
                className="w-full h-50 object-cover"
              />
            </div>

            {/* Gambar utama */}
            <div className="absolute bottom-0 left-0 w-full z-20 overflow-hidden rounded-[20px]">
              <img
                src={image}
                alt="skill background"
                className="w-full h-50 object-cover"
              />
            </div>
          </>
        )}

        {/* Title */}
        <div className="absolute top-8 left-5 text-white text-xl font-semibold tracking-wide z-30">
          {title}
        </div>

        {/* Divider */}
        <div
          className="absolute top-20 left-5 h-0.5 z-30"
          style={{
            width: '280px',
            background:
              '#ffffff',
          }}
        />
      </div>

      {/* Lingkaran oranye dengan panah */}
<div
  className="absolute bottom-3 right-0 w-20 h-20 rounded-full z-20 flex items-center justify-center"
  style={{
    background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
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
</div>

    </div>
  );
};

export default SkillsCard;
