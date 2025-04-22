import { PostLink } from '../../types.ts';
import Link from 'next/link';

type BlogIndexProps = {
  posts: PostLink[];
};

const BlogIndex = ({ posts }: BlogIndexProps) => {
  return (
    <div className="lg:hidden block">
      <div className="flex flex-col items-center space-y-8">
        {posts.map((post) => (
          <div
            className="flex flex-nowrap items-center"
            key={`post-link-${post.date}`}
          >
            <Link
              passHref
              href={`/blog/${post.page}`}
              className="font-bold text-3xl text-center"
            >
              {post.date}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogIndex;
