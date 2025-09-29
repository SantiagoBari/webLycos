// app/page.tsx
import React from 'react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      {/* Header */}
      <header style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Image src="/Logo.jpeg" width={100} height={100} alt="Logo Lykos" />
          <h1 style={{ margin: 0 }}>Lykos</h1>
          <nav>
            <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0, margin: 0 }}>
              <li><a href="#about">Sobre nosotros</a></li>
              <li><a href="#services">Servicios</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section id="hero" style={{ marginBottom: '2rem' }}>
        <h2>Bienvenido a nuestra empresa</h2>
        <p>Una breve descripción de lo que hacemos y nuestros valores.</p>
        <button>Conocer más</button>
      </section>

      {/* About Section */}
      <section id="about" style={{ marginBottom: '2rem' }}>
        <h3>Sobre nosotros</h3>
        <p>Aquí podés contar la historia de tu empresa o tus objetivos.</p>
          <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
            <li>
              <Image 
                src="/Facu.jpeg"
                width={500}
                height={500} alt={''}
                className="team-photo"     />
                <p> Facundo Atrio - CEO</p>
            </li>
            <li>
              <Image 
                src="/Mati.jpeg"
                width={500}
                height={500} alt={''}
                className="team-photo"         />
                <p> Matias Bogado - MKT</p>
            </li>
            <li>
              <Image 
                src="/Santi.jpeg"
                width={500}
                height={500} alt={''}
                className="team-photo"         />
                <p> Santiago Bari - CTO</p>
            </li>
          </ul>
      </section>

      {/* Services Section */}
      <section id="services" style={{ marginBottom: '2rem' }}>
        <h3>Servicios</h3>
        <ul>
          <li>Web3</li>
          <li>Blockchain</li>
          <li>Clases de doma</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ marginBottom: '2rem' }}>
        <h3>Contacto</h3>
        <p>Podés poner tu mail, teléfono o formulario de contacto aquí.</p>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: '2rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
        <p>© {new Date().getFullYear()} Lykos</p>
      </footer>
    </main>
  );
}
