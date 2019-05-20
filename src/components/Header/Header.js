import React from "react";

import cssWand from "../../css-wand.png";
import { TwitterShareButton } from "react-twitter-embed";

import "./Header.css";

export default function HeaderNew() {
  return (
    <div className="grid-header">
      <div className="item1">
        <img src={cssWand} height="100" alt="logo" />
      </div>
      <div className="item2">
        <iframe
          title="github button"
          src="https://ghbtns.com/github-btn.html?user=oliver-gomes&repo=csswand&type=star&size=large"
          frameborder="0"
          scrolling="0"
          width="100px"
          height="30px"
        />

        <div className="item3">
          <TwitterShareButton
            url={"https://github.com/oliver-gomes"}
            options={{ text: "#csswand is awesome" }}
          />
        </div>
      </div>
    </div>
  );
}
