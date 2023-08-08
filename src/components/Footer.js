import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Logo from '../logo.svg'

function Footer() {
  let date = new Date().getFullYear()

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
    const selectedLanguageData = languagesData.find((lang) => lang.code_a2 === language);
    setCurrentLanguageData(selectedLanguageData);
  }, [language, languagesData]);

  return (
    <footer className='bg-light'>
      <Container>
        <div className="s-40"></div>
        {currentLanguageData && (
          <div className="row">
            <div className="col-lg-4">
              <Link to='/' className='flex'>
                <img src={Logo} width="36" height="36" alt="Buxonline" className='logo-img' />
                <span className="px-1"></span>
                <p className='pl-2 mt-1 title-logo'>Buxonline</p>
              </Link>
              <p className="title-parts mini c-light mx-2">@{date} - {currentLanguageData.page_meta.footer_rights}</p>
              <div className="s-10"></div>
            </div>
            <div className="col-lg-4">
              <div className="s-10"></div>
              <Link to={currentLanguageData.page_meta.footer_bot} className='title-parts mini c-blue'>{currentLanguageData.page_meta.footer_bot}</Link>
              <div className="s-10"></div>
              <a href={currentLanguageData.page_meta.menu_send_cv} className='title-parts mini c-blue pt-3' target='blank'>{currentLanguageData.page_meta.menu_send_cv}</a>
            </div>
            <div className="col-lg-4">
              <div className="s-10"></div>
              <Link to={currentLanguageData.page_meta.footer_privacy} className='title-parts mini c-blue'>{currentLanguageData.page_meta.footer_privacy}</Link>
              <div className="s-10"></div>
              <Link to={currentLanguageData.page_meta.footer_cookie} className='title-parts mini c-blue pt-3'>{currentLanguageData.page_meta.footer_cookie}</Link>
              <div className="s-50"></div>
            </div>
          </div>
        )}
        <div className="s-40"></div>
      </Container>
    </footer>
  )
}

export { Footer }





// import React from 'react'
// import { Container } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

// import land from '../data/land'

// import Logo from '../logo.svg'


// function Footer() {

//   let date =  new Date().getFullYear()

//   return (
//     <footer className='bg-light'>
//       <Container>
//         <div className="s-40"></div>
//         <div className="row">
//           <div className="col-lg-4">
//             <Link to='/' className='flex'>
//               <img src={Logo} width="36" height="36" alt="Buxonline" className='logo-img' />
//               <span className="px-1"></span>
//               <p className='pl-2 mt-2 title-logo'>Buxonline</p>
//             </Link>
//             <div className="s-10"></div>
//             <p className="title-parts mini c-light my-0">{land[0].ru.hero.title}</p>
//             <div className="s-20"></div>
//             <p className="title-parts mini c-light">Buxonline@{date} - {land[0].ru.footer.rights}</p>
//           </div>
//           <div className="col-lg-4">
//             <div className="s-10"></div>
//             <Link to={land[0].ru.footer.bot[1]} className='title-parts mini c-blue'>{land[0].ru.footer.bot[0]}</Link>
//             <div className="s-10"></div>
//             <a href={land[0].ru.nav.button[1]} className='title-parts mini c-blue' target='blank'>{land[0].ru.nav.button[0]}</a>
//           </div>
//           <div className="col-lg-4">
//             <div className="s-10"></div>
//             <Link to={land[0].ru.footer.privacy[1]} className='title-parts mini c-blue'>{land[0].ru.footer.privacy[0]}</Link>
//             <div className="s-10"></div>
//             <Link to={land[0].ru.footer.cookie[1]} className='title-parts mini c-blue'>{land[0].ru.footer.cookie[0]}</Link>
//             <div className="s-50"></div>
//           </div>
//         </div>
//         <div className="s-40"></div>
//       </Container>
//     </footer>
//   )
// }

// export {Footer}
