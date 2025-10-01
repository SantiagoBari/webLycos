// app/page.tsx
import React from 'react';
import About from '../components/About';

export default function HomePage() {
  return (
    <main style={{ fontFamily: 'sans-serif', gap: '1rem' }}>
      {/* Hero Section */}
      <section
        id="hero"
        className="section"
        style={{ "--section-bg": `url("/HeroImage.jpg")` } as React.CSSProperties}
      >
        <div className="sectionContent">
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
      <section
        id="services"
        className="section"
        style={{ "--section-bg": `url("/ServicesImage.jpg")` } as React.CSSProperties}
      >
        <div className="sectionContent">
          <h3>Servicios</h3>
          <ul>
            <li>Hosting Web3</li>
            <li>Blockchain</li>
            <li>Clases de doma</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="section"
        style={{ "--section-bg": `url("/ContactImage.jpg")` } as React.CSSProperties}
      >
        <div className="sectionContent">
          <h3>Contacto</h3>
          <p>facundo.atrio@lycos.com.ar</p>
          <a
            href="https://wa.me/5492616824346"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 text-lg"
          >
            <i className="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem', borderTop: '1px solid #ccc', paddingTop: '1rem', background: '#164479ff', color: '#fff' }}>
        <p>© {new Date().getFullYear()} Lykos</p>
      </footer>
    </main>
  );
}
