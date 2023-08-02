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
        const response = await axios.get(`https://api-dev.buxonline.org/api/v1/vacancy/${id}`)
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

  const paragraphs = vacancy.text.split("\n")



  return (
    <>
      <div className="s-40"></div>
      <h3 className="title-part mx-3">{vacancy.title}</h3>
      <div className="row">
        <div className='col-lg-11 px-4 m-4 ma'>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="title-desc c-dark">{paragraph}</p>
            ))}
          <div className="s-60"></div>
          <div className="w-100 tc">
            <Link to={'https://job.buxonline.org/'} className='button'>{vacancy.meta.apply_for_job}</Link>
          </div>
        </div>
      </div>
      <div className="s-100"></div>
    </>
  )
}

export { SingleVacancy }
