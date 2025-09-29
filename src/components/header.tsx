import Image from "next/image";
import styles from "./Header.module.css";


export default function Header() {
  return (
        <header className={styles.header}>
            <Image src="/Logo.jpeg" width={100} height={100} alt="Logo Lykos" />
            <div className={styles.logoText}>
                <h1 className={styles.title}>Lykos</h1>
                <nav>
                    <ul className={styles.navList}>
                        <li><a href="#about">Sobre nosotros</a></li>
                        <li><a href="#services">Servicios</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </nav>
            </div>
            <div style={{marginLeft: 'auto', color: '#ffff'}}>
                <button className="px-6 py-2 bg-blue-600 text-white rounded">Login</button>
            </div>
        </header>
  );
}
