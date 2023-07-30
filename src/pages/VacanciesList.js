import React from 'react'
import {Link, useParams} from 'react-router-dom'

import { HiChevronRight } from 'react-icons/hi2'

import land from '../data/land'
import cats from '../data/cats'
import vacancy from '../data/vacancy'

function VacanciesList() {
  const {name} = useParams()
  return (
    <>
      <h3>TEST</h3>
      <div className="s-40"></div>
      <h3 className="title-part mx-3">
        <Link to='/categories' className='c-blue'>{cats[0].ru.page[1]} <HiChevronRight /> </Link>{name}
      </h3>
      <div className="s-50"></div>
      <div className="row">
        {vacancy[0].ru.list.map((el) =>  (
          name === el.category ?
          <div className='col-lg-4 px-4 my-4' key={el.id}>
            <h4 className="c-blue">{el.title ? el.title : el.category}</h4>
            <p className="c-dark">
              <strong>{land[0].ru.vacancy.salary}: {'$'}{el.salary[0]}K - {'$'}{el.salary[1]}K - {el.salary[2]}</strong>
            </p>
            <p className="c-dark my-3">{el.text.length > 200 ? el.text.substring(0,200) + '...' : el.text }</p>
            <div className="s-10"></div>
            {el.link && el.link.length > 0 && (
              <Link to={`/vacancy/${el.id}`} className='button'>{el.link[0]}</Link>
            )}
          </div> : ''
        ))}
      </div>
      <div className="s-100"></div>
      <div className="s-100"></div>
    </>
  )
}

export {VacanciesList}
