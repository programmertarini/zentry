import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Partners = () => {
  const partners = [
    {
      name: "YZILABS",
      type: "BACKERS",
      content:
        "include top-tier VCs, funds, and companies, providing expertise, network and resources to fuel our project's success.",
      logo: "https://a.storyblok.com/f/271652/324x96/84071080e7/yzi-labs-logo.png/m/",
      partnerText: "Our backers",
    },
    {
      name: "COINBASE VENTURES",
      type: "BACKERS",
      content:
        "include top-tier VCs, funds, and companies, providing expertise, network and resources to fuel our project's success.",
      logo: "https://a.storyblok.com/f/271652/324x96/e04d8d93e5/11-coinbase-ventures.png/m/",
      partnerText: "Our backers",
    },
    {
      name: "PANTERA CAPITAL",
      type: "BACKERS",
      content:
        "include top-tier VCs, funds, and companies, providing expertise, network and resources to fuel our project's success.",
      logo: "https://a.storyblok.com/f/271652/324x96/55015e6645/21-pantera.png/m/",
      partnerText: "Our backers",
    },
    {
      name: "DEFIANCE CAPITAL",
      type: "BACKERS",
      content:
        "include top-tier VCs, funds, and companies, providing expertise, network and resources to fuel our project's success.",
      logo: "https://a.storyblok.com/f/271652/324x96/8d7f1c12a2/09-defiance-capital.png/m/",
      partnerText: "Our backers",
    },
    {
      name: "ANIMOCA BRANDS",
      type: "BACKERS",
      content:
        "include top-tier VCs, funds, and companies, providing expertise, network and resources to fuel our project's success.",
      logo: "https://a.storyblok.com/f/271652/324x96/0f5b2cbfbd/12-animoca-brands.png/m/",
      partnerText: "Our backers",
    },
    {
      name: "SKYVISION CAPITAL",
      type: "BACKERS",
      content:
        "include top-tier VCs, funds, and companies, providing expertise, network and resources to fuel our project's success.",
      logo: "https://a.storyblok.com/f/271652/324x96/25dba4368a/14-skyvision-capital.png/m/",
      partnerText: "Our backers",
    },
    {
      name: "PLAY VENTURE",
      type: "BACKERS",
      content:
        "include top-tier VCs, funds, and companies, providing expertise, network and resources to fuel our project's success.",
      logo: "https://a.storyblok.com/f/271652/324x96/a36edf8643/13-play-venture.png/m/",
      partnerText: "Our backers",
    },
    {
      name: "VESSEL CAPITAL",
      type: "BACKERS",
      content:
        "include top-tier VCs, funds, and companies, providing expertise, network and resources to fuel our project's success.",
      logo: "https://a.storyblok.com/f/271652/324x96/c76823a4a7/16-vessel-capital.png/m/",
      partnerText: "Our backers",
    },
    {
      name: "ARCHE FUND",
      type: "BACKERS",
      content:
        "include top-tier VCs, funds, and companies, providing expertise, network and resources to fuel our project's success.",
      logo: "https://a.storyblok.com/f/271652/324x96/8aad378bd6/15-arche-fund.png/m/",
      partnerText: "Our backers",
    },
    {
      name: "MARBLEX",
      type: "GAMING",
      content:
        " span projects, communities, protocols, & infrastructure, accelerating expansive growth of the new gaming era.",
      logo: "https://a.storyblok.com/f/271652/324x96/f2790290bb/marblex.png/m/",
      partnerText: "Our gaming partner",
    },
    {
      name: "FNATIC",
      type: "GAMING",
      content:
        " span projects, communities, protocols, & infrastructure, accelerating expansive growth of the new gaming era..",
      logo: "https://a.storyblok.com/f/271652/324x96/ff352ded18/05-fnatic.png/m/",
      partnerText: "Our gaming partner",
    },
    {
      name: "XSET",
      type: "GAMING",
      content:
        " span projects, communities, protocols, & infrastructure, accelerating expansive growth of the new gaming era.",
      logo: "https://a.storyblok.com/f/271652/324x96/36b625e34d/06-xset.png/m/",
      partnerText: "Our gaming partner",
    },
    {
      name: "JAMBO",
      type: "WEB3",
      content:
        " support tech & community, driving cutting-edge innovation and a vibrant ecosystem users.",
      logo: "https://a.storyblok.com/f/271652/324x96/26e030dc4f/01-jambo.png/m/",
      partnerText: "Our Web3 partner",
    },
    {
      name: "AWS",
      type: "BRANDS",
      content:
        "cover tech, gaming, entertainment, & lifestyle sectors, enhancing our reach and player experience.",
      logo: "https://a.storyblok.com/f/271652/324x96/8d824e037f/03-aws.png/m/",
      partnerText: "Our Brand partner",
    },
  ];

  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      partners.forEach((_, index) => {
        ScrollTrigger.create({
          trigger: `.partner-${index}`,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [partners]);

  return (
    <section
      ref={containerRef}
      className="bg-black text-white min-h-screen gap-[10vw] md:gap-[0vw] flex flex-col md:flex-row w-screen py-20 px-6  relative"
    >
      {/* Left Content */}
      <div className="flex w-[100%] items-start justify-center flex-col md:pl-20">
        <p className="text-gray-400 max-w-sm text-sm font-bold">
          <b className="text-white mr-[8px]">{partners[activeIndex].partnerText}</b>
          {partners[activeIndex].content}
        </p>
      </div>

      {/* Main Partner List */}
      <div className=" flex flex-col items-center justify-center w-[100%]">
        <h1 className="text-5xl md:text-[4rem]  text-blue-50 md:pr-[6rem] font-zentry special-font">
          O<b>U</b>R PARTNERS
        </h1>
        <div className="text-left">
          {partners.map((partner, index) => (
            <div key={index} className={`partner-${index}`}>
              <p
                className={`transition-colors duration-300 text-4xl md:text-6xl font-zentry ${
                  activeIndex === index ? "text-yellow-300" : "text-gray-300"
                }`}
              >
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Logo */}
      <div className="hidden md:flex w-[40%] text-sm font-semibold text-yellow-300 items-center justify-center">
        <img
          src={partners[activeIndex].logo}
          className="w-32 h-32 object-contain"
        />
      </div>
    </section>
  );
};

export default Partners;
