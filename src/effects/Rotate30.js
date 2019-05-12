import React from "react";
import { css, cx } from "emotion";

const rotate = () => {
  return (
    <div className="hl">
      <h5 style={{ color: "#fff" }}>HTML </h5>
      <p>
        <span className="hl-attribute">rotate</span>
      </p>

      <span className="hl hl-attribute"> transition:</span>
      <span className="hl hl-number"> all 0.2s ease-in-out;</span>
      <br />
      <span className="hl hl-attribute">&:hover </span>
      <span className="hl hl-number"> transform: scale(1.1);</span>
    </div>
  );
};

const rotateStyle = css`
  transition: all 0.2s ease-in-out !important;
  &:hover {
    transform: rotateZ(-30deg);
  }
`;

export { rotate, rotateStyle };
