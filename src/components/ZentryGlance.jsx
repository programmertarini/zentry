// import React from "react";
// import AnimatedTitle from "./AnimatedTitle";
// import BentoTilt from "./BentoTilt";
// import BentoCard from "./BentoCard";

// const ZentryGlance = () => {
//   return (
//     <section className="bg-black min-h-screen flex flex-col gap-20 w-screen py-20 px-4 md:px-16">
//       {/* Header */}
//       <div className="flex items-start justify-start gap-4 flex-col">
//         <p className="text-xs text-white font-mono">
//           OUR UNIVERSE IN A NUTSHELL
//         </p>
//         <AnimatedTitle
//           title={"ZENTRY AT A<br />GLANCE"}
//           containerClass=" !text-[6.5rem] "
//         />
//       </div>

//       {/* Grid */}
//       <div className="bento-box grid grid-cols-2 gap-6 mt-[4rem]">
//         <div className="bento-left flex flex-col  items-end pt-[10rem]">
//           <BentoTilt className="bg-black border w-[35vw] h-[45vh]  border-white/10 rounded-xl">
//             <BentoCard
//               title="4+"
//               description="Products"
//               src="https://zentry.com/export/videos/alpha/bento/card-1@lg.webm"
//             />
//           </BentoTilt>
//           ;
//           <BentoTilt className="bg-[#F1FF4B] w-[20vw] h-[40vh]   rounded-xl">
//             <BentoCard title="30+" description="Partners" />
//           </BentoTilt>
//           ;
//           <BentoTilt className="bg-[#5B43F1] w-[35vw] h-[100vh]   text-white rounded-xl p-6 flex flex-col justify-between">
//             <div>
//               <h2 className="text-4xl font-black">140M+</h2>
//               <p className="text-sm">Treasury</p>
//             </div>
//             <div className="flex justify-center my-4">
//               <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center font-bold">
//                 Z
//               </div>
//             </div>
//             <div className="flex justify-between text-[10px] font-mono text-white/90">
//               <p>
//                 <span className="inline-block w-2 h-2 bg-black mr-1 rounded-full"></span>
//                 LIQUID TOKEN
//                 <br />
//                 70%
//               </p>
//               <p>
//                 <span className="inline-block w-2 h-2 bg-[#F1FF4B] mr-1 rounded-full"></span>
//                 INVESTMENTS
//                 <br />
//                 20%
//               </p>
//               <p>
//                 <span className="inline-block w-2 h-2 bg-white mr-1 rounded-full"></span>
//                 NFT ASSETS
//                 <br />
//                 10%
//               </p>
//             </div>
//           </BentoTilt>
//           ;
//         </div>
//         <div className="bento-right flex flex-col gap-6 pb-10  items-start">
//           <div className="w-[35vw] h-[90vh] relative overflow-hidden rounded-xl">
//             <BentoTilt className="bg-[#5B43F1] w-full h-full">
//               <BentoCard title="500K+" description="Residents" className="text-[10rem]" />
//               <img
//                 src="https://zentry.com/export/images/bento/card2@sm.webp"
//                 alt=""
//                 className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
//               />
//             </BentoTilt>
//           </div>
//           <BentoTilt className="bg-black border border-white/10 rounded-xl text-white p-6 flex items-start justify-center">
//             <div className="text-center">
//               <h2 className="text-lg md:text-[3.2rem] leading-[3rem]  font-zentry font-black text-blue-50 text-left">
//                 WORLD-CLASS <br /> BACKERS
//               </h2>
//               <ul className="text-[10px] leading-[10px]  text-right font-mono mt-4 text-gray-400 space-y-1">
//                 <li>COINBASE VENTURES</li>
//                 <li>VZ1 LABS</li>
//                 <li>SPARTAN</li>
//                 <li>LONGHASH</li>
//                 <li>PANTERA CAPITAL</li>
//                 <li>ANIMOCA BRANDS</li>
//                 <li>DEFIANCE CAPITAL</li>
//                 <li>PLAY VENTURES</li>
//                 <li>SKYVISION CAPITAL</li>
//                 <li>VESSEL CAPITAL</li>
//                 <li>ARCHÉ FUND</li>
//                 <li>SYNERGIS</li>
//               </ul>
//             </div>
//           </BentoTilt>
//           <div className="w-[35vw] h-[45vh]">
//             <BentoTilt className="bg-[#e8e6ff] text-black rounded-xl p-6 flex flex-col justify-end h-full">
//               <p className="text-xs font-mono">
//                 Revenue generated
//                 <br />
//                 2024
//               </p>
//               <h2 className="text-5xl font-black mt-2">40M</h2>
//             </BentoTilt>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ZentryGlance;

