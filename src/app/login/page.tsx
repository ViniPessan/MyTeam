import Header from "@/components/header/Header"
import styles from "./styles.module.scss"
import Footer from "@/components/Footer/Footer"
import LoginCard from "@/components/loginCard/LoginCard";

export default function Login(){

  

  return(
    <div className={styles.background}>
    <Header/>
    <LoginCard/>
    <Footer/>
    </div>
    
  )
}