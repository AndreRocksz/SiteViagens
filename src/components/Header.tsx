import Link from "next/link";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>🌎 Portal de Viagens</h1>

        <nav>
          <ul className={styles.menu}>
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/destinos">Destinos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}