// import React from "react";
// import AnimatedTitle from "./AnimatedTitle";
// import BentoTilt from "./BentoTilt";
// import BentoCard from "./BentoCard";

// const ZentryGlance = () => {
//   return (
//     <section className="bg-black min-h-screen flex flex-col gap-20 w-screen py-20 px-4 md:px-16">
//       {/* Header */}
//       <div className="flex items-start justify-start gap-4 flex-col">
//         <p className="text-xs text-white font-mono">
//           OUR UNIVERSE IN A NUTSHELL
//         </p>
//         <AnimatedTitle
//           title={"ZENTRY AT A<br />GLANCE"}
//           containerClass=" !text-[6.5rem] "
//         />
//       </div>

//       {/* Grid */}
//       <div className="bento-box grid grid-cols-2 gap-6 mt-[4rem]">
//         {/* Left Column */}
//         <div className="bento-left flex flex-col items-end pt-[10rem] gap-6">
//           {/* Products with video - use BentoCard */}
//           <BentoTilt className="bg-black border w-[35vw] h-[45vh] border-white/10 rounded-xl">
//             <BentoCard
//               title="4+"
//               description="Products"
//               src="https://zentry.com/export/videos/alpha/bento/card-1@lg.webm"
//             />
//           </BentoTilt>

//           {/* Partners */}
//           <BentoTilt className="bg-[#F1FF4B] w-[20vw] h-[40vh] rounded-xl text-black p-6 flex flex-col items-center justify-center">
//             <h2 className="text-[9rem] leading-none font-black special-font">
//               3<b className="text-[10rem]">0</b>+
//             </h2>
//             <p className="text-sm mt-2 font-mono">Partners</p>
//           </BentoTilt>

//           {/* Treasury */}
//           <BentoTilt className="bg-[#5B43F1] w-[35vw] h-[100vh] text-white rounded-xl p-6 flex flex-col justify-between">
//             <div>
//               <p className="text-sm text-gray-700">Treasury</p>
//               <h2 className="text-[6rem] leading-[2rem] text-black font-zentry special-font">140<b>M</b>+</h2>
//             </div>
//             <BentoCard src="https://zentry.com/export/videos/alpha/bento/card-5@lg.webm" />
//             <div className="flex justify-between text-[10px] font-mono text-white/90">
//               <p>
//                 <span className="inline-block w-2 h-2 bg-black mr-1 rounded-full"></span>
//                 LIQUID TOKEN
//                 <br />
//                 70%
//               </p>
//               <p>
//                 <span className="inline-block w-2 h-2 bg-[#F1FF4B] mr-1 rounded-full"></span>
//                 INVESTMENTS
//                 <br />
//                 20%
//               </p>
//               <p>
//                 <span className="inline-block w-2 h-2 bg-white mr-1 rounded-full"></span>
//                 NFT ASSETS
//                 <br />
//                 10%
//               </p>
//             </div>
//           </BentoTilt>
//         </div>

