import Header from "@/components/header/Header"
import styles from "./styles.module.scss"
import Footer from "@/components/Footer/Footer"
import UsersCard from "@/components/UsersCard/UsersCard"

export default function users(){
  return(
    <div className={styles.background}>
      <Header/>
      <UsersCard/>
      <Footer/>
    </div>
  )
}