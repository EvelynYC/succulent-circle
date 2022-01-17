import styles from './index.module.scss';
import SubTitle from '@components/SubTitle';
import { contacts } from '@configs/contacts';
import { useTranslation } from 'next-i18next';

const iconColor = '#456c4b';
const Contact = () => {
  const {t}=useTranslation('common');
  
  return (
    <div className={styles.container} id="contact">
      <SubTitle title="Contact" />
      <div className={styles.content}>
        <p className={styles.inTouch}>Let&apos;s get in touch ! ♥ </p>
        <p>
          {`${t('email-contact')} `}
          <a
            onClick={() => window.open('mailto:chuang.yuchun@gmail.com')}
            className={styles.mail}
          >
            chuang.yuchun@gmail.com
          </a>
        </p>
        <p>{t('other-contact')}</p>
        <ul>
          {contacts.map(
            ({ name, getIcon, link }, index) =>
              index !== 0 && (
                <li key={name}>
                  <a href={link} target="_blank" rel="noreferrer">
                    <div className={styles.contactInfo}>
                      <div className={styles.socialIcon}>
                        {getIcon(iconColor)}
                      </div>
                      <span className={styles.socialItem}>{name}</span>
                    </div>
                  </a>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
