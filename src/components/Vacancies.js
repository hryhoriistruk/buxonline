import React, { useState, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import axios from 'axios'

import land from '../data/land'

function Vacancies() {
  const { language } = useParams()
  const [data, setData] = useState(Array(15).fill([]))

  const categories = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = categories.map(async category => {
          const response = await axios.get(
            `https://api-dev.buxonline.org/api/v1/vacancy/list/?category=${category}&lang=${language}&page=2&per_page=1`
          )
          return response.data.results
        })

        const newData = await Promise.all(promises)
        setData(newData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [categories, language])

  if (data.some(categoryData => categoryData.length === 0)) {
    return <p>Loading...</p>
  }

  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <div className="s-70"></div>
      <h3 className="title-part mx-3">{land[0].ru.vacancy.title}</h3>
      <div className="s-50"></div>
      <Slider {...settings}>
        {data.map((categoryData) =>
          categoryData.map(el => (
            <div className="px-4 my-4" key={el.id}>
              <h4 className="c-blue hot-title">{el.title}</h4>
              <p className="c-dark my-3 hot-text">
                {el.text.length > 200 ? el.text.substring(0, 200) + '...' : el.text}
              </p>
              <div className="s-10"></div>
              <a href={`/vacancy/${el.id}/${language}`} className="button">
                {el.meta.more}
              </a>
            </div>
          ))
        )}
      </Slider>
      <div className="s-100"></div>
    </>
  )
}

export {Vacancies}



// import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import Slider from 'react-slick'
// import axios from 'axios'

// import land from '../data/land'

// function Vacancies() {
//   const { language } = useParams()
//   const [data_1, setData_1] = useState(null)
//   const [data_2, setData_2] = useState(null)

//   useEffect(() => {
//     const fetchData_1 = async () => {
//       try {
//         const response = await
//           axios.get(`https://api-dev.buxonline.org/api/v1/vacancy/list/?category=1&lang=${language}&page=2&per_page=1`)
//         setData_1(response.data)
//       } catch (error) {
//         console.error('Error fetching data:', error)
//       }
//     }

//     fetchData_1()
//   }, [language])

//   useEffect(() => {
//     const fetchData_2 = async () => {
//       try {
//         const response = await
//           axios.get(`https://api-dev.buxonline.org/api/v1/vacancy/list/?category=2&lang=${language}&page=2&per_page=1`)
//         setData_2(response.data)
//       } catch (error) {
//         console.error('Error fetching data:', error)
//       }
//     }

//     fetchData_2()
//   }, [language])

//   if (!data_1) {
//     return <p>Loading...</p>
//   }
//   if (!data_2) {
//     return <p>Loading...</p>
//   }

//   const settings = {
//     autoplay: true,
//     autoplaySpeed: 4000,
//     pauseOnHover: true,
//     arrows: false,
//     dots: true,
//     infinite: true,
//     speed: 5000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   }

//   return (
//     <>
//       <div className="s-70"></div>
//       <h3 className="title-part mx-3">{land[0].ru.vacancy.title}</h3>
//       <div className="s-50"></div>
//       <Slider {...settings}>
//         {data_1.results.map(el => (
//           <div className="col-lg-4 px-4 my-4" key={el.id}>
//             <h4 className="c-blue">{el.title}</h4>
//             <p className="c-dark my-3">
//               {el.text.length > 200 ? el.text.substring(0, 200) + '...' : el.text}
//             </p>
//             <div className="s-10"></div>
//             <a href={`/vacancy/${el.id}/${language}`} className="button">
//               {el.meta.more}
//             </a>
//           </div>
//         ))}
//         {data_2.results.map(el => (
//           <div className="col-lg-4 px-4 my-4" key={el.id}>
//             <h4 className="c-blue">{el.title}</h4>
//             <p className="c-dark my-3">
//               {el.text.length > 200 ? el.text.substring(0, 200) + '...' : el.text}
//             </p>
//             <div className="s-10"></div>
//             <a href={`/vacancy/${el.id}/${language}`} className="button">
//               {el.meta.more}
//             </a>
//           </div>
//         ))}
//       </Slider>
//       <div className="s-100"></div>
//     </>
//   )
// }

// export { Vacancies }
