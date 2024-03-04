import Header from "@/components/header/Header"
import styles from "./styles.module.scss"
import Footer from "@/components/Footer/Footer"
import RegisterCard from "@/components/registerCard/RegisterCard"


export default function register(){
  return(
    <div className={styles.background}>
      <Header/>
      <RegisterCard/>
      <Footer/>
    </div>
  )
}