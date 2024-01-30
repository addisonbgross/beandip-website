import Image from 'next/image';

import styles from './about.module.css';

const About = (): React.ReactElement => (
  <div>
    <p className={styles.summary}>
      <strong>beandip games</strong> is a Canadian indie game studio currently
      working on its first game. We aim to create unique (and slightly weird)
      gaming experiences. Follow along with our development blog as we share our
      creation process in a holistic way.
    </p>
  </div>
);

export default About;
