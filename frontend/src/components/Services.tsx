export default function Services(){
    return(
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
    );
}