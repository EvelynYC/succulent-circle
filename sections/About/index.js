import styles from './index.module.scss';
import SubTitle from '@components/SubTitle';
import { contacts } from '@configs/contacts';
import { useTranslation } from 'next-i18next';

const iconColor = '#71767d';

const About = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.container} id="about">
      <SubTitle title="About" />
      <div className={styles.content}>
        <p>
         {t('about')}
        </p>
        <div className={styles.socialIcons}>
          {contacts.map(({ name, getIcon, link, sendMail }) => (
            <div key={name} className={styles.socialIcon}>
              {typeof sendMail === 'function' ? (
                <a onClick={sendMail}>{getIcon(iconColor)}</a>
              ) : (
                <a href={link} target="_blank" rel="noreferrer">
                  {getIcon(iconColor)}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
