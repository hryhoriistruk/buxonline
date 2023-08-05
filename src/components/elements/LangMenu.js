import React, { useState, useEffect } from 'react'
import { Dropdown } from 'react-bootstrap'
import lang from '../../data/lang'
import { useNavigate } from 'react-router-dom'

const LangMenu = ({ setLanguage }) => {
  const UA = require('../../assets/svg/flags/4x3/ua.svg').default
  const ukLanguage = lang.find((item) => item.code === 'uk')
  const [current, setCurrent] = useState(ukLanguage ? ukLanguage.pic : UA)
  const [short, setShort] = useState(ukLanguage ? ukLanguage.code : 'ua')
  const navigate = useNavigate()

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || 'uk'
    const currentLanguage = window.location.pathname.split('/')[1] || storedLanguage
    setLanguage(currentLanguage)
  }, [setLanguage])

  useEffect(() => {
    const selectedLanguage = lang.find((item) => item.code === short)
    if (selectedLanguage) {
      setCurrent(selectedLanguage.pic)
    }
  }, [short])

  const handleLanguageChange = (code) => {
    const selectedLanguage = lang.find((item) => item.code === code)
    if (selectedLanguage) {
      setCurrent(selectedLanguage.pic)
      setShort(selectedLanguage.code)
      setLanguage(selectedLanguage.code)
      localStorage.setItem('language', selectedLanguage.code)
      const currentUrl = window.location.pathname
      const updatedUrl = updateLanguageParam(currentUrl, selectedLanguage.code)
      navigate(updatedUrl)
    }
  }

  const updateLanguageParam = (url, newLanguage) => {
    const urlSegments = url.split('/').filter(Boolean)
    const languageIndex = urlSegments.findIndex((segment) => lang.map((item) => item.code).includes(segment))

    if (languageIndex !== -1) {
      urlSegments[languageIndex] = newLanguage
    } else {
      urlSegments.push(newLanguage)
    }

    return `/${urlSegments.join('/')}`
  }

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="light">
          <img src={current} width={18} alt={'flag'} className="mx-1" style={{ marginTop: -1.5, display: 'inline-block' }} />{' '}
          <small> {short.toUpperCase()} </small>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-scroll">
          <div className="scroll-wrapper">
            {lang.map((item) => (
              <Dropdown.Item key={item.code} onClick={() => handleLanguageChange(item.code)} className={short === item.code ? 'active' : ''}>
                <img src={item.pic} width={18} alt={item.code} className="pb-1 mx-1" /> <small>{item.name}</small>
              </Dropdown.Item>
            ))}
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export { LangMenu }
