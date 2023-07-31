import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import axios from 'axios'

function SingleVacancy() {
  const { id } = useParams()

  const [vacancy, setVacancy] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api-dev.buxonline.org/api/v1/vacancy/${id}/?lang=uk`)
        setVacancy(response.data)
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
      <h3 className="title-part mx-3">{vacancy.title}</h3>
      <div className="row">
        <div className='col-lg-7 px-4 m-4 ma'>
          <div className="s-20"></div>
          <p className="title-desc c-dark my-3">{vacancy.text}</p>
          <div className="s-10"></div>
          <Link to={'https://job.buxonline.org/'} className='button'>{'Вiдправити резюме'}</Link>
        </div>
      </div>
      <div className="s-100"></div>
    </>
  )
}

export { SingleVacancy }
