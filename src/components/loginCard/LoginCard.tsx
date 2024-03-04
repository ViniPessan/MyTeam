"use client"

import { ChangeEvent, useState } from "react";
import styles from "./styles.module.scss"
import axios from "axios";

export default function LoginCard(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password
      });
      console.log('Resposta do servidor:', response.data);

      const {token, userId} = response.data; 
      alert("Login realizado com sucesso. Seja bem-vindo!")
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('userId', userId);
      
      window.location.href = "/";
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Credenciais inválidas');
    }
  };



  return(
<div className={styles.card}>
      <h1 className={styles.title}>My Team</h1>
      <p className={styles.subtitle}>Faça login para continuar!</p>
      <form className={styles.form} onSubmit={handleSubmit}>
          
            <label htmlFor="email" className={styles.label}>Email:</label>
            <input
            className={styles.input}
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
         
          
            <label htmlFor="password" className={styles.label}>Senha:</label>
            <input
            className={styles.input}
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
         <div className={styles.btnPosition}>
          <button type="submit" className={styles.btn}>Login</button>
         </div>
        </form>
    </div>
  )
}