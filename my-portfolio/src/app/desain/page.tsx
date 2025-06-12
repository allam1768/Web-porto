'use client';
import { forwardRef, ReactNode, HTMLAttributes } from 'react';
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
  return (
    <div className="min-h-screen bg-[#F0F1F1]">
      <NavbarGalery />

      <section className="flex flex-col lg:flex-row items-center justify-center px-4 py-20 lg:py-50 gap-4 lg:gap-8">
        {/* Bagian Teks */}
        <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black tracking-tight">
            Ui/Ux <span className="text-[#2BB6C0]">Desainer</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base md:text-lg text-black leading-relaxed max-w-xl mx-auto lg:mx-0">
            Setiap desain UI/UX ini dimulai dari sebuah ide, dikembangkan melalui riset dan iterasi, dan diwujudkan menjadi interface yang tidak hanya menarik secara visual tetapi juga mudah digunakan. Di sinilah saya menuangkan kreativitas dan perhatian terhadap detail.
          </p>
        </div>

        {/* Bagian CardSwap */}
        <div className="w-full lg:w-1/2 order-2 lg:order-2" style={{ height: '400px', position: 'relative' }}>
          <CardSwap
            width={400}
            height={300}
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={true}
            onCardClick={(false)} 
          >
            <Card>
              <div className="w-full h-full p-4 flex flex-col">
                <h3 className="text-lg font-semibold text-white mb-2">Desain Portofolio</h3>
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
              <div className="w-full h-full p-4 flex flex-col">
                <h3 className="text-lg font-semibold text-white mb-2">Desain Kompetisi</h3>
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
              <div className="w-full h-full p-4 flex flex-col">
                <h3 className="text-lg font-semibold text-white mb-2">Desain Kompetisi</h3>
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
              <div className="w-full h-full p-4 flex flex-col">
                <h3 className="text-lg font-semibold text-white mb-2">Desain Aplikasi</h3>
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
      </section>

      <Footer />
    </div>
  );
}