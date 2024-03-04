
import Header from "@/components/header/Header";
import styles from "./styles.module.scss";
import Footer from "@/components/Footer/Footer";
import ProfileCard from "@/components/ProfileCard/ProfileCard";


interface Props{
  params: {id: string}
}

export default function Profile({params} : Props) {

  const id = params.id

  return (
    <div className={styles.background}>
      <Header/>
      <ProfileCard id={id} />
      <Footer/>
    </div>
  );
}
