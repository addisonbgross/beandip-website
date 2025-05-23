import Link from 'next/link';

type DirectionNavProps = {
  prev?: string;
  next?: string;
  onShowBlogIndex: () => void;
};

const DirectionNav = ({ prev, next, onShowBlogIndex }: DirectionNavProps) => (
  <div className="fixed bottom-0 left-0 w-full lg:invisible direction-nav">
    <div className="grid grid-cols-3 items-center p-4 border-solid border-0 border-t-2 border-gray-300">
      <Link
        passHref
        href={prev || ''}
        className={`font-bold text-left w-min ${prev ? '' : 'opacity-0'}`}
      >
        Previous
      </Link>

      <p
        className="font-bold w-min mx-auto my-0 text-nowrap cursor-pointer border-0 border-b-2 border-solid [&:not(:hover)]:border-transparent"
        onClick={onShowBlogIndex}
      >
        View All
      </p>

      <Link
        passHref
        href={next || ''}
        className={`font-bold w-min ml-auto ${next ? '' : 'opacity-0'}`}
      >
        Next
      </Link>
    </div>
  </div>
);

export default DirectionNav;
