import Image from 'next/image';
import Link from 'next/link';

import BlogPost from '../../components/blog-post/blog-post';

export default function BlogPost_GameOn() {
  return (
    <BlogPost
      title="Game On"
      date="September 7th, 2022"
      content={
        <>
          <p>
            Hey there! Welcome to beandip games 🙂. We’re an independent game
            studio located in beautiful British Columbia, Canada. We’re working
            on our first game, currently untitled. Our project has been stewing
            for a few years, and we’ve recently taken a leap to work on it full
            time. Our goal with this blog is to share project updates, as well
            as our challenges and triumphs, during the development process.
          </p>
          <div className="blog-image">
            <Image
              src="/images/hill-forest.png"
              width="552"
              height="552"
              layout="intrinsic"
              alt="beandip logo"
            />
          </div>
          <p>
            Our game is a small-scale, real-time strategy adventure. We aim to
            create a unique gaming experience, deriving inspiration from a
            variety of game types including colony simulators and old school
            real-time strategy.
          </p>

          <div className="blog-image">
            <Image
              src="/images/hill-run.png"
              width="552"
              height="552"
              layout="intrinsic"
              alt="beandip logo"
            />
          </div>
          <p>
            Follow us on{' '}
            <Link
              href="https://www.instagram.com/beandipgames/"
              passHref={true}
            >
              <a target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </Link>{' '}
            and{' '}
            <Link href="https://twitter.com/beandipgames/" passHref={true}>
              <a target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </Link>{' '}
            for more! Welcome to the party, pal.
          </p>
        </>
      }
    ></BlogPost>
  );
}
