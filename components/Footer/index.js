import styles from './index.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer} id="footer">
      <div className={styles.content}>
        <div className={styles.copyRight}>
          <p>{'© 2021 made with ❤ by Evelyn Y.C..'}</p>
          <p>{' All rights reserved.'}</p>
          <p>
            {` Icon credit to `}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              target="_blank"
              rel="noreferrer"
            >
              flaticon.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
