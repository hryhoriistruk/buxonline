import React from 'react'

import {Nav} from '../components/Nav'
import {Hero} from '../components/Hero'
import {About} from '../components/About'
import {Reviews} from '../components/Reviews'
import {Steps} from '../components/Steps'
import {Want} from '../components/Want'
import {Bot} from '../components/Bot'
import {Table} from '../components/Table'
import {Form} from '../components/Form'
import {Faq} from '../components/Faq'
import {Footer} from '../components/Footer'

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About  />
      <Reviews />
      <Steps  />
      <Want />
      <Bot />
      <Table  />
      <Form />
      <Faq />
      <Footer />
    </>
  )
}

export {Home}
