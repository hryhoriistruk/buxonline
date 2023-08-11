import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/custom.sass";

import { Home } from "./pages/Home";
import { Privacy } from "./pages/Privacy";
import { Cookie } from "./pages/Cookie";
import { NotFound } from "./pages/NotFound";

import { Categories } from "./pages/Categories";
import { VacanciesList } from "./pages/VacanciesList";
import { SingleVacancy } from "./pages/SingleVacancy";

import { Canvas } from "./components/Canvas";

const App = () => {
  return (
    <Canvas>
      <Routes>
        <Route path="/" element={<Navigate to="/uk" replace={true} />} />
        <Route path="/:language" element={<Home />} />
        <Route path="/categories/:language" element={<Categories />} />
        <Route
          path="/category/:id/:name/:language"
          element={<VacanciesList />}
        />
        <Route path="/vacancy/:id/:language" element={<SingleVacancy />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookie" element={<Cookie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Canvas>
  );
};

export { App };
