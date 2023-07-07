import React from 'react'

import {Hero} from '../components/Hero'
import {About} from '../components/About'
import {Reviews} from '../components/Reviews'
import {Steps} from '../components/Steps'
import {Features} from '../components/Features'
import {Bot} from '../components/Bot'
import {Vacancies} from '../components/Vacancies'
import {Form} from '../components/Form'

function Home() {
  return (
    <>
      <Hero />
      <About  />
      <Reviews />
      <Steps  />
      <Features />
      <Bot />
      <Vacancies  />
      <Form />
    </>
  )
}

export {Home}
