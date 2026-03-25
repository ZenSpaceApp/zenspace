import { Footer, Navbar } from '@/components';
import Hero from '@/components/ui/Hero/Hero';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
