'use client';
import Link from "next/link";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = sessionStorage.getItem('token');
      const id = sessionStorage.getItem('userId');
      
      setIsLoggedIn(!!token);
      setUserId(id);

      if (id) {
        axios.get(`http://localhost:3000/users/${id}`)
          .then(response => {
            setUserName(response.data.name);
          })
          .catch(error => {
            console.error('Erro ao buscar o nome do usuário:', error);
          });
      }
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <div>
      {isLoggedIn ? (
        <div className={styles.navBar}>
          <Link href="/"><img src="/logo.jpg" alt="logo" className={styles.logo} /></Link>
          <div>
            <Link className={styles.options} href="/">Início</Link>
            <Link className={styles.options} href="/team">Time</Link>
            <Link className={styles.options} href="/users">Usuários</Link>
            <Link className={styles.options} href={`/profile/${userId}`}>{userName}</Link>
            <button className={styles.btn} onClick={handleLogout}>Sair</button>
          </div>
        </div>
      ) : (
        <div className={styles.navBar}>
          <Link href="/"><img src="/logo.jpg" alt="logo" className={styles.logo} /></Link>
          <div>
            <Link className={styles.options} href="/">Início</Link>
            <Link className={styles.options} href="/teamNoAuth">Time</Link>
            <Link className={styles.options} href="/login">Login</Link>
            <Link className={styles.options} href="/register">Cadastre-se</Link>
          </div>
        </div>
      )}
    </div>
  );
}
