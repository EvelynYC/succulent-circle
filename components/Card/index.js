import React from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Card = (props) => {
  const { text, footer, title, centered, className } = props;

  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.card}>
        {title && (
          <div
            className={
              centered ? cx(styles.title, styles.center) : styles.title
            }
          >
            {title}
          </div>
        )}
        <div
          className={centered ? cx(styles.text, styles.center) : styles.text}
        >
          <div>{text}</div>
        </div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>
  );
};

Card.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  centered: PropTypes.bool,
};

export default Card;
