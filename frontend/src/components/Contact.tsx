export default function Contact(){
    return(
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
    );
}