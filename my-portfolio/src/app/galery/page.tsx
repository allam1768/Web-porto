'use client';

import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import NavbarGalery from '@/components/Navbar2';
import Footer from '@/components/Footer';
import galleryItems from '@/components/data'; // ambil data dari file data.js

interface GalleryItem {
  id: number;
  image: string;
  text: string;
}

interface LightboxProps {
  image: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  current: number;
  total: number;
}

function Lightbox({ image, onClose, onPrev, onNext, current, total }: LightboxProps) {
  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-[#2BB6C0] transition-colors z-10"
      >
        <X size={32} />
      </button>
      
      <button
        onClick={onPrev}
        className="absolute left-4 text-white hover:text-[#2BB6C0] transition-colors hidden md:block"
      >
        <ChevronLeft size={48} />
      </button>
      
      <button
        onClick={onNext}
        className="absolute right-4 text-white hover:text-[#2BB6C0] transition-colors hidden md:block"
      >
        <ChevronRight size={48} />
      </button>
      
      <div className="max-w-5xl max-h-[90vh] relative">
        <img
          src={image.image}
          alt={image.text}
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 text-white rounded-b-lg">
          <h3 className="text-2xl font-bold">{image.text}</h3>
          <p className="text-xs text-gray-400 mt-3">{current + 1} / {total}</p>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden absolute bottom-8 left-0 right-0 flex justify-center gap-4">
        <button
          onClick={onPrev}
          className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={onNext}
          className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const openLightbox = (image: GalleryItem) => setSelectedImage(image);

  const closeLightbox = () => setSelectedImage(null);

  const showNext = () => {
    if (!selectedImage) return;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedImage(galleryItems[nextIndex]);
  };

  const showPrev = () => {
    if (!selectedImage) return;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedImage(galleryItems[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <NavbarGalery />

      {/* Hero Section */}
      <section className="text-center pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black tracking-tight">
          My <span className="text-[#2BB6C0]">Gallery</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          This is the result of various moments that I captured through the camera lens. 
          Each image holds a story and experience that I want to share with you.
        </p>
      </section>

      {/* Masonry Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {[...galleryItems]
            .sort((a, b) => Number(b.id) - Number(a.id))
            .map((item, index) => (
              <div
                key={item.id}
                className="group relative break-inside-avoid mb-6"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div 
                  className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
                  onClick={() => openLightbox(item)}
                >
                  <img
                    src={item.image}
                    alt={item.text}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Hover Overlay (tanpa deskripsi) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-white">{item.text}</h3>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="text-white" size={20} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#2BB6C0]">{galleryItems.length}+</div>
              <div className="text-gray-600 mt-2">Photos Captured</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#2BB6C0]">∞</div>
              <div className="text-gray-600 mt-2">Moments Preserved</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#2BB6C0]">1</div>
              <div className="text-gray-600 mt-2">Passionate Photographer</div>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={closeLightbox}
          onNext={showNext}
          onPrev={showPrev}
          current={galleryItems.findIndex(item => item.id === selectedImage.id)}
          total={galleryItems.length}
        />
      )}

      <Footer />

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
      `}</style>
    </div>
  );
}