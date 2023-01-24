import Image from 'next/image';
import Link from 'next/link';

import { RedditLink, InstagramLink } from '../../constants.js';

import styles from './social.module.css';

const Social = () => (
  <div className={styles.social}>
    <Link href={RedditLink}>
      <a rel="noopener noreferrer" target="_blank">
        <Image
          src="/reddit-logo.svg"
          width="32"
          height="32"
          layout="fixed"
          alt="beandip games' reddit"
        />
      </a>
    </Link>
    <Link href={InstagramLink}>
      <a rel="noopener noreferrer" target="_blank">
        <Image
          src="/instagram-logo.svg"
          width="32"
          height="32"
          layout="fixed"
          alt="beandip games' instagram"
        />
      </a>
    </Link>
  </div>
);

export default Social;
