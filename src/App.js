import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import "./styles/custom.sass";

import { Home } from "./pages/Home";
import { Privacy } from "./pages/Privacy";
import { Cookie } from "./pages/Cookie";
import { NotFound } from "./pages/NotFound";

import { Categories } from "./pages/Categories";
import { VacanciesList } from "./pages/VacanciesList";
import { SingleVacancy } from "./pages/SingleVacancy";
import { default_language, languagesList } from "./constants";
import { Canvas } from "./components/Canvas";
import LanguageLayout from "./components/LanguageLayout";
import RedirectElement from "./components/RedirectElement";

const App = () => {
  return (
    <Canvas>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={`/${default_language}`} replace={true} />}
        />
        {languagesList.map(({ code_a2 }) => {
          return (
            <>
              <Route
                path={`/${code_a2}`}
                element={
                  <LanguageLayout languageToSet={code_a2}>
                    <Home />
                  </LanguageLayout>
                }
              />
              <Route
                path={`/${code_a2}/categories`}
                element={
                  <LanguageLayout languageToSet={code_a2}>
                    <Categories />
                  </LanguageLayout>
                }
              />
              <Route
                path={`/${code_a2}/category/:id/:name`}
                element={
                  <LanguageLayout languageToSet={code_a2}>
                    <VacanciesList />
                  </LanguageLayout>
                }
              />
              <Route
                path={`/${code_a2}/vacancy/:id`}
                element={
                  <LanguageLayout languageToSet={code_a2}>
                    <SingleVacancy />
                  </LanguageLayout>
                }
              />
            </>
          );
        })}
        {languagesList.map(({ code_a2 }) => {
          return (
            <>
              <Route
                path={`/categories/${code_a2}`}
                element={<RedirectElement />}
              />
              <Route
                path={`/category/:id/:name/${code_a2}`}
                element={<RedirectElement />}
              />
              <Route
                path={`/vacancy/:id/${code_a2}`}
                element={<RedirectElement />}
              />
            </>
          );
        })}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookie" element={<Cookie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Canvas>
  );
};

export { App };
