import BlogPost from '../../components/blog-post/blog-post';
import BlogImage from '../../components/blog-image/blog-image';

export default function BlogPost_BonesAreTheirMoney() {
  return (
    <BlogPost
      title="Bones Are Their Money"
      date="September 22nd, 2022"
      content={
        <>
          <p>
            We’ve finally begun working on replacing our placeholder characters
            with some fresh, beautiful skeletal meshes. Here’s our process of
            how we integrated the new skeletal meshes into our game and some of
            the challenges that we met:
          </p>

          <h4>Meshes</h4>

          <p>
            Our placeholder character meshes were a bit… creepy. However, they
            did fulfill their purpose of allowing us to learn and experiment
            with skeletal meshes in Unreal. Our first step in creating our
            placeholders is to create the skeletal meshes using Maya. Next, the
            meshes are bound to a common skeleton that will be used for all
            humanoid meshes. We then export the meshes as FBX files that have
            been smoothed.
          </p>
          <p>
            The smoothing of the models adds extra triangles to the meshes which
            allows the meshes to have continuous contours. We use Unreal’s LOD
            (level of detail) generation system to reduce triangle counts when
            viewing the characters at a distance. The original meshes could be
            composed of roughly 80,000 triangles when viewed up close, while the
            mesh shown at a distance may be reduced to 3,000 triangles. By using
            simpler meshes when the camera is far from our characters we will
            have improved GPU performance.
          </p>

          <BlogImage
            image="/images/placeholder-mesh.png"
            imageBlur="data:image/jpeg;base64,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"
            caption="The placeholder. Don’t make eye contact"
            alt="A non-production character mesh"
            height="300"
          />

          <h4>Animations</h4>

          <p>
            The characters in our game can wield a number of different weapon
            types, so we have to ensure that we have animations to cover each
            case. Our Animation Blueprint is constructed in a way where we can
            reuse common animations that don’t relate to the different weapon
            types. Our Animation Blueprint’s Animation Graph used an attack
            cycle composed of 3 states:
          </p>

          <ul>
            <li>Drawing the weapon</li>
            <li>Getting into a ready pose</li>
            <li>Attacking</li>
          </ul>

          <p>
            The draw animation involves the character fetching their weapon from
            their belt or back. For attaching weapons to hands and other points
            we used sockets on the character’s Skeleton. The ready animation
            places the character into a combat-ready pose, using the drawn
            weapon. Finally the attack animation is the actual act of attacking
            a foe; such as, swinging a sword or shooting a bow. The character
            will cycle through the animation states, until they are required to
            do something else, by going from draw, to ready, to attack, to
            ready, to attack… The ready/attack repetition enables the attacker
            to return to their starting attack position, while blending with a
            separate animation. This separate animation can be something like
            grabbing another arrow from a quiver, or preparing the next
            incendiary grenade.
          </p>

          <p>
            When the characters move around they can be in 3 different states of
            motion:
          </p>

          <ul>
            <li>Walking</li>
            <li>Running</li>
            <li>Sprinting</li>
          </ul>

          <p>
            To combine these states we use a Blend Space. We chose a 1
            dimensional Blend Space, meaning that we can blend between these
            states based on 1 parameter. In our case, the current movement
            animation depends on the magnitude of a character’s velocity vector.
          </p>

          <p>
            While the character moves around, they can also be ready for battle
            by having their weapon drawn and in the ready position. To allow for
            the blending of our movement and ready animations, we split the
            blending at a specific skeletal mesh joint. By doing this, a
            character can run at its opponent while simultaneously preparing
            their weapon. Not only does this look cinematic, but it ensures that
            characters don’t have an awkward pause when arriving at their foe.
            With their weapons ready, the action can begin the moment they meet.
          </p>

          <BlogImage
            image="/images/movement-blendspace.gif"
            imageBlur="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDqqaadTTWqOUY1RNUrVG1WgIjTaeaZQACniminCgY9akFMFPFIBaQ06kNAEbVC9TNUL0AQPVd6sPVd6AIWpKVqSmB0tNNLSGoAY1RtTzTDTuFiM02nmm0XHYBThSCnAUXCw8U8U0U4UrhYWkNLSGi4DGqF6maoXouBXeq71YeoHouOxCabTjSU7hY6KkNGaaTUXFYQ0w040w0XHYaaSlNJRcdhRThTRTxRcdhwp4popwpXCwtIaWmmi4rDGqF6maoXouFiB6rvU71A9Fx2IjSUpptO4WN/NITSZpCayuFgJphpSaaTTuOwhopM0Zp3HYcKeKYKcKLgSCnCmCnClcB1NNLTTSuIY1QvUrGoXNFwIXqu9TuaruadxkZpKCaTNFx2NzNITSZppNZ3JFJppNITTSadxi5ozTM0Zp3GSg04GogaeDQBKDTgajBpwNIB+aaTRmmk0rgNY1C5qRjULmi4ETmq7mpXNQOadxjCaTNNJpM0XA3M0hNJmmk1BIE00mkJphaqGO3Um6oy1JupjJw1PDVXDU8NQBYBp4NQBqeGpCJc00mm5pCaQCMahc09jULmgCJzVdzUrmqztQMazUm6mM1N3UxnQZppNGaaTSIEY1GzUrGomamMC1JuqMtTd1UMnDVIrVVDVIrUAWlapA1VlapA1SInzSE0wGkJpADGoXNPY1A5oAikNVpGqWQ1VkamMYzU3dUbvTN9MZ1RNMY0ppjUjMYxqFzUjmoHNUMYzUwtSOaiLUwJw1SK1VQ1So1AFtWqVTVZDUymkBMDQTTAaUmkAjGoHNSsagc0AV5DVSVqsSmqcxp2GQO9M31HK+Kh8ynYLncmmNTzUbVJJE9V3qd6gkqgK7moiakeojTAVTUyGoVqVKGBZQ1MpqBKmWpGSiikFLSAY1QPU7VA9MCrLVGY1dlqjPTQGdOeah3VLP1NQVogR//Z"
            caption="Using the blendspace"
            alt="A character blending between animations"
            height="210"
          />

          <p>
            By combining the movement and combat animations we had a fairly good
            proof of concept regarding how we would go about building a more
            refined animation system, and how we could make it extensible.
          </p>

          <p>
            The new character skeletal meshes, while beautiful, introduced a few
            challenges. We wanted each weapon to be drawn and readied
            accurately, so we had to replace a couple of existing, shared
            animations with unique ones per weapon type. We also wanted the
            characters to manage their projectile items accurately, things like
            arrows and grenades. Here’s an example of the bow and grenade weapon
            types. Notice that the Grenade type doesn’t use a Drawn state,
            because there will only be a projectile in use.
          </p>

          <BlogImage
            image="/images/new-attack-cycle-states.png"
            imageBlur="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAD3AzYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDBopaKAEopaKAEopaKAEopaSgAooooAKKKKACiiigBKKWigBKKWigBKKKKACkpaKAEopaSgAooooASilpKACkpaKAEooooASilpKACkpaSgApKWigBKSlpKAEopaSgBKSnUlACUlLSUAJSU6koAbSU6koAbSGnU00AIaSlNJQAlFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAGvRS4oxQAlFLijFACUUuKMUAJSYp2KMUANop2KMUANop2KMUANopcUYoASilxRigBKSnYoxQA2inYpMUAJRS4oxQAlJTsUYoAbRS4oxQAlJTsUmKAEopaKAG0UtFACUlOpKAEpKdSUAJSU6koASkp1JQAlJTqSgBtFOpKAG0lOpKAG0U6kxQA2kp2KTFADaTFOxSYoAYRSEU/FIRQAykpxFJigBKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKXFGKAEopcUuKAG0tLijFACUYp2KMUANxRinYoxQA3FFOxRQBr4oxS4oxQAmKMUuKMUAJijFLijFACYpMU7FGKAG4oxTsUYoAbijFOxRigBuKMU7FGKAG4oxS4oxQA3FGKdijFADcUYp2KMUANxRilxRigBuKMU7FGKAG4pMU7FGKAG4oxTsUmKAExSYp2KMUANxSYp2KMUANxRilxRigBuKMU7FJigBuKMU7FJigBtGKdikxQA3FJinYooAbikxTsUYoAZijFOxSYoAbikxTsUYoAZikxT8UmKAG4pMU7FJigBuKbin4pMUAMIpCKfikxQAzFJTyKaRQA2ilxRQAlFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFLijFACUU7FGKAExRinYpcUANxRinYpcUANxRinYpcUANxRinYpcUANxRinYoxQA3FGKdilxQA3FGKdijFADcUU7FFAGrijFOxRigBuKMU7FGKAG4oxTsUYoAbijFOxRigBuKMU7FGKAG4oxS4oxQA3FGKdijFADcUYp2KMUANxRilxRigBuKMU7FGKAG4oxTsUmKAG4oxTsUYoAbijFLijFADcUYp2KTFACYpMU7FGKAG4pMU7FGKAG4pMU7FGKAG4pMU7FGKAG4pMU6jFADcUmKdRQA3FJTqSgBKSnUlADcUmKdRQA3FJinUlADcUmKfSUANxSYp1JQA3FJinYpMUANxSYp2KTFADcUmKdikxQAzFJin4pMUAMxSU/FJigBtFLiigBKKKKACiiigAooooAKKKKACiiigAooooAKKKWgBKKXFGKAEpcUuKXFADcUuKdilxQA3FLilxS4oAbilxTsUYoATFGKdijFACYoxTsUYoATFGKdijFADcUuKXFLigBuKMU7FGKAG4pcUuKMUAJijFLilxQA3FFOxRQBq4oxS0UAJijFLRigBMUmKdijFADcUYp2KMUANxRinUYoAbijFLRigBMUYpcUUANxRinYooAbijFLRQAmKTFOooAbijFLRQA3FGKdSUAJijFLRQA3FFLRQA3FFOpKAEpKdSUAJSU6koASkp1JQAlJTqSgBtFOpKAG0UtFADaSnUlACUlOpKAG0lOpKAEpKdSUANpKdSUANopaKAG0lOpKAG4pMU6koAbikxTqSgBuKTFOpKAG4pMU/FJigBmKKdikxQAlJTsUYoAbRS4oxQAlFLijFACUtLijFACUYpcUuKAExRinYoxQAmKXFLilxQA3FLilxS4oATFLijFLigBMUuKXFGKAExS4pcUUAJilxS0UAJilxS0UAJilxS0UAJijFLRQAmKXFLRQAmKMUtFACYoxS0UAJRS4ooA1aKWigBKKWigBKKWigBKKWigBKKWigBKKWkoASilooASilooASkpaKAEopaKAEpKWigBKKWkoASilooAbRS0UAJSUtFACUlOpKAEpKdSUAJSUtFACUlLRQA2ilooAbRS0lACUlOpKAG0UtJQAlJTqSgBKSlpKAEpKdSUANpKdSUAJSUtJQAlJTqSgBtJTqSgBtFLSUAJSU6koAbRS0UANopaKAExRS0UAJRilooATFGKWloATFGKWloASlopaAEpaKWgBKWiloAKKWigApaKKACloooAKKWigAopaKACiiloASloooAKKWigBKKWigBKKWigBKKWigDVooooAKKKKACiiigAooooAKSlooASilooASiiigApKWigBKKKKACkpaKAEooooASilpKACkpaKAEpKWigBKKKKAEooooASiiigBKSlooASkpaSgApKWkoASilpKAEpKWkoAKSlpKAEpKWigBKSlpKAEpKWkoASilpKAEpKWkoASkpaSgBKKWkoASkpaSgBKKKKAEpKWigBKKKKACkpaKACiiigAoopaACiiloAKKKWgApaSloAKWiigApaKKACloooAWiiigApaKKACloooAKKKWgAooooAKKKWgBKWiigAooooAKKKKANSiiigAooooAKKKKACiiigAooooAKKKSgAooooAKKKKACkoooAKKKSgAooooAKSlpKACiikoAKKKKAEooooASiiigBKKKKAEoopKACkpaSgApKWkoAKSiigBKSlpKACkoooASkpaSgApKKKAEpKWkoASiikoAKSiigBKSlpKAEoopKACkoooASiikoAKKKSgAooooAKKSigBaKSloAKWkooAWlpKKAFpaSigBaWkpaAFopKWgBaKSloAWiiigBaKKKAFooooAWikpaAClpKKAFooooAKWkooAWiiigAooooAKKKKANSikooAWikooAWikooAKKSigBaKSigBaKSigBaSikoAWikooAWkoooAKKSigBaSikoAWikooAKKSigAoopKAFpKKSgBaSikoAWkopKACiikoAKKSigApKKKACkopKACiikoAKSikoAKKKSgApKKSgApKKKACkopKACkopKACkopKACikzSZoAWkozSZoAKKTNJmgBaSjNJmgBaKTNJmgB1JSZozQA6im5ozQA6lpuaM0AOpabmjNADqWm5pc0ALS03NLQA6ikzRQA6ikooAdS02loAWlptLQAtFJS0ALRSUUAOopKKAFopKWgBaKSigBaKSigBaKSigBaKSigDUzRmm5ozQAtGaTNGaAFzRmkzRmgBc0ZpM0ZoAXNGabmjNADs0ZpuaM0ALmjNJmjNAC5ozTc0ZoAdmkzSZozQAuaM03NGaAFzRmkzRmgBc0maTNGaAFzRmkzSZoAXNGaTNJmgBc0ZpM0maAHZpM0maTNAC5ozSZpM0ALmikzSZoAXNFJmkzQAtJRmkzQAtJmkzRmgAopM0maAFpKTNGaACikzSZoAWkzSZozQAZpM0ZpM0AGaM0maTNAC5pM0maTNAC5pM0maTNAC5pM0maTNAC5pM03NGaAFzSZpM0lADs0maSigBc0UlFAC0UlFAC0ZpKKAFzRmkooAdmjNNooAfmlzTM0ZoAkzRmmZpc0APzS5pmaXNADs0uaZmlzQA/NGabmjNAD80ZpuaXNADs0ZpuaXNADs0ZpuaM0APzRmm5ozQA7NGaTNGaAHZozTc0ZoAdmjNNzS5oAXNGaTNGaAFzRSZooA0s0ZpmaM0APzRmmZozQA/NGaZmjNAD80mabmjNADs0ZpuaM0AOzRmm5ozQA7NGaZmjNADs0ZpuaM0AOzRmm5pM0AOzRmm5ozQA7NGabmkzQA7NGabmjNADs0mabmjNADs0maTNJmgB2aM03NJmgB2aM03NJmgB2aM03NJmgB2aM03NJmgB2aTNJmkzQA7NJmkzSZoAXNGabmjNAC5pM0maTNADs0mabmjNAC5pM0maTNAC5ozTc0maAHZpM03NJmgB2aTNNzTSaAHZpM00tSZoAcTSE03NJQA7NJmkooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKWkooAXNLmm0UAOzS5plFAEmaXNR5ozQBJmlzUeaXdQBJmjNR7qXdQBJmjNMzRmgCTNGaZmjNAD80uajzS5oAfmjNMzRmgB+aXNMzRmgB+aM0zNGaAH5opmaKANLNGajzRmgCTNGajzRmgCTNGajzRmgB+aM0zNGaAH5ozTM0ZoAfmjNMzRmgB+aTNNzSZoAfmjNMzRmgB+aM0zNJmgB+aM0zNGaAH5ozTM0maAH5ozTM0ZoAfmkzTc0maAH5ozTM0maAH5ozTM0ZoAdmjNMzRmgB2aM0zNGaAHZozTM0maAH5ozTM0maAH5pM03NJmgB+aTNM3Um6gB+aTNM3Um6gB+aM1HupN1AEmaTNRlqQtQA/dSFqZupM0APLUhamUUAOzSZpKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKXNJRQAuaM0lFAC5pd1NooAdupd1MooAfuo3UyigCTdRuqOigCTdRuqOigCTdRUdFAGnuo3VFuo3UAS5o3VFuo3UAS7qTdUe6jdQBJuo3VHuo3UASbqN1R7qN1AEm6jdUW6jdQBLuo3VFuo3UASbqN1R7qN1AEm6jdUW6jdQBLupN1R7qN1AEm6jdUW6jdQBJuo3VHupN1AEu6k3VHupN1AEu6jdUW6k3UAS7qN1RbqTdQBLuo3VFupN9AEu6jdUO+jfQBLupN1Rb6TfQBNupN1Q7qN1AEu6k3VFk0ZoAk3Um6o6KAH7qTdTaKAFzRmkooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigCxvo31Bk0ZNAE++jfUGTRk0AT76N9QZNGTQBPvpN9Q5oyaAJt9G+oc0ZoAm30b6hzSUAT76TfUNFAE2+jfUNFAE2+k31FRQBLvo31FRQBJvo31HRQBJvpN9MooAfvpN9NooAduNG402igBdxoyaSigBcmkoooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//Z"
            caption="Updated animation graphs for bow and grenade weapons"
            alt="States depicting the newer draw, ready, attack animations"
            width="750"
            height="500"
          />

          <p>
            Another improvement from the placeholder animation graph, was the
            addition of an un-readying state. With a simple melee weapon, there
            is nothing to do when not actively attacking. A character can just
            keep their sword drawn until the next engagement. However for a bow,
            the character would want to place their drawn arrow back in the
            quiver, and a grenadier would want to put their grenade away. This
            was the purpose of the Unready state: ensuring a character is always
            ready to begin an animation despite being in the middle of
            attacking. We’re essentially making sure that every one-directional
            animation state has another animation state to revert it. We don’t
            want anyone chopping down a tree while still holding a grenade.
          </p>

          <p>
            In a future blog post we will share some of the choices made in
            designing the characters’ AI and state management, and how this AI
            connects with the skeletal animations. Thanks for reading!
          </p>

          <BlogImage
            image="/images/incendiary.gif"
            imageBlur="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDqqaadTTWqOUY1RNUrVG1WgIjTaeaZQACniminCgY9akFMFPFIBaQ06kNAEbVC9TNUL0AQPVd6sPVd6AIWpKVqSmB0tNNLSGoAY1RtTzTDTuFiM02nmm0XHYBThSCnAUXCw8U8U0U4UrhYWkNLSGi4DGqF6maoXouBXeq71YeoHouOxCabTjSU7hY6KkNGaaTUXFYQ0w040w0XHYaaSlNJRcdhRThTRTxRcdhwp4popwpXCwtIaWmmi4rDGqF6maoXouFiB6rvU71A9Fx2IjSUpptO4WN/NITSZpCayuFgJphpSaaTTuOwhopM0Zp3HYcKeKYKcKLgSCnCmCnClcB1NNLTTSuIY1QvUrGoXNFwIXqu9TuaruadxkZpKCaTNFx2NzNITSZppNZ3JFJppNITTSadxi5ozTM0Zp3GSg04GogaeDQBKDTgajBpwNIB+aaTRmmk0rgNY1C5qRjULmi4ETmq7mpXNQOadxjCaTNNJpM0XA3M0hNJmmk1BIE00mkJphaqGO3Um6oy1JupjJw1PDVXDU8NQBYBp4NQBqeGpCJc00mm5pCaQCMahc09jULmgCJzVdzUrmqztQMazUm6mM1N3UxnQZppNGaaTSIEY1GzUrGomamMC1JuqMtTd1UMnDVIrVVDVIrUAWlapA1VlapA1SInzSE0wGkJpADGoXNPY1A5oAikNVpGqWQ1VkamMYzU3dUbvTN9MZ1RNMY0ppjUjMYxqFzUjmoHNUMYzUwtSOaiLUwJw1SK1VQ1So1AFtWqVTVZDUymkBMDQTTAaUmkAjGoHNSsagc0AV5DVSVqsSmqcxp2GQO9M31HK+Kh8ynYLncmmNTzUbVJJE9V3qd6gkqgK7moiakeojTAVTUyGoVqVKGBZQ1MpqBKmWpGSiikFLSAY1QPU7VA9MCrLVGY1dlqjPTQGdOeah3VLP1NQVogR//Z"
            alt="The Blaster throwing incendiary grenades at an enemy"
            height="300"
          />
        </>
      }
    ></BlogPost>
  );
}
