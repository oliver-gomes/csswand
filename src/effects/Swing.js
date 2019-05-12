import React from "react";
import { css, cx } from "emotion";

const swing = () => {
  return (
    <div className="hl">
      <h5 style={{ color: "#fff" }}>HTML </h5>
      <p>
        <span className="hl-attribute">swing</span>
      </p>

      <span className="hl hl-attribute"> transition:</span>
      <span className="hl hl-number"> all 0.2s ease-in-out;</span>
      <br />
      <span className="hl hl-attribute">&:hover </span>
      <span className="hl hl-number"> transform: scale(1.1);</span>
    </div>
  );
};

const swingStyle = css`
  @keyframes swing {
    15% {
      -webkit-transform: translateX(5px);
      transform: translateX(5px);
    }
    30% {
      -webkit-transform: translateX(-5px);
      transform: translateX(-5px);
    }
    50% {
      -webkit-transform: translateX(3px);
      transform: translateX(3px);
    }
    65% {
      -webkit-transform: translateX(-3px);
      transform: translateX(-3px);
    }
    80% {
      -webkit-transform: translateX(2px);
      transform: translateX(2px);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  transition: all 0.2s ease-in-out !important;

  &:hover {
    animation: swing 1s ease;
    animation-iteration-count: 1;
  }
`;

export { swing, swingStyle };
