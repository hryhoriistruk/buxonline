import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

import { HiChevronRight } from 'react-icons/hi2'

//import land from '../data/land'
import cats from '../data/cats'
//import vacancy from '../data/vacancy'

function VacanciesList() {
  const {name} = useParams()

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Создаем функцию, которая будет выполнять запрос к эндпоинту
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-dev.buxonline.org/api/v1/vacancy/list/?lang=uk')
        setData(response.data) // Сохраняем ответ в состояние "data"
        setLoading(false) // Завершаем загрузку данных
      } catch (error) {
        console.error('Ошибка при запросе:', error)
        setLoading(false) // Завершаем загрузку данных в случае ошибки
      }
    }

    fetchData() // Вызываем функцию для выполнения запроса при монтировании компонента
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h3>TEST</h3>
      <div className="s-40"></div>
      <h3 className="title-part mx-3">
        <Link to='/categories' className='c-blue'>{cats[0].ru.page[1]} <HiChevronRight /> </Link>{name}
      </h3>
      <div className="s-50"></div>
      <div className="row">
        {data.results.map((el) =>  (

          <div className='col-lg-4 px-4 my-4' key={el.id}>
            <h4 className="c-blue">{el.title ? el.title : el.category}</h4>
            {/* <p className="c-dark">
              <strong>{land[0].ru.vacancy.salary}: {'$'}{el.salary[0]}K - {'$'}{el.salary[1]}K - {el.salary[2]}</strong>
            </p> */}
            <p className="c-dark my-3">{el.text.length > 200 ? el.text.substring(0,200) + '...' : el.text }</p>
            <div className="s-10"></div>
              <Link to={`/vacancy/${el.id}`} className='button'>Переглянути</Link>
          </div>
        ))}
      </div>
      <div className="s-100"></div>
      <div className="s-100"></div>
    </>
  )
}

export {VacanciesList}
