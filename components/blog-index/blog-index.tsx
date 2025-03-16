import { PostLink } from '../../types.ts';
import Link from 'next/link';

type BlogIndexProps = {
  posts: PostLink[];
  closeBlogIndex: () => void;
};

const BlogIndex = ({ posts, closeBlogIndex }: BlogIndexProps) => {
  return (
    <div className="flex flex-col items-center space-y-8">
      {posts.map((post) => (
        <div
          className="flex flex-nowrap items-center"
          key={`post-link-${post.date}`}
        >
          <Link
            passHref
            href={`/blog/${post.page}`}
            className="font-bold text-3xl"
          >
            {post.date}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogIndex;
