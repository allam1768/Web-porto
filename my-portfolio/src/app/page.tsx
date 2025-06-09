import React from 'react';
import SkillsCard from './SkilsCard';
import ProjectCard from './ProjectCard';



export default function App() {

  const educationData = [
    {
      level: "Elementary school",
      period: "2014 - 2020",
      school: "MIN 4 Jakarta Selatan",
      isActive: false
    },
    {
      level: "Junior high school",
      period: "2020 - 2023", 
      school: "Trenmatika Islamic Boarding School",
      isActive: false
    },
    {
      level: "Vocational School",
      period: "2023 - Now",
      school: "SMK Raden Umar Said",
      isActive: true
    }
  ];

  
  return (
    <div className="w-full">
      {/* Home Section */}
      <section id="home" className="relative flex items-start justify-center min-h-screen bg-white text-black overflow-hidden pt-16 sm:pt-20 lg:pt-20">
        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center max-w-4xl w-full px-4 sm:px-8">
          {/* Hello! Badge */}
          <span className="text-sm font-medium px-4 py-2 border border-gray-300 rounded-full mb-6">
            Hello!
          </span>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 text-center leading-tight">
            I'm <span className="text-orange-500">Allam,</span>
          </h1>

          {/* Front End Development Text */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center leading-tight text-black mb-8">
            Front End Development
          </h2>
        </div>

        {/* Semi-circle at bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3">
          <div className="w-96 h-64 sm:w-[500px] sm:h-80 lg:w-[600px] lg:h-96 bg-orange-500 rounded-t-full"></div>
        </div>

        {/* Profile Image with Button */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
          <div className="relative w-[430px] h-[430px] rounded-t-full overflow-hidden">
            <img 
              src="/profilepp.svg" 
              alt="Allam Profile" 
              className="w-full h-full object-cover"
            />
            
            {/* Portfolio Button */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
              <button className="flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-medium py-2.5 px-6 rounded-full border-[3px] border-gray-200 shadow-md transition-all duration-300">
                Portofolio
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
              </button>
            </div>
          </div>
        </div>

        {/* Text Quote - Positioned independently */}
        <div className="absolute bottom-[180px] left-[calc(50%-600px)] z-50 max-w-[320px]">
          <div className="">
            <div className="text-5xl text-gray-400 leading-none">❛❛</div>
            <p className="text-16sm leading-relaxed">
              The mobile front-end I designed and built made the app smooth and easy to use. If you want great results, I'm your dev!
            </p>
          </div>
        </div>
        
        {/* project - Positioned independently */}
        <div className="absolute bottom-[200px] right-[calc(50%-600px)] z-50 max-w-[320px]">
          <div className="">
            <div className="text-4xl leading-none">10</div>
            <p className="text-16sm leading-relaxed">
              Project
            </p>
          </div>
        </div>
      </section>

      {/* project Section */}
      <section id="project" className="scroll-mt-18 bg-white flex items-center justify-center">
        <div className="w-full">
        <div 
          className="rounded-3xl pt-10 sm:pt-10 px-6 sm:px-16"
          style={{ backgroundColor: '#252526' }}
        >

      {/* Judul + Tombol */}
      <div className="flex items-start justify-between mb-9">
        {/* Judul */}
        <h2 className="text-4xl font-bold text-start">
          <span className="block text-white">Lets Have a Look at</span>
          <span className="block">
            <span className="text-white">my </span>
            <span className="text-orange-500">Project</span>
          </span>
        </h2>

        {/* Tombol */}
        <button
           className="
            flex items-center gap-2 
            bg-orange-500 hover:bg-orange-600 
            text-white font-semibold 
            py-2 px-5 
            rounded-full 
            transition duration-300"
        >
            See More
              <svg
                width="20"
                height="20"
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
          </button>
      </div>

      {/* Project Grid */}
<div className="flex justify-center items-center gap-10 pb-10 flex-wrap mt-30">

        <ProjectCard projectName="Photography" image="photog.jpg" date="10,06,24" description='apkk keren anjay ampe guling guling gila woy kece parah njir anjir gila banget cok wow anjay'/>
        <ProjectCard projectName="Frontend" image="ppp.jpg" />
        <ProjectCard projectName="Frontend" image="ppp.jpg" />
      </div>
    </div>
  </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-18 bg-white flex items-center justify-center">
  <div className="w-full">
  <div 
  className="rounded-3xl pt-10 sm:pt-10 px-6 sm:px-16"
>

      <h2 className="text-0xl sm:text-4xl font-bold mb-9 text-start">
        <span className="text-black">My </span>
        <span className="text-orange-500">Skills</span>
      </h2>
      <div className="w-full h-0.5 bg-black mb-15"></div>
      
      {/* Skills Grid - Two cards centered */}
      <div className="flex justify-center items-center gap-50 pb-10 flex-wrap">
        <SkillsCard title="Photography"  image='photog.jpg'/>
        <SkillsCard title="Frontend"  image='ppp.jpg' />
        
      </div>
    </div>
  </div>
      </section>

      <section className="relative flex items-center justify-center h-40 bg-white overflow-hidden">
  {/* Kotak miring */}
  <div
    className="absolute z-20 w-full h-[60px] bg-[#FFFDFD] overflow-hidden shadow-xl flex items-center px-4"
    style={{ transform: 'rotate(1deg)' }}
  >
    <div className="flex whitespace-nowrap animate-scroll-left">
      {/* Duplikat isi untuk animasi tanpa jeda */}
      <span className="text-lg font-medium text-black mr-8">
        Photography ✦︎ Mobile Development  ✦︎  Front End   ✦︎  Editing   ✦︎
      </span>
      <span className="text-lg font-medium text-black mr-8">
        Photography   ✦︎   Mobile Development  ✦︎   Front End   ✦︎  Editing   ✦︎
      </span>
      <span className="text-lg font-medium text-black mr-8">
      Photography  ✦︎  Mobile Development  ✦︎  Front End   ✦︎  Editing   ✦︎
      </span>
      <span className="text-lg font-medium text-black mr-8">
      Photography  ✦︎   Mobile Development   ✦︎  Front End  ✦︎   Editing   ✦︎
      </span>
    </div>
  </div>

  {/* Elemen bulat orange */}
  <div className="h-[60px] w-full bg-orange-500 rounded-full z-10"></div>
</section>

      {/* Education Section */}
<section id="Education" className="scroll-mt-18 bg-white flex items-center justify-center py-12">
  <div className="w-full max-w-4xl mx-auto px-6">
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-black">
        My Education
      </h2>
      
      <div className="relative">
        {/* Timeline line - dashed, positioned at center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-black"></div>
        
        {/* Timeline items */}
        <div className="space-y-12">
          {educationData.map((item, index) => (
            <div key={index} className="relative flex items-center">
              {/* Left side - Education level and period */}
              <div className="flex-1 text-right pr-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {item.level}
                </h3>
                <p className="text-gray-600 text-XL">
                  {item.period}
                </p>
              </div>
              
              {/* Timeline dot with circle design - centered */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-6 h-6 rounded-full bg-white border-2 border-gray-400 flex items-center justify-center">
                <div className={`w-4 h-4 rounded-full ${
                  item.isActive 
                    ? 'bg-orange-400' 
                    : 'bg-black'
                }`}></div>
              </div>
              
              {/* Right side - School name */}
              <div className="flex-1 pl-12">
                <p className="text-lg font-medium text-gray-800">
                  {item.school}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="max-w-4xl w-full px-4 sm:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12">
            Have a project in mind? I'd love to hear about it and help bring your ideas to life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-300">allam@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-300">+62 123 456 7890</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-orange-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-orange-500 focus:outline-none"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-orange-500 focus:outline-none resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}