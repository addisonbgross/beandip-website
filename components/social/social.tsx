import Image from 'next/image';
import Link from 'next/link';

import { RedditLink, InstagramLink } from '../../constants.ts';

const Social = () => (
  <div className="flex items-center space-x-4 w-full">
    <Link passHref href={RedditLink} rel="noopener noreferrer" target="_blank">
      <Image
        priority
        src="/reddit-logo.svg"
        width="24"
        height="24"
        className="social"
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
        priority
        src="/instagram-logo.svg"
        width="24"
        height="24"
        className="social"
        alt="beandip games' instagram"
      />
    </Link>
  </div>
);

export default Social;
