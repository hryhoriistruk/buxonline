import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import land from '../data/land'

function Vacancies() {
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
    <Slider {...settings}>
    {land[0].ru.vacancy.content.map((el) => (
      <div className='px-4' key={el.id}>
        <h3 className="title-part mini c-blue">{el.title}</h3>
        <p className="c-dark">
          <strong>Salary: {'$'}{el.salary[0]}K - {'$'}{el.salary[0]}K - {el.salary[2]}</strong>
        </p>
        <div className="w-80">
          <p className="c-dark my-4 h-10">{el.text}</p>
        </div>
        <div className="s-10"></div>
        <Link to={el.link[1]} className='button'>{el.link[0]}</Link>
      </div>
    ))}
    </Slider>
    <div className="s-100"></div>
    </>
  )
}

export { Vacancies }
