export default function Hero(){
    return(
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
    );
}