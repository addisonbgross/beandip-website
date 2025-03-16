import BlogPost from '../../../components/blog-post/blog-post';
import BlogImage from '../../../components/blog-image/blog-image';
import Home from '../../page.tsx';

const Page = () => {
  return (
    <Home
      currentPost={<BlogPost_CatsDoNotAbideByTheLawsOfNature />}
      currentPage="cats-do-not-abide-by-the-laws-of-nature"
    />
  );
};

const BlogPost_CatsDoNotAbideByTheLawsOfNature = () => (
  <BlogPost
    title="Cats Do Not Abide By The Laws Of Nature"
    date="March 9th, 2023"
    content={
      <>
        <p>
          Here’s a quick post about some uses of physics in our game and how we
          ensure the game remains performant.
        </p>

        <h4>Loose Wood</h4>

        <p>
          When a tree is chopped down for lumber it splits into carryable logs
          upon contact with the ground. The number of logs spawned is derived by
          taking the height of the chopped tree and dividing it up into constant
          sized logs. The logs spawned also have their material set so that it
          matches the tree that spawned them.
        </p>

        <p>
          To add some flavor, we add a small upward impulse to each log. This
          gives the logs a satisfying pop into the air. Afterwards, gravity
          takes over and logs will settle into place. Early on in developing the
          log chopping and gathering mechanic, we noticed that the game’s frame
          rate would plummet if enough logs were active on the screen. The log
          physics are computed on the player’s CPU, so these computations would
          eventually slow down the game thread and aren’t something that can be
          easily tuned per the player’s computer.
        </p>

        <BlogImage
          image="/images/log-choppings.gif"
          alt="Felled trees exploding into carryable log resources"
          caption="Popping logs in action"
          height={500}
          width={600}
        />

        <p>
          To counter this potential performance hit, we give the logs 10 seconds
          to settle into place once spawned. After the 10 seconds have passed,
          their physics is disabled and their performance cost is reduced to a
          negligible amount. We use this mechanic for all items that can be
          picked up and carried by units. Once an item is picked up, we disable
          physics (if it isn’t already disabled). If the item gets dropped
          before delivery to the caravan, we enable physics again for 10
          seconds.
        </p>

        <h4>Getting Knocked Around</h4>

        <p>
          Physics plays a role in combat as well. Not only do arrows and
          grenades use physics to reach their target, thus making them
          dodgeable, but the units have special skills that can send their foe
          flying.
        </p>

        <p>
          Unit collisions are usually performed with a single capsule collision
          shape that encloses the unit’s skeletal mesh. By using a shape simpler
          than the skeletal mesh itself, the collision computations are
          simplified; instead of using the physics primitives composing the
          skeletal mesh collidable areas, we compute collisions with other units
          and things using the capsule shape, which results in sizable
          performance gains.
        </p>

        <BlogImage
          image="/images/ragdoll-physics.gif"
          alt="Ragdoll using the physics primitives composing the skeletal mesh"
          caption="Ragdoll using the physics primitives composing the skeletal mesh"
          height={500}
          width={600}
        />

        <p>
          When a unit is hit with a knockback attack, a number of processes will
          occur to the components of the unit:
        </p>

        <ol>
          <li>Disable animations for the skeletal mesh</li>
          <li>Disable collisions for the capsule shape</li>
          <li>Enable collisions for the skeletal mesh</li>
          <li>
            Enable physics simulation for the skeletal mesh (using the physics
            primitives for collisions instead of the capsule shape)
          </li>
          <li>Enable gravity for the skeletal mesh</li>
          <li>
            Detach the skeletal mesh from the root component of the unit (the
            root component being the capsule shape)
          </li>
        </ol>

        <p>
          With all of these steps completed, the unit is free to ragdoll through
          the air, bringing joy to all who see it. Since the capsule shape is a
          unit’s root component, it is what other units will use to compute the
          ragdolled unit’s position. Therefore, during the ragdolling we must
          also ensure that the capsule shape’s position in the world is
          continually updated to match the now ragdolled skeletal mesh.
        </p>

        <BlogImage
          image="/images/chest-kick.gif"
          alt="The Cadet sends the Archer flying with a swift kick to the chest"
          caption="Archer begone!"
          height={500}
          width={600}
        />

        <p>
          If the ragdolled unit has been defeated, it will remain in its limp
          state for 5 seconds. After the 5 seconds of settling, physics will be
          disabled and the unit will be considered dead to all others. If the
          unit has not been defeated and will continue to fight, we must
          complete a series of steps to get it back on its feet:
        </p>

        <ol>
          <li>Disable collisions for the skeletal mesh</li>
          <li>Disable gravity for the skeletal mesh</li>
          <li>Set the capsule shape to the skeletal mesh’s position</li>
          <li>
            Enable collisions for the capsule shape (using this for collisions
            instead of the physics primitives)
          </li>
          <li>Reattach the skeletal mesh to the capsule shape</li>
          <li>
            Set the capsule shape’s position to encompass the skeletal mesh
          </li>
          <li>Enable animations for the skeletal mesh</li>
        </ol>

        <p>
          This process took a fair amount of trial and error to get working
          properly, but after some work we can finally enjoy satisfying kicks to
          the chest.
        </p>
      </>
    }
  />
);

export default Page;
