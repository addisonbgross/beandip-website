import clsx from 'clsx';

import { Tabs } from '../../types';
import styles from './navTabs.module.css';

export interface NavTabsProps {
  tab: number;
  onChange: Function;
} 

const NavTabs = (props: NavTabsProps) => {
  const blogClasses = clsx(styles.navtab, 'link', {
    [styles.active]: props.tab === Tabs.Blog,
  });

  const aboutClasses = clsx(styles.navtab, 'link', {
    [styles.active]: props.tab === Tabs.About,
  });

  return (
    <div className={styles.container}>
      <div className={blogClasses} onClick={() => props.onChange(Tabs.Blog)}>
        Blog
      </div>
      <div className={aboutClasses} onClick={() => props.onChange(Tabs.About)}>
        About
      </div>
    </div>
  );
};

export default NavTabs;
