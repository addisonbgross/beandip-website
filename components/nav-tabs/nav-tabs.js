import clsx from 'clsx';

import { TABS } from '../../constants.js';
import styles from '../../styles/NavTabs.module.css';

function NavTabs({ tab, onChange }) {
  const newsClasses = clsx(styles.navtab, {
    [styles.active]: tab === TABS.News,
  });

  const blogClasses = clsx(styles.navtab, {
    [styles.active]: tab === TABS.Blog,
  });

  return (
    <div className={styles.container}>
      <div className={newsClasses} onClick={() => onChange(TABS.News)}>
        News
      </div>
      <div className={blogClasses} onClick={() => onChange(TABS.Blog)}>
        Blog
      </div>
    </div>
  );
}

export default NavTabs;
