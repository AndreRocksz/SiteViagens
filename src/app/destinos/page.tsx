import CardDestino from "@/components/CardDestino";
import { destinos } from "@/data/destinos";
import styles from "@/styles/Destinos.module.css";

export default function Destinos() {
  return (
    <section className={styles.container}>
      <h2>Destinos Turísticos</h2>

      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino
            key={destino.id}
            id={destino.id}
            nome={destino.nome}
            imagem={destino.imagem}
          />
        ))}
      </div>
    </section>
  );
}