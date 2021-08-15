import Head from 'next/head';
import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Portfolio from '../sections/Portfolio';
import Contact from '../sections/Contact';
import styles from '../styles/home.module.scss';
import Articles from '../sections/Articles';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi! I am Aslyn</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="I am Aslyn. I am a front-end web engineer. 我是莊語純，是一個網頁前端工程師。"
        />
        <meta name="keywords" content="Aslyn,莊語純,Aislyn,語純" />
        <meta httpEquiv="Content-Language" content="en,zh-TW" />
        <meta charset="UTF-8" />
      </Head>
      <div className={styles.container} id="home">
        <Background />
        <Header />
        <div className={styles.content}>
          <About />
          <Portfolio />
          <Skills />
          <Articles />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}
