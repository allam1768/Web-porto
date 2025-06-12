'use client';

import { useMediaQuery } from 'react-responsive';
import CircularGallery from '@/components/CircularGallery'
import galleryItems from '@/components/data';
import NavbarGalery from '@/components/Navbar2';
import Footer from '@/components/Footer';

export default function GalleryPage() {

  const isMobile = useMediaQuery({ maxWidth: 639 });
const bend = isMobile ? 0.8 : 2.5;

  return (
    <div className="min-h-screen bg-[#F0F1F1]">
      <NavbarGalery />

      <section className="text-center pt-30 sm:pt-20 md:pt-24 lg:pt-28 pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black tracking-tight">
          My <span className="text-[#2BB6C0]">Gallery</span>
        </h1>
        <p className="mt-6 sm:mt-6 md:mt-8 lg:mt-10 text-sm sm:text-base md:text-lg text-black max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
          This is the result of various moments that I captured through the camera lens. Each image holds a story and experience that I want to share with you, from the places I visited to the little things that inspired me
        </p>
      </section>

      <section className="mt-4 sm:mt-8 md:mt-12 lg:mt-16">
        <div className="h-80 sm:h-96 md:h-[500px] lg:h-[600px] relative">
          <CircularGallery
            bend={bend}
            textColor="#ffffff"
            borderRadius={0.03}
            items={galleryItems}
          />
        </div>
      </section>


      {/* footer Section */}
      <Footer />
    </div>
  );
}