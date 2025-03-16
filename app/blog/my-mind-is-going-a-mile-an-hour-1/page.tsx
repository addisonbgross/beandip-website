import BlogPost from '../../../components/blog-post/blog-post';
import BlogImage from '../../../components/blog-image/blog-image';
import Home from '../../page.tsx';

const Page = () => (
  <Home
    currentPost={<BlogPost_MyMindIsGoingAMileAnHourPart1 />}
    currentPage="my-mind-is-going-a-mile-an-hour-1"
  />
);

const BlogPost_MyMindIsGoingAMileAnHourPart1 = () => (
  <BlogPost
    title="My Mind Is Going A Mile An Hour (Part 1)"
    date="January 26th, 2023"
    content={
      <>
        <p>
          With our tutorial level completed, we’re working away at designing and
          implementing an exciting new area for the caravaneers to explore. We
          figured that this would be a good time to share our techniques in
          creating AI for the people that inhabit our game. Since the logic for
          the units in our game has taken the most development effort thus far,
          there is much to discuss. As such, we will be writing two posts to
          cover this most interesting topic.
        </p>

        <h4>Events and Tick</h4>

        <p>
          Both the player’s units and their foes share the same brain. Not
          exactly the same brain, but they use the same base system of logic to
          make sense of their environment and produce a plan of action. We knew
          from the start that we needed to avoid having the units make a lot of
          decisions in their tick function (ie: updating per frame of animation)
          due to the performance overhead, so we made things as event driven as
          possible.
        </p>

        <p>
          In terms of events, the units will make decisions when their
          environment changes in some way or when they have completed a job.
          Some example events are: an enemy moves into a unit’s visual range, a
          unit has run out of the resource they were harvesting, or when the
          player manually gives a unit a job. These events cover most every
          single situation where a unit would need to make a new decision and
          has proved to be quite performant. Unfortunately there are a few
          things that do happen in the tick function, such as:
        </p>

        <ul>
          <li>Update the cooldowns of each unit’s selected action skills</li>
          <li>
            Update the time remaining and compute any damages that occur from
            the status effects a unit is afflicted with
          </li>
          <li>Update the unit’s animation state (More on this in Part 2)</li>
        </ul>

        <p>
          Luckily these things have not proven to be a performance bottleneck.
        </p>

        <h4>Eyeballs</h4>

        <p>
          Unreal provides a vision system that you can easily add to any
          character in your game. We originally used this system for prototyping
          but found that it came with a sizable performance cost due to how much
          information it was gathering. The Unreal system would see something
          initially and continually track the thing’s position as long as it was
          in visual range. We realized that we didn’t need to have this sort of
          precision in our RTS game. The only thing we needed to know was if
          something was visible or not; any further information could be
          gathered at a later time if necessary.
        </p>

        <p>
          Instead of using Unreal’s vision system, we set the visual range of
          units to be a sphere centered on them. As the units move around they
          will see friendly, neutral, hostile, and inanimate-yet-purposeful
          things. Each of these visible types of things are stored per unit. An
          example of using this storage is the Cadet’s War Cry skill. When he
          sees an enemy, he consults his visible enemies list. If more than one
          enemy is visible he will unleash a war cry that draws the attention of
          his enemies in an effort to dissuade them from attacking his less
          armored companions. Another example is the visible, inanimate objects
          that are stored are used when harvesting resources: when a unit has
          gathered all of the food from a berry bush, they will check their list
          of inanimate objects to see if another berry bush is nearby. By having
          these visible unit and object lists, units can chain together relevant
          jobs without requiring constant input from the player.
        </p>

        <BlogImage
          image="/images/attack-event.gif"
          alt="Bandits running into combat"
          caption="A couple of bandits trying to enjoy a campfire until a pesky combat event occurs"
          height={400}
        />

        <h4>Jobs</h4>

        <p>
          When an event occurs that requires a decision, we perform an update of
          the affected unit’s disposition. This update can cause the unit to
          stop whatever they’re doing and start a new job, like when an enemy
          comes into range. The update can also be less important, and may cause
          a new job to be added to the end of their to-do list.
        </p>

        <p>
          Jobs are the individual things a unit must do to accomplish their
          goal. To figure out the jobs required, we work backwards starting from
          the desired result. One example of this is when the player selects a
          unit and instructs them to harvest food. The unit will initially
          receive the harvest job and will then check to see if they are close
          enough to their harvest target. If they are close enough, the harvest
          job will be the next thing the unit does. If they are too far, the
          unit will add a movement job to be performed before the harvest job
          can occur. A more complex example is when the player selects a unit
          and instructs them to harvest wood. The job sets for both food and
          wood gathering are below:
        </p>

        <p>
          <strong>Harvest Food Job Set</strong>
        </p>
        <ol>
          <li>Move to food source</li>
          <li>Harvest</li>
          <li>Deliver food to caravan</li>
          <li>Move back to food source</li>
          <li>If nothing left to harvest, look for another food source</li>
        </ol>

        <p>
          <strong>Harvest Wood Job Set</strong>
        </p>
        <ol>
          <li>Move to tree</li>
          <li>Chop wood</li>
          <li>Wait for tree to fall</li>
          <li>Move to chopped wood piece</li>
          <li>Pick up wood</li>
          <li>Deliver wood to caravan</li>
          <li>Move back to wood source</li>
          <li>Look for another piece of chopped wood</li>
          <li>If no chopped wood pieces visible, look for another tree</li>
        </ol>

        <BlogImage
          image="/images/gathering-wood.gif"
          alt="The survivors gathering chopped wood"
          caption="The harvest wood job set in action. Currently not optimized to select the closest wood piece :)"
          height={400}
        />

        <p>
          When harvesting a resource, the units will loop through the set of
          jobs relevant to the resource type until there are no more resources
          of that type in visual range. At that time, the unit will become idle
          and will not perform any further actions until a decision making event
          occurs or the player manually gives them a job.
        </p>

        <p>
          Check back in a couple of weeks for the second post on this topic!
        </p>
      </>
    }
  />
);

export default Page;
