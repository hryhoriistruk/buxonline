import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import './styles/custom.sass';

import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Cookie } from './pages/Cookie';
import { NotFound } from './pages/NotFound';

import { Categories } from './pages/Categories';
import { VacanciesList } from './pages/VacanciesList';
import { SingleVacancy } from './pages/SingleVacancy';
import { defaultLanguage, languagesList } from './constants';
import { Canvas } from './components/Canvas';
import LanguageLayout from './components/LanguageLayout';
import RedirectElement from './components/RedirectElement';

const App: React.FC = () => {
  return (
    <Canvas>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={`/${defaultLanguage}`} replace={true} />}
        />
        {languagesList.map(({ codeA2 }) => {
          return (
            <>
              <Route
                path={`/${codeA2}`}
                element={
                  <LanguageLayout languageToSet={codeA2}>
                    <Home />
                  </LanguageLayout>
                }
              />
              <Route
                path={`/${codeA2}/categories`}
                element={
                  <LanguageLayout languageToSet={codeA2}>
                    <Categories />
                  </LanguageLayout>
                }
              />
              <Route
                path={`/${codeA2}/category/:id/:name`}
                element={
                  <LanguageLayout languageToSet={codeA2}>
                    <VacanciesList />
                  </LanguageLayout>
                }
              />
              <Route
                path={`/${codeA2}/vacancy/:id`}
                element={
                  <LanguageLayout languageToSet={codeA2}>
                    <SingleVacancy />
                  </LanguageLayout>
                }
              />
            </>
          );
        })}
        {languagesList.map(({ codeA2 }) => {
          return (
            <>
              <Route
                path={`/categories/${codeA2}`}
                element={<RedirectElement />}
              />
              <Route
                path={`/category/:id/:name/${codeA2}`}
                element={<RedirectElement />}
              />
              <Route
                path={`/vacancy/:id/${codeA2}`}
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
