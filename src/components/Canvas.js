import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { LangMenu } from "./elements/LangMenu";
import axios from "axios";
import Logo from "../logo.svg";
import support from "../assets/svg/home/standwith.svg";

function Canvas({ children }) {
  let date = new Date().getFullYear();

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "uk"
  );
  const [languagesData, setLanguagesData] = useState([]);
  const [currentLanguageData, setCurrentLanguageData] = useState(null);

  useEffect(() => {
    localStorage.setItem("language", language);
    const selectedLanguageData = languagesData.find(
      (lang) => lang.code_a2 === language
    );
    setCurrentLanguageData(selectedLanguageData);
  }, [language, languagesData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api-dev.buxonline.org/api/v1/language/list/"
        );
        setLanguagesData(response.data);
        const storedLanguage = localStorage.getItem("language") || "uk";
        setLanguage(storedLanguage);

        const selectedLanguageData = response.data.find(
          (lang) => lang.code_a2 === storedLanguage
        );
        setCurrentLanguageData(selectedLanguageData);
      } catch (error) {
        console.error("Error fetching language data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <img src={support} alt={"We stand with Ukraine"} className="support" />
      <Container>
        <Navbar className="nav-top py-3">
          <Link to={`/${language}`}>
            <img
              src={Logo}
              width="40"
              height="40"
              alt="Buxonline"
              className="logo-img"
            />
            <span className="px-1"></span>
            <span className="pl-2 mt-2 title-logo">Buxonline</span>
          </Link>
          <Navbar.Toggle />
          {currentLanguageData ? (
            <Navbar.Collapse className="justify-content-end">
              <Link
                to={`/categories/${language}`}
                className="mx-4 c-dark upp title-menu-link"
              >
                {currentLanguageData.page_meta.menu_vacancies}
              </Link>
              <Link
                to={`/${language}`}
                className="mx-4 c-dark upp title-menu-link"
              >
                {currentLanguageData.page_meta.menu_for_business}
              </Link>
              <a
                href={`https://job.buxonline.org/${language}`}
                className="button nav-button m-hide"
                target="blank"
              >
                {currentLanguageData.page_meta.menu_send_cv}
              </a>
            </Navbar.Collapse>
          ) : null}
          <div className="mx-3"></div>
          <LangMenu setLanguage={setLanguage} />
        </Navbar>
      </Container>
      <Container>{children}</Container>
      <footer className="bg-light">
        <Container>
          <div className="s-40"></div>
          {currentLanguageData && (
            <div className="row">
              <div className="col-lg-4">
                <Link to={`/${language}`} className="flex">
                  <img
                    src={Logo}
                    width="36"
                    height="36"
                    alt="Buxonline"
                    className="logo-img"
                  />
                  <span className="px-1"></span>
                  <p className="pl-2 mt-1 title-logo">Buxonline</p>
                </Link>
                <p className="title-parts mini c-light mx-2">
                  @{date} - {currentLanguageData.page_meta.footer_rights}
                </p>
                <div className="s-10"></div>
              </div>
              <div className="col-lg-4">
                <div className="s-10"></div>
                <Link
                  to="https://t.me/buxonline"
                  className="title-parts mini c-blue"
                >
                  {currentLanguageData.page_meta.footer_bot}
                </Link>
                <div className="s-10"></div>
                <a
                  href="https://job.buxonline.org/"
                  className="title-parts mini c-blue pt-3"
                  target="blank"
                >
                  {currentLanguageData.page_meta.menu_send_cv}
                </a>
              </div>
              <div className="col-lg-4">
                <div className="s-10"></div>
                <Link to="/privacy" className="title-parts mini c-blue">
                  {currentLanguageData.page_meta.footer_privacy}
                </Link>
                <div className="s-10"></div>
                <Link to="/cookie" className="title-parts mini c-blue pt-3">
                  {currentLanguageData.page_meta.footer_cookie}
                </Link>
                <div className="s-50"></div>
              </div>
            </div>
          )}
          <div className="s-40"></div>
        </Container>
      </footer>
    </>
  );
}

export { Canvas };
