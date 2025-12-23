// import React, { useRef, useState, useEffect } from "react";
// import { TiLocationArrow } from "react-icons/ti";
// import Button from "./Button";
// import { useWindowScroll } from "react-use";
// import gsap from "gsap";

// const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];
// const Navbar = () => {
//   const navContainerRef = useRef(null);
//   const audioElementref = useRef(null);
//   const [isAudioPlaying, setIsAudioPlaying] = useState(false);
//   const [isIndiactorActive, setIsIndiactorActive] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isNavVisiable, setIsNavVisiable] = useState(true);
//   const { y: currentScrollY } = useWindowScroll();
//   const toggleAudioIndicator = () => {
//     setIsAudioPlaying((prev) => !prev);
//     setIsIndiactorActive((prev) => !prev);
//   };

//   useEffect(() => {
//     if (currentScrollY === 0) {
//       setIsNavVisiable(true);
//       navContainerRef.current.classList.remove("floating-nav");
//     } else if (currentScrollY > lastScrollY) {
//       setIsNavVisiable(false);
//       navContainerRef.current.classList.add("floating-nav");
//     } else if (currentScrollY < lastScrollY) {
//       setIsNavVisiable(true);
//       navContainerRef.current.classList.add("floating-nav");
//     }
//     setLastScrollY(currentScrollY);
//   }, [currentScrollY, lastScrollY]);

//   useEffect(() => {
//     gsap.to(navContainerRef.current, {
//       y: isNavVisiable ? 0 : -100,
//       opacity: isNavVisiable ? 1 : 0,
//       duration: 0.2,
//     });
//   }, [isNavVisiable]);

//   useEffect(() => {
//     if (isAudioPlaying) {
//       audioElementref.current.play();
//     } else {
//       audioElementref.current.pause();
//     }
//   }, [isAudioPlaying]);

//   return (
//     <div
//       ref={navContainerRef}
//       className="fixed inset-x-0 top-4 z-50  h-16 border-none transition-all duration-700 sm:inset-x-6"
//     >
//       <header className="absolute top-1/2 w-full -translate-y-1/2">
//         <nav className="flex items-center justify-between size-full p-4">
//           <div className="flex items-center gap-7  ">
//             <img src="/img/logo.png" alt="Logo" className="w-10" />
//             <Button
//               id="product-button"
//               title="Products"
//               rightIcon={<TiLocationArrow />}
//               containerClass="bg-blue-50 md:flex items-center justify-center gap-1"
//             />
//             <Button
//               id="white-paper"
//               title="whitepaper"
//               containerClass="bg-blue-50 md:flex items-center justify-center gap-1"
//             />
//           </div>
//           {/* Navigation Links and Audio Button */}
//           <div className="flex h-full items-center">
//             <div className="hidden md:block">
//               {navItems.map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className="nav-hover-btn font-bold"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//             <button
//               onClick={toggleAudioIndicator}
//               className="ml-10 flex itmes-center space-x-0.5"
//             >
//               <audio
//                 ref={audioElementref}
//                 className="hidden"
//                 src="/audio/loop.mp3"
//                 loop
//               />
//               {[1, 2, 3, 4].map((bar) => (
//                 <div
//                   key={bar}
//                   className={`indicator-line ${
//                     isIndiactorActive ? "active" : ""
//                   }`}
//                   style={{ animationDelay: `${bar * 0.1}s` }}
//                 />
//               ))}
//             </button>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Navbar;
import React, { useRef, useState, useEffect } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "./Button";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import AnimatedTitle from "./AnimatedTitle"; // Import AnimatedTitle

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {
  const navContainerRef = useRef(null);
  const menuRef = useRef(null);
  const audioElementref = useRef(null);

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndiactorActive, setIsIndiactorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisiable, setIsNavVisiable] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { y: currentScrollY } = useWindowScroll();

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndiactorActive((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Scroll effect for navbar
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisiable(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisiable(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisiable(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  // Navbar show/hide animation
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisiable ? 0 : -100,
      opacity: isNavVisiable ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisiable]);

  // Audio play/pause
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementref.current.play();
    } else {
      audioElementref.current.pause();
    }
  }, [isAudioPlaying]);

  // GSAP animation for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    } else {
      gsap.to(menuRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Main Navbar */}
      <div
        ref={navContainerRef}
        className="fixed inset-x-1 top-4 z-50 h-16  border-gray-400 transition-all duration-700 sm:inset-x-6"
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex items-center gap-[20vw] md:gap-[0vw] md:justify-between justify-center size-full p-4">
            <div className="flex items-center gap-7">
              <img src="/img/logo.png" alt="Logo" className="w-[3rem]" />
              <Button
                id="product-button"
                title="Products"
                rightIcon={<TiLocationArrow />}
                containerClass="bg-blue-50 md:flex items-center justify-center gap-1"
              />
              <Button
                id="white-paper"
                title="whitepaper"
                containerClass="bg-blue-50 md:flex items-center justify-center gap-1"
              />
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex h-full items-center">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn font-bold"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={toggleAudioIndicator}
                className="ml-10 flex items-center space-x-0.5"
              >
                <audio
                  ref={audioElementref}
                  className="hidden"
                  src="/audio/loop.mp3"
                  loop
                />
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={`indicator-line ${
                      isIndiactorActive ? "active" : ""
                    }`}
                    style={{ animationDelay: `${bar * 0.1}s` }}
                  />
                ))}
              </button>
            </div>

            {/* Hamburger Menu (Mobile Only) */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-3xl text-blue-100">
                {isMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </nav>
        </header>
      </div>

      {/* Full-Screen Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-[#EAFD5E] z-40 flex flex-col items-center justify-center transform -translate-y-full"
      >
        {/* Use AnimatedTitle component as big animated text */}
        <AnimatedTitle
          title={`<b>N</b>EXUS <br /> VAULT <br /> PR<b>O</b>LOGUE <br /> <b>A</b>BOUT <br /> CONTA<b>C</b>T`}
          containerClass="!text-black !gap-[1.5rem] !text-[6rem] leading-none special-font font-zentry text-left"
        />

        <div className="absolute bottom-6 flex justify-between w-full px-8 text-sm font-bold">
          <span>Media Kit</span>
          <span>
            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center  space-x-0.5"
            >
              <audio
                ref={audioElementref}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line-black ${
                    isIndiactorActive ? "active" : ""
                  }`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
