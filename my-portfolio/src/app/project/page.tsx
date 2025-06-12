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
    <h2 className="text-2xl sm:text-6xl font-bold text-[#252526] mt-10 sm:mt-0 mb-6 sm:mb-8 lg:mb-10 text-center">
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
