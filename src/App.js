import React from "react"
import { Routes, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import "./styles/custom.sass"

import { Footer } from "./components/Footer"
import { Nav } from "./components/Nav"

import { Home } from "./pages/Home"
// import { Policy } from "./pages/Policy"
// import { Cookie } from "./pages/Cookie"
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
          {/* <Route path="/policy" element={<Policy />} />
          <Route path="/cookie" element={<Cookie />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export { App }
