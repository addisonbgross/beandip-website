import Link from 'next/link';

type DirectionNavProps = {
  prev?: string;
  next?: string;
};

const DirectionNav = ({ prev, next }: DirectionNavProps) => (
  <div className="flex flex-nowrap justify-between items-center p-4 border-solid border-0 border-t-2 border-gray-300">
    {prev && (
      <Link passHref href={prev} className="font-bold mr-auto">
        <span className="text-xs text-beandip-pink">⮜</span> Previous
      </Link>
    )}

    {next && (
      <Link passHref href={next} className="font-bold ml-auto">
        Next <span className="text-xs text-beandip-pink">⮞</span>
      </Link>
    )}
  </div>
);

export default DirectionNav;
