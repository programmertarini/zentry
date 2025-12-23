import React from "react";
import "./HoverBox.css";

const HoverBox = ({ src, alt = "Preview" }) => {
  return (
    <span className="hover-box-wrapper">
      <img src={src} alt={alt} className="hover-image" />
    </span>
  );
};

export default HoverBox;
