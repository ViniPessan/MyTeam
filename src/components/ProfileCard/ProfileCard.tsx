"use client"

import React, { useEffect, useState } from 'react';
import styles from "./styles.module.scss";
import axios from 'axios';

interface ProfileCardProps {
  id: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export default function ProfileCard({ id }: ProfileCardProps) {

  const [user, setUser] = useState<User | null>(null);
  const [showUpdateCard, setShowUpdateCard] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>('');


  const handleShowUpdateCard = () => {
    setShowUpdateCard(prevState => !prevState);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (user) {
      setUser({
        ...user,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleUpdateUser = async () => {
    if (user && user.password !== confirmPassword) {
      alert('As senhas não coincidem. Por favor, verifique e tente novamente.');
      return;
    }
    try {
      const updatedUser = { ...user};
      await axios.put(`http://localhost:3000/users/${id}`, updatedUser);
      alert('Usuário atualizado com sucesso!');
      handleShowUpdateCard();
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      alert('Erro ao atualizar usuário');
    }
  };

  const handleDeleteUser = async () => {  
    const confirmDelete = window.confirm('Tem certeza que deseja excluir este usuário?');

    if (confirmDelete) {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      alert('Usuário excluído com sucesso!');
      window.location.href = '/users';
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
      alert('Erro ao excluir usuário');
    }
  } else {
    alert('Exclusão cancelada');
  }
};

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${id}`); 
        setUser(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };

    fetchUserData();
  }, [id]);


  return (
    <>
      {showUpdateCard ? (
        <div className={styles.cardUpdate}>
        <img src={`/profile.webp`} alt="img" className={styles.imgUpdate} />

        <form action="" className={styles.form}>
          
          <label htmlFor="name" className={styles.label}>Nome:</label>
            <input type="text" 
            name="name" 
            value={user?.name}
            className={styles.input}
            onChange={handleInputChange}/>
            
          

            <label htmlFor="email" className={styles.label}>Email:</label>
            <input 
            type="text" 
            name="email" 
            value={user?.email}
            onChange={handleInputChange}
            className={styles.input}/>

            <label htmlFor="password" className={styles.label}>Senha:</label>
            <input 
            type="password" 
            name="password" 
            value={user?.password}
            onChange={handleInputChange}
            className={styles.input}/>

            <label htmlFor="confirmPassword" className={styles.label}>Confirmar senha:</label>
            <input 
            type="password" 
            name="confirmPassword" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles.input}/>
        </form>

            <div className={styles.bntOption}>
            <button className={styles.btn} onClick={handleShowUpdateCard}>Cancelar</button>
            <button className={styles.btn1} onClick={handleUpdateUser}>Atualizar</button>
          </div>
        </div>

      ) : (

        <div className={styles.card}>
          <img src={`/profile.webp`} alt="img" className={styles.img} />
          <p className={styles.username}>{user?.name}</p>
          <p className={styles.email}>{user?.email}</p>
          <div className={styles.bntOption}>
            <button className={styles.btn} onClick={handleDeleteUser}>Deletar</button>
            <button className={styles.btn1} onClick={handleShowUpdateCard}>Atualizar</button>
          </div>
        </div>
      )}
    </>
  );;
}
