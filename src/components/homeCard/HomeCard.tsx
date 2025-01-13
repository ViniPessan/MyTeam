'use client'

import Link from "next/link"
import { useEffect, useState } from "react";
import styles from "./style.module.scss"

export default function HomeCard() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = sessionStorage.getItem('token');
      setToken(storedToken);
    }
  }, []);

  return (
    <>
      <div className={styles.startText}>
        <h1 className={styles.title}>My Team</h1>
        <p className={styles.subtitle}>Escale seu time ideal!</p>
      </div>
      <div className={styles.card}>
        <p className={styles.cardTitle}>Seja bem-vindo!</p>
        <p className={styles.text}>
          No My Team você pode escalar o seu time ideal de todos os tempos, escolher o seu jogador favorito e que acha 
          que foi o melhor em sua posição, do começo da história do futebol, até os dias de hoje.
          Gostaria de nos contar qual é o seu time?
        </p>
        {!token ? (
          <Link href="/teamNoAuth">
            <button className={styles.btn}>Escalar time</button>
          </Link>
        ) : (
          <Link href="/team">
            <button className={styles.btn}>Escalar time</button>
          </Link>
        )}
      </div>
    </>
  );
}
