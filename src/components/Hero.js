import React from "react";

import image from "../assets/svg/home/hero.svg";
import SendResumeBtn from "./SendResumeBtn";

function Hero({ apiData }) {
  const content = apiData || {};
  return (
    <div className="row">
      <div className="col-lg-6 flex aic">
        <div>
          <h1 className="title-intro">{content.hero_title}</h1>
          <div className="s-20"></div>
          <h3 className="title-intro desc">{content.hero_desc}</h3>
          <div className="s-30"></div>
          <SendResumeBtn>{content.btn_text}</SendResumeBtn>
        </div>
      </div>
      <div className="col-lg-6 flex jcc aic">
        <img src={image} alt={content.hero_title} />
      </div>
    </div>
  );
}

export { Hero };
