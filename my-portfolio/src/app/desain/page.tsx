'use client';
import { forwardRef, ReactNode, HTMLAttributes, useState, useEffect } from 'react';
import NavbarGalery from '@/components/Navbar2';
import Footer from '@/components/Footer';
import CardSwap from '@/components/CardSwap';

// Interface untuk props Card
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  customClass?: string;
}

// Komponen Card yang sudah diperbaiki dengan TypeScript interface yang benar
const Card = forwardRef<HTMLDivElement, CardProps>(({ 
  children, 
  className = "", 
  customClass = "",
  style = {}, 
  onClick, 
  ...props 
}, ref) => (
  <div
    ref={ref}
    onClick={onClick}
    className={`absolute top-1/2 left-1/2 rounded-xl border border-white bg-black [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] ${customClass} ${className}`.trim()}
    style={style}
    {...props}
  >
    {children}
  </div>
));
Card.displayName = "Card";

export default function GalleryPage() {
  const [cardWidth, setCardWidth] = useState(500);
  const [cardHeight, setCardHeight] = useState(400);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      
      if (screenWidth < 640) { // Mobile (sm breakpoint)
        const width = Math.min(350, screenWidth - 32); // Lebih besar untuk mobile
        setCardWidth(width);
        setCardHeight(450); // Tinggi lebih besar untuk mobile
      } else if (screenWidth < 768) { // Small tablet
        const width = Math.min(400, screenWidth - 32);
        setCardWidth(width);
        setCardHeight(420);
      } else { // Desktop
        const width = Math.min(500, screenWidth - 32);
        setCardWidth(width);
        setCardHeight(400);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="min-h-screen bg-[#F0F1F1] overflow-x-hidden">
      <NavbarGalery />

      <section className="flex flex-col lg:flex-row items-center justify-center px-4 py-20 lg:py-32 xl:py-20 gap-4 lg:gap-8 max-w-full overflow-visible min-h-[700px] lg:mt-[-30px] xl:mt-[-50px]">
        {/* Bagian Teks */}
        <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-1 max-w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black tracking-tight break-words">
            Ui/Ux <span className="text-[#2BB6C0]">Desainer</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base md:text-lg text-black leading-relaxed max-w-xl mx-auto lg:mx-0">
            Setiap desain UI/UX ini dimulai dari sebuah ide, dikembangkan melalui riset dan iterasi, dan diwujudkan menjadi interface yang tidak hanya menarik secara visual tetapi juga mudah digunakan. Di sinilah saya menuangkan kreativitas dan perhatian terhadap detail.
          </p>
        </div>

        {/* Bagian CardSwap */}
        <div className="w-full lg:w-1/2 order-2 lg:order-2 max-w-full overflow-visible" 
             style={{ 
               height: isMounted && window.innerWidth < 640 ? '0px' : '600px', 
               position: 'relative', 
               padding: isMounted && window.innerWidth < 640 ? '120px 0' : '100px 0' 
             }}>
          <div className="w-full max-w-[100vw] sm:max-w-[500px] mx-auto overflow-visible" style={{ height: '100%' }}>
          <CardSwap
  width={isMounted ? cardWidth : 350}
  height={isMounted ? cardHeight : 450}
  cardDistance={isMounted && window.innerWidth < 640 ? 40 : 60} // dari 80 → 40
  verticalDistance={isMounted && window.innerWidth < 640 ? 50 : 70} // dari 90 → 50
  delay={5000}
  pauseOnHover={true}
>

              <Card>
                <div className="w-full h-full p-4 sm:p-6 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Desain Portofolio</h3>
                  <div className="flex-1 overflow-hidden">
                    <img
                      src="/datadesain/Web portofolio.png"
                      className="w-full h-full object-cover rounded-md"
                      alt="Desain Portofolio"
                    />
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="w-full h-full p-4 sm:p-6 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Desain Kompetisi</h3>
                  <div className="flex-1 overflow-hidden">
                    <img
                      src="/datadesain/Tiketindo.png"
                      className="w-full h-full object-cover rounded-md"
                      alt="Desain Tiketindo"
                    />
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="w-full h-full p-4 sm:p-6 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Desain Kompetisi</h3>
                  <div className="flex-1 overflow-hidden">
                    <img
                      src="/datadesain/CourseMiut.png"
                      className="w-full h-full object-cover rounded-md"
                      alt="Desain CourseMiut"
                    />
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="w-full h-full p-4 sm:p-6 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Desain Aplikasi</h3>
                  <div className="flex-1 overflow-hidden">
                    <img
                      src="/datadesain/math.png"
                      className="w-full h-full object-cover rounded-md"
                      alt="Desain Aplikasi Math"
                    />
                  </div>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}