import BlogPost from '../../../components/blog-post/blog-post';
import BlogImage from '../../../components/blog-image/blog-image';
import Home from '../../page.tsx';

const Page = () => (
  <Home
    currentPost={<BlogPost_OnceYouUnplugTheMachine />}
    currentPage="once-you-unplug-the-machine"
  />
);

const BlogPost_OnceYouUnplugTheMachine = () => (
  <BlogPost
    title="Once You Unplug The Machine, All The Scores Will Be Erased"
    date="October 5th, 2022"
    content={
      <>
        <p>
          Implementing a save feature for our game seemed like a simple enough
          task. We needed to take the current state of the game, serialize it,
          then deserialize it later when a saved game is loaded. This seemingly
          small, but important, feature has raised many questions for our team
          as the game has grown. This post aims to explain the design choices
          that we’ve encountered when implementing a save game system.
        </p>

        <h4>Adding New Features</h4>

        <p>
          As we add new features to our game we need to ensure that we are able
          to save their states. Fortunately, Unreal provides easy-to-use tools
          for serializing saved data to disk, as well as deserializing that
          data. The main challenge we’ve faced is how this saved and loaded data
          is integrated into our game. A recent new feature is the addition of
          Aura skills, which can be described as a persistent area of effect
          skill that follows the position of the character using it. These Aura
          skills can produce numerous effects such as providing a stat boost to
          nearby allies, or even damaging enemies within its range.
        </p>

        <BlogImage
          image="/images/cadet-aura.gif"
          caption="Learning an aura skill"
          alt="The Cadet learns an aura type skill"
          height={300}
        />

        <p>
          We already had a system in place for saving and loading the skill
          trees for each character in our game, but were lacking the ability to
          load the Aura skill’s area of effect component. The loading process
          for each character after implementing Aura skills is as follows:
        </p>

        <ol>
          <li>Spawn the character beside the caravan</li>
          <li>Spawn the weapons & armor the character uses</li>
          <li>Load the AI state</li>
          <li>Load the characters stats</li>
          <li>Load the skill tree</li>
          <li>
            Enable the character’s tick (meaning that the character will then be
            “on”)
          </li>
          <li>
            Add the character’s portrait and combat stance to their UI component
          </li>
          <li>
            Add the character’s currently selected skills to their UI component
          </li>
          <li>
            Spawn any game entities needed for the various possible Aura skills
          </li>
        </ol>

        <p>
          Every time a new feature that requires saving and loading is added to
          our game, we extend this sequence. After this loading process, each
          character will then seek out any other game entities it needs to
          function.
        </p>

        <h4>When/How/What to Save</h4>

        <p>
          Ideally (maybe), someone playing our game would be able to save at any
          time. The game’s precisely saved state could then be loaded from the
          exact moment the save was created. As it turns out though, this is no
          easy task to implement. There may be myriad projectiles flying through
          the air, physics simulations being run, animations being run that can
          trigger various events, and many more small yet important details that
          would need to be captured when the game is saved.
        </p>

        <p>
          Saving and loading the game in an exact moment also presents the
          interesting situation where a player could, unintentionally, save the
          moment before absolute catastrophe; thus, when loading the game the
          player immediately meets said catastrophe and loses. This situation
          may not be escapable due to the player not having enough time to avoid
          the problem after the game has loaded. A possible solution to this
          would be to allow numerous saves per individual game enabling the
          player to load an older save if their most recent save leads to a
          game-ending disaster. However, then we introduce the concept of “save
          scumming” (which isn’t necessarily a terrible thing) but we may find
          that this is an unwanted dynamic as development progresses. We need to
          further consider the tradeoffs of various saving approaches before we
          can settle on the best fit for our game.
        </p>

        <h4>Feel The Savings</h4>

        <p>
          Our game has a day/night cycle, the start of each new day could be an
          ideal time for saving. This would give players the chance to restart a
          day if everything goes awry, but this may result in too much time
          played between saves. We don’t want players to get discouraged if they
          need to restart a day. We could also try having multiple save points
          along the caravan’s path, with the possibility of saving multiple
          times per in-game day. Choosing a when and how to save seems to be
          full of tradeoffs:
        </p>

        <p>
          If you only allow saving at specific times: The player may get
          frustrated with the lack of control, not to mention they may want/need
          to stop playing before a save point is met. The player may become
          discouraged when they lose and have to replay content. Implementation
          can be easier due to better developer control surrounding save
          conditions.
        </p>

        <p>
          If you allow saving at any time: The sense of danger and risk may be
          lost. Players enjoy being able to control how long they play.
          Implementation will be challenging from having to record the minute
          details required when loading a save.
        </p>

        <p>
          Since our game is in an alpha state, we have a temporary save system
          as follows:
        </p>

        <ul>
          <li>The player can save at any time</li>
          <li>Characters’ AI states, skill trees, and stats are saved</li>
          <li>
            When loading the game, the characters are placed beside the caravan
            in a default position
          </li>
        </ul>

        <p>
          There is still a lot of work to do regarding saving the level’s state,
          and a lot of decisions to made regarding what should be saved. We want
          to ensure that any defeated enemies stay defeated and that consumed
          resources do not reappear. This save system will be a work in progress
          for some time to come.
        </p>

        <BlogImage
          image="/images/costanza-frogger.gif"
          alt="George Costanza fails at IRL Frogger"
          height={300}
        />
      </>
    }
  />
);

export default Page;
