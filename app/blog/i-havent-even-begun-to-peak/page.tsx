import Link from 'next/link';

import BlogPost from '../../../components/blog-post/blog-post';
import BlogImage from '../../../components/blog-image/blog-image';
import Home from '../../page.tsx';

const Page = () => {
  return (
    <Home
      currentPost={<BlogPost_IHaventEvenBegunToPeak />}
      currentPage="i-havent-even-begun-to-peak"
    />
  );
};

const BlogPost_IHaventEvenBegunToPeak = () => (
  <BlogPost
    title="Let me tell you something. I haven’t even begun to peak"
    date="October 20th, 2022"
    content={
      <>
        <p>
          We’ve been busy preparing our{' '}
          <Link
            href="https://www.unrealengine.com/en-US/megagrants"
            target="_blank"
            rel="noopener noreferrer"
          >
            Epic Games Megagrant
          </Link>{' '}
          application, so this post will be a brief recap of some new features
          that we’ve been working on over the last two weeks.
        </p>

        <h4>Damage Over Time</h4>

        <p>
          Earlier in the development process we had created a status effects
          system, where characters could have their stats increased or decreased
          based on leveling up or the use of skills. For example the Cadet
          character’s Born Leader skill increases the damage resistance of the
          Cadet, as well as all nearby allies. We’ve recently added a Damage
          Over Time feature; with the addition of this feature a character can
          use an offensive skill to initially damage an opponent, and the
          skill’s effect will continue to damage the opponent after the initial
          hit. An example of this is the Blaster character’s Fire Bomb skill:
        </p>

        <BlogImage
          image="/images/fire-DOT.gif"
          caption="Somewhat on fire: lingering burn damage after being hit by a grenade"
          alt="The Archer experiencing being lit on fire"
          height={425}
        />

        <h4>Skill Trees</h4>

        <p>
          Each character can be upgraded using resources that are either
          harvested or found. These upgrades will follow a skill tree style of
          advancement, where each skill has prerequisite skills that must be
          obtained first. We have created preliminary skill trees for both the
          Cadet and Blaster characters and are currently working on completing
          one for the Archer. We’ve been busy adding the logic and animations
          for the action skills and the stat bonuses for the passive skills.
        </p>

        <BlogImage
          image="/images/blaster-skilltree.png"
          caption="Preliminary skill tree for the Blaster character"
          alt="The Blaster's skill tree"
          width={350}
        />

        <BlogImage
          image="/images/cadet-skilltree.png"
          caption="Preliminary skill tree for the Cadet character"
          alt="The Cadet's skill tree"
          width={350}
        />

        <h4>Weapon Types</h4>

        <p>
          Each character uses a specific type of weapon in combat. We currently
          have a bow, sword and shield, and grenade weapon types. In the future,
          we plan on adding at least one more type. Over the past few weeks,
          we’ve been focused on integrating the animations for each of the
          existing weapon types.
        </p>

        <BlogImage
          image="/images/weapon-type-state-machines.png"
          caption="Animation graph for weapon use"
          alt="Animation state machines for manaing each weapon type"
          height={300}
        />
      </>
    }
  />
);

export default Page;
