'use client';
import { Footer, Navbar } from '@/components';
import CTAHome from '@/components/marketing/CTAHome/CTAHome';
import Hero from '@/components/ui/Hero/Hero';

export default function HomePage() {
  

  return <>
    <Navbar />
    <main>
      <Hero/>
      <CTAHome />
    </main>
    <Footer />
  </>
}
