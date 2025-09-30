import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
        <section id="about" className="section">
            <h3>Sobre nosotros</h3>
            <p>Dos autistas y un neurtipico, dos chaqueños y un mendocino, dos con ahorros y uno en quiebra, un departamento en CABA, un sueño y el todopoderoso perro Satoshi</p>
            <div className={styles.teamContainer}>
                <div className={styles.teamCard}>
                    <Image src="/Facu.jpeg" width={500} height={500} alt="Facundo Atrio" className={styles.teamPhoto}/>
                    <p>Facundo Atrio - CEO</p>
                </div>
                <div className={styles.teamCard}>
                    <Image src="/Mati.jpeg" width={500} height={500} alt="Matias Bogado" className={styles.teamPhoto}/>
                    <p>Matias Bogado - MKT</p>
                </div>
                <div className={styles.teamCard}>
                    <Image src="/Santi.jpeg" width={500} height={500} alt="Santiago Bari" className={styles.teamPhoto}/>
                    <p>Santiago Bari - CTO</p>
                </div>
                <div className={styles.teamCard}>
                    <Image src="/Satoshi.jpg" width={500} height={500} alt="Satoshi" className={styles.teamPhoto}/>
                    <p>Satoshi - Pet</p>
                </div>
            </div>
        </section>
    );
}
