import Link from 'next/link';

import BlogPost from '../../../components/blog-post/blog-post';
import BlogImage from '../../../components/blog-image/blog-image';
import Home from '../../page.tsx';

const Page = () => (
  <Home
    currentPost={<BlogPost_IAlwaysWantedToPretendIWasAnArchitect />}
    currentPage="wanted-to-pretend-i-was-an-architect"
  />
);

const BlogPost_IAlwaysWantedToPretendIWasAnArchitect = () => (
  <BlogPost
    title="You know I always wanted to pretend I was an architect"
    date="November 2nd, 2022"
    content={
      <>
        <p>
          This week’s post provides a high-level look at how parts of our game
          are structured.
        </p>

        <h4>Camera</h4>

        <p>
          The player’s camera is one of the more complex entities in the game.
          It gathers the data from the characters for display in the UI,
          interprets the players keyboard and mouse input, assigns tasks to the
          characters based on the current context, and acts as the intermediary
          for any interactions between the caravan, characters, and user
          interface.
        </p>

        <p>
          When selecting characters, the camera resizes an invisible rectangle
          based on the mouse cursor position. When the rectangle overlaps a
          character, the character becomes selected, and when the rectangle
          shrinks so that a character no longer overlaps, the character is
          deselected. A material is used to make the invisible rectangle visible
          only where it intersects the landscape and scenery. Due to the 3D
          nature of the Selection Rectangle, this visual indicator works well
          with various elevations as well.
        </p>

        <BlogImage
          image="/images/selection-area.gif"
          caption="Using the Selection Rectangle"
          alt="The Player using the Selection Rectangle to control their characters"
          height={300}
        />

        <h4>Caravan</h4>

        <p>
          The caravan is the focal point of the player’s experience. Players
          will rescue wise Elders lost in the wilderness and lead them back to
          the caravan. After being rescued, the Elders will provide bonuses,
          such as increasing the speed that the caravan will process resources
          and unlocking new craftable resources. When characters are not off on
          adventures or gathering resources, they can walk alongside the caravan
          to guard it.
        </p>

        <h4>Levels</h4>

        <p>
          Over the course of the game, the player will guide their team of
          adventurers through numerous landscapes and{' '}
          <Link
            href="https://en.wikipedia.org/wiki/Biome"
            target="_blank"
            rel="noopener noreferrer"
          >
            biomes
          </Link>{' '}
          . We started building this game before the release of Unreal’s{' '}
          <Link
            href="https://docs.unrealengine.com/5.0/en-US/world-composition-in-unreal-engine/"
            target="_blank"
            rel="noopener noreferrer"
          >
            World Composition
          </Link>{' '}
          tools, so we’ve opted to not use this feature and will be using
          streaming volumes to load and unload game content instead.
        </p>

        <p>
          Each of the biomes will have a parent level that contains the
          landscape component and environmental sounds, as well as the road
          spline(s) that runs through it. The actual contents of the biome
          (foliage, wildlife, resources, buildings, enemies, non-player
          characters, intriguing mysteries, etc.) are loaded by sub-levels.
        </p>

        <p>
          As the player’s caravan moves forward through a biome, each sub-level
          will be loaded. Since the caravan can only move forwards, the previous
          sub-levels can be unloaded once the caravan is far enough away.
        </p>

        <p>
          The caravan is surrounded by an invisible volume that acts as the
          trigger to load in a new level. This volume is larger than the
          camera’s range, ensuring that the level is loaded before the camera
          reaches it and the player will never see the next level’s contents
          loading in.
        </p>

        <BlogImage
          image="/images/birds-eye-view-of-fields.png"
          caption="A sample level divided into sub-levels"
          alt="A vast level divided into sub-levels"
          height={300}
        />

        <h4>Characters</h4>

        <p>
          We use Unreal’s Pawn type for each of the humanoid characters in the
          game. These little beings each have their own artificial intelligence
          (AI) system that dictates how they behave. A character’s AI consumes
          information about their surroundings via concentric spheres that
          detect when other characters, resources, etc. are within their
          boundaries. There are two spheres in use: vision range and attack
          range. When something comes within the bounds of one of these spheres,
          a character updates their internal state regarding their surroundings
          and their AI can then make informed decisions about the best course of
          action. Early in the development process, we decided not to use the
          vision system that Unreal provides as it uses more system resources
          than our overlapping spheres. The Unreal vision system is quite
          robust, but we realized that we did not need the constant visual range
          updates and granularity that it provides. Our solution, while less
          fully featured, scales much better for our needs since there will be a
          large number of characters on screen.
        </p>

        <BlogImage
          image="/images/attack-vision-ranges.png"
          caption="The outer rings are the vision range and the inner rings are the attack range"
          alt="Three characters showing their vision and attack ranges"
          height={350}
        />

        <p>
          The Pawn component for each character is only responsible for
          interacting with other entities in the game environment and does not
          do any decision making on its own. This component is built using both
          blueprints and C++. We’ve found that blueprints are often simpler for
          interactions between Pawns and/or Actors, while code is nice for
          internal logic.
        </p>

        <h5>AI Controller</h5>

        <p>
          This component’s task is to aggregate the current AI and animation
          state for the character’s Pawn; it updates the state for each
          character, such as the character’s stats, skills earned, skills in
          use, current objective progress, and skill cooldowns. This AI
          Controller does not make any decisions on what the Pawn should do, but
          acts as a reference for how the Pawn should interact with its
          environment. This component is written fully in C++.
        </p>

        <h5>Anima</h5>

        <p>
          The Anima produces what we refer to as ‘Jobs’ for the AI Controller to
          share with the Pawn. The AI Controller provides the current state of
          the character and the desired task to the Anima, which then returns a
          vector of Jobs required to complete the task. An example of this is
          when the player tells a character to gather a resource such as wood
          from a tree. The player would simply click on the character and then
          click on a tree to harvest it. The Anima would produce the Jobs: move
          to the tree, chop the tree down, wait for the tree to fall, then
          gather the wood. This process of generating Job vectors by starting
          with the desired outcome has made it fairly simple to add new Jobs to
          the game, as we have built a collection of composable Jobs that can
          help accomplish each task. The Anima is a fully stateless component;
          it consumes the current request and state to produce a new Job vector
          without any previous knowledge. Because of this, each character will
          have the same decision making logic based on their state. Since the
          Anima conforms to an interface, in the future we can have multiple
          Anima to suit different types of characters. This component is written
          fully in C++.
        </p>

        <h5>Oracle</h5>

        <p>
          This component is somewhat underused at this time. The Oracle is used
          by the Anima when the Anima has no particular tasks to work with.
          Currently the Oracle produces the Idle Job, which results in
          characters just staying put and showing an idle animation. In the
          future, the Oracle can be used to dictate what sort of idle animation
          should be shown based on the character’s surroundings. A stretch goal
          is to have idle interactions between characters, such as having
          conversations or looking at the scenery together. This component is
          written fully in C++.
        </p>

        <h4>User Interface</h4>

        <p>
          Since our game is a real-time strategy, it’s natural that our UI
          contains a lot of data and has a lot of interaction. The three main UI
          components are the Pawn Details, Caravan Details, and Settings menus.
        </p>

        <p>
          The Pawn Details menu shows the information for the currently selected
          character. From here the player can buy new skills for the character,
          choose which action skills to use, and check out the various stats and
          metrics relating to the character. A challenge has been ensuring that
          the UI stays up to date with each character’s information, without
          continuous polling for updates. During combat, each character’s health
          can change quickly, and character stats will change upon gaining new
          skills and from influences such as their allies, enemies and status
          effects. Any of these events will trigger an update for the affected
          portion of the UI.
        </p>

        <p>
          The Caravan Details menu shows a list of all of the Elders that have
          been rescued, and the accumulated benefits that the Elders provide.
          This menu is probably the least developed, as we currently only have
          one Elder to rescue. A future goal is to have numerous Elders
          scattered throughout the game that the player can befriend and learn
          from.
        </p>

        <p>
          The Settings menu contains a few game settings such as anti-aliasing
          quality, shadow quality, and overall brightness. As we progress we
          want to add more settings and accessibility options.
        </p>

        <p>
          To keep concerns separated between the UI and other game entities, we
          use a dispatcher component to aggregate interactions. This dispatcher
          is known to all game entities and is the arbiter for all UI updates
          and reads. An example of this is when the player buys a new skill for
          a character: The player first selects a character via the camera’s
          Selection Rectangle, which tells the camera to send the character’s
          information to the UI via the dispatcher. The dispatcher then reaches
          into its sub-components to perform the update. With the proper
          information displayed in the UI, the player can then select the skill
          they want to purchase and click the buy button. This skill purchase
          tells the camera to update the selected character with the new skills,
          and the dispatcher will also update the UI to reflect the changes.
        </p>

        <p>
          Since we began using Unreal Engine, the architecture of the code and
          assets has changed quite a few times. As we get closer to an MVP
          version for user testing, we’re feeling confident that our game’s
          design will scale nicely as new features are added to Unreal.
        </p>

        <p>
          A goal we have had over the past few months is to get a stub
          implementation of every game mechanic we can think of. We still need
          to work on aspects of story-telling and the game’s atmosphere in
          general, but we’re confident that we’ve tackled the hardest problems
          first… right?
        </p>

        <BlogImage
          image="/images/rough-architecture.png"
          caption="A high-level architecture diagram"
          alt="A high-level game components architecture diagram"
          height={500}
        />
      </>
    }
  />
);

export default Page;
