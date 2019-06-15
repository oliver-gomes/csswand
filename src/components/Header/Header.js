import React from "react";

// import cssWand from "../../css-wand.png";
import cssWand from "../../csswand.png";
import { TwitterShareButton } from "react-twitter-embed";

import "./Header.css";

export default function HeaderNew() {
  return (
    <div className="header-main">
      <div className="product-header">
        <a
          href="https://www.producthunt.com/posts/css-wand?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-css-wand"
          target="_blank"
          style={{ float: "left" }}
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=158372&theme=dark"
            alt="CSS Wand - Easy copy-paste beautiful CSS animations | Product Hunt Embed"
            width="250px"
            height="54px"
          />
        </a>
        <a
          href="https://www.producthunt.com/posts/css-wand?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-css-wand"
          target="_blank"
          style={{ float: "right" }}
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=158372&theme=dark&period=daily"
            alt="CSS Wand - Easy copy-paste beautiful CSS animations | Product Hunt Embed"
            width="250px"
            height="54px"
          />
        </a>
      </div>
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
              url={"https://github.com/oliver-gomes/csswand/"}
              options={{ text: "#csswand is awesome" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
