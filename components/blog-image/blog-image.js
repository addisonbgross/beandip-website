import Image from 'next/image';

const BlogImage = ({ image, imageBlur, alt }) => (
  <div className="blog-image">
    <Image
      src={image}
      blurDataURL={imageBlur}
      placeholder="blur"
      width="552"
      height="552"
      layout="intrinsic"
      alt={alt}
    />
  </div>
);

export default BlogImage;
