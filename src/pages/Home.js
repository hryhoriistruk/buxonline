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
import { useSelector } from "react-redux";
import { useMutation } from "react-query";
import { fetchHomeRequest } from "../services/requests";
import { Audio } from "react-loader-spinner";

function Home() {
  const { language } = useSelector((state) => state.global);

  const {
    data: apiData,
    mutate: fetchHome,
    isLoading,
  } = useMutation(fetchHomeRequest);

  useEffect(() => {
    fetchHome(language);
  }, [language]);

  if (isLoading)
    return (
      <>
        <div className="loader-wrapper">
          <Audio color={"#2E85EC"} />
        </div>
      </>
    );

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
