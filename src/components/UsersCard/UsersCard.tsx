"use client"

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UsersCard() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get<User[]>("http://localhost:3000/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    }
    getUsers();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de usuários</h1>

      <div className={styles.card}>
        <div className={styles.table}>
          <div className={styles.tableHead}>
            <p className={styles.thId}>ID</p> 
            <p className={styles.th}>Nome</p>
            <p className={styles.th}>Email</p>
          </div>
        
        {users.map(user => (
          <div key={user.id} className={styles.tableContent}>  
              <p className={styles.trId}>{user.id}</p>
              <p className={styles.tr}>{user.name}</p>
              <p className={styles.tr}>{user.email}
              <Link href={`/profile/${user.id}`}>
               <button className={styles.btn}>Editar</button>
              </Link>
              </p>
          </div>
        ))}
        </div>
         </div>
      </div>
  );
}

