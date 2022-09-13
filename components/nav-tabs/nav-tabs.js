import clsx from 'clsx';

import { TABS } from '../../constants.js';
import styles from './navTabs.module.css';

const NavTabs = ({ tab, onChange }) => {
  const blogClasses = clsx(styles.navtab, 'link', {
    [styles.active]: tab === TABS.Blog,
  });

  const aboutClasses = clsx(styles.navtab, 'link', {
    [styles.active]: tab === TABS.About,
  });

  return (
    <div className={styles.container}>
      <div className={blogClasses} onClick={() => onChange(TABS.Blog)}>
        Blog
      </div>
      <div className={aboutClasses} onClick={() => onChange(TABS.About)}>
        About
      </div>
    </div>
  );
};

export default NavTabs;
