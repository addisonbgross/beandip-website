import Link from 'next/link';

import BlogPost from '../../components/blog-post/blog-post';
import BlogImage from '../../components/blog-image/blog-image';

export default function BlogPost_BonesAreTheirMoney() {
  return (
    <BlogPost
      title="Let me tell you something. I haven’t even begun to peak"
      date="October 20th, 2022"
      content={
        <>
          <p>
            We’ve been busy preparing our{' '}
            <Link
              href="https://www.unrealengine.com/en-US/megagrants"
              passHref={true}
            >
              <a target="_blank" rel="noopener noreferrer">
                Epic Games Megagrant
              </a>
            </Link>{' '}
            application, so this post will be a brief recap of some new features
            that we’ve been working on over the last two weeks.
          </p>

          <h4>Damage Over Time</h4>

          <p>
            Earlier in the development process we had created a status effects
            system, where characters could have their stats increased or
            decreased based on leveling up or the use of skills. For example the
            Cadet character’s Born Leader skill increases the damage resistance
            of the Cadet, as well as all nearby allies. We’ve recently added a
            Damage Over Time feature; with the addition of this feature a
            character can use an offensive skill to initially damage an
            opponent, and the skill’s effect will continue to damage the
            opponent after the initial hit. An example of this is the Blaster
            character’s Fire Bomb skill:
          </p>

          <BlogImage
            image="/images/fire-DOT.gif"
            imageBlur="data:image/jpeg;base64,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"
            caption="Somewhat on fire: lingering burn damage after being hit by a grenade"
            alt="The Archer experiencing being lit on fire"
            height="300"
          />

          <h4>Skill Trees</h4>

          <p>
            Each character can be upgraded using resources that are either
            harvested or found. These upgrades will follow a skill tree style of
            advancement, where each skill has prerequisite skills that must be
            obtained first. We have created preliminary skill trees for both the
            Cadet and Blaster characters and are currently working on completing
            one for the Archer. We’ve been busy adding the logic and animations
            for the action skills and the stat bonuses for the passive skills.
          </p>

          <BlogImage
            image="/images/blaster-skilltree.png"
            imageBlur="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDqqaadTTWqOUY1RNUrVG1WgIjTaeaZQACniminCgY9akFMFPFIBaQ06kNAEbVC9TNUL0AQPVd6sPVd6AIWpKVqSmB0tNNLSGoAY1RtTzTDTuFiM02nmm0XHYBThSCnAUXCw8U8U0U4UrhYWkNLSGi4DGqF6maoXouBXeq71YeoHouOxCabTjSU7hY6KkNGaaTUXFYQ0w040w0XHYaaSlNJRcdhRThTRTxRcdhwp4popwpXCwtIaWmmi4rDGqF6maoXouFiB6rvU71A9Fx2IjSUpptO4WN/NITSZpCayuFgJphpSaaTTuOwhopM0Zp3HYcKeKYKcKLgSCnCmCnClcB1NNLTTSuIY1QvUrGoXNFwIXqu9TuaruadxkZpKCaTNFx2NzNITSZppNZ3JFJppNITTSadxi5ozTM0Zp3GSg04GogaeDQBKDTgajBpwNIB+aaTRmmk0rgNY1C5qRjULmi4ETmq7mpXNQOadxjCaTNNJpM0XA3M0hNJmmk1BIE00mkJphaqGO3Um6oy1JupjJw1PDVXDU8NQBYBp4NQBqeGpCJc00mm5pCaQCMahc09jULmgCJzVdzUrmqztQMazUm6mM1N3UxnQZppNGaaTSIEY1GzUrGomamMC1JuqMtTd1UMnDVIrVVDVIrUAWlapA1VlapA1SInzSE0wGkJpADGoXNPY1A5oAikNVpGqWQ1VkamMYzU3dUbvTN9MZ1RNMY0ppjUjMYxqFzUjmoHNUMYzUwtSOaiLUwJw1SK1VQ1So1AFtWqVTVZDUymkBMDQTTAaUmkAjGoHNSsagc0AV5DVSVqsSmqcxp2GQO9M31HK+Kh8ynYLncmmNTzUbVJJE9V3qd6gkqgK7moiakeojTAVTUyGoVqVKGBZQ1MpqBKmWpGSiikFLSAY1QPU7VA9MCrLVGY1dlqjPTQGdOeah3VLP1NQVogR//Z"
            caption="Preliminary skill tree for the Blaster character"
            alt="The Blaster's skill tree"
            height="500"
          />

          <BlogImage
            image="/images/cadet-skilltree.png"
            imageBlur="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDqqaadTTWqOUY1RNUrVG1WgIjTaeaZQACniminCgY9akFMFPFIBaQ06kNAEbVC9TNUL0AQPVd6sPVd6AIWpKVqSmB0tNNLSGoAY1RtTzTDTuFiM02nmm0XHYBThSCnAUXCw8U8U0U4UrhYWkNLSGi4DGqF6maoXouBXeq71YeoHouOxCabTjSU7hY6KkNGaaTUXFYQ0w040w0XHYaaSlNJRcdhRThTRTxRcdhwp4popwpXCwtIaWmmi4rDGqF6maoXouFiB6rvU71A9Fx2IjSUpptO4WN/NITSZpCayuFgJphpSaaTTuOwhopM0Zp3HYcKeKYKcKLgSCnCmCnClcB1NNLTTSuIY1QvUrGoXNFwIXqu9TuaruadxkZpKCaTNFx2NzNITSZppNZ3JFJppNITTSadxi5ozTM0Zp3GSg04GogaeDQBKDTgajBpwNIB+aaTRmmk0rgNY1C5qRjULmi4ETmq7mpXNQOadxjCaTNNJpM0XA3M0hNJmmk1BIE00mkJphaqGO3Um6oy1JupjJw1PDVXDU8NQBYBp4NQBqeGpCJc00mm5pCaQCMahc09jULmgCJzVdzUrmqztQMazUm6mM1N3UxnQZppNGaaTSIEY1GzUrGomamMC1JuqMtTd1UMnDVIrVVDVIrUAWlapA1VlapA1SInzSE0wGkJpADGoXNPY1A5oAikNVpGqWQ1VkamMYzU3dUbvTN9MZ1RNMY0ppjUjMYxqFzUjmoHNUMYzUwtSOaiLUwJw1SK1VQ1So1AFtWqVTVZDUymkBMDQTTAaUmkAjGoHNSsagc0AV5DVSVqsSmqcxp2GQO9M31HK+Kh8ynYLncmmNTzUbVJJE9V3qd6gkqgK7moiakeojTAVTUyGoVqVKGBZQ1MpqBKmWpGSiikFLSAY1QPU7VA9MCrLVGY1dlqjPTQGdOeah3VLP1NQVogR//Z"
            caption="Preliminary skill tree for the Cadet character"
            alt="The Cadet's skill tree"
            height="500"
          />

          <h4>Weapon Types</h4>

          <p>
            Each character uses a specific type of weapon in combat. We
            currently have a bow, sword and shield, and grenade weapon types. In
            the future, we plan on adding at least one more type. Over the past
            few weeks, we’ve been focused on integrating the animations for each
            of the existing weapon types.
          </p>

          <BlogImage
            image="/images/weapon-type-state-machines.png"
            imageBlur="data:image/jpeg;base64,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"
            caption="Animation graph for weapon use"
            alt="Animation state machines for manaing each weapon type"
            height="300"
          />
        </>
      }
    ></BlogPost>
  );
}
