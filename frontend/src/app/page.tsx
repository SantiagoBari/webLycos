// app/page.tsx
import React from 'react';
import About from '../components/About';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main style={{ fontFamily: 'sans-serif', gap: '1rem' }}>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </main>
  );
}
