import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { languagesList as languages } from "../../constants";
import { useSelector } from "react-redux";
import { dispatchRedux } from "../../redux/store";
import { setLanguage } from "../../redux/slices/globalSlice/globalSlice";
import { default_language } from "../../constants";

const LangMenu = () => {
  const { language } = useSelector((state) => state.global);
  const navigate = useNavigate();

  const handleLanguageChange = (code) => {
    const currentUrl = window.location.pathname;
    let updatedUrl = currentUrl.split("/");
    updatedUrl[1] = code;
    updatedUrl = updatedUrl.join("/");
    dispatchRedux(setLanguage(code));
    navigate(updatedUrl);
  };

  return (
    <>
      <Dropdown className="nav-lang">
        <Dropdown.Toggle variant="light">
          <img
            src={require(`../../assets/svg/flags/4x3/${
              language || default_language
            }.svg`)}
            alt={"pic"}
            width={18}
            style={{ marginTop: -1.5, display: "inline-block" }}
          />
          <small>{(language || default_language).toUpperCase()}</small>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-scroll">
          <div className="scroll-wrapper">
            {languages.map((item) => (
              <Dropdown.Item
                key={item.id}
                onClick={() => handleLanguageChange(item.code_a2)}
                data-key={item.id}
              >
                {item.code_a2 && (
                  <img
                    src={require(`../../assets/svg/flags/4x3/${item.code_a2}.svg`)}
                    width={18}
                    alt={"pic"}
                    className="pb-1 mx-1"
                  />
                )}
                <small>{item.name}</small>
              </Dropdown.Item>
            ))}
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export { LangMenu };
