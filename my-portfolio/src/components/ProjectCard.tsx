"use client";

import React from 'react';

interface ProjectCardProps {
  projectName: string;
  image?: string;
  date?: string;
  description?: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  image,
  date,
  description,
  link,
}) => {
  return (
    <div className="relative w-80 h-96 group">
      {/* SVG clip path */}
      <svg className="absolute w-0 h-0">
        <defs>
          <clipPath id="projectClip" clipPathUnits="objectBoundingBox">
            <path
              transform="scale(0.00243, 0.00207)"
              d="M371 0C393.091 0 411 17.9086 411 40V334.842C411 348.058 399.21 359.708 386.504 356.43C382.429 355.342 378.063 354.5 373.5 354.5C343.951 354.5 320 378.451 320 408C320 412.563 320.658 416.929 321.93 421.004C324.208 436.21 314.058 452 295.842 452H40C17.9086 452 0 434.091 0 412V40C3.47946e-06 17.9086 17.9086 6.5634e-07 40 0H371Z"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Card */}
      <div
        className="relative w-full h-full bg-[#3B3B3B] overflow-hidden cursor-default z-10"
        style={{ clipPath: 'url(#projectClip)' }}
      >
        {image && (
          <div className="absolute top-0 left-0 w-full h-48 z-20 overflow-hidden rounded-t-[20px]">
            <img
              src={image}
              alt="project background"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="absolute top-48 left-0 w-full px-4 py-4 z-20">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-white font-semibold text-lg leading-tight flex-1 mr-4">
              {projectName}
            </h3>
            {date && (
              <span className="text-gray-300 text-sm whitespace-nowrap">
                {date}
              </span>
            )}
          </div>

          {description && (
            <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-wrap">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Tombol panah, selalu tampil tapi naik pas hover */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-7 right-0 w-14 h-14 rounded-full z-20 flex items-center justify-center bg-[#3B3B3B] shadow-md group-hover:-translate-y-1 transition-transform duration-300"
          aria-label={`View ${projectName} project`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12L20 12M20 12L14 6M20 12L14 18"
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

export default ProjectCard;
