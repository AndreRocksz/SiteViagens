import Image from "next/image";
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
    );
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>{destino.nome}</h1>

      <Image
        src={destino.imagem}
        alt={destino.nome}
        className={styles.imagem}
        width={1200}
        height={800}
        loading="eager"
        sizes="(max-width: 768px) 100vw, 1200px"
      />

      <p className={styles.descricao}>
        {destino.descricao}
      </p>

      <Link href="/destinos" className={styles.voltar}>
        Voltar para destinos
      </Link>
    </section>
  );
}