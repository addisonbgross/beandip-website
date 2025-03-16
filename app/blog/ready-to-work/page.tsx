import BlogPost from '../../../components/blog-post/blog-post';
import BlogImage from '../../../components/blog-image/blog-image';
import Home from '../../page.tsx';

const Page = () => (
  <Home currentPost={<BlogPost_ReadyToWork />} currentPage="ready-to-work" />
);

const BlogPost_ReadyToWork = () => (
  <BlogPost
    title="Ready To Work"
    date="January 11th, 2023"
    content={
      <>
        <p>Happy new year!</p>

        <p>
          This post will be brief as we’re busy finishing up a playable demo to
          send to our testing team. We’ve built a short level that contains most
          of the mechanics we have created and are really excited to see what
          people think!
        </p>

        <p>
          In our next posts we will be sharing our level and character design
          processes.
        </p>

        <BlogImage
          image="/images/watching.gif"
          alt="The survivors looking over their ruined home"
          height={450}
        />
      </>
    }
  />
);

export default Page;
