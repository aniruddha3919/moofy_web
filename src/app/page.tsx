import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import CurvedLoop from '@/components/home/CurvedLoop';
import Services from '@/components/home/Services';
import Portfolio from '@/components/home/Portfolio';
import Pricing from '@/components/home/Pricing';
import FAQ from '@/components/home/FAQ';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Navbar />
      <Hero />
      <CurvedLoop
        marqueeText="MOOFY ✦ BRANDING ✦ MARKETING ✦ WEBSITES ✦"
        speed={1.5}
        curveAmount={100}
        interactive={true}
      />
      <Services />
      <Portfolio />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
