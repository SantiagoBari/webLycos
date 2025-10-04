import styles from "./About.module.css";
import Image from "next/image"

export default function About() {
  return (
    <section
      id="about"
      className="section"
      style={{ "--section-bg": `url("/AboutImage.jpg")` } as React.CSSProperties}
    >
      <div className="sectionContent">
        <h3>Sobre nosotros</h3>
        <p>
          Dos autistas y un neurotípico, dos chaqueños y un mendocino, dos con
          ahorros y uno en quiebra, un departamento en CABA, un sueño y el
          todopoderoso perro Satoshi
        </p>
        <div className={styles.teamContainer}>
          <div className={styles.teamCard}>
            <Image
              src="/Facu.jpeg"
              alt="Facundo Atrio"
              className={styles.teamPhoto}
            />
            <h4>Facundo Atrio - CEO</h4>
          </div>
          <div className={styles.teamCard}>
            <Image
              src="/Mati.jpeg"
              alt="Matias Bogado"
              className={styles.teamPhoto}
            />
            <h4>Matias Bogado - MKT</h4>
          </div>
          <div className={styles.teamCard}>
            <Image
              src="/Santi.jpeg"
              alt="Santiago Bari"
              className={styles.teamPhoto}
            />
            <h4>Santiago Bari - CTO</h4>
          </div>
          <div className={styles.teamCard}>
            <Image
              src="/Satoshi.jpg"
              alt="Satoshi"
              className={styles.teamPhoto}
            />
            <h4>Satoshi - Pet</h4>
          </div>
        </div>
      </div>
    </section>
  );
}