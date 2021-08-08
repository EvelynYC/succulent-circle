import Succulent from '../../assets/Succulent.svg';
import styles from './index.module.scss';

const pieceMaxAmount = 12;

const Background = () => {
  const getSucculents = (num) => {
    let result = [];
    for (let i = 0; i <= num; i++) {
      result.push(<Succulent key={i} className={styles.piece} />);
    }
    return result;
  };

  return (
    <div className={styles.container}>{getSucculents(pieceMaxAmount)}</div>
  );
};

export default Background;
