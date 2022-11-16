import Link from 'next/link';

import BlogPost from '../../components/blog-post/blog-post';
import BlogImage from '../../components/blog-image/blog-image';

export default function BlogPost_IAlwaysWantedToPretendIWasAnArchitect() {
  return (
    <BlogPost
      title="What are you doing? Levels"
      date="November 16th, 2022"
      content={
        <>
          <p>
            We’ve been working on improving how we save the state of the game.
            We previously wrote{' '}
            <Link href="/blog/once-you-unplug-the-machine" passHref={true}>
              <a target="_blank" rel="noopener noreferrer">
                about how we save the state of the player’s characters and
                caravan.
              </a>
            </Link>{' '}
            In our latest update we’re now saving the state of the entire level,
            including trees chopped down, minerals extracted, berries harvested,
            elders rescued, and the state of any enemies in the level.
          </p>

          <h4>Levels</h4>

          <p>
            Each level/biome in our game consists of a primary level, as well as
            multiple sub-levels (we’ve broken up the biomes into many sub-levels
            for performance purposes). The primary level contains the landscape,
            audio, and non-interactable scenery, while each sub-level contains
            all of the things we now save, such as resources worked on and
            cheeky enemies.
          </p>

          <p>
            When a saved game is loaded, the caravan and characters are placed
            at their last location, and then the primary level loads in relation
            to the caravan’s position in space. When the caravan loads, it also
            triggers the loading of any nearby sub-levels. This cascading load
            sequence reduces the complexity and effort of loading a game state.
          </p>

          <BlogImage
            image="/images/level-streaming.png"
            caption="Loading responsibilities for primary and sub-levels"
            alt="A primary level enclosing sub-levels"
            height="250"
          />

          <h4>Saving</h4>

          <p>
            Since a level’s enemies implement the same state saving interface as
            the player’s characters,there was little difficulty in saving them.
            The transform (location, rotation, and scale) and resource values
            for all logs produced from harvested trees are saved, allowing the
            logs to be spawned in place upon loading a game. Resources like
            mineable rocks and berry bushes have their remaining resource count
            and individual resource values saved as well. For tracking which
            trees have been harvested, we took the reverse approach; a unique
            identifier for each tree felled is recorded and when a sub-level is
            loaded, the game checks the list of felled tree ids and deletes any
            trees in the list. We use this same approach for rescued elders:
            since an elder’s bonuses are saved in the caravan state, any elders
            that have been rescued can be deleted.
          </p>

          <BlogImage
            image="/images/lots-o-wood.png"
            caption="An abundance of logs"
            alt="A large pile of logs from felled trees"
            height="375"
          />

          <h4>Sadness</h4>

          <p>
            Unfortunately, we’ve encountered a tricky situation where sub-levels
            load their save state even when they player has not yet visited them
            yet: when the game is initially loaded we want all of the nearby
            sub-levels to have their state loaded; however, this means that when
            new, unaltered sub-levels are loaded in as the player progresses,
            those new levels will have their save state loaded as well. This
            loading is unnecessary for new levels as the player has yet to alter
            their state, and can cause a small hitch in game performance.
            Ideally we would only load the state of the levels present at the
            start of a gaming session. We’re currently unable to differentiate
            these two situations when loading a sub-level, but surely after
            enough coffees we will figure this out.
          </p>

          <BlogImage
            image="/images/levels.gif"
            alt="Jerry wants to see the levels"
            height="300"
          />
        </>
      }
    ></BlogPost>
  );
}
