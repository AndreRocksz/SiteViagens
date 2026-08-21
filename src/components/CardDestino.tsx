import Link from "next/link";
import styles from "@/styles/CardDestino.module.css";

type CardDestinoProps = {
  id: number;
  nome: string;
  imagem: string;
};

export default function CardDestino({
  id,
  nome,
  imagem,
}: CardDestinoProps) {
  return (
    <div className={styles.card}>
      <img
        src={imagem}
        alt={nome}
        className={styles.imagem}
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