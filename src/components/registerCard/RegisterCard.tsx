"use client"

import { ChangeEvent, useState } from "react";
import styles from "./styles.module.scss"
import axios from "axios"

export default function RegisterCard(){

  
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (form.password !== form.confirmPassword) {
        alert("A senha e a confirmação de senha não coincidem.");
        return;
      }
     
      const response = await axios.post("http://localhost:3000/users", form);
      console.log("Usuário cadastrado com sucesso:", response.data);
      alert("Usuário cadastrado com sucesso!"); // Exibe um alerta de sucesso

      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

      window.location.href = "/login";

    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar usuário. Por favor, tente novamente."); // Exibe um alerta de erro
    }
  };


  return(
   <div className={styles.card}>
     <h1 className={styles.title}>Cadastre-se!</h1>
     <form className={styles.form} onSubmit={handleSubmit}>
        
          <label htmlFor="name" className={styles.label}>Nome: </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        
        
          <label htmlFor="email" className={styles.label}>Email: </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        
        
          <label htmlFor="password" className={styles.label}>Senha: </label>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        
        
          <label htmlFor="confirmPassword" className={styles.label}>Confirmar Senha: </label>
          <input
            className={styles.input}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        <div className={styles.btnPosition}>
        <button type="submit" className={styles.btn}>Cadastrar</button>
        </div>
      </form>
 </div>
  )
 }