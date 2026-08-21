import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <h2>Descubra destinos incríveis pelo mundo!</h2>

      <p>
        Bem-vindo ao Portal de Viagens. Aqui você poderá conhecer alguns dos
        destinos turísticos mais famosos do planeta e descobrir curiosidades
        sobre cada um deles.
      </p>

      <Link href="/destinos" className={styles.botao}>
        Ver Destinos
      </Link>
    </section>
  );
}
