import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Footer = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX - innerWidth / 2;
      const y = e.clientY - innerHeight / 2;

      const xPercent = x / (innerWidth / 2);
      const yPercent = y / (innerHeight / 2);

      gsap.to(textRef.current, {
        rotationY: xPercent * 15,
        rotationX: -yPercent * 15,
        scale: 1 + Math.abs(xPercent) * 0.1 + Math.abs(yPercent) * 0.1,
        transformPerspective: 1000,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(textRef.current, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-between min-h-screen bg-[#4f3ff0] text-black overflow-hidden">
      {/* Big Text */}
      <h1
        ref={textRef}
        className="font-extrabold text-[38vw] font-zentry leading-none uppercase select-none pointer-events-none text-center"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        ZENTRY
      </h1>
      <footer className="w-full bg-[#4f3ff0] text-black px-6 md:px-16 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-y-8">
          {/* Logo */}
          <div className="flex items-start">
            <img
              src="img/logo.png" // Replace with actual logo path
              alt="Zentry Logo"
              className="w-6 h-6"
            />
          </div>

          {/* Explore Section */}
          <div className="flex flex-col gap-2">
            <p className="uppercase text-[10px] tracking-widest font-medium opacity-70">
              Explore
            </p>
            <a href="#" className="font-bold hover:underline">
              Home
            </a>
            <a href="#" className="font-bold hover:underline">
              Prologue
            </a>
            <a href="#" className="font-bold hover:underline">
              About
            </a>
            <a href="#" className="font-bold hover:underline">
              Contact
            </a>
          </div>

          {/* Products Section */}
          <div className="flex flex-col gap-2">
            <p className="uppercase text-[10px] tracking-widest font-medium opacity-70">
              Products
            </p>
            <a href="#" className="font-bold hover:underline">
              Radiant
            </a>
            <a href="#" className="font-bold hover:underline">
              Nexus ↗
            </a>
            <a href="#" className="font-bold hover:underline">
              Zigma
            </a>
            <a href="#" className="font-bold hover:underline">
              Azul
            </a>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col gap-2">
            <p className="uppercase text-[10px] tracking-widest font-medium opacity-70">
              Follow Us
            </p>
            <a href="#" className="font-bold hover:underline">
              Discord
            </a>
            <a href="#" className="font-bold hover:underline">
              X
            </a>
            <a href="#" className="font-bold hover:underline">
              Youtube
            </a>
            <a href="#" className="font-bold hover:underline">
              Medium
            </a>
          </div>

          {/* Resources Section */}
          <div className="flex flex-col gap-2">
            <p className="uppercase text-[10px] tracking-widest font-medium opacity-70">
              Resources
            </p>
            <a href="#" className="font-bold hover:underline">
              Media Kit
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="flex justify-between text-[10px] uppercase tracking-widest font-medium opacity-70 mt-10">
          <p>©Zentry 2024. All Rights Reserved</p>
          <p>Privacy Policy</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
