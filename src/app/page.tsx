import Header from "@/components/header/Header";
import styles from "./styles.module.scss"
import HomeCard from "@/components/homeCard/HomeCard";
import Footer from "@/components/Footer/Footer";

export default function Home() {


  return (
  <div className={styles.background}>
    <Header/>
    <HomeCard/>
    <div className={styles.footer}>
     <Footer/>
    </div>
  </div>
  );
}
