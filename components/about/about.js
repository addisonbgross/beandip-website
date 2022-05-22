import styles from '../../styles/About.module.css';

const About = () => (
  <div>
    <p className={styles.summary}>
      beandip is a Canadian game studio that makes excellent games for playing
      and enjoying. They involve clicking and keypresses to create an immersive,
      fun experience.
    </p>

    <div className={styles.employees}>
      <div className={styles.descriptionContainer}>
        <div className={styles.placeholderImage} />
        <p>a</p>
        <p>Software development</p>
      </div>

      <div className={styles.descriptionContainer}>
        <div className={styles.placeholderImage} />
        <p>h</p>
        <p>Animation and modelling</p>
      </div>
    </div>
  </div>
);

export default About;
