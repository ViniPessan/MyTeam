import Header from "@/components/header/Header"
import styles from "./style.module.scss"
import Footer from "@/components/Footer/Footer"
import Link from "next/link"
import CardNoAuth from "@/components/CardNoAuth/CardNoAuth"

export default function teamNoAuth(){
  return(
    <div className={styles.background}>
      <Header/>
      <CardNoAuth/>
      <Footer/>
    </div>
  )
}