import Link from 'next/link';

import BlogPost from '../../../components/blog-post/blog-post';
import BlogImage from '../../../components/blog-image/blog-image';

const BlogPost_GameOn = () => (
  <BlogPost
    title="Game On"
    date="September 7th, 2022"
    slug="game-on"
    content={
      <>
        <p>
          Hey there! Welcome to beandip games 🙂. We’re an independent game
          studio located in beautiful British Columbia, Canada. We’re working on
          our first game, currently untitled. Our project has been stewing for a
          few years, and we’ve recently taken a leap to work on it full time.
          Our goal with this blog is to share project updates, as well as our
          challenges and triumphs, during the development process.
        </p>

        <BlogImage
          image="/images/hill-forest.png"
          alt="long shadows on a hill"
          height={400}
        />

        <p>
          Our game is a small-scale, real-time strategy adventure. We aim to
          create a unique gaming experience, deriving inspiration from a variety
          of game types including colony simulators and old school real-time
          strategy.
        </p>

        <BlogImage
          image="/images/hill-run.png"
          alt="an archer runs along a ridge"
          height={550}
        />

        <p>
          Follow us on{' '}
          <Link
            href="https://www.instagram.com/beandipgames/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>{' '}
          and{' '}
          <Link
            href="https://twitter.com/beandipgames/"
            passHref={true}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>{' '}
          for more! Welcome to the party, pal.
        </p>
      </>
    }
  />
);

export default BlogPost_GameOn;
