import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import BentoTilt from "./BentoTilt";
import Button from "./Button";

const Updates = () => {
  return (
    <section className="bg-blue-50 w-screen min-h-screen flex flex-col md:flex-row px-6 md:px-16 py-20 gap-10">
      {/* Left Section - Fixed Heading */}
      <div className="md:w-[70%] sticky top-10 flex flex-col justify-start items-start">
        <AnimatedTitle
          title="LAT<b>E<b/>ST <br /> <b>U<b/>PDATES"
          containerClass="!text-black !text-[6.5rem] font-zentry !text-left"
        />
        <p className="mt-4 text-sm md:text-base text-gray-800 max-w-xs">
          Stay updated with the latest news, events, and updates in our
          ecosystem. Be part of our universe's growth and evolution.
        </p>
        <Button
          id="news-button"
          title="Read all news"
          containerClass="mt-5 bg-black text-blue-50 !text-sm"
        />
      </div>

      {/* Right Section - Scrollable Cards */}
      <div className="md:w-2/3 flex flex-col gap-10">
        <BentoTilt className="rounded-lg overflow-hidden shadow-lg">
          <img src="https://a.storyblok.com/f/271652/1053x602/2288f5218f/news-cover-5.png/m/" />
        </BentoTilt>

        <p className="mt-4 text-sm md:text-base text-gray-800 font-bold pl-[10vw] max-w-[75%]">
          Nexus: Zentry’s Metagame Portal Bridging Human & AI in the Global Play
          Economy
        </p>

        <BentoTilt className="rounded-lg overflow-hidden shadow-lg">
          <img src="https://a.storyblok.com/f/271652/1053x602/cf66707253/news-cover-4.png/m/" />
        </BentoTilt>

        <p className="mt-4 text-sm md:text-base text-gray-800 font-bold pl-[10vw] max-w-[75%]">
          Zentry Whitepaper: The Blueprint to the Metagame
        </p>
      </div>
    </section>
  );
};

export default Updates;
