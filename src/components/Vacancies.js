import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import axios from 'axios'

import land from '../data/land'

function Vacancies() {

  const { language } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api-dev.buxonline.org/api/v1/vacancy/list/?lang=${language}`)
        setData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [language])

  var settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <>
      <div className="s-70"></div>
      <h3 className="title-part mx-3">{land[0].ru.vacancy.title}</h3>
      <div className="s-50"></div>
      {data ? (
        <Slider {...settings}>
          {data.results.map((el) => (
            <div className="col-lg-4 px-4 my-4" key={el.id}>
              <h4 className="c-blue">{el.title}</h4>
              <p className="c-dark my-3">
                {el.text.length > 200
                  ? el.text.substring(0, 200) + "..."
                  : el.text}
              </p>
              <div className="s-10"></div>
              <Link to={`/vacancy/${el.id}/${language}`} className="button">
                {el.meta.more}
              </Link>
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading...</p>
      )}
      <div className="s-100"></div>
    </>
  )

}

export { Vacancies }
