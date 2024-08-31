import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { LangMenu } from "./elements/LangMenu";
import axios from "axios";
import Logo from "../logo.svg";
import support from "../assets/svg/home/standwith.svg";
import { useSelector } from "react-redux";
import { languagesList } from "../constants";

interface CanvasProps {
  children: React.ReactNode;
}

interface LanguageItem {
  code_a2: string;
  page_meta: {
    menu_vacancies: string;
    menu_for_business: string;
    menu_send_cv: string;
    footer_rights: string;
    footer_bot: string;
    footer_privacy: string;
    footer_cookie: string;
  };
}

const Canvas: React.FC<CanvasProps> = ({ children }) => {
  let date = new Date().getFullYear();
  const [lang, setLanguage] = useState<string | undefined>();

  const { language } = useSelector((state) => state.global);

  const currentLanguageData = languagesList.find(
    (languageItem: LanguageItem) => languageItem.code_a2 === language
  );

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
                to={`/${language}/categories`}
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
};

export { Canvas };