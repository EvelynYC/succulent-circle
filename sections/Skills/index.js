import Card from '../../components/Card';
import SubTitle from '../../components/SubTitle';
import styles from './index.module.scss';
import { skills } from './configs';
import Flower from '../../assets/flower.svg';

const Skills = () => {
  return (
    <div className={styles.container} id="skills">
      <SubTitle title="Skills" />
      <div className={styles.cards}>
        {skills.map(({ title, items }) => (
          <Card
            key={title}
            className={styles.card}
            title={title}
            centered
            text={
              <>
                <div className={styles.dividerIcon}>
                  <Flower />
                </div>
                <ul>
                  {items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
