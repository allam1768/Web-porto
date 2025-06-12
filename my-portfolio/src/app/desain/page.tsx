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
  const [cardWidth, setCardWidth] = useState(300);
  const [cardHeight, setCardHeight] = useState(380);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      
      if (screenWidth < 480) { // Extra small mobile
        const width = Math.min(280, screenWidth - 40);
        setCardWidth(width);
        setCardHeight(360);
      } else if (screenWidth < 640) { // Small mobile
        const width = Math.min(320, screenWidth - 40);
        setCardWidth(width);
        setCardHeight(380);
      } else if (screenWidth < 768) { // Large mobile / small tablet
        const width = Math.min(380, screenWidth - 48);
        setCardWidth(width);
        setCardHeight(400);
      } else if (screenWidth < 1024) { // Tablet
        const width = Math.min(450, screenWidth - 64);
        setCardWidth(width);
        setCardHeight(420);
      } else { // Desktop
        const width = Math.min(500, screenWidth - 80);
        setCardWidth(width);
        setCardHeight(440);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Function untuk mendapatkan container height berdasarkan screen size
  const getContainerHeight = () => {
    if (!isMounted) return '450px';
    
    const screenWidth = window.innerWidth;
    if (screenWidth < 480) return '320px';
    if (screenWidth < 640) return '360px';
    if (screenWidth < 768) return '420px';
    if (screenWidth < 1024) return '500px';
    return '600px';
  };

  // Function untuk mendapatkan padding berdasarkan screen size
  const getContainerPadding = () => {
    if (!isMounted) return '60px 0';
    
    const screenWidth = window.innerWidth;
    if (screenWidth < 480) return '30px 0';
    if (screenWidth < 640) return '40px 0';
    if (screenWidth < 768) return '50px 0';
    return '80px 0';
  };

  // Function untuk mendapatkan card distance berdasarkan screen size
  const getCardDistance = () => {
    if (!isMounted) return 50;
    
    const screenWidth = window.innerWidth;
    if (screenWidth < 480) return 25;
    if (screenWidth < 640) return 35;
    if (screenWidth < 768) return 45;
    if (screenWidth < 1024) return 55;
    return 65;
  };

  // Function untuk mendapatkan vertical distance berdasarkan screen size
  const getVerticalDistance = () => {
    if (!isMounted) return 60;
    
    const screenWidth = window.innerWidth;
    if (screenWidth < 480) return 35;
    if (screenWidth < 640) return 45;
    if (screenWidth < 768) return 55;
    if (screenWidth < 1024) return 65;
    return 75;
  };

  return (
    <div className="min-h-screen bg-[#F0F1F1] overflow-x-hidden">
      <NavbarGalery />

      <section className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 lg:py-32 xl:py-20 gap-4 sm:gap-6 lg:gap-12 max-w-full overflow-visible min-h-[500px] sm:min-h-[600px] lg:mt-[-30px] xl:mt-[-50px]">
        {/* Bagian Teks */}
        <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-1 max-w-full">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-black tracking-tight break-words leading-tight mt-8 sm:mt-12 md:mt-16 lg:mt-0">
            Ui/Ux <span className="text-[#2BB6C0]">Designer</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-black leading-relaxed max-w-lg sm:max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
            Every UI/UX design starts with an idea, is developed through research and iteration, and is transformed into an interface that is not only visually appealing but also easy to use. This is where I bring my creativity and attention to detail.
          </p>
        </div>

        {/* Bagian CardSwap */}
        <div className="w-full lg:w-1/2 order-2 lg:order-2 max-w-full overflow-visible" 
             style={{ 
               height: getContainerHeight(),
               position: 'relative', 
               padding: getContainerPadding()
             }}>
          <div className="w-full max-w-[calc(100vw-2rem)] sm:max-w-[400px] md:max-w-[500px] mx-auto overflow-visible" style={{ height: '100%' }}>
            <CardSwap
              width={cardWidth}
              height={cardHeight}
              cardDistance={getCardDistance()}
              verticalDistance={getVerticalDistance()}
              delay={5000}
              pauseOnHover={true}
            >
              <Card>
                <div className="w-full h-full p-3 sm:p-4 md:p-6 flex flex-col">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3">Desain Portofolio</h3>
                  <div className="flex-1 overflow-hidden">
                    <img
                      src="/datadesain/Web portofolio.png"
                      className="w-full h-full object-cover rounded-md"
                      alt="Desain Portofolio"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="w-full h-full p-3 sm:p-4 md:p-6 flex flex-col">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3">Desain Kompetisi</h3>
                  <div className="flex-1 overflow-hidden">
                    <img
                      src="/datadesain/Tiketindo.png"
                      className="w-full h-full object-cover rounded-md"
                      alt="Desain Tiketindo"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="w-full h-full p-3 sm:p-4 md:p-6 flex flex-col">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3">Desain Kompetisi</h3>
                  <div className="flex-1 overflow-hidden">
                    <img
                      src="/datadesain/CourseMiut.png"
                      className="w-full h-full object-cover rounded-md"
                      alt="Desain CourseMiut"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="w-full h-full p-3 sm:p-4 md:p-6 flex flex-col">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3">Desain Aplikasi</h3>
                  <div className="flex-1 overflow-hidden">
                    <img
                      src="/datadesain/math.png"
                      className="w-full h-full object-cover rounded-md"
                      alt="Desain Aplikasi Math"
                      loading="lazy"
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