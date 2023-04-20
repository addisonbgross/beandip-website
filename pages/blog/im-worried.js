import Link from 'next/link';

import BlogPost from '../../components/blog-post/blog-post';
import BlogImage from '../../components/blog-image/blog-image';

export default function BlogPost_ImWorried() {
  return (
    <BlogPost
      title="I’m worried the baby thinks people can’t change"
      date="April 19th, 2023"
      content={
        <>
          <p>
            Our last eight months of development have been an amazing
            experience. We’ve built so much gameplay and have overcome many
            technical challenges. It’s time for some reflection about what we’ve
            created and what comes next.
          </p>

          <h4>What We’ve Done So Far</h4>

          <p>
            Last September we began working full time on our game. Before this,
            we did not have any biomes, unit leveling, or anything else that
            would resemble a game. We only had our RTS style unit controls, a
            couple of production ready models, and poorly optimized graphics.
          </p>

          <p>
            As of now, we have about two hours of gameplay created, spanning a
            large foothills biome. Within this biome, there are numerous enemy
            ambushes, a vendor for exchanging resources and hiring new units,
            NPCs to aid, and nature to explore. Designing and implementing our
            first biome came with many challenges, and in the end, it will most
            likely be the biome that took us the longest to make.
          </p>

          <p>
            We’re currently working on a new biome: rocky mountains. We have
            also created a high level plan for the remainder of the game, and we
            will plan each new area’s full details once we’re actually ready to
            build them. We’ve found that new gameplay ideas are constantly born
            out of user testing and deep thoughts, so we’re keeping things
            agile™.
          </p>

          <p>
            Our user testing team is doing an amazing job of letting us know
            where the fun is, and finding every bug imaginable. Without their
            efforts, we would just be guessing if our new features were fun, or
            even tolerable.
          </p>

          <h4>Favorite Achievements</h4>

          <h5>Designing and modeling our caravan pulling creature</h5>

          <p>
            When we first started creating our game, our 3d artist, Hollie, had
            limited experience with modeling, rigging and animating 3d models.
            Luckily, the program we use for our modeling, Maya LT, provides a
            handy tool called HumanIK to simplify the rigging process for
            humanoid models. However, this tool does not lend itself well to the
            rigging of quadruped models, so creating a creature to pull the
            caravan presented plenty of challenges. Initially, we were going to
            create something fairly basic and expected, such as a horse or
            donkey. However, part way through the design process, we changed our
            minds and decided to base our creature off of the cutest rodent in
            all the land instead - the capybara! We ran into some issues rigging
            it properly, but in the end, we are happy to have designed a
            creature that is unique to our game and love how it turned out.
          </p>

          <BlogImage
            image="/images/capy-down.gif"
            alt="A capybara-type create lays down for a nap"
            caption="Nap time"
            height="400"
            width="600"
          />

          <h5>Skill trees</h5>

          <p>
            We’ve been playing ARPG games like Diablo since childhood, and MOBA
            games like DOTA 2 for years. Building up a character with skills and
            stats is a staple gameplay element that we’ve really enjoyed
            creating for our game. Giving the player agency in how their team
            progresses and how they utilize each unit’s strengths and weaknesses
            creates a sense of depth and replayability that we’ve come to love.
            Of all of our game’s features, this is the one Addison likes best.
          </p>

          <h4>Biggest Challenges</h4>

          <h5>Skin weighting characters</h5>

          <p>
            When we create a new character for our game, the process we follow
            is:
          </p>

          <ol>
            <li>Sketch the character</li>
            <li>Model the character </li>
            <li>
              Create the skeleton (we use the HumanIK tool in Maya LT whenever
              possible) and then bind it to the model
            </li>
            <li>
              Adjust the skin weights that result from the binding process
            </li>
            <li>Animate the character</li>
          </ol>

          <p>
            Every part of this process is rather enjoyable, with the exception
            of step 4. Skin weighting is important as it determines how the
            model reacts during the animation process. However, perfecting the
            skin weights for a model can be tedious, frustrating and time
            consuming. It’s been a steep learning curve to figure out this part
            of the process, but it gets a little easier with each new character
            we add to our game.
          </p>

          <h5>Parenting a toddler while developing a video game</h5>

          <p>
            We are currently splitting our time between developing our game and
            parenting our child. Our work days revolve around our toddler’s nap
            schedule: one of us watches our toddler in the morning, we both work
            while he naps, and then the other parent watches them in the
            afternoon until dinner time. Once our child has gone to bed in the
            evening, we’re able to complete a few more hours of work before
            calling it day. This schedule limits the amount of time that we have
            to work together, so most of our meetings take place over lunch/
            during nap time. It also means that we work an unusual schedule -
            our work days are fragmented and typically start around 10am and
            don’t wrap up until 11pm. Working at home with an energetic toddler
            also means that from time to time, said toddler will try to peel
            your fingers off of your keyboard and mouse and insist on sitting
            with you while you work, or they’ll wake up early from their nap
            which cuts into our plans for that day’s work. Flexibility is the
            name of the game. Luckily, this schedule has been working well for
            us so far, and while it’s not without challenges, it keeps things
            interesting and allows us to spend plenty of time with our child as
            they grow older.
          </p>

          <h5>Perf</h5>

          <p>
            Ensuring our game runs smoothly has been a serious effort from the
            beginning. We{' '}
            <Link
              href="https://www.beandipgames.com/blog/airing-of-grievances"
              passHref
            >
              wrote a post
            </Link>{' '}
            that covers some of our performance challenges, and we continue to
            encounter new obstacles. After every major feature is implemented,
            we like to circle back and do performance profiling of both our
            gameplay code and graphics. Near the start of our project, the
            biggest concern was about using skeletal meshes for the units.
            Skeletal meshes can have substantial computational cost, both in
            terms of gameplay and in graphics, but we’ve been able to reduce
            this cost to the point where they are nowhere near a top performance
            concern.
          </p>

          <BlogImage
            image="/images/technical-bones-view.png"
            alt="Anatomical-style look at the unit's bones"
            height="600"
            width="430"
          />

          <h4>Next steps</h4>

          <h5>Upcoming Levels</h5>

          <p>
            The player’s journey in the game will lead them through various
            environments. We aim for each to be distinct, and to provide unique
            gameplay and story experiences. We currently have a foothills biome
            and are starting work on a rocky mountains style environment. In the
            future we’ll be creating a dark and menacing swamp, an arid prairie
            that leads into a desert, and finally a broadleaf forest.
          </p>

          <h5>Steam</h5>

          <p>
            We recently completed the process of setting up our business account
            on Steam and our next focus is finalizing our visual assets (game
            logo, gameplay videos, screenshots) so that we can get our Steam
            page up and running. We have quite a bit of work to do but are
            hopeful to have our game’s Steam page set up in the next month or
            two.
          </p>

          <h5>Sound Design</h5>

          <p>
            When we sent out our game for the first round of user testing, we
            recorded a single song which clocks in at around 30 seconds.
            Needless to say, it’s a tad repetitive to listen to when you play
            the game for more than a few minutes. We’re putting time aside every
            week to write music and hope to expand the soundtrack in the coming
            weeks and months!
          </p>

          <p>
            At this time our sound effects are quite minimal. We have an effect
            for each of the 4 weapon types when attacking, the rolling wheels of
            the caravan, chirping insects, and the rumble of impacts in the
            distance. Each of the sound effects we use has its volume attenuated
            based on its distance from the player’s camera. In terms of
            performance we’ve found that there are so many different
            interactions that could make sound for the player to hear, so we’re
            going to need to be conscious about which sounds we choose to
            include. We’ve also limited the number of times each sound can be
            playing concurrently. There can be a lot of arrows flying around
            when things get heated 🌶️
          </p>

          <p>
            Our preferred method of brainstorming is drawing things on our
            whiteboard. Here are some whiteboard session results we’ve had over
            the last couple of years. Thanks for reading!
          </p>

          <BlogImage
            image="/images/whiteboard-sample-1.png"
            alt="Ruined Village"
            height="400"
            width="600"
          />

          <BlogImage
            image="/images/whiteboard-sample-2.png"
            alt="Selected unit menu"
            height="600"
            width="600"
          />

          <BlogImage
            image="/images/whiteboard-sample-3.png"
            alt="Full UI mockup"
            height="500"
            width="600"
          />

          <BlogImage
            image="/images/whiteboard-sample-4.png"
            alt="The Countess"
            height="500"
            width="400"
          />
        </>
      }
    ></BlogPost>
  );
}
