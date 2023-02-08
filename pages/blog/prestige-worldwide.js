import Link from 'next/link';

import BlogPost from '../../components/blog-post/blog-post';
import BlogImage from '../../components/blog-image/blog-image';
import styles from '../../components/blog-post/blogPost.module.css';

export default function BlogPost_PrestigeWorldwide() {
  return (
    <BlogPost
      title="Prestige Worldwide"
      date="September 14th, 2022"
      content={
        <>
          <p>
            “So, what’s your game about?” Until now, we’ve only had awkward and
            ambiguous answers to this question, so last week we started writing
            an{' '}
            <Link
              href="https://en.wikipedia.org/wiki/Elevator_pitch"
              target="_blank"
              rel="noopener noreferrer"
            >
              elevator pitch
            </Link>
            . In short, an elevator pitch is a concise explanation of what your
            game is about and why anyone would want to play it.
          </p>

          <p>
            Having a solid elevator pitch can help reduce the number of awkward
            encounters we may face throughout the process of developing a game.
            It will also better prepare us for when someone asks what the vision
            for our game is and be useful when we start looking for a publisher
            and marketing our game.
          </p>

          <BlogImage
            image="/images/money-please.png"
            alt="Mona Lisa Saperstien needs money"
            height="300"
          />

          <p>
            Our logic when developing our elevator pitch is to try and sell the
            game concept and provide some detail about what the player will be
            doing when they play the game. There are aspects of our game that we
            do not want to reveal until the player experiences them on their
            own; however, we also want to avoid being too vague regarding the
            gameplay. So we began the writing process by making two lists: what
            we wanted to say in our pitch, and what we didn’t want to say. Next,
            we wrote a few draft versions of our pitch, refining and reworking
            it over time. And since most resources around elevator pitches
            recommend keeping the pitch short and sweet (between 30 seconds and
            2 minutes long), we’ve also been reciting our drafts aloud to see
            how long they are.
          </p>

          <p>
            We’re still working on the elevator pitch, but we{' '}
            <strong>have</strong> managed to create a{' '}
            <Link
              href="https://en.wikipedia.org/wiki/Log_line"
              passHref={true}
              target="_blank"
              rel="noopener noreferrer"
            >
              logline:
            </Link>
          </p>

          <p className={styles.quote}>
            Survivors of a societal collapse must go on an epic adventure to
            find a new home. Lead the survivors through a vast wilderness and
            battle fearsome foes while uncovering the mysterious past of your
            ancestors.
          </p>

          <p>
            Our logline doesn’t focus on gameplay, but instead aims to entice
            potential players with the game’s themes and premise. Save yourself
            the awkward explanations of your game idea. Write some pitches!
          </p>
        </>
      }
    ></BlogPost>
  );
}
