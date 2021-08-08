import React from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Image from 'next/image';

const Card = (props) => {
  const { text, footer, title, centered, className, imageOptions, extra } =
    props;
  const { src, alt, layout, width, height } = imageOptions || {};

  return (
    <div className={cx(styles.container, className)}>
      <div
        className={cx(
          styles.card,
          layout === 'horizontal' && styles.horizontal
        )}
      >
        {src && (
          <div
            className={
              layout === 'horizontal'
                ? styles.imageWrapperHorizontal
                : styles.imageWrapperVertical
            }
          >
            <Image
              src={src}
              alt={alt}
              layout="intrinsic"
              objectFit="cover"
              width={width}
              height={height}
            />
          </div>
        )}
        <div className={styles.content}>
          {extra && <div className={styles.extra}>{extra}</div>}
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
    </div>
  );
};

Card.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  centered: PropTypes.bool,
  imageOptions: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    layout: PropTypes.oneOf(['vertical', 'horizontal']),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  extra: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Card;
