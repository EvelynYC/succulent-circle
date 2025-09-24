import { useEffect, useState, useRef } from 'react';
import Logo from '@assets/Logo.svg';
import styles from './index.module.scss';
import { menuItems } from './configs';
import cx from 'classnames';
import MenuIcon from '../MenuIcon';
import LangSwitch from '../LangSwitch';

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

  const scrollToSection = (sectionId, offset = 0) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setHasScrolled(scrollTop > 136);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isDynamicMenuShow ? styles.fixedHeader : styles.header}>
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
          <a
            key={path}
            href={`#${path}`}
            className={styles.menuItem}
            onClick={(e) => {
              e.preventDefault();
              closeDynamicMenu();
              scrollToSection(path, isDynamicMenuShow ? 195 : 0);
            }}
          >
            {label}
          </a>
        ))}
        {isDynamicMenuShow && (
          <div className={styles.langTool}>
            <LangSwitch />
          </div>
        )}
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
