import { useEffect, useState, useRef } from 'react';
import Logo from '../../assets/Logo.svg';
import styles from './index.module.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { menuItems } from './configs';
import cx from 'classnames';
import MenuIcon from '../MenuIcon';

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDynamicMenuShow, setIsDynamicMenuShow] = useState(false);
  const menuIconRef = useRef();

  const handleMenuIconOnClick = () => {
    setIsDynamicMenuShow((prev) => !prev);
  };

  const closeDynamicMenu = () => {
    setIsDynamicMenuShow(false);
    menuIconRef.current.setHasOpenClass(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = (e) => {
    let scrollTop = e.target.scrollingElement.scrollTop;
    setHasScrolled(scrollTop > 136);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => window.removeEventListener('scroll', handleScroll, true);
  }, []);

  return (
    <header className={isDynamicMenuShow ? styles.fixedHeader : null}>
      <div
        className={styles.logoWrapper}
        onClick={() => {
          closeDynamicMenu();
          scrollToTop();
        }}
      >
        <Logo className={styles.logo} />
      </div>
      <nav className={cx(styles.menu, isDynamicMenuShow && styles.fixedMenu)}>
        {menuItems.map(({ path, label }) => (
          <AnchorLink
            key={path}
            href={`#${path}`}
            className={styles.menuItem}
            onClick={closeDynamicMenu}
            offset={isDynamicMenuShow ? -195 : 0}
          >
            {label}
          </AnchorLink>
        ))}
      </nav>
      <div
        className={cx(
          styles.fixedContainer,
          isDynamicMenuShow || hasScrolled ? styles.showFixedContainer : null
        )}
      >
        <MenuIcon
          onClick={handleMenuIconOnClick}
          className={cx(
            styles.menuIcon,
            isDynamicMenuShow || hasScrolled ? styles.showMenuIcon : null
          )}
          ref={menuIconRef}
        />
      </div>
    </header>
  );
};

export default Header;
