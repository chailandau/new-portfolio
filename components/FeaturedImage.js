import Image from "next/image";

const FeaturedImage = () => {
  return (
    <div className="ft-img">
      <Image 
        src="/images/chai-headshot-web.jpg"
        alt="alt"
        layout="fill" 
        objectFit="cover"
      />
    </div>
  );
};

export default FeaturedImage;