//         {/* Right Column */}
//         <div className="bento-right flex flex-col gap-6 pb-10 items-start">
//           {/* Residents */}
//           <div className="w-[35vw] h-[100vh] relative overflow-hidden rounded-xl">
//             <BentoTilt className="bg-[#5B43F1] w-full h-full p-3 text-black relative z-10 overflow-hidden group">
//               <p className="text-sm text-black font-mono">Residents</p>
//               <h2 className="text-[11.5rem] font-zentry leading-[11rem] text-center font-black transition-all duration-300 group-hover:tracking-wide group-hover:scale-105">
//                 500K+
//               </h2>

//               <img
//                 src="https://zentry.com/export/images/bento/card2@sm.webp"
//                 alt=""
//                 className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
//               />
//             </BentoTilt>
//           </div>

//           {/* Backers - Custom Text (Kept As-Is) */}
//           <BentoTilt className="bg-black border border-white/10 rounded-xl text-white p-6 flex items-start justify-center">
//             <div className="text-center">
//               <h2 className="text-lg md:text-[3.2rem] leading-[3rem] font-zentry font-black text-blue-50 text-left">
//                 WORLD-CLASS <br /> BACKERS
//               </h2>
//               <ul className="text-[10px] leading-[10px] text-right font-mono mt-4 text-gray-400 space-y-1">
//                 <li>COINBASE VENTURES</li>
//                 <li>VZ1 LABS</li>
//                 <li>SPARTAN</li>
//                 <li>LONGHASH</li>
//                 <li>PANTERA CAPITAL</li>
//                 <li>ANIMOCA BRANDS</li>
//                 <li>DEFIANCE CAPITAL</li>
//                 <li>PLAY VENTURES</li>
//                 <li>SKYVISION CAPITAL</li>
//                 <li>VESSEL CAPITAL</li>
//                 <li>ARCHÉ FUND</li>
//                 <li>SYNERGIS</li>
//               </ul>
//             </div>
//           </BentoTilt>

//           {/* Revenue */}
//           <div className="w-[35vw] h-[45vh]">
//             <BentoTilt className="bg-[#e8e6ff] text-black rounded-xl p-6 flex flex-col items-start gap-2 justify-center h-full">
//               <p className="text-xs font-mono ">
//                 Revenue generated
//                 <br />
//                 2024
//               </p>
//               <h2 className="text-[18rem] leading-[14rem] font-black font-zentry special-font">
//                 40<b>M</b>
//               </h2>
//             </BentoTilt>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ZentryGlance;

import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import BentoTilt from "./BentoTilt";
import BentoCard from "./BentoCard";

