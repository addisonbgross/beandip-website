import Link from 'next/link';

import BlogPost from '../../../components/blog-post/blog-post';
import BlogImage from '../../../components/blog-image/blog-image';

const BlogPost_AiringOfGrievances = () => (
  <BlogPost
    title="Airing Of Grievances"
    date="February 23rd, 2023"
    slug="airing-of-grievances"
    content={
      <>
        <p>
          When a new feature is added, they sometimes feel so complete that we
          need not think about them again. That is until those amazing features
          don’t work like we expect. This post covers some gameplay elements
          that have caused us agony and suffering to implement and improve.
        </p>

        <h4>Concave vs Convex Movement</h4>

        <p>
          In our game each job that a unit can perform has an amount of effort
          assigned to it. For example when harvesting minerals, the effort for
          that job is the amount of time it takes to complete mining a chunk of
          the minerals. For movement, the effort is the distance the unit must
          travel. When the unit performs the job they can keep track of their
          job progress by looking at the work completed and comparing it to the
          amount of effort required. For movement this can be computed as:
        </p>

        <blockquote>
          job progress = current distance from job origin / total distance to
          move
        </blockquote>

        <p>
          The result is a value between zero and one. Zero means the job has not
          started and one means the job is complete.
        </p>

        <p>
          Unit movement was working great until we began adding buildings that
          units can enter. Before the addition of buildings, units would move
          purely around obstacles that are convex in shape, like trees and large
          rocks. The units’ job progress was computed accurately and they would
          move where required. However, when attempting to move a unit into one
          of the newly added buildings, which happen to be more of a concave
          shape rather than convex, they would often complete their job far from
          the goal location. We checked that their calculated path was accurate
          — it was. We checked to ensure that the units were able to fit inside
          doors and gates — they could. The issue of movement jobs completing
          early was inconsistent as well; sometimes the job didn’t occur at all.
        </p>

        <p>
          After much time was spent watching people walk back and forth, the
          solution was realized. When calculating the amount of effort for a
          movement job, we were using the direct distance from the start to
          finish. This worked fine for convex shapes but resulted in erroneous
          job completion when moving into a convex building. In the diagrams
          below, we show both movement situations. The solid lines are the
          computed paths to the destinations, and the dotted lines are the
          effort distances:
        </p>

        <BlogImage
          image="/images/convex-movement.png"
          alt="Convex movement with a functional effort distance"
          caption="Convex movement with a functional effort distance"
          height={400}
          width={300}
        />

        <BlogImage
          image="/images/concave-movement.png"
          alt="Concave movement with an incorrect effort distance"
          caption="Concave movement with an incorrect effort distance"
          height={400}
          width={300}
        />

        <p>
          As we can see in the concave movement case, the effort distance is
          much shorter than the actual path. This was causing the unit to
          suddenly stop moving in what appeared to be the middle of a movement
          job. It would happen if the unit came too close to the destination,
          even if there was a wall in between; the distance between the unit and
          destination was within an acceptable range to incorrectly complete the
          job. To solve this issue, we now calculate the effort for movement
          jobs based on the length of the desired movement path, not the direct
          distance to the destination.
        </p>

        <h4>Centralized Vision Management</h4>

        <p>
          A core functionality in our game is that units have both a vision and
          attack range. These ranges are represented by two spheres, centered on
          a unit’s position, that detect when friend, foe or resource come
          within their bounds. This system worked well until recently, when we
          were doing some stress testing with many units on the screen at once.
        </p>

        <p>
          We use the Unreal profiler when stress testing, which allows us to see
          what’s involved in computing each frame of animation/gameplay. There
          are two main threads of execution: the render thread, which is
          responsible for preparing all visuals and their associated
          computations before being sent to the graphics card, and the game
          thread, which computes all gameplay logic. Improving the performance
          of the render thread was fairly easy. We worked to ensure that shadows
          were only being cast by things that would be visible or appealing and
          removed shadows for other elements (e.g. the grass does not cast
          shadows as they would be too small to appreciate). We also added lots
          of graphics scalability settings, allowing players to increase or
          reduce visual quality so that the game runs smoothly on their
          computer.
        </p>

        <p>
          When investigating the game thread, we noticed that the most expensive
          thing in regards to the amount of time needed to compute each frame
          was the vision and attack range spheres for each unit. The two spheres
          were fairly performant when the game started, but as soon as you moved
          any of the units they took up the vast majority of the game thread’s
          computing time. The issue stemmed from the fact that the spheres
          needed to update their currently overlapped objects in each frame.
          They would first check all things within their radius, then check only
          the object types they were supposed to watch for, and then finally add
          the currently visible or attackable objects to the unit’s state. In a{' '}
          <Link
            href="https://www.beandipgames.com/blog/wanted-to-pretend-i-was-an-architect"
            target="_blank"
            rel="noopener noreferrer"
          >
            previous blog post
          </Link>{' '}
          , we talked about how this event driven vision and attack range system
          was so amazing. As it turns out, it was less than amazing, perhaps
          even poor.
        </p>

        <p>
          Addison had been reading development blogs by other game developers
          and learned of the idea where a centralized entity would check ranges
          instead of each individual unit. This concept seemed strange, but we
          decided to give it a try. The vision and attack range spheres were
          discarded for each unit, and we created a single actor that is
          responsible for keeping each unit up to date. Units would register
          themselves upon being created and no longer need to worry about
          updating their own vision and attack ranges. This new actor, known as
          the Sensory Manager, updates every 200ms. Each update performs either
          vision range checks for every registered unit, or attack range checks
          (meaning vision and attack ranges are each updated every 400ms). This
          flip flopping between checks proved to be an enormous improvement over
          our previous method using the two spheres. We were even able to add a
          line-of-sight check, which was previously missing, so now vision and
          attack checks are fully accurate.
        </p>

        <p>
          Here are some metrics showing how long the vision and attack range
          systems took to compute on the game thread:
        </p>

        <p>
          <strong>Old system using two overlap spheres:</strong>
        </p>
        <ul>
          <li>
            3 units: average of <strong>0.525ms</strong>
          </li>
          <li>
            30 units: average of <strong>12.92ms</strong>
          </li>
        </ul>

        <p>
          <strong>New system using the Sensory Manager:</strong>
        </p>
        <ul>
          <li>
            3 units: average of <strong>0.063ms</strong>
          </li>
          <li>
            30 units: average of <strong>0.865ms</strong>
          </li>
        </ul>

        <p>
          These improvements unlocked a huge amount of performance on the game
          thread and will allow more players to enjoy our game despite not
          having the strongest computer. A true victory 🎉
        </p>

        <h4>Global Invalidation and Other Nice Things</h4>

        <p>
          Over the course of developing our game, we’ve taken a bit of a “wait
          and see” approach regarding performance. The thing that slows down the
          game is never what we think it will be, so we often will implement a
          feature in a clear way with minimal consideration for performance.
          After the massive improvements from the new vision and attack range
          system, the next thing slowing down the game thread was the user
          interface.
        </p>

        <p>
          There were a few things causing the UI to perform poorly. One thing
          was that we were updating the contents of the resource processing
          queue every frame. To fix this, we changed it so that we only update
          the queue’s contents when there is an actual change in its contents,
          such as a new resource being added or a resource’s processing reaching
          completion. This was a simple fix that solved our most egregious UI
          performance ruiner. After improving the resource queue, we noticed a
          couple of other areas that were getting updated too often and
          minimized those as well.
        </p>

        <BlogImage
          image="/images/resource-queue.png"
          alt="The resource queue, currently processing wood"
          caption="The resource queue, currently processing wood"
          height={400}
          width={150}
        />

        <p>
          The UI was fairly performant at this point, but still had a rather
          large “tick time”. This tick time reflected the effort required to
          update the UI for every frame of animation, meaning the effort
          required to update the UI beyond the updates that were being performed
          intentionally by us. After doing some research, we learned that the UI
          will completely re-render itself on every frame unless specific areas
          of the UI have been configured to not update until required. After a
          few failed attempts of trying to prevent certain components from being
          re-rendered every frame, we came across an{' '}
          <Link
            href="https://playvalorant.com/en-gb/news/dev/performance-boost-valorant-s-global-invalidation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            interesting post
          </Link>{' '}
          by the developers of Valorant. The Unreal team has created a system
          called Global Invalidation, which attempts to figure out which parts
          of the UI to re-render for you. Much like the Valorant team, we had to
          do some tweaking as the Global Invalidation system does not know of
          your individual use cases, but overall the improvements were
          fantastic. UI rendering speed quickly became the least of our worries
          thanks to Global Invalidation, and we were ready to tackle another
          challenge.
        </p>

        <p>
          We had improved the vision and attack range system, as well as the UI
          rendering performance; the next performance problem for the game
          thread was our use of Niagara effects. Niagara is used to create fun
          and interesting particle effects using simple physics primitives that
          can be combined to produce complex and realistic visuals. Since our
          game is not very realistic in appearance, our Niagara systems are
          fairly simple. In the opening scene of our game there is a city
          engulfed in flames which the player and their team are escaping from.
          This burning city uses a particular Niagara fire effect which was
          slowing down our game thread. The solution was simple: move the
          particle simulation from the game thread to the render thread. Since
          the effect doesn’t use collisions or any logic at all, we don’t need
          to run things on the CPU. We can fully relegate the smoke and flames
          to the players’ trusty GPU.
        </p>

        <BlogImage
          image="/images/fire-bomb.gif"
          alt="The Niagara effect used for the Blaster’s Fire Bomb skill"
          caption="The Niagara effect used for the Blaster’s Fire Bomb skill"
          height={400}
        />

        <p>
          It feels good to vent. We completed these performance improvements
          just before implementing the next area in our game, so we can now take
          a break from stressing about milliseconds and can focus on creating
          more fun.
        </p>
      </>
    }
  />
);

export default BlogPost_AiringOfGrievances;
