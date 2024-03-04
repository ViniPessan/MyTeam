import Link from "next/link"
import styles from "./styles.module.scss"

export default function CardNoAuth(){

  return(
      <>
      <h1 className={styles.title}>My Team</h1>
      <div className={styles.card}>
        <p className={styles.cardTitle}>Escale seu time!</p>
        <p className={styles.subtitle}>Poxa, parace que você não está logado :(</p>

        <p className={styles.text}>Para escalar seu time primeiro você precisa fazer login.</p>
    
      < Link href="/login">
      <button className={styles.btn}>Login</button>
      </Link>

    <p className={styles.text2}>
      Caso ainda não tenha uma conta, você pode se cadastrar clicando <Link 
      className={styles.link} 
      href="/register">
        aqui!
        </Link>
    </p>
</div>
</>

  )
}