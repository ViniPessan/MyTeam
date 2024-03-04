import Header from "@/components/header/Header"
import styles from "./styles.module.scss"
import Footer from "@/components/Footer/Footer"
import TeamImg from "@/components/TeamImg/page"
import TeamCard from "@/components/TeamCard/TeamCard"

export default function Team(){
  return(
    <div className={styles.background}>
      <Header/>
      <div className={styles.container}>
        <h1 className={styles.title}>Escale seu time!</h1>
      <div className={styles.gridContainer}>
        <div>
          <TeamCard/>
        </div>
        <div className={styles.imgCard}>
           <TeamImg/>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}