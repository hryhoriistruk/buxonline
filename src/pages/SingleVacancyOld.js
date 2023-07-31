import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { HiChevronRight } from 'react-icons/hi2'

import land from '../data/land'
import vacancy from '../data/vacancy'

function SingleVacancy() {
  const { id } = useParams()
  const selectedVacancy = vacancy[0].ru.list.find((el) => el.id === Number(id))

  if (!selectedVacancy) {
    return <div>Вакансия не найдена</div>
  }

  return (
    <>
      <h3 className="title-part mx-3">
        <Link to={`/categories/${selectedVacancy.category}`} className='c-blue'>{selectedVacancy.category} <HiChevronRight /> </Link>{selectedVacancy.title}
      </h3>
      <div className="row">
        <div className='col-lg-7 px-4 m-4 ma'>
          <div className="s-20"></div>
          <h3 className="title-desc c-dark my-3">{selectedVacancy.title}</h3>
          <p className="c-dark">
            <strong>{land[0].ru.vacancy.salary}: {'$'}{selectedVacancy.salary[0]}K - {'$'}{selectedVacancy.salary[1]}K - {selectedVacancy.salary[2]}</strong>
          </p>
          <p className="title-desc c-dark my-3">{selectedVacancy.text}</p>
          <div className="s-10"></div>
          <Link to={selectedVacancy.link[1]} className='button'>{selectedVacancy.link[2]}</Link>
        </div>
      </div>
      <div className="s-100"></div>
    </>
  )
}

export {SingleVacancy}
