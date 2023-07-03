import React from "react"
import { Routes, Route } from "react-router-dom"
import "./styles/custom.sass"

import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export { App }
