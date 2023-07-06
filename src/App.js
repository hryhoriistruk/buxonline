import React from "react"
import { Routes, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import "./styles/custom.sass"

import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  )
}

export { App }
