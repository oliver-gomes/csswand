import React from "react";
import { css, cx } from "emotion";

const tdshadow = () => {
  return (
    <div className="hl">
      <h5 style={{ color: "#fff" }}>HTML </h5>
      <p>
        <span className="hl-attribute">tdshadow</span>
      </p>

      <span className="hl hl-attribute"> transition:</span>
      <span className="hl hl-number"> all 0.2s ease-in-out;</span>
      <br />
      <span className="hl hl-attribute">&:hover </span>
      <span className="hl hl-number"> transform: scale(1.1);</span>
    </div>
  );
};

const tdshadowStyle = css`
  transition: all 0.2s ease-in-out !important;

  &:hover {
    box-shadow: 1px 1px #53a7ea, 2px 2px #53a7ea, 3px 3px #53a7ea;
    transform: translateX(-3px);
  }
`;

export { tdshadow, tdshadowStyle };
