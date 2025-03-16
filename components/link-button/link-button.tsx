import Link from 'next/link';

export interface LinkButtonProps {
  text: string;
  link: string;
  isActive: boolean;
}

const LinkButton = ({ text, link, isActive }: LinkButtonProps) => {
  const activeClasses =
    'border-0 border-b-4 border-solid border-black hover:mb-2 active:hover:border-b-4';
  const classes = `link text-md font-bold mb-2 ${isActive && activeClasses}`;

  return (
    <Link passHref href={link} className={classes}>
      {text}
    </Link>
  );
};

export default LinkButton;
