import React, { useRef, useState } from "react";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemeRef = useRef();
  const handelMouseMove = (e) => {
    if (!itemeRef.current) return;
    const { left, top, width, height } =
      itemeRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };
  const handelMouseLeave = (e) => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemeRef}
      onMouseMove={handelMouseMove}
      onMouseLeave={handelMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};


export default BentoTilt