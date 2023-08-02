import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import { HiChevronRight } from 'react-icons/hi2'
import cats from '../data/cats'

function VacanciesList() {
  const { id, name } = useParams()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api-dev.buxonline.org/api/v1/vacancy/list/?lang=uk&category=${id}`)
        setData(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Ошибка при запросе:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [id])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="s-40"></div>
      <h3 className="title-part mx-3">
        <Link to="/categories" className="c-blue">
          {cats[0].ru.page[1]} <HiChevronRight />{' '}
        </Link>
        {name}
      </h3>
      <div className="s-50"></div>
      <div className="row">
        {data.results.map((el) =>  (
          <div className='col-lg-4 px-4 my-4' key={el.id}>
            <h4 className="c-blue">{el.title ? el.title : el.role}</h4>
            <p className="c-dark my-3">{el.text.length > 200 ? el.text.substring(0,200) + '...' : el.text }</p>
            <div className="s-10"></div>
              <Link to={`/vacancy/${el.id}`} className='button'>{el.meta.more}</Link>
          </div>
        ))}
      </div>
      <div className="s-100"></div>
      <div className="s-100"></div>
    </>
  )
}

export { VacanciesList }
