import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div id="about-me" className="relative flex flex-col w-full h-full">
      <video
        autoPlay
        loop
        muted
        className="rotate-180 absolute top-[-300px] left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
