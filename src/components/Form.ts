import React from "react";
import pic from "../assets/svg/home/resume.svg";
import SendResumeBtn from "./SendResumeBtn";

interface FormProps {
  apiData: {
    btn_text: string;
    form: string;
  } | null;
}

const Form: React.FC<FormProps> = ({ apiData }) => {
  const content = apiData || {};

  return (
    <div id="resume">
      <div className="w-80 ma">
        <div className="s-80"></div>
        <div className="row">
          <div className="col-lg-2 m-hide"></div>
          <div className="col-lg-4">
            <h4 className="title-part">{content.btn_text}</h4>
            <div className="s-20"></div>
            <p>{content.form}</p>
            <div className="s-20"></div>
            <SendResumeBtn>{content.btn_text}</SendResumeBtn>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <div className="s-30"></div>
            <img src={pic} alt={content.btn_text} />
          </div>
        </div>
        <div className="s-100"></div>
        <div className="s-100"></div>
      </div>
    </div>
  );
};

export { Form };