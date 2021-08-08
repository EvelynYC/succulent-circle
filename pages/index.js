import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Portfolio from '../sections/Portfolio';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <div className={styles.container} id="home">
      <Background />
      <Header />
      <div className={styles.content}>
        <About />
        <Portfolio />
        <Skills />
      </div>
      <Footer />
    </div>
  );
}
