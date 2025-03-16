import BlogPost from '../../../components/blog-post/blog-post';
import BlogImage from '../../../components/blog-image/blog-image';
import Home from '../../page.tsx';

const Page = () => {
  return (
    <Home
      currentPost={<BlogPost_MyMindIsGoingAMileAnHourPart2 />}
      currentPage="my-mind-is-going-a-mile-an-hour-2"
    />
  );
};

const BlogPost_MyMindIsGoingAMileAnHourPart2 = () => (
  <BlogPost
    title="My Mind Is Going A Mile An Hour (Part 2)"
    date="February 8th, 2023"
    content={
      <>
        <p>
          In our last post, we went through how the units in our game experience
          their environment, as well as how they make decisions. The actions of
          a unit are composed of a vector of Jobs, and these Jobs are the
          sub-actions that must be taken to complete a task. We work backwards
          from the desired result to build the vector of Jobs. In this post, we
          will share where these Jobs even come from and how they influence the
          animation state of each unit.
        </p>

        <h4>Job Origins</h4>

        <p>
          The player uses their mouse to select units by clicking directly on
          the unit or by dragging the selection shape over them. Once units have
          been selected, the player then uses the right mouse button to assign
          Jobs. Enemies, resources, and anything else that the units can
          interact with implement an interface named Job Factory, which is
          responsible for producing Jobs. Here are some example Job Factories:
        </p>

        <ul>
          <li>Berry bushes produce a Harvest Job</li>
          <li>Trees produce a Chop Wood Job</li>
          <li>Minerals produce a Mine Job</li>
          <li>Elders produce a Follow Job</li>
          <li>Loose wood, food, or mineral chunks produce a Gather Job</li>
          <li>
            The Caravan produces the unique Caravan Job, which tells the
            selected unit(s) to follow along side the Caravan
          </li>
        </ul>

        <p>
          The player can also click on the landscape to produce a Move job;
          however, this is a unique case as the landscape is not a Job Factory.
        </p>

        <p>
          The player will receive the Job from the relevant Job Factory and
          disperse it to the selected unit(s). The unit’s AI will then generate
          the vector of Jobs needed to complete the original job based on the
          unit’s current state. “Current State” is a bit of a misnomer as there
          is not a lot of state stored in each unit. Aside from configuration
          parameters such as vision range or team identifier, units only store
          their currently visible friends and enemies. When a unit needs to use
          its current state to make a decision, the state is generated in that
          moment. This results in extremely fresh knowledge about each unit.
          There is quite a bit of
          <s>convoluted</s> complex code running in each units’ AI. Surprisingly
          though, it contributes an absolutely trivial computational overhead,
          so getting this fresh state causes no performance cost.
        </p>

        <h4>Clicking Intensifies</h4>

        <p>
          No one likes having to be extremely precise when selecting units in a
          RTS game! We’ve put a lot of effort into making the player’s clicking
          experience as enjoyable as possible, and we aim to produce predictable
          clicking results.
        </p>

        <p>
          To make clicking as smooth as possible, there is a click precedence:
          some things in the game ignore mouse clicks, some allow the click to
          pass through them, and some will block the click. The grass is an
          example of something that ignores mouse clicks; it has no business
          being clicked.
        </p>

        <p>
          Trees, on the other hand, allow left mouse clicks to pass through
          them. We want the player to be able to select their units when they
          are located behind trees, so a left click will go through the tree and
          select the unit.However, when the player right clicks on a tree, the
          tree needs to produce a Chop Wood job. Since there is usually
          landscape behind the tree, and we mentioned in the previous section
          that clicking on the landscape produces a Move job, how do we know to
          assign the Chop Wood job and not the Move job?
        </p>

        <p>
          To decide which Job is assigned based on clicks that pass through more
          than one thing, we shoot a ray from the game camera to the mouse
          cursor. The ray will travel through things that will allow it to pass
          such as trees and buildings, but will stop when it encounters
          something that blocks it like a unit or the landscape. After the ray
          is stopped, we collect the entities that the ray has passed through
          and take a look at the first thing in the list. If this first thing is
          a Job Factory we take a Job. If the first thing is not a Job Factory,
          we continue to go through the list of ray collided entities until we
          find a valid job. If no valid job is found, then the landscape must be
          the final, blocking entity. This sorting process caused a fair amount
          of headache, but the result is that the player will always be able to
          select their units no matter where they are, and they will always be
          able to instruct their units as expected.
        </p>

        <BlogImage
          image="/images/click-through.gif"
          alt="Selecting a unit through a tree"
          caption="Selecting a unit through a tree"
          height={400}
        />

        <h4>Bones In Motion</h4>

        <p>
          When a unit has its Job vector sorted and is ready to take action, it
          must do two things:
        </p>

        <ol>
          <li>
            Inform the Movement Component about where it has to move (if
            needed), and at what speed it should travel
          </li>
          <li>
            Inform the Animation Blueprint about what animation(s) should be
            played
          </li>
        </ol>

        <p>
          The Movement Component uses the navigation mesh, which is produced by
          the Caravan, to find the quickest path to the desired location. This
          navigation mesh is generated in a large radius centered on the
          Caravan. As the Caravan slowly rolls along, this navigation mesh is
          continually re-generated to enable movement upon the new landscape
          that the player travels through. With this navigation mesh in hand,
          the Movement Component creates a path and uses the movement speed
          requested by the relevant Job and a unit’s natural movement speed to
          move the unit along its path.
        </p>

        <p>
          When a unit is not in motion, nor performing a Job, they will show an
          idle animation. But when the unit moves or has something interesting
          to do, we must decide on which animations to show them doing. Most
          Jobs have unique animations, such as:
        </p>

        <ul>
          <li>Picking berries from a bush when Harvesting</li>
          <li>Swinging an axe or pickaxe when Chopping Wood or Mining</li>
          <li>Bending down to pick up a resource when Gathering</li>
        </ul>

        <p>
          To know which animation to play, we get an animation state from a
          unit. This state is produced fresh, just like a unit’s other states,
          and is used to traverse the Animation Blueprint’s state machine. We
          use the Main state machine for performing resource gathering jobs and
          attacking enemies if nothing dire is occurring, but if something
          urgent comes up we interrupt this regular state machine.
        </p>

        <p>
          There are 2 urgent state machines: skill specific animations and
          status effect animations. The skill states are for when units use
          their awesome action skills in combat, and the status effect
          animations are for things like when a unit gets stunned by their foe.
          Below we show the Main state machine and the sub-state machines that
          are used for the different scenarios.
        </p>

        <BlogImage
          image="/images/main-states.png"
          alt="The Main state machine controls all non-interruptive actions"
          caption="The Main state machine controls all non-interruptive actions"
          height={400}
        />

        <BlogImage
          image="/images/top-states-1.png"
          alt="Urgent States has higher precedence over the Main states"
          caption="Urgent States has higher precedence over the Main states"
          height={300}
          width={450}
        />

        <BlogImage
          image="/images/urgent-states.png"
          alt="Inside Urgent States. Not a lot of them, but they must be shown before other states"
          caption="Inside Urgent States. Not a lot of them, but they must be shown before other states"
          height={300}
          width={400}
        />

        <BlogImage
          image="/images/top-states-2.png"
          alt="Actions Skill States will be applied if no Action Skill is being used"
          caption="Actions Skill States will be applied if an Action Skill with a specific animation is being used"
          height={200}
          width={600}
        />

        <BlogImage
          image="/images/action-skill-states.png"
          alt="Inside Action Skill States. These are unique to each unit type"
          caption="Inside Action Skill States. These are unique to each unit type"
          height={400}
        />
      </>
    }
  />
);

export default Page;
