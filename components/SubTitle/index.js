import styles from './index.module.scss';

const SubTitle = (props) => {
  const { title } = props;

  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
};

export default SubTitle;
