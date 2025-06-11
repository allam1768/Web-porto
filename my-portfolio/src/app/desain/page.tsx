import NavbarGalery from '@/components/Navbar2';
import Footer from '@/components/Footer';
import CardSwap, { Card } from '@/components/CardSwap';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#F0F1F1]">
      <NavbarGalery />

      <section className="flex flex-col lg:flex-row items-center justify-center px-4 py-20 lg:py-50 gap-4 lg:gap-8">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black tracking-tight">
            Ui/Ux <span className="text-[#2BB6C0]">Desain</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base md:text-lg text-black leading-relaxed max-w-xl mx-auto lg:mx-0">
            This is the result of various moments that I captured through the camera lens. Each image holds a story and experience that I want to share with you, from the places I visited to the little things that inspired me.
          </p>
        </div>

        {/* CardSwap Section */}
        <div className="w-full lg:w-1/2 order-2 lg:order-2" style={{ height: '400px', position: 'relative' }}>
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
            onCardClick={() => {}} 
          >
            <Card>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Portofolio Desain</h3>
                <img
                  src="/datadesain/Web portofolio.png"
                  className="w-full h-full object-cover rounded-md border-[3px] border-black"
                  alt="Portfolio Design"
                />
              </div>
            </Card>
            <Card>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Competition design</h3>
                <img
                  src="/datadesain/Tiketindo.png"
                  className="w-full h-full object-cover rounded-md border-[3px] border-black"
                  alt="Tiketindo Design"
                />
              </div>
            </Card>
            <Card>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Competition design</h3>
                <img
                  src="/datadesain/CourseMiut.png"
                  className="w-full h-full object-cover rounded-md border-[3px] border-black"
                  alt="CourseMiut Design"
                />
              </div>
            </Card>
            <Card>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Application design</h3>
                <img
                  src="/datadesain/math.png"
                  className="w-full h-full object-cover rounded-md border-[3px] border-black"
                  alt="Math Application Design"
                />
              </div>
            </Card>
          </CardSwap>
        </div>
      </section>

      <Footer />
    </div>
  );
}