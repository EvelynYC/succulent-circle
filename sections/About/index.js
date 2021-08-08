import styles from './index.module.scss';
import Card from '../../components/Card';
import SubTitle from '../../components/SubTitle';
import { socials } from './configs';

const iconColor = '#71767d';

const About = () => {
  return (
    <div className={styles.container} id="about">
      <SubTitle title="About" />
      <div
        style={{ backgroundColor: 'rgba(256,256,256,0.7)', padding: '24px' }}
      >
        <p>
          Hi！我是語純，是一個網頁前端工程師。著迷於網頁這樣一個浩瀚無邊的畫布，以及豐富多彩的技術顏料，
          喜歡製作能與螢幕另一端的使用者互動對話的網站，目前正在深耕的框架是
          React。
        </p>
        <div className={styles.socialIcons}>
          {socials.map(({ name, getIcon, link }) => (
            <div key={name} className={styles.socialIcon}>
              <a href={link} target="_blank" rel="noreferrer">
                {getIcon(iconColor)}
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* <Card
        text="Hi！我是語純，是一個網頁前端工程師。著迷於網頁這樣一個浩瀚無邊的畫布，以及豐富多彩的技術顏料，
      喜歡製作能與螢幕另一端的使用者互動對話的網站，目前正在深耕的框架是 React。"
        footer={
          <div className={styles.socialIcons}>
            {socials.map(({ name, getIcon, link }) => (
              <div key={name} className={styles.socialIcon}>
                <a href={link} target="_blank" rel="noreferrer">
                  {getIcon(iconColor)}
                </a>
              </div>
            ))}
          </div>
        }
      /> */}
    </div>
  );
};

export default About;
