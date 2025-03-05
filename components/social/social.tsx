import Image from 'next/image';
import Link from 'next/link';

import { RedditLink, InstagramLink } from '../../constants.ts';

const Social = () => (
  <div className="flex space-x-2">
    <Link passHref href={RedditLink} rel="noopener noreferrer" target="_blank">
      <Image
        src="/reddit-logo.svg"
        width="32"
        height="32"
        alt="beandip games' reddit"
      />
    </Link>
    <Link
      passHref
      href={InstagramLink}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Image
        src="/instagram-logo.svg"
        width="32"
        height="32"
        alt="beandip games' instagram"
      />
    </Link>
  </div>
);

export default Social;
