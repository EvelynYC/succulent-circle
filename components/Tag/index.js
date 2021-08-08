import styles from './index.module.scss';

const Tag = (props) => {
  const { children } = props;
  return <span className={styles.container}>{children}</span>;
};

export default Tag;
