import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

import land from '../data/land'

import Logo from '../logo.svg'

function Nav() {

  return (
    <Navbar className='nav-top py-3'>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="40"
            height="40"
            alt="Buxonline"
            className='logo-img'
          />
          <span className="px-1"></span>
          <Navbar.Text class='pl-2 mt-2 title-logo'>Buxonline</Navbar.Text>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Link to={land[0].ru.nav.link[1]} className='mx-4 c-dark upp'>{land[0].ru.nav.link[0]}</Link>
          <Link to={land[0].ru.nav.button[1]} className='button'>{land[0].ru.nav.button[0]}</Link>
        </Navbar.Collapse>
    </Navbar>
  )
}
export {Nav}
