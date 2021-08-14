import { useState, useImperativeHandle, forwardRef } from 'react';
import styles from './index.module.scss';
import cx from 'classnames';

const MenuIcon = forwardRef(({ onClick, className }, ref) => {
  const [hasOpenClass, setHasOpenClass] = useState(false);

  const handleOnClick = () => {
    setHasOpenClass((prev) => !prev);
    typeof onClick === 'function' && onClick();
  };

  useImperativeHandle(ref, () => ({
    setHasOpenClass,
  }));

  return (
    <div
      className={cx(
        styles.MenuIcon,
        className,
        hasOpenClass ? styles.open : null
      )}
      onClick={handleOnClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
});

MenuIcon.displayName = 'MenuIcon';

export default MenuIcon;
