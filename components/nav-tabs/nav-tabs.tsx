import clsx from 'clsx';

import { Tabs } from '../../constants.ts';
import styles from './navTabs.module.css';

const NavTabs: React.FC<{ tab: number, onChange: Function }> = ({ tab, onChange }): React.ReactElement => {
  const blogClasses = clsx(styles.navtab, 'link', {
    [styles.active]: tab === Tabs.Blog,
  });

  const aboutClasses = clsx(styles.navtab, 'link', {
    [styles.active]: tab === Tabs.About,
  });

  return (
    <div className={styles.container}>
      <div className={blogClasses} onClick={() => onChange(Tabs.Blog)}>
        Blog
      </div>
      <div className={aboutClasses} onClick={() => onChange(Tabs.About)}>
        About
      </div>
    </div>
  );
};

export default NavTabs;
