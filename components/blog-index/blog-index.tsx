import React from 'react';
import { PostLink } from '../../types.ts';
import Link from 'next/link';

type BlogIndexProps = {
  posts: PostLink[];
  currentRoute: string;
  onClose: () => void;
};

const BlogIndex = ({ posts, currentRoute, onClose }: BlogIndexProps) => (
  <div className="lg:hidden block">
    <div className="flex flex-col items-center space-y-8">
      {posts.map((post) => (
        <div
          className="flex flex-nowrap items-center"
          key={`post-link-${post.date}`}
        >
          {currentRoute === post.page ? (
            <p
              className="font-bold text-3xl text-center my-0 cursor-pointer hover:underline"
              onClick={onClose}
            >
              {post.date}
            </p>
          ) : (
            <Link
              passHref
              href={`/blog/${post.page}`}
              className="font-bold text-3xl text-center"
            >
              {post.date}
            </Link>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default BlogIndex;
