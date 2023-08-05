import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import './styles/custom.sass'

import { Footer } from './components/Footer'
import { Nav } from './components/Nav'

import { Home } from './pages/Home'
import { Privacy } from './pages/Privacy'
import { Cookie } from './pages/Cookie'
import { NotFound } from './pages/NotFound'

import support from './assets/svg/home/standwith.svg'
import { Categories } from './pages/Categories'
import { VacanciesList } from './pages/VacanciesList'
import { SingleVacancy } from './pages/SingleVacancy'

const App = () => {
  return (
    <>
      <img src={support} alt={'We stand with Ukraine'} className='support' />
      <Container>
        <Nav />
      </Container>
      <Container>
        <Routes>
          <Route path="/:language" element={<Home />} />
          <Route path="/categories/:language" element={<Categories />} />
          <Route path="/category/:id/:name/:language" element={<VacanciesList />} />
          <Route path="/vacancy/:id/:language" element={<SingleVacancy />} />
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
