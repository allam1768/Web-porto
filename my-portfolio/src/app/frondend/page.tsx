"use client";
import NavbarGalery from "@/components/Navbar2";
import ClickSpark from "@/components/ClickSpark";
import { frondData, projectData } from "@/components/data";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavbarGalery />

      {/* Judul Halaman */}
      <section className="py-8 px-4 text-center sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <h1 className="mt-10 sm:mt-0 text-2xl sm:text-3xl lg:text-5xl font-bold text-[#252526]">
          Frond end <span className="text-[#2BB6C0]">Developer</span>
        </h1>
        <p className="mt-3 text-sm sm:text-base lg:text-lg text-gray-600 max-w-md sm:max-w-lg lg:max-w-xl mx-auto">
          Every interface starts with an idea, is brought to life through code,
          and is refined through detail. This is where I combine logic and
          aesthetics to create responsive and engaging digital experiences.
        </p>
      </section>

      {/* Sertifikat Section */}
      <section
        id="certificate"
        className="py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
      >
        <ClickSpark
          sparkColor="#2BB6C0"
          sparkSize={8} // Smaller sparks for mobile
          sparkRadius={12}
          sparkCount={6}
          duration={300}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#252526] mb-6 sm:mb-8 lg:mb-10 text-start">
              My <span className="text-[#2BB6C0]">Certificates</span>
            </h2>

            {/* Sertifikat Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-md transition">
                <img
                  src="/dataproject/sertiv1.webp"
                  alt="Certificate 1"
                  className="rounded-lg mb-3 w-full h-40 sm:h-48 object-cover"
                />
                <h3 className="font-semibold text-base sm:text-lg text-[#252526]">
                  National Competition Certificate
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  {" "}
                  August 31, 2024
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-md transition">
                <img
                  src="/dataproject/sertiv2.webp"
                  alt="Certificate 2"
                  className="rounded-lg mb-3 w-full h-40 sm:h-48 object-cover"
                />
                <h3 className="font-semibold text-base sm:text-lg text-[#252526]">
                  National Competition Certificate
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  January 20, 2025
                </p>
              </div>
            </div>
          </div>
        </ClickSpark>
      </section>

      {/* Running Section */}
      <section className="relative flex items-center justify-center h-24 sm:h-28 lg:h-36 bg-white overflow-hidden">
        {/* Kotak miring dengan scroll horizontal */}
        <div
          className="absolute z-20 w-full h-10 sm:h-12 lg:h-14 bg-[#FFFDFD] overflow-hidden shadow-xl flex items-center"
          style={{ transform: "rotate(1deg)" }}
        >
          {/* Container dengan scroll horizontal */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 px-3 sm:px-4 animate-scroll">
            {/* Duplikasi data untuk infinite scroll */}
            {[...frondData, ...frondData].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white rounded-xl shadow-md px-3 py-1 sm:px-4 sm:py-2 hover:shadow-lg transition-shadow whitespace-nowrap flex-shrink-0"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 object-contain"
                />
                <span className="text-xs sm:text-sm lg:text-base font-medium text-black">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Elemen bulat biru */}
        <div
          className="h-10 sm:h-12 lg:h-14 w-full rounded-full z-10"
          style={{ backgroundColor: "#2BB6C0" }}
        ></div>

        {/* CSS untuk animasi scroll */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 25s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      <section
  id="project"
  className="py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
>
  <ClickSpark
    sparkColor="#2BB6C0"
    sparkSize={8}
    sparkRadius={12}
    sparkCount={6}
    duration={300}
  >
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-6xl font-bold text-[#252526] mb-6 sm:mb-8 lg:mb-10 text-start">
        My <span className="text-[#2BB6C0]">Projects</span>
      </h2>
      <div className="grid justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        {projectData
          .sort((a, b) => {
            // Convert date format from DD,MM,YYYY to YYYY-MM-DD for proper sorting
            const dateA = new Date(a.date.split(',').reverse().join('-'));
            const dateB = new Date(b.date.split(',').reverse().join('-'));
            return dateB.getTime() - dateA.getTime(); // Sort descending (newest first)
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
  </ClickSpark>
</section>
      <Footer />
    </div>
  );
}
