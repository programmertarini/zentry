import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const Universe = () => {
  const title = "THE UNIVERS<b>E<b/><br />POWERED BY ZE<b>N<b/>bT";

  return (
    <section id="universe" className="min-h-screen bg-[#f3ff41] w-screen">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 w-full h-full">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-[100px]">
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <AnimatedTitle title={title} containerClass="!text-black" />
            <Button
              id="enter-vault"
              title="enter vault"
              containerClass="mt-5 text-white bg-black"
            />
          </div>
          {/* Optional content at bottom left */}
          <div className="mt-20 text-sm text-black space-y-2 font-mono tracking-tight">
            <div>
              <span className="font-bold">01</span> SHAPING ZENTRY COLLECTIVELY
              <p className="max-w-md mt-1">
                Participate in governance, influence key decisions in the
                ever-growing Zentry Universe that is limited only by people’s
                imaginations.
              </p>
            </div>
            <div>
              <span className="font-bold">02</span> UNLOCKING ECONOMIC
              OPPORTUNITY
            </div>
            <div>
              <span className="font-bold">03</span> SHARING VALUE ACCRUED
            </div>
          </div>
        </div>

        {/* Right Side - Diamond SVG Logo */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
          <video
            src="https://zentry.com/export/videos/alpha/nexus/symbol_3@lg.webm"
            autoPlay
            muted
            loop
          />
        </div>
      </div>
    </section>
  );
};

export default Universe;
