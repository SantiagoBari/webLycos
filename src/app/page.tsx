// app/page.tsx
import React from 'react';
import Header from '../components/header';
import About from '../components/About';

export default function HomePage() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', gap: '1rem' }}>
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <section id="hero" className="section">
        <div className="max-w-[50%] mx-auto text-center">
          <p>
            Somos una empresa innovadora especializada en el desarrollo de soluciones blockchain, 
            con un enfoque particular en tecnologías Web3. Además, creamos aplicaciones web modernas 
            y personalizadas que impulsan la transformación digital de nuestros clientes. Nuestro equipo 
            combina experiencia técnica y creatividad para ofrecer productos seguros, escalables y 
            orientados al futuro, ayudando a empresas a prosperar en el mundo descentralizado.
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded">Conocer más</button>
        </div>
      </section>

      {/* About Section */}
      <About/>

      {/* Services Section */}
      <section id="services" className="section">
        <h3>Servicios</h3>
        <ul>
          <li>Web3</li>
          <li>Blockchain</li>
          <li>Clases de doma</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h3>Contacto</h3>
        <p>Podés poner tu mail, teléfono o formulario de contacto aquí.</p>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem', borderTop: '1px solid #ccc', paddingTop: '1rem', background: '#164479ff' , color:'#fff' }}>
        <p>© {new Date().getFullYear()} Lykos</p>
      </footer>
    </main>
  );
}
