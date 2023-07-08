import React from "react"
import { Routes, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import "./styles/custom.sass"

import { Footer } from "./components/Footer"
import { Nav } from "./components/Nav"

import { Home } from "./pages/Home"
import { Privacy } from "./pages/Privacy"
import { Cookie } from "./pages/Cookie"
import { NotFound } from "./pages/NotFound"

const App = () => {
  return (
    <>
      <Container>
        <Nav />
      </Container>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookie" element={<Cookie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export { App }
