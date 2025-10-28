"use client";
import Footer from '@/components/Footer';
import NavbarGalery from '@/components/Navbar2';
import { useState } from 'react';
import { projectData } from '@/components/data';

// ✅ Buat tipe data biar gak pakai any
interface Project {
  image: string;
  projectName: string;
  description: string;
  date: string;
  link: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      <div className="relative h-80 overflow-hidden">
        {/* ⚙️ Optional: nanti bisa ganti ke <Image /> dari next/image */}
        <img
          src={project.image}
          alt={project.projectName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-70'
          }`}
        />

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500">
          <div
            className={`transition-all duration-500 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <span className="inline-block px-3 py-1 bg-cyan-500 text-white text-xs font-semibold rounded-full mb-3">
              {project.date}
            </span>
          </div>

          <h3 className="text-2xl font-bold mb-2 transition-all duration-300">
            {project.projectName}
          </h3>

          <p
            className={`text-gray-200 text-sm mb-4 transition-all duration-500 ${
              isHovered
                ? 'translate-y-0 opacity-100 max-h-40'
                : 'translate-y-4 opacity-0 max-h-0'
            }`}
          >
            {project.description}
          </p>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transition-all duration-500 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            View Project
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  // ❌ Dulu gak dipakai, jadi hapus aja biar gak error
  // const [filter, setFilter] = useState('all');

  // ✅ sort data berdasarkan tanggal
  const sortedProjects = [...projectData].sort((a, b) => {
    const dateA = new Date(a.date.split(',').reverse().join('-'));
    const dateB = new Date(b.date.split(',').reverse().join('-'));
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      <style jsx>{`
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

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <NavbarGalery />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-5xl sm:text-7xl font-bold text-gray-800 mb-6">
            My{' '}
            <span className="text-cyan-500 relative">
              Projects
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 200 12"
                fill="none"
              ></svg>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Explore my latest work and creative projects
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="project" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sortedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
