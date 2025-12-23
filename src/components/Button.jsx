import React from "react";

const Button = ({ id, title, leftIcon, rightIcon, containerClass }) => {
  return (
    <div>
      <button
        id={id}
        className={`group z-10 relative w-fit flex items-center justify-center cursor-pointer oveflow-hidden rounded-full px-4 py-1.5 text-black ${containerClass}`}
      >
        {leftIcon}
        <span className="relative inline-flex oveflow-hidden font-general font-semibold text-[9px] uppercase">
          <div>{title}</div>
        </span>

        {rightIcon}
      </button>
    </div>
  );
};

export default Button;
