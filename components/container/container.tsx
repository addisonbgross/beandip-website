import styles from './container.module.css';

const Container = (element: any): React.ReactElement => (
  <div className={styles.background}>
    <main className={styles.main}>{element.children}</main>
  </div>
);

export default Container;
