import Head from 'next/head';
import Header from '@components/Header';
import Background from '@components/Background';
import Footer from '@components/Footer';
import About from '@sections/About';
import Skills from '@sections/Skills';
import Portfolio from '@sections/Portfolio';
import Contact from '@sections/Contact';
import Articles from '@sections/Articles';
import LangSwitch from '@components/LangSwitch';
import styles from '../styles/home.module.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home = () => {
  return (
    <>
      <Head>
        <title>Hi! I am Aslyn 我是語純</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="I am Aslyn. I am a front-end web engineer. 我是莊語純，是一個網頁前端工程師。"
        />
        <meta httpEquiv="Content-Language" content="en,zh-TW" />
        <meta charset="UTF-8" />
        <meta property="og:url" content="https://aslynyc.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hi! I am Aslyn 我是語純" />
        <meta
          property="og:description"
          content="I am Aslyn. I am a front-end web engineer. 我是莊語純，是一個網頁前端工程師。"
        />
        <meta property="og:image" content="/public/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KZB880WLEF"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-KZB880WLEF');`,
          }}
        />
      </Head>
      <div className={styles.container} id="home">
        <Background />
        <Header />
        <div className={styles.toolBar}>
          <LangSwitch />
        </div>
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
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Home;
