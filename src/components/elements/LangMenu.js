import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LangMenu = ({ setLanguage }) => {
  const [languages, setLanguages] = useState([]);
  const [current, setCurrent] = useState('');
  const [short, setShort] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-dev.buxonline.org/api/v1/language/list/');
        setLanguages(response.data);
        const storedLanguage = localStorage.getItem('language') || 'uk';
        const currentLanguage = window.location.pathname.split('/')[1] || storedLanguage;
        setLanguage(currentLanguage);
        setCurrent(currentLanguage);
      } catch (error) {
        console.error('Error fetching language data:', error);
      }
    };

    fetchData();
  }, [setLanguage]);

  useEffect(() => {
    const selectedLanguage = languages.find((item) => item.code_a2 === current);
    if (selectedLanguage && selectedLanguage.code_a2) {
      setShort(selectedLanguage.code_a2);
    }
  }, [current, languages]);

  const handleLanguageChange = (code) => {
    setCurrent(code);
    setLanguage(code);
    localStorage.setItem('language', code);
    const currentUrl = window.location.pathname;
    const updatedUrl = updateLanguageParam(currentUrl, code);
    navigate(updatedUrl);
  };

  const updateLanguageParam = (url, newLanguage) => {
    const urlSegments = url.split('/').filter(Boolean);
    const languageIndex = urlSegments.findIndex((segment) => languages.map((item) => item.code_a2).includes(segment));

    if (languageIndex !== -1) {
      urlSegments[languageIndex] = newLanguage;
    } else {
      urlSegments.push(newLanguage);
    }

    return `/${urlSegments.join('/')}`;
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="light">
          {current && short && (
            <>
              <img
                src={require(`../../assets/svg/flags/4x3/${short}.svg`)}
                alt={'pic'}
                width={18}
                style={{ marginTop: -1.5, display: 'inline-block' }}
              />{' '}
              <small>{short.toUpperCase()}</small>
            </>
          )}
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-scroll">
          <div className="scroll-wrapper">
            {languages.map((item) => (
              <Dropdown.Item key={item.id} onClick={() => handleLanguageChange(item.code_a2)} data-key={item.id}>
                {item.code_a2 && (
                  <img
                    src={require(`../../assets/svg/flags/4x3/${item.code_a2}.svg`)}
                    width={18}
                    alt={'pic'}
                    className="pb-1 mx-1"
                  />
                )}
                <small>{item.name}</small>
              </Dropdown.Item>
            ))}
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export { LangMenu };




// import React, { useState, useEffect } from 'react';
// import { Dropdown } from 'react-bootstrap';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const LangMenu = ({ setLanguage }) => {
//   const [languages, setLanguages] = useState([]);
//   const [current, setCurrent] = useState('');
//   const [short, setShort] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api-dev.buxonline.org/api/v1/language/list/');
//         setLanguages(response.data);
//         const storedLanguage = localStorage.getItem('language') || 'uk';
//         const currentLanguage = window.location.pathname.split('/')[1] || storedLanguage;
//         setLanguage(currentLanguage);
//         setCurrent(currentLanguage);
//       } catch (error) {
//         console.error('Error fetching language data:', error);
//       }
//     };

//     fetchData();
//   }, [setLanguage]);

//   useEffect(() => {
//     const selectedLanguage = languages.find((item) => item.code_a2 === current);
//     if (selectedLanguage) {
//       setShort(selectedLanguage.code_a2);
//     }
//   }, [current, languages]);

//   const handleLanguageChange = (code) => {
//     setCurrent(code);
//     setLanguage(code);
//     localStorage.setItem('language', code);
//     const currentUrl = window.location.pathname;
//     const updatedUrl = updateLanguageParam(currentUrl, code);
//     navigate(updatedUrl);
//   };

//   const updateLanguageParam = (url, newLanguage) => {
//     const urlSegments = url.split('/').filter(Boolean);
//     const languageIndex = urlSegments.findIndex((segment) => languages.map((item) => item.code_a2).includes(segment));

//     if (languageIndex !== -1) {
//       urlSegments[languageIndex] = newLanguage;
//     } else {
//       urlSegments.push(newLanguage);
//     }

//     return `/${urlSegments.join('/')}`;
//   };

//   return (
//     <>
//       <Dropdown>
//         <Dropdown.Toggle variant="light">
//           {current && (
//             <>
//               <img
//                 src={require(`../../assets/svg/flags/4x3/${short}.svg`)}
//                 alt={'pic'}
//                 width={18}
//                 style={{ marginTop: -1.5, display: 'inline-block' }}
//               />{' '}
//               <small>{short.toUpperCase()}</small>
//             </>
//           )}
//         </Dropdown.Toggle>
//         <Dropdown.Menu className="dropdown-scroll">
//           <div className="scroll-wrapper">
//             {languages.map((item) => (
//               <Dropdown.Item key={item.id} onClick={() => handleLanguageChange(item.code_a2)}>
//                 <img
//                   src={require(`../../assets/svg/flags/4x3/${item.code_a2}.svg`)}
//                   width={18}
//                   alt={'pic'}
//                   className="pb-1 mx-1"
//                 /> <small>{item.name}</small>
//               </Dropdown.Item>
//             ))}
//           </div>
//         </Dropdown.Menu>
//       </Dropdown>
//     </>
//   );
// };

// export { LangMenu };













// import React, { useState, useEffect } from 'react'
// import { Dropdown } from 'react-bootstrap'
// import lang from '../../data/lang'
// import { useNavigate } from 'react-router-dom'

// const LangMenu = ({ setLanguage }) => {
//   const UA = require('../../assets/svg/flags/4x3/uk.svg').default
//   const ukLanguage = lang.find((item) => item.code === 'uk')
//   const [current, setCurrent] = useState(ukLanguage ? ukLanguage.pic : UA)
//   const [short, setShort] = useState(ukLanguage ? ukLanguage.code : 'uk')
//   const navigate = useNavigate()

//   useEffect(() => {
//     const storedLanguage = localStorage.getItem('language') || 'uk'
//     const currentLanguage = window.location.pathname.split('/')[1] || storedLanguage
//     setLanguage(currentLanguage)
//   }, [setLanguage])

//   useEffect(() => {
//     const selectedLanguage = lang.find((item) => item.code === short)
//     if (selectedLanguage) {
//       setCurrent(selectedLanguage.pic)
//     }
//   }, [short])

//   const handleLanguageChange = (code) => {
//     const selectedLanguage = lang.find((item) => item.code === code)
//     if (selectedLanguage) {
//       setCurrent(selectedLanguage.pic)
//       setShort(selectedLanguage.code)
//       setLanguage(selectedLanguage.code)
//       localStorage.setItem('language', selectedLanguage.code)
//       const currentUrl = window.location.pathname
//       const updatedUrl = updateLanguageParam(currentUrl, selectedLanguage.code)
//       navigate(updatedUrl)
//     }
//   }

//   const updateLanguageParam = (url, newLanguage) => {
//     const urlSegments = url.split('/').filter(Boolean)
//     const languageIndex = urlSegments.findIndex((segment) => lang.map((item) => item.code).includes(segment))

//     if (languageIndex !== -1) {
//       urlSegments[languageIndex] = newLanguage
//     } else {
//       urlSegments.push(newLanguage)
//     }

//     return `/${urlSegments.join('/')}`
//   }

//   return (
//     <>
//       <Dropdown>
//         <Dropdown.Toggle variant="light">
//           <img src={current} width={18} alt={'flag'} className="mx-1" style={{ marginTop: -1.5, display: 'inline-block' }} />{' '}
//           <small> {short.toUpperCase()} </small>
//         </Dropdown.Toggle>
//         <Dropdown.Menu className="dropdown-scroll">
//           <div className="scroll-wrapper">
//             {lang.map((item) => (
//               <Dropdown.Item key={item.code} onClick={() => handleLanguageChange(item.code)} className={short === item.code ? 'active' : ''}>
//                 <img src={item.pic} width={18} alt={item.code} className="pb-1 mx-1" /> <small>{item.name}</small>
//               </Dropdown.Item>
//             ))}
//           </div>
//         </Dropdown.Menu>
//       </Dropdown>
//     </>
//   )
// }

// export { LangMenu }
