import React from 'react'
import {Link, useParams} from 'react-router-dom'

import land from '../data/land'
import cats from '../data/cats'
import vacancy from '../data/vacancy'

function VacanciesList() {
  const {id} = useParams()
  return (
    <>
      <div className="s-40"></div>
      <h3 className="title-part mx-3">
        <Link to='/categories' className='c-blue'>{cats[0].ru.page[1]}: </Link>{id}
      </h3>
      <div className="s-50"></div>
      <div className="row">
        {vacancy[0].ru.list.map((el) =>  (
          id === el.category ?
          <div className='col-lg-4 px-4' key={el.id}>
            <h4 className="c-blue">{el.title}</h4>
            <p className="c-dark">
              <strong>{land[0].ru.vacancy.salary}: {'$'}{el.salary[0]}K - {'$'}{el.salary[1]}K - {el.salary[2]}</strong>
            </p>
            <p className="c-dark my-3">{el.text}</p>
            <div className="s-10"></div>
            <Link to={el.link[1]} className='button'>{el.link[0]}</Link>
          </div> : ''
        ))}
      </div>
      <div className="s-100"></div>
      <div className="s-100"></div>
    </>
  )
}

export {VacanciesList}
