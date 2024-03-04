import styles from "./style.module.scss"

export default function Footer(){
  return(
    <footer className={styles.footer}>
        <span className={styles.footerCopy}>ViniPessan&copy;2023</span>
        <a href="https://www.instagram.com/vini_pessan/" target="blank" className={styles.footerDescription}>Instagram</a>
        <a href="https://www.youtube.com/" target="blank" className={styles.footerDescription}>Youtube</a>
        <a href="https://twitter.com/VinciusPessan1" target="blank" className={styles.footerDescription}>Twitter</a>
  </footer>
  )
}