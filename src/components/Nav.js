import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import { LangMenu } from './elements/LangMenu'
import land from '../data/land'
import lang from '../data/lang'
import Logo from '../logo.svg'

function Nav() {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'uk')

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const currentLanguage = lang.find((el) => el.code === language)

  return (
    <Navbar className="nav-top py-3">
      <Link to={`/${language}`} onClick={() => setLanguage(language)}>
        <img src={Logo} width="40" height="40" alt="Buxonline" className="logo-img" />
        <span className="px-1"></span>
        <span className="pl-2 mt-2 title-logo">Buxonline</span>
      </Link>
      <Navbar.Toggle />
      {currentLanguage ? (
        <Navbar.Collapse className="justify-content-end">
          <Link onClick={() => setLanguage(language)} to={`/categories/${language}`} className="mx-4 c-dark upp title-menu-link">
            {currentLanguage.menu[0]}
          </Link>
          <Link to={`/${language}`} className="mx-4 c-dark upp title-menu-link">
            {currentLanguage.menu[1]}
          </Link>
          <a href={land[0].ru.nav.button[1]} className="button nav-button m-hide" target="blank">
            {currentLanguage.menu[2]}
          </a>
        </Navbar.Collapse>
      ) : null}
      <div className="mx-3"></div>
      <LangMenu setLanguage={setLanguage} />
    </Navbar>
  )
}

export { Nav }
