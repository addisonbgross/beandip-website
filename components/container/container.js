import styles from './container.module.css';

const Container = (props) => (
  <div className={styles.background}>
    <main className={styles.main}>{props.children}</main>
  </div>
);

export default Container;
