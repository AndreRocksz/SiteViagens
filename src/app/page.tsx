import Link from "next/link";
import CardDestino from "@/components/CardDestino";
import { destinos } from "@/data/destinos";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const destinosDestaque = destinos.slice(0, 3);

  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <h1>Explore novos destinos pelo mundo</h1>

        <p>
          Bem-vindo ao Portal de Viagens. Descubra lugares incríveis,
          conheça destinos turísticos famosos e encontre inspiração para
          sua próxima aventura.
        </p>

        <Link href="/destinos" className={styles.botao}>
          Explorar destinos
        </Link>
      </section>

      <section className={styles.destaques}>
        <h2>Destinos em destaque</h2>

        <p className={styles.subtitulo}>
          Conheça alguns dos lugares mais incríveis disponíveis em nosso portal.
        </p>

        <div className={styles.grid}>
          {destinosDestaque.map((destino, index) => (
            <CardDestino
              key={destino.id}
              id={destino.id}
              nome={destino.nome}
              imagem={destino.imagem}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>

        <Link href="/destinos" className={styles.botaoSecundario}>
          Ver todos os destinos
        </Link>
      </section>
    </main>
  );
}