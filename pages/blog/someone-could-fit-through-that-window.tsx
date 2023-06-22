import BlogPost from '../../components/blog-post/blog-post';
import BlogImage from '../../components/blog-image/blog-image';

export default function BlogPost_SomeoneCouldFitThroughThatWindow() {
  return (
    <BlogPost
      title="Someone could fit through that window. A small person. An attack child"
      date="May 17th, 2023"
      content={
        <>
          <p>
            While working on a new area, the lead up to a snowy mountain top, we
            encountered a challenging feature that we wanted to implement. We
            previously created explorable buildings and wanted to expand this
            exploration aspect to include underground environments. This post
            talks about our challenges in making an explorable underground mine.
          </p>

          <h4>Why Make A Cave</h4>

          <p>
            Since the vast majority of our gameplay has been in outdoor
            environments, we wanted to ensure that the mines added new mechanics
            and play styles. Simply making an area that looked different didn’t
            seem like it would be worth the effort. An underground area would
            force the player to carefully investigate the blind corners and
            narrow hallways while defending their caravan from aggressive
            interlopers. It took much more time than expected to develop, but
            from this we learned how we can create additional cave-like
            experiences with (hopefully) minimal pain.
          </p>

          <BlogImage
            image="/images/upslope-mines-exterior.png"
            alt="The outside view of the underground mines"
            caption="Outside view of the mines"
            height={400}
            width={600}
          />

          <p>The main challenges of creating the mines were:</p>

          <ol>
            <li>
              How the player sees the underground mine while also controlling
              units outside
            </li>
            <li>
              How the mine’s interior is lit separately from the lighting
              outside
            </li>
            <li>How the units’ AI will work in such a constrained space</li>
          </ol>

          <h4>Developing The Mines</h4>

          <p>
            We wanted the interior of the mines to be traversable seamlessly
            from the outside. Our plan was to model the exterior of the mines,
            then cut the top section from the base. This top section would fade
            out when the player’s units are inside the mine, and would reappear
            when none were present. This was challenging, as the seam where the
            base and top met did not connect nicely. The noticeable seam was
            apparently due to the normal vectors along the seam not being
            continuous, and we could not find a pleasing solution in making the
            seam less noticeable. After some thinking, we found our solution:
            make the top section overlap the entire base. We also made the base
            about 99% of its usual scale, this prevented any z-fighting between
            it and the overlapping top. For added flavor, we added foliage on
            top of the mines that would also be hidden when adventuring inside.
          </p>

          <p>
            To keep the mine’s interior dark and moody, we added an invisible
            plane that matches the shape of the interior of the mine. This
            lightblocker™ is invisible, yet it casts a shadow. Curious. This
            interesting combination of functionalities in Unreal allows us to
            prevent any sun/moonlight from entering the mine, and to also not
            block any of the player’s mouse clicks. With the lightblocker in
            place, just above the timber propping up the walls and roof of the
            mine, we could add lanterns containing point lights to illuminate
            the interior.
          </p>

          <BlogImage
            image="/images/entering-mines.gif"
            alt="The roof of the mines disappears when a player unit enters"
            caption="Entering the mines"
            height={600}
            width={600}
          />

          <p>
            To ensure that the player and enemy units behave as expected, we
            made the interior walls just above the eye height of the units. This
            prevents them from seeing each other above the walls, thus ruining
            any surprises. It took a bit of effort to ensure that the wall
            height was blocking vision but also not blocking the units from the
            camera too much. We didn’t want the units to be constantly obscured
            behind walls. Even though the units would still be clickable behind
            walls, we felt that keeping them in view would be a more visceral
            experience.
          </p>

          <BlogImage
            image="/images/exploring-mines.gif"
            alt="The player units battling bandits in a dimly lit mine"
            caption="Fighting in the dark"
            height={500}
            width={600}
          />

          <p>
            The last thing we want to add to the mines is some vision blocking
            fog that disappears when the player’s units touch it. The fog’s
            purpose is to provide exploration and sudden, unpleasant battles.
            We’ll end this post here so that we don’t give away too much; there
            are a few more exciting mechanics within the mines that we can’t
            wait for our testers to try out!
          </p>
        </>
      }
    ></BlogPost>
  );
}
