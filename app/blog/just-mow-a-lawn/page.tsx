import BlogPost from '../../../components/blog-post/blog-post';
import BlogImage from '../../../components/blog-image/blog-image';
import Home from '../../page.tsx';

const Page = () => (
  <Home currentPost={<BlogPost_JustMowALawn />} currentPage="just-mow-a-lawn" />
);

const BlogPost_JustMowALawn = () => (
  <BlogPost
    title="Why Would Anyone Do Drugs When They Could Just Mow A Lawn?"
    date="December 1st, 2022"
    content={
      <>
        <p>
          We’ve been busy modeling lots of beautiful trees and other plants for
          the biome that will be featured in a demo that we’re creating for
          grant applications and user testing. This post goes over how we create
          and use our foliage to produce a lush environment.
        </p>

        <h4>Deciding On Plants</h4>

        <p>
          When deciding on the type of environment we wanted to create for our
          initial demo, we drew inspiration from our local landscape and settled
          on creating a foothills biome. We researched the vegetation that is
          common in the Alberta-BC foothills area, and from that research we
          selected a number of trees and flowers to model.
        </p>

        <p>
          Currently, flowers are non-interactable objects and are simply meant
          to inject colour and character into our scenery. As such, the flowers
          emulated in the foothills biome were chosen because they offer
          variation in colour and height. We did our best to keep the amount of
          detail for each flower to a minimum without oversimplifying the
          overall form of each plant. In doing so, the models look interesting
          up close which will allow us to use these models in establishing shots
          should we decide to use them in that capacity in the future. We then
          use the Level of Detail (LOD) option to minimize the number of
          triangles that are used in the models’ meshes when they are viewed
          from a distance.
        </p>

        <p>
          We also modeled 3 different species of trees for the foothills biome
          and created a few versions of each tree to ensure that there is some
          variation across the biome.
        </p>

        <BlogImage
          image="/images/trees-in-fog.png"
          alt="A forest fading into distant fog"
          height={350}
        />

        <h4>Painting The Landscape</h4>

        <p>
          To add the foliage models to our game, we use Unreal’s foliage
          painting system. With this tool, we can create a palette of sorts
          containing all of our different foliage and paint any combination of
          plants. We can set the density of each type of foliage, specify the
          desired spacing between each piece, and configure randomized
          orientations and scaling. The plants are usually painted in groups as
          painting all of the foliage types at once does not produce a
          convincingly natural result.
        </p>

        <BlogImage
          image="/images/painting-foliage.gif"
          alt="Painting foliage using Unreal"
          caption="Bulk painting of foliage"
          height={400}
        />

        <h4>Performance</h4>

        <p>
          To improve performance, each foliage type is configured as an
          instanced static mesh. This means that there only needs to be 1 CPU to
          GPU communication for each type of mesh’s vertex data instead of 1
          communication per mesh in general. Each piece of foliage will have its
          own position, rotation, and scale sent to the GPU at the same time
          that we send the vertex data.
        </p>

        <p>
          Another simple way to improve performance is to not cast shadows from
          each foliage type. We currently only cast shadows with the trees and
          sizable shrubbery; the grass and flowers all have their shadows
          disabled. Since we use dynamic lighting for virtually everything in a
          scene (the sun and moon actors are constantly in motion), not casting
          shadows for smaller foliage results in a huge performance improvement.
        </p>

        <p>
          To further increase performance, we utilize Unreal occlusion culling
          to not render foliage behind other foliage. In general we see a ~4ms
          reduction in frame rendering time when using this feature in a high
          foliage area.
        </p>

        <p>
          Our real-time strategy style camera allows the player to zoom in and
          out as they please, so this provided us another opportunity to improve
          performance. We use LOD meshes to show a lower triangle count mesh
          when it is viewed at a distance. We are fairly aggressive in this
          approach and reduce a mesh’s triangles by 75% at each of the 3 LOD
          levels set. This means that our simple bush model would be composed of
          236 triangles when viewed up close, 59 triangles at a medium distance,
          and a slight 14 triangles when viewed from far away. This reduction
          approach worked fairly well, but needed to be tweaked to be less
          aggressive for more delicate models such as our lily. The change in
          appearance between LOD levels can be stark when viewed up close, but
          when configured correctly it can be undetectable to the eye.
        </p>

        <BlogImage
          image="/images/lod-in-action.gif"
          alt="A fern plant at 3 different levels of LOD"
          caption="The fern's 3 LOD meshes"
          height={400}
        />

        <h4>Wind</h4>

        <p>
          To add life to our scene, we have a wind mechanic which affects
          virtually all of our foliage. We use Unreal’s Material Parameter
          Collection to store our wind intensity and direction for use in
          materials. We have two different types of wind responses: tree wind
          and small foliage wind.
        </p>

        <p>
          The tree wind material uses a sinusoid function to make the tree bend
          back and forth based on the strength of the wind. The bending motion
          is also influenced by the height of the tree, with the highest
          branches bending more and the area near the trunk hardly moving at
          all. The leaves or needles of each tree also have an extra function
          added to produce random perturbations from the wind.
        </p>

        <p>
          The foliage wind material uses a similar sinusoid to the tree wind in
          order to bend things like grass and flowers in the wind. We also do
          some normal vector trickery to ensure that the grass looks nice when
          hit by the sunlight.
        </p>

        <BlogImage
          image="/images/hilltop-foliage.png"
          alt="A hilltop covered in lush foliage"
          height={350}
        />
      </>
    }
  />
);

export default Page;
