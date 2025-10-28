"use client";
import Footer from '@/components/Footer';
import { useState } from 'react';
import { projectData } from "@/components/data";
import NavbarGalery from '@/components/Navbar2';

interface ProjectCardProps {
  projectName: string;
  image: string;
  date: string;
  description: string;
  link: string;
}

function ProjectCard({ projectName, image, date, description, link }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={projectName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-70'}`} />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className={`transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <span className="inline-block px-3 py-1 bg-[#2BB6C0] text-white text-xs font-semibold rounded-full mb-3">
              {date}
            </span>
          </div>
          
          <h3 className="text-xl font-bold mb-2">
            {projectName}
          </h3>
          
          <p className={`text-gray-200 text-sm mb-4 line-clamp-2 transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            {description}
          </p>
          
          <a 
            href={link}
            className={`inline-flex items-center gap-2 px-5 py-2 bg-[#2BB6C0] hover:bg-[#249ba5] text-white font-semibold rounded-full transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          >
            View Project
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}


// Sample data - replace with your actual data from data.js
const frondData = [
  { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
];



export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-cyan-50">
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <NavbarGalery />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#252526] mb-6">
            Front End <span className="text-[#2BB6C0] relative">
              Developer
              
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every interface starts with an idea, is brought to life through code,
            and is refined through detail. This is where I combine logic and
            aesthetics to create responsive and engaging digital experiences.
          </p>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificate" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252526] mb-10">
            My <span className="text-[#2BB6C0]">Certificates</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src="/dataproject/sertiv1.webp"
                  alt="Certificate 1"
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="font-bold text-xl text-[#252526] mb-2">
                National Competition Certificate
              </h3>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                August 31, 2024
              </p>
            </div>

            <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src="/dataproject/sertiv2.webp"
                  alt="Certificate 2"
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="font-bold text-xl text-[#252526] mb-2">
                National Competition Certificate
              </h3>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                January 20, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Running Section */}
      <section className="relative flex items-center justify-center h-28 lg:h-36 bg-transparent overflow-hidden my-16">
        <div
          className="absolute z-20 w-full h-14 lg:h-16 bg-white overflow-hidden shadow-xl flex items-center"
          style={{ transform: "rotate(1deg)" }}
        >
          <div className="flex items-center gap-4 lg:gap-6 px-4 animate-scroll">
            {[...frondData, ...frondData].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md px-5 py-3 hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap flex-shrink-0 border border-gray-100"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-7 h-7 lg:w-9 lg:h-9 object-contain"
                />
                <span className="text-sm lg:text-base font-semibold text-[#252526]">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="h-14 lg:h-16 w-full rounded-full z-10 shadow-lg"
          style={{ backgroundColor: "#2BB6C0" }}
        ></div>
      </section>

      {/* Projects Section */}
      <section id="project" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#252526] mb-12">
            My <span className="text-[#2BB6C0]">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData
              .sort((a, b) => {
                const dateA = new Date(a.date.split(',').reverse().join('-'));
                const dateB = new Date(b.date.split(',').reverse().join('-'));
                return dateB.getTime() - dateA.getTime();
              })
              .map((project, index) => (
                <ProjectCard
                  key={index}
                  projectName={project.projectName}
                  image={project.image}
                  date={project.date}
                  description={project.description}
                  link={project.link}
                />
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}