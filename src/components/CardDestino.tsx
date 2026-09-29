import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/CardDestino.module.css";

type CardDestinoProps = {
  id: number;
  nome: string;
  imagem: string;
  loading?: "lazy" | "eager";
};

export default function CardDestino({
  id,
  nome,
  imagem,
  loading = "lazy",
}: CardDestinoProps) {
  return (
    <div className={styles.card}>
      <Image
        src={imagem}
        alt={nome}
        className={styles.imagem}
        width={1200}
        height={800}
        loading={loading}
        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
      />

      <h3>{nome}</h3>

      <Link
        href={`/destinos/${id}`}
        className={styles.botao}
      >
        Ver detalhes
      </Link>
    </div>
  );
}