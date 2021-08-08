import Card from '../../components/Card';
import Tag from '../../components/Tag';
import styles from './index.module.scss';
import { projects } from './configs';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      {projects.map(({ title, description, imageSrc, techTags }) => (
        <Card
          key={title}
          title={title}
          text={description}
          footer={
            <div>
              {techTags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </div>
          }
        />
      ))}
    </div>
  );
};

export default Portfolio;
