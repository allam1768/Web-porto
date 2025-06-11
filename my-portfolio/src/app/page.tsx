import React from 'react';
import SkillsCard from '@/components/SkilsCard';
import ProjectCard from '@/components/ProjectCard';
import TiltedCard from '@/components/TiltedCard';
import ClickSpark from '@/components/ClickSpark';
import Image from 'next/image'; 
import CountUp from '@/components/CountUp'


// Import the data from the new file
import { educationData, projectData, skillsData } from '../components/data'; 
import Footer from '@/components/Footer';


export default function App() {
  return (
    <div className="w-full">
      {/* Home Section */}
      <section id="home" className="relative flex items-start justify-center min-h-screen bg-white text-black overflow-hidden pt-16 sm:pt-20 lg:pt-20">
        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center max-w-4xl w-full px-4 sm:px-8">
          {/* Hello! Badge */}
          <span className="text-sm font-medium px-4 py-2 border border-gray-300 rounded-md mb-6">
            Hello!
          </span>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 text-center leading-tight">
            I&apos;m <span style={{ color: '#2BB6C0' }}>Allam,</span>
          </h1>

          {/* Front End Development Text */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center leading-tight text-black mb-8">
            Front End Development
          </h2>
        </div>

        {/* Semi-circle at bottom - Larger on mobile */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3">
          <div className="w-[500px] h-80 sm:w-[500px] sm:h-80 lg:w-[600px] lg:h-96 rounded-t-full" style={{ backgroundColor: '#2BB6C0' }}></div>
        </div>

        {/* Profile Image with Button */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
          <div className="relative w-[370px] h-[370px] rounded-t-full overflow-hidden">
            <Image
              src="/profilepp.svg"
              alt="Allam Profile"
              layout="fill" // Use fill for responsive images where parent has dimensions
              objectFit="cover"
              className="w-full h-full object-cover"
            />

            {/* Portfolio Button */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
              <a
                href="/cvallam.pdf" // ganti path ini sesuai lokasi file CV kamu
                download
                className="flex items-center gap-2 text-white font-medium py-2.5 px-6 rounded-full border-[3px] border-gray-200 shadow-md transition-all duration-300"
                style={{ backgroundColor: '#2BB6C0', }}
              >
                Download CV
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 7L7 17M17 7H7m10 0v10" />
                </svg>
              </a>
            </div>

          </div>
        </div>

        {/* Text Quote - Hidden on mobile and small screens */}
        <div className="absolute bottom-[180px] left-[calc(50%-600px)] z-50 max-w-[320px] hidden lg:block">
          <div className="">
            <div className="text-5xl text-gray-400 leading-none">❛❛</div>
            <p className="text-16sm leading-relaxed">
              The mobile front-end I designed and built made the app smooth and easy to use. If you want great results, I&apos;m your dev!
            </p>
          </div>
        </div>

        {/* Project - Hidden on mobile and small screens */}
        <div className="absolute bottom-[200px] right-[calc(50%-600px)] z-50 max-w-[320px] hidden lg:block">
          <div className="">
            <div className="text-4xl leading-none">
              <CountUp
                from={100}
                to={projectData.length} // Dynamically use the number of projects
                separator=","
                direction="up"
                duration={11.9}
                className="count-up-text"
              />
            </div>
            <p className="text-16sm leading-relaxed">
              Project
            </p>
          </div>
        </div>
      </section>

      {/* project Section */}
      <section id="project" className="scroll-mt-18 bg-white flex items-center justify-center">
        <div className="w-full">
          <ClickSpark
            sparkColor='#2BB6C0'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <div
              className="
                rounded-none sm:rounded-3xl
                rounded-b-3xl
                pt-5 sm:pt-10
                px-4 sm:px-8 lg:px-16
              "
              style={{ backgroundColor: '#252526' }}
            >
              {/* Judul + Tombol */}
              <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between mb-6 sm:mb-9 gap-4 sm:gap-0">
                {/* Judul */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-start">
                  <span className="block text-white">Let&apos;s Have a Look at</span>
                  <span className="block">
                    <span className="text-white">my </span>
                    <span style={{ color: '#2BB6C0' }}>Project</span>
                  </span>
                </h2>

                {/* Tombol */}
                <button
                  className="
                    flex items-center gap-2
                    text-white font-semibold
                    py-2 px-4 sm:px-5
                    rounded-full
                    transition duration-300
                    text-sm sm:text-base
                    self-end sm:self-auto
                    whitespace-nowrap
                    mt-2 sm:mt-0
                    bg-[#2BB6C0]
                  "
                >
                  See More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform rotate-[30deg] sm:w-5 sm:h-5"
                  >
                    <path
                      d="M12 4L12 20M12 4L6 10M12 4L18 10"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Project Grid */}
              <div className="
                flex justify-center items-center
                gap-4 sm:gap-6 lg:gap-10
                pb-6 sm:pb-10
                flex-wrap
                mt-6 sm:mt-10 lg:mt-30
              ">
                {projectData
                  .sort((a, b) => {
                    // Convert dates to a comparable format (e.g., YYYYMMDD) for sorting
                    const dateA = a.date.split(',').reverse().join(''); // "10,06,24" -> "240610"
                    const dateB = b.date.split(',').reverse().join('');
                    return dateB.localeCompare(dateA); // Descending order (newest first)
                  })
                  .slice(0, 3) // Take only the first 3 elements
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
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-18 bg-white flex items-center justify-center">
        <div className="w-full">
          <div className="rounded-3xl pt-6 sm:pt-10 px-4 sm:px-6 lg:px-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-9 text-start">
              <span className="text-black">My </span>
              <span style={{ color: '#2BB6C0' }}>Skills</span>
            </h2>
            <div className="w-full h-0.5 bg-black mb-8 sm:mb-12 lg:mb-15"></div>

            {/* Skills Grid - Responsive layout */}
            <div className="flex justify-center items-center gap-4 sm:gap-8 lg:gap-12 xl:gap-16 pb-6 sm:pb-10 flex-wrap">
              {skillsData.map((skill, index) => (
                <SkillsCard
                  key={index}
                  title={skill.title}
                  image={skill.image}
                  linkTo={skill.linkTo}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Running Section */}
      <section className="relative flex items-center justify-center h-32 sm:h-36 lg:h-40 bg-white overflow-hidden">
        {/* Kotak miring */}
        <div
          className="absolute z-20 w-full h-[40px] sm:h-[50px] lg:h-[60px] bg-[#FFFDFD] overflow-hidden shadow-xl flex items-center px-2 sm:px-4"
          style={{ transform: 'rotate(1deg)' }}
        >
          <div className="flex whitespace-nowrap animate-scroll-left">
            {/* Duplikat isi untuk animasi tanpa jeda */}
            <span className="text-sm sm:text-base lg:text-lg font-medium text-black mr-4 sm:mr-6 lg:mr-8">
              Photography ✦ Mobile Development ✦ Front End ✦ Editing ✦
            </span>
            <span className="text-sm sm:text-base lg:text-lg font-medium text-black mr-4 sm:mr-6 lg:mr-8">
              Photography ✦ Mobile Development ✦ Front End ✦ Editing ✦
            </span>
            <span className="text-sm sm:text-base lg:text-lg font-medium text-black mr-4 sm:mr-6 lg:mr-8">
              Photography ✦ Mobile Development ✦ Front End ✦ Editing ✦
            </span>
            <span className="text-sm sm:text-base lg:text-lg font-medium text-black mr-4 sm:mr-6 lg:mr-8">
              Photography ✦ Mobile Development ✦ Front End ✦ Editing ✦
            </span>
            <span className="text-sm sm:text-base lg:text-lg font-medium text-black mr-4 sm:mr-6 lg:mr-8">
              Photography ✦ Mobile Development ✦ Front End ✦ Editing ✦
            </span>
          </div>
        </div>

        {/* Elemen bulat orange */}
        <div className="h-[40px] sm:h-[50px] lg:h-[60px] w-full rounded-full z-10" style={{ backgroundColor: '#2BB6C0' }}></div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="rounded-3xl scroll-mt-42 bg-white flex items-center justify-center py-6 sm:py-8 lg:py-10 min-h-[80vh]"
        style={{ backgroundColor: '#F0F1F1' }}
      >
        <ClickSpark
          sparkColor="#252526"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center text-white">
              <span className="block">
                <span className="text-black">About </span>
                <span style={{ color: '#2BB6C0' }}>Me</span>
              </span>
            </h2>

            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12">
              {/* Foto dengan Tilted Card - Selalu di tengah untuk mobile */}
              <div className="flex justify-center lg:justify-start">
                <div className="w-[220px] h-[280px] sm:w-[250px] sm:h-[320px] lg:w-[280px] lg:h-[350px]">
                  <TiltedCard
                    imageSrc="/me.jpg"
                    altText="Allam Permata Putra"
                    captionText="Allam Permata Putra"
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={15}
                    scaleOnHover={1.1}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                  />
                </div>
              </div>

              {/* Deskripsi - Selalu di tengah untuk mobile */}
              <div className="text-center lg:text-left max-w-xl lg:max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-semibold text-black mb-3 sm:mb-4">
                  Hi, I&apos;m <span style={{ color: '#2BB6C0' }}>Allam Permata Putra</span>
                </h3>
                <p className="text-sm sm:text-base text-black leading-relaxed mb-4 sm:mb-6">
                  Saya adalah seorang <span style={{ color: '#2BB6C0' }}>Frontend Developer</span> yang antusias membangun antarmuka elegan dan responsif menggunakan <span style={{ color: '#2BB6C0' }}>React</span>, <span style={{ color: '#2BB6C0' }}>Tailwind CSS</span>, dan <span style={{ color: '#2BB6C0' }}>Flutter</span>. Saya juga tertarik dalam dunia <span style={{ color: '#2BB6C0' }}>UI/UX</span>, <span style={{ color: '#2BB6C0' }}>desain web</span>, serta <span style={{ color: '#2BB6C0' }}>pengembangan aplikasi mobile</span>.
                  <br /><br />
                  Saat ini saya sedang mengembangkan <span style={{ color: '#2BB6C0' }}>website portofolio pribadi</span> sambil terus belajar teknologi web modern. Tujuan jangka panjang saya adalah untuk <span style={{ color: '#2BB6C0' }}>bekerja di luar negeri</span> sebagai developer dan berkontribusi dalam membangun solusi digital yang impactful.
                </p>

                {/* Tombol Download CV - Selalu di tengah untuk mobile */}
                <div className="flex justify-center lg:justify-start">
                  <a
                    href="/cvallam.pdf"
                    download
                    className="bg-[#2BB6C0] inline-flex items-center gap-2 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition duration-300 text-sm sm:text-base"
                  >
                    Download CV
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 sm:w-5 sm:h-5 transform -rotate-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 7L7 17M17 17V7H7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ClickSpark>
      </section>

      {/* Education Section */}
      <section id="education" className="scroll-mt-18 bg-white flex items-center justify-center py-8 sm:py-12">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center text-black">
              My Education
            </h2>

            <div className="relative">
              {/* Timeline line - dashed, positioned differently for mobile */}
              <div className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-black"></div>

              {/* Timeline items */}
              <div className="space-y-8 sm:space-y-12">
                {educationData.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Mobile Layout - Vertical Stack */}
                    <div className="sm:hidden">
                      {/* Timeline dot for mobile */}
                      <div className="absolute left-4 transform -translate-x-1/2 z-10 w-5 h-5 rounded-full bg-white border-2 border-gray-400 flex items-center justify-center">
                        <div className={`w-3 h-3 rounded-full ${
                          item.isActive
                            ? 'bg-[#2BB6C0]'
                            : 'bg-black'
                        }`}></div>
                      </div>

                      {/* Content for mobile */}
                      <div className="ml-8 pl-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          {item.level}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                          {item.period}
                        </p>
                        <p className="text-base font-medium text-gray-800">
                          {item.school}
                        </p>
                      </div>
                    </div>

                    {/* Desktop Layout - Horizontal */}
                    <div className="hidden sm:flex items-center">
                      {/* Left side - Education level and period */}
                      <div className="flex-1 text-right pr-8 lg:pr-12">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                          {item.level}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                          {item.period}
                        </p>
                      </div>

                      {/* Timeline dot with circle design - centered */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white border-2 border-gray-400 flex items-center justify-center">
                        <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                          item.isActive
                            ? 'bg-[#2BB6C0]'
                            : 'bg-black'
                        }`}></div>
                      </div>

                      {/* Right side - School name */}
                      <div className="flex-1 pl-8 lg:pl-12">
                        <p className="text-base sm:text-lg font-medium text-gray-800">
                          {item.school}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white flex items-center justify-center py-8 md:py-15">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 md:gap-16 lg:gap-32">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 text-black leading-tight">
                Let&apos;s Work <span style={{ color: '#2BB6C0' }}>Together</span>
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-full lg:max-w-lg">
                Got an idea to bring to life, interested in a creative partnership, or simply want to connect? I&apos;m all ears — reach out!
              </p>
            </div>

            <div className="flex-shrink-0 w-full lg:w-auto text-left lg:text-right">
              <div className="mb-6 md:mb-10">
                <h3 className="text-black font-semibold text-lg mb-2">Contact me</h3>
                <a
                  href="mailto:permataallam7@gmail.com"
                  className="text-gray-600 hover:text-black transition-colors duration-300 break-all md:break-normal"
                >
                  permataallam7@gmail.com
                </a>
              </div>

              <div>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=permataallam7@gmail.com" target="_blank" rel="noopener noreferrer"
                  className="inline-block w-full lg:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 font-medium text-center"
                >
                  Let&apos;s Collaborate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer Section */}
      <Footer />
    </div>
  );
}