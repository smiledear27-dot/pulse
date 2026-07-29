import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-base text-gray-200">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
