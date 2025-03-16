import BlogPost from '../../../components/blog-post/blog-post';
import BlogImage from '../../../components/blog-image/blog-image';
import Home from '../../page.tsx';

const Page = () => (
  <Home
    currentPost={<BlogPost_UnlimitedJuice />}
    currentPage="unlimited-juice"
  />
);

const BlogPost_UnlimitedJuice = () => (
  <BlogPost
    title="There's unlimited juice? This party is gonna be off the hook"
    date="April 5th, 2023"
    content={
      <>
        <p>
          The units in our RTS/RPG game can use skills to perform special
          attacks and defensive feats which juice up the visual experience of
          our game and add a layer of tactical customization for the player to
          enjoy. In this post we’ll explain how our skill system works and how
          we’ve integrated it in the game.
        </p>

        <h4>Action Skills</h4>

        <p>
          Units can be upgraded to have both passive and action skills. Passive
          skills increase a unit’s stats in some way, while action skills allow
          a unit to perform a special action when triggered. A unit’s action
          skills will be triggered under circumstances such as: seeing an enemy,
          seeing an ally, attacking an enemy, or receiving a certain type of
          attack.
        </p>

        <p>
          Each unit can have up to three action skills in use at any time, but
          can accumulate many more as they are upgraded. The restriction of
          having only 3 actions skills in use at a time makes the player have to
          think about how their units are configured depending on their current
          situation. For example when battling a group of Archers, the Cadet’s
          Chest Kick skill may not be the best choice as it will send enemies
          flying backwards. This will just create more distance between the
          Cadet and their ranged attacking foes. A counter example would be the
          Miner’s Poor Sport action skill. This skill sends the Miner into a
          rage when hit by ranged attacks, causing the Miner to move faster for
          a few seconds. This would help the melee weapon wielding Miner close
          the distance between themself and the ranged Archers.
        </p>

        <BlogImage
          image="/images/archer-skill-use.gif"
          alt="The Archer using the Rapid Shot skill, followed by Trick Shot. All while being pelted by two Blasters"
          caption="The Archer using the Rapid Shot skill, followed by Trick Shot. All while being pelted by two Blasters"
          height={300}
          width={400}
        />

        <BlogImage
          image="/images/archer-skill-cooldown.gif"
          alt="The Archer’s portrait during combat. This shows their health decreasing with each hit, and also the cooldown that begins after each skill is used"
          caption="The Archer’s portrait during combat. This shows their health decreasing with each hit, and also the cooldown that begins after each skill is used"
          height={200}
          width={160}
        />

        <h4>Special Effects</h4>

        <p>
          We use special effects with most of our action skills to make them
          that much more special. The effects can appear at different times
          during an action skill. An example of an effect being used at the
          start of an action skill, as seen above, is the Archer’s Trick Shot
          skill. It shows air being pulled inwards followed by an explosion of
          sparkles when the arrow is released. To contrast, the Cadet’s Crush
          Armor skill will cause a blast of metal and sparks at the end of the
          skill, when the Cadet’s blade makes contact with their target.
        </p>

        <p>
          Action skills can be configured with at least one special effect, and
          we can specify if an effect occurs when the skill starts or when it
          completes. How we configure an action skill can be represented
          visually using Unreal blueprints:
        </p>

        <BlogImage
          image="/images/action-skill-config.png"
          alt="The FXType field can be set for both the Action Skill itself or the Action Skill Response, which is used when resolving a successful attack"
          caption="The FXType field can be set for both the Action Skill itself or the Action Skill Response, which is used when resolving a successful attack"
          height={400}
          width={500}
        />

        <BlogImage
          image="/images/cadet-using-crush-armor.gif"
          alt="The Cadet’s Crush Armor skill creates a shower of sparks and metal with an effect triggered in the skill’s Action Skill Response"
          caption="The Cadet’s Crush Armor skill creates a shower of sparks and metal with an effect triggered in the skill’s Action Skill Response"
          height={300}
          width={400}
        />

        <h4>Tales of Interest</h4>

        <p>
          To keep things interesting, some action skills use unique animations.
          These animations will use the Action Skill Response to trigger special
          effects just like a skill that doesn’t use a specific animation.
        </p>

        <BlogImage
          image="/images/miner-spin-skill.gif"
          alt="The Miner using the Don’t Crowd Me skill"
          caption="The Miner using the Don’t Crowd Me skill"
          height={300}
          width={350}
        />

        <BlogImage
          image="/images/blaster-skill-jamboree.gif"
          alt="The Blaster escaping their attacker using the Twitch skill, but not before using the Tar Bomb skill to slow the pursuing Cadet"
          caption="The Blaster escaping their attacker using the Twitch skill, but not before using the Tar Bomb skill to slow the pursuing Cadet"
          height={400}
          width={500}
        />

        <p>
          In some cases, the special effect used for an action skill will be
          what causes damage to targets. For example, the Miner’s Ground Swell
          skill creates a blast of dirt that travels in a line away from the
          Miner. Enemies hit by the effect will receive damage.
        </p>

        <BlogImage
          image="/images/miner-three-skills.gif"
          alt="The Miner uses three skills in quick succession. They move toward the Archers quickly due to the Poor Sport skill triggering when they are hit by ranged attacks. The Ground Swell skill hits both Archers in a line, and lastly the Hilt Hit skill stuns the last Archer while they receive a pickaxe to the head"
          caption="The Miner uses three skills in quick succession. They move toward the Archers quickly due to the Poor Sport skill triggering when they are hit by ranged attacks. The Ground Swell skill hits both Archers in a line, and lastly the Hilt Hit skill stuns the last Archer while they receive a pickaxe to the head"
          height={400}
          width={500}
        />

        <h4>Bonus Footage</h4>

        <p>
          We recently completed the Ruined Village area of our game. There’s
          lots of fun things to do and we had a lot of fun making it! Here’s
          some screenshots, thanks for reading!
        </p>

        <BlogImage
          image="/images/ruined-village1.png"
          alt="The Cadet sends the Archer flying with a swift kick to the chest"
          height={400}
          width={600}
        />

        <BlogImage
          image="/images/ruined-village2.png"
          alt="The Cadet sends the Archer flying with a swift kick to the chest"
          height={400}
          width={600}
        />

        <BlogImage
          image="/images/ruined-village3.png"
          alt="The Cadet sends the Archer flying with a swift kick to the chest"
          height={500}
          width={600}
        />

        <BlogImage
          image="/images/ruined-village4.png"
          alt="The Cadet sends the Archer flying with a swift kick to the chest"
          height={400}
          width={600}
        />

        <BlogImage
          image="/images/ruined-village5.png"
          alt="The Cadet sends the Archer flying with a swift kick to the chest"
          height={400}
          width={600}
        />

        <BlogImage
          image="/images/ruined-village6.png"
          alt="The Cadet sends the Archer flying with a swift kick to the chest"
          height={400}
          width={600}
        />
      </>
    }
  />
);

export default Page;
