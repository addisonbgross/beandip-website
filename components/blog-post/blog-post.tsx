import { Post } from '../../types';

const BlogPost = ({ title, date, content }: Post) => (
  <main className="block px-0">
    <h2>{title}</h2>
    <p className="italic my-0">{date}</p>
    <div>{content}</div>
    <div className="min-h-8" />
  </main>
);

export default BlogPost;
