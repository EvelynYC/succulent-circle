import Logo from '../../assets/Logo.svg';
import styles from './index.module.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { menuItems } from './configs';

const Header = () => {
  return (
    <header>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <nav className={styles.menu}>
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
