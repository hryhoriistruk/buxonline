import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import { LangMenu } from './elements/LangMenu'
import axios from 'axios'
import Logo from '../logo.svg'

function Nav() {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'uk')
  const [languagesData, setLanguagesData] = useState([])
  const [currentLanguageData, setCurrentLanguageData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-dev.buxonline.org/api/v1/language/list/')
        setLanguagesData(response.data)
        const storedLanguage = localStorage.getItem('language') || 'uk'
        setLanguage(storedLanguage)

        const selectedLanguageData = response.data.find((lang) => lang.code_a2 === storedLanguage)
        setCurrentLanguageData(selectedLanguageData)
      } catch (error) {
        console.error('Error fetching language data:', error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    localStorage.setItem('language', language)
    const selectedLanguageData = languagesData.find((lang) => lang.code_a2 === language)
    setCurrentLanguageData(selectedLanguageData)
  }, [language, languagesData])

  return (
    <Navbar className="nav-top py-3">
      <Link to={`/${language}`}>
        <img src={Logo} width="40" height="40" alt="Buxonline" className="logo-img" />
        <span className="px-1"></span>
        <span className="pl-2 mt-2 title-logo">Buxonline</span>
      </Link>
      <Navbar.Toggle />
      {currentLanguageData ? (
        <Navbar.Collapse className="justify-content-end">
          <Link to={`/categories/${language}`} className="mx-4 c-dark upp title-menu-link">
            {currentLanguageData.page_meta.menu_vacancies}
          </Link>
          <Link to={`/${language}`} className="mx-4 c-dark upp title-menu-link">
            {currentLanguageData.page_meta.menu_for_business}
          </Link>
          <a href={'https://job.buxonline.org/'} className="button nav-button m-hide" target="blank">
            {currentLanguageData.page_meta.menu_send_cv}
          </a>
        </Navbar.Collapse>
      ) : null}
      <div className="mx-3"></div>
      <LangMenu setLanguage={setLanguage} />
    </Navbar>
  )
}

export { Nav }
