import Link from "next/link";
import { destinos } from "@/data/destinos";
import styles from "@/styles/DetalhesDestino.module.css";

type DetalhesDestinoProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DetalhesDestino({
  params,
}: DetalhesDestinoProps) {
  const { id } = await params;

  const destino = destinos.find(
    (destino) => destino.id === Number(id)
  );

  if (!destino) {
    return (
       <section className={styles.container}>
        <h1 className={styles.titulo}>Destino não encontrado</h1>

        <Link href="/destinos" className={styles.voltar}>
          Voltar para destinos
        </Link>
      </section>
    )
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>{destino.nome}</h1>

      <img
        src={destino.imagem}
        alt={destino.nome}
        className={styles.imagem}
      />

      <p className={styles.descricao}>
        {destino.descricao}
      </p>

      <Link href="/destinos" className={styles.voltar}>
        Voltar para destinos
      </Link>
    </section>
  )
}