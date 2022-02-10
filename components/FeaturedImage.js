import Image from "next/image";

const FeaturedImage = () => {
  return (
    <div className="ft-img">
      <Image 
        src="/images/chai-headshot-web.jpg"
        alt="alt"
        width="305"
        height="400"
      />
    </div>
  );
};

export default FeaturedImage;
