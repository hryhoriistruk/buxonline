import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import land from '../data/land'

import Logo from '../logo.svg'


function Footer() {

  let date =  new Date().getFullYear()

  return (
    <footer className='bg-light'>
      <Container>
        <div className="s-40"></div>
        <div className="row">
          <div className="col-lg-4">
            <div className="flex">
              <img src={Logo} width="36" height="36" alt="Buxonline" className='logo-img' />
              <span className="px-1"></span>
              <p class='pl-2 mt-2 title-logo'>Buxonline</p>
            </div>
            <div className="s-10"></div>
            <p className="title-parts mini c-light my-0">{land[0].ru.footer.address[0]}</p>
            <p className="title-parts mini c-light my-0">{land[0].ru.footer.address[1]}</p>
            <p className="title-parts mini c-light my-4">{land[0].ru.footer.address[2]}</p>
          </div>
          <div className="col-lg-4">
            <div className="s-10"></div>
            <Link to={land[0].ru.footer.bot[1]} className='title-parts mini c-blue'>{land[0].ru.footer.bot[0]}</Link>
            <div className="s-10"></div>
            <Link to={land[0].ru.nav.button[1]} className='title-parts mini c-blue'>{land[0].ru.nav.button[0]}</Link>
          </div>
          <div className="col-lg-4">
            <div className="s-10"></div>
            <Link to={land[0].ru.footer.privacy[1]} className='title-parts mini c-blue'>{land[0].ru.footer.privacy[0]}</Link>
            <div className="s-10"></div>
            <Link to={land[0].ru.footer.cookie[1]} className='title-parts mini c-blue'>{land[0].ru.footer.cookie[0]}</Link>
            <div className="s-50"></div>
            <p className="title-parts mini c-light">Buxonline@{date} - {land[0].ru.footer.rights}</p>
          </div>
        </div>
        <div className="s-40"></div>
      </Container>
    </footer>
  )
}

export {Footer}
