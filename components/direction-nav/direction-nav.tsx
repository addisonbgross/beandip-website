import Link from 'next/link';
import LinkButton from '../link-button/link-button.tsx';

type DirectionNavProps = {
  prev?: string;
  next?: string;
  onShowBlogIndex: () => void;
};

const DirectionNav = ({ prev, next, onShowBlogIndex }: DirectionNavProps) => (
  <div className="flex flex-nowrap justify-between items-center p-4 border-solid border-0 border-t-2 border-gray-300">
    <Link
      passHref
      href={prev || ''}
      className={`font-bold mr-auto ${prev ? '' : 'opacity-0'}`}
    >
      Previous
    </Link>

    <p
      className="font-bold my-0 cursor-pointer border-0 border-b-2 border-solid border-transparent hover:border-black"
      onClick={onShowBlogIndex}
    >
      View All
    </p>

    {next && (
      <Link passHref href={next} className="font-bold ml-auto">
        Next
      </Link>
    )}
  </div>
);

export default DirectionNav;
