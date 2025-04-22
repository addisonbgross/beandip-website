import BlogPost from '../../../components/blog-post/blog-post';

const BlogPost_StillAlive = () => (
  <BlogPost
    title="Still Alive"
    date="April 22nd, 2025"
    slug="still-alive"
    content={
      <>
        <p>
          It&apos;s been quite some time since our last post. Life gets busy,
          work is a lot of work, but things keep moving. We never stopped
          building our game and decided at some point to hold off on blog posts.
          Creating the game itself was the higher priority.
        </p>
        <p>
          Much has changed regarding gameplay. We changed the focus from being
          one long adventure to a more rogue-like experience that better
          leverages our tiny, two person team. We&apos;ll follow up with more
          details soon.
        </p>
      </>
    }
  />
);

export default BlogPost_StillAlive;
