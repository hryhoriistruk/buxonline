import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import lang from "../../data/lang";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LangMenu = ({ setLanguage }) => {
  const UA = require("../../assets/svg/flags/4x3/ua.svg").default;
  const ukLanguage = lang.find((item) => item.code === "uk");
  const [current, setCurrent] = useState(ukLanguage ? ukLanguage.pic : UA);
  const [short, setShort] = useState(ukLanguage ? ukLanguage.code : "ua");
  const navigate = useNavigate();

  const [languagesList, setLanguagesList] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://api-dev.buxonline.org/api/v1/language/list/"
      );
      setLanguagesList(response.data);
    })();
  }, []);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "uk";
    const currentLanguage =
      window.location.pathname.split("/")[1] || storedLanguage;
    setLanguage(currentLanguage);
  }, [setLanguage]);

  useEffect(() => {
    const selectedLanguage = lang.find((item) => item.code === short);
    if (selectedLanguage) {
      setCurrent(selectedLanguage.pic);
    }
  }, [short]);

  const handleLanguageChange = (code) => {
    const selectedLanguage = lang.find((item) => item.code === code);
    if (selectedLanguage) {
      setCurrent(selectedLanguage.pic);
      setShort(selectedLanguage.code);
      setLanguage(selectedLanguage.code);
      localStorage.setItem("language", selectedLanguage.code);
      const currentUrl = window.location.pathname;
      const updatedUrl = updateLanguageParam(currentUrl, selectedLanguage.code);
      navigate(updatedUrl);
    }
  };

  const updateLanguageParam = (url, newLanguage) => {
    const urlSegments = url.split("/").filter(Boolean);
    const languageIndex = urlSegments.findIndex((segment) =>
      lang.map((item) => item.code).includes(segment)
    );

    if (languageIndex !== -1) {
      urlSegments[languageIndex] = newLanguage;
    } else {
      urlSegments.push(newLanguage);
    }

    return `/${urlSegments.join("/")}`;
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="light">
          <img
            src={current}
            width={18}
            alt={"flag"}
            className="mx-1"
            style={{ marginTop: -1.5, display: "inline-block" }}
          />{" "}
          <small> {short.toUpperCase()} </small>
        </Dropdown.Toggle>
        {languagesList && (
          <Dropdown.Menu className="dropdown-scroll">
            <div className="scroll-wrapper">
              {languagesList
                .map((languageToFind) => {
                  const language = lang.find(
                    (language) => language.code === languageToFind.code_a2
                  );
                  return {
                    ...languageToFind,
                    pic: language.pic,
                    menu: language.menu,
                  };
                })
                .filter((language) => language && language.menu)
                .map((language) => {
                  const { id, pic, name, menu, code_a2 } = language;
                  return (
                    <Dropdown.Item
                      disabled={menu === null}
                      key={id}
                      onClick={() => handleLanguageChange(code_a2)}
                      className={short === code_a2 ? "active" : ""}
                    >
                      <img
                        src={
                          pic ||
                          "https://user-images.githubusercontent.com/641799/107672773-4d565e00-6c63-11eb-866d-f55c910c21c7.png"
                        }
                        width={18}
                        alt={code_a2}
                        className="pb-1 mx-1"
                      />
                      <small>{name}</small>
                    </Dropdown.Item>
                  );
                })}
            </div>
          </Dropdown.Menu>
        )}
      </Dropdown>
    </>
  );
};

export { LangMenu };