const ZentryGlance = () => {
  return (
    <section className="bg-black min-h-screen flex flex-col gap-20 w-screen py-20 px-4 md:px-16">
      {/* Header */}
      <div className="flex items-start justify-start gap-4 flex-col">
        <p className="text-xs text-white font-mono">
          OUR UNIVERSE IN A NUTSHELL
        </p>
        <AnimatedTitle
          title={"ZENTRY AT A<br />GLANCE"}
          containerClass=" !text-[6.5rem] md:!text-[6.5rem] !text-[3rem] "
        />
      </div>

      {/* Grid */}
      <div className="bento-box grid grid-cols-1 md:grid-cols-2 gap-6 mt-[4rem]">
        {/* Right Column - Shows first on mobile, second on desktop */}
        <div className="bento-right flex flex-col gap-6 pb-10 items-start order-1 md:order-2">
          {/* Residents */}
          <div className="w-full md:w-[35vw] h-[60vh] md:h-[100vh] relative overflow-hidden rounded-xl">
            <BentoTilt className="bg-[#5B43F1] w-full h-full p-3 text-black relative z-10 overflow-hidden group">
              <p className="text-sm text-black font-mono">Residents</p>
              <h2 className="text-[8rem] md:text-[11.5rem] font-zentry leading-[7rem] md:leading-[11rem] text-center font-black transition-all duration-300 group-hover:tracking-wide group-hover:scale-105">
                500K+
              </h2>

              <img
                src="https://zentry.com/export/images/bento/card2@sm.webp"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
              />
            </BentoTilt>
          </div>

          {/* Backers - Custom Text (Kept As-Is) */}
          <BentoTilt className="bg-black border border-white/10 rounded-xl text-white p-6 flex items-start justify-center w-full md:w-auto">
            <div className="text-center">
              <h2 className="text-[3rem]  md:text-[3.2rem] leading-[3rem] md:leading-[3rem] font-zentry font-black text-blue-50 text-left">
                WORLD-CLASS <br /> BACKERS
              </h2>
              <ul className="text-[10px] leading-[10px] text-right font-mono mt-4 text-gray-400 space-y-1">
                <li>COINBASE VENTURES</li>
                <li>VZ1 LABS</li>
                <li>SPARTAN</li>
                <li>LONGHASH</li>
                <li>PANTERA CAPITAL</li>
                <li>ANIMOCA BRANDS</li>
                <li>DEFIANCE CAPITAL</li>
                <li>PLAY VENTURES</li>
                <li>SKYVISION CAPITAL</li>
                <li>VESSEL CAPITAL</li>
                <li>ARCHÉ FUND</li>
                <li>SYNERGIS</li>
              </ul>
            </div>
          </BentoTilt>

          {/* Revenue */}
          <div className="w-full md:w-[35vw] md:h-[45vh] h-[30vh] ">
            <BentoTilt className="bg-[#e8e6ff] text-black rounded-xl p-6 flex flex-col items-start gap-2 justify-center h-full">
              <p className="text-xs font-mono ">
                Revenue generated
                <br />
                2024
              </p>
              <h2 className="text-[12rem] md:text-[18rem] leading-[10rem] md:leading-[14rem] font-black font-zentry special-font">
                40<b>M</b>
              </h2>
            </BentoTilt>
          </div>
        </div>

        {/* Left Column - Shows second on mobile, first on desktop */}
        <div className="bento-left flex flex-col items-end md:pt-[10rem] gap-6 order-2 md:order-1">
          {/* Products with video - use BentoCard */}
          <BentoTilt className="bg-black border w-full md:w-[35vw] h-[45vh] border-white/10 rounded-xl">
            <BentoCard
              title="4+"
              description="Products"
              src="https://zentry.com/export/videos/alpha/bento/card-1@lg.webm"
            />
          </BentoTilt>

          {/* Partners */}
          <BentoTilt className="bg-[#F1FF4B] w-full md:w-[20vw] h-[40vh] rounded-xl text-black p-6 flex flex-col items-center justify-center">
            <h2 className="text-[11rem] md:text-[9rem] leading-none font-black special-font">
              3<b className="text-[13rem] md:text-[10rem]">0</b>+
            </h2>
            <p className="text-sm mt-2 font-mono">Partners</p>
          </BentoTilt>

          {/* Treasury */}
          <BentoTilt className="bg-[#5B43F1] w-full md:w-[35vw] h-[80vh] md:h-[100vh] text-white rounded-xl p-6 flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-700">Treasury</p>
              <h2 className="text-[4rem] md:text-[6rem] leading-[3rem] md:leading-[2rem] text-black font-zentry special-font">
                140<b>M</b>+
              </h2>
            </div>
            <BentoCard src="https://zentry.com/export/videos/alpha/bento/card-5@lg.webm" />
            <div className="flex justify-between text-[10px] font-mono text-white/90">
              <p>
                <span className="inline-block w-2 h-2 bg-black mr-1 rounded-full"></span>
                LIQUID TOKEN
                <br />
                70%
              </p>
              <p>
                <span className="inline-block w-2 h-2 bg-[#F1FF4B] mr-1 rounded-full"></span>
                INVESTMENTS
                <br />
                20%
              </p>
              <p>
                <span className="inline-block w-2 h-2 bg-white mr-1 rounded-full"></span>
                NFT ASSETS
                <br />
                10%
              </p>
            </div>
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default ZentryGlance;
