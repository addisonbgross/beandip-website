import { Post, Tabs } from '../../types';
import HomeWrapper from '../../app/page.tsx';

const BlogPost = ({ title, date, slug, content }: Post) => (
  <HomeWrapper
    tab={Tabs.Blog}
    route={slug}
    content={
      <main className="block px-0">
        <h2>{title}</h2>
        <p className="italic my-0">{date}</p>
        <div>{content}</div>
        <div className="min-h-8" />
      </main>
    }
  />
);

export default BlogPost;
