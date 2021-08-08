import { useEffect, useState } from 'react';
import Logo from '../../assets/Logo.svg';
import styles from './index.module.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { menuItems } from './configs';
import cx from 'classnames';

const Header = () => {
  const [offset, setOffset] = useState(0);
  const hasScrolled = offset > 136;

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
      console.log(window.pageYOffset);
    };
  }, []);

  return (
    <header className={hasScrolled ? styles.fixedContainer : styles.container}>
      <div
        className={
          hasScrolled
            ? cx(styles.logoWrapper, styles.fixedLogoWrapper)
            : cx(styles.logoWrapper, styles.centeredLogoWrapper)
        }
      >
        <Logo
          className={hasScrolled ? styles.fixedLogo : styles.centeredLogo}
        />
      </div>
      <nav
        className={
          hasScrolled
            ? cx(styles.menu, styles.fixedMenu)
            : cx(styles.menu, styles.centeredMenu)
        }
      >
        {menuItems.map(({ path, label }) => (
          <AnchorLink key={path} href={`#${path}`} className={styles.menuItem}>
            {label}
          </AnchorLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
