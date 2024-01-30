import Card from '@components/Card';
import Tag from '@components/Tag';
import styles from './index.module.scss';
import SubTitle from '@components/SubTitle';
import { projects } from './configs';
import LinkIcon from '@assets/link.svg';
import { GithubIcon } from '@assets/socialIcons';
import cx from 'classnames';
import { useTranslation } from 'next-i18next';

const Portfolio = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.container} id="portfolio">
      <SubTitle title="Portfolio" />
      {projects.map(
        ({ title, description, imageSrc, techTags, link, githubLink }) => (
          <Card
            key={title}
            title={
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className={styles.title}
              >
                {t(title)}
              </a>
            }
            text={t(description)}
            imageOptions={{
              src: imageSrc,
              alt: 'Image of project',
              layout: 'horizontal',
              width: 320,
              height: 320,
            }}
            extra={
              <>
                {link && (
                  <a href={link} target="_blank" rel="noreferrer">
                    <LinkIcon className={styles.icon} fill="#6897ba" />
                  </a>
                )}
                {githubLink && (
                  <a href={githubLink} target="_blank" rel="noreferrer">
                    <GithubIcon
                      className={cx(styles.icon, styles.github)}
                      fill="#f7dc97"
                    />
                  </a>
                )}
              </>
            }
            footer={
              <div>
                {techTags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </div>
            }
          />
        )
      )}
    </div>
  );
};

export default Portfolio;
