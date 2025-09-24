import { useState, useEffect } from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useRouter } from 'next/router';

const LangSwitch = () => {
  const router = useRouter();
  const [isEnglish, setIsEnglish] = useState(router.locale === 'en');

  const handleToggleSwitch = (e) => {
    const isChecked = e.target.checked;
    if (isEnglish !== isChecked) {
      setIsEnglish(isChecked);
    }
  };

  useEffect(() => {
    if (router.locale !== (isEnglish ? 'en' : 'zh-TW')) {
      isEnglish
        ? router.push('/', '/', { locale: 'en' })
        : router.push('/', '/', { locale: 'zh-TW' });
    }
  }, [isEnglish]);

  return (
    <div>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={isEnglish}
          onChange={handleToggleSwitch}
        />
        <span className={styles.slider}>
          <span
            className={cx(
              styles.label,
              isEnglish ? styles.leftLabel : styles.rightLabel
            )}
          >
            {isEnglish ? '中' : 'En'}
          </span>
        </span>
      </label>
    </div>
  );
};

export default LangSwitch;
