import Link from 'next/link';
import { PostLink } from '../../types.ts';

type DateNavProps = {
  posts: PostLink[];
  currentRoute: string;
};

const DateNav = ({ posts, currentRoute }: DateNavProps) => (
  <div className="flex flex-col space-y-2 w-[250px]">
    {posts.map((post) => (
      <div
        className="flex flex-nowrap items-center"
        key={`post-link-${post.date}`}
      >
        {post.page == currentRoute ? (
          <span className="mr-2 text-sm text-beandip-pink">⮞</span>
        ) : (
          <div className="mr-5" />
        )}
        <Link
          passHref
          href={`/blog/${post.page}`}
          className={`w-max ${post.page == currentRoute && 'active-link'}`}
        >
          {post.date}
        </Link>
      </div>
    ))}
  </div>
);

export default DateNav;
