import React from "react";
import SendResumeBtn from "./SendResumeBtn";

interface AboutProps {
  apiData: {
    about_title: string;
    about_description: string;
    about_subtitle_1: string;
    about_text_1: string;
    about_subtitle_2: string;
    about_text_2: string;
    btn_text: string;
  };
}

const About: React.FC<AboutProps> = ({ apiData }) => {
  const content = apiData || {};

  return (

      <div className="row">
        <div className="col-lg-6">
          <div className="s-80"></div>
          <h4 className="title-part">{content.about_title}</h4>
          <div className="s-20"></div>
          <p className="title-intro desc">{content.about_description}</p>
          <div className="s-30"></div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="title-intro big c-blue">5</h3>
            <h4 className="title-part mini">{content.about_subtitle_1}</h4>
            <div className="s-20"></div>
            <p className="title-intro desc">{content.about_text_1}</p>
          </div>
          <div className="col-lg-6">
            <h3 className="title-intro big c-blue">B1</h3>
            <h4 className="title-part mini">{content.about_subtitle_2}</h4>
            <div className="s-20"></div>
            <p className="title-intro desc">{content.about_text_2}</p>
          </div>
        </div>
      </div>
      <div className="s-40"></div>
      <div className="tc">
        <SendResumeBtn>{content.btn_text}</SendResumeBtn>
      </div>
    </>
  );
};

export { About };