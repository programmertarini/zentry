import React from "react";
import AnimatedTitle from "./AnimatedTitle";
// import HoverBox from "./HoverBox/HoverBox"
import Button from "./Button";

const MultiText = () => {
  return (
    <section className="min-h-dvh w-screen bg-blue-50 text-black">
      <div className="size-full flex-center flex-col overflow-hidden gap-8 py-20 ">
        <p className="font-general text-sm uppercase md:text-[10px]  ">
          who we are
        </p>
        <AnimatedTitle
          title="WE'RE B<b>U<b/>ILDING <br /> A NEW  REALIT<b>Y<b/> <br /> THAT REW<b>A<b/>RDS <br /> PLAY<b>E<b/>RS AND <br /> E<b>M<b/>POWERS <br /> HU<b>M<b/>ANS & AI <br /> TO THRI<b>V<b/>E"
          containerClass="!text-black text-center !leading-relax !text-[6rem]"
        />

        <p className="text-gray-500 left-1/2 w-full max-w-96 text-center font-circular-web text-lg md:max-w-[34rem]">
          Zentry envisions a future where players, emerging tech, and a new
          economy unite at the convergence of gaming and AI.
        </p>

        <Button
          id="discover-button"
          title="discover who we are"
          containerClass="mt-5 bg-black text-blue-50"
        />
      </div>
    </section>
  );
};

export default MultiText;
