import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Reviews } from "../components/Reviews";
import { Steps } from "../components/Steps";
import { Features } from "../components/Features";
import { Bot } from "../components/Bot";
import { Vacancies } from "../components/Vacancies";
import { Form } from "../components/Form";
import { languagesList } from "../constants";
import { useRef } from "react";

function Home() {
  const { language } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState(null);
  const [isAllowedToFetch, setIsAllowedToFetch] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (!languagesList.find((language) => language["code_a2"] === language)) {
      navigate("/uk");
    }
    setIsAllowedToFetch(true);
    setIsChecked(true);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api-dev.buxonline.org/api/v1/landing/${language}/`
        );
        setApiData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    isAllowedToFetch && fetchData();
  }, [language, isAllowedToFetch]);

  if (!isChecked) {
    return <></>;
  }

  return (
    <>
      <Hero apiData={apiData} language={language} />
      <About apiData={apiData} language={language} />
      <Reviews apiData={apiData} language={language} />
      <Steps apiData={apiData} language={language} />
      <Features apiData={apiData} language={language} />
      <Bot apiData={apiData} language={language} />
      <Vacancies apiData={apiData} language={language} />
      <Form apiData={apiData} language={language} />
    </>
  );
}

export { Home };
