import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const Title = () => {

  const { language } = useParams()
  const [apiData, setApiData] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api-dev.buxonline.org/api/v1/vacancy/list/?lang=${language}`)
        setApiData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [language])

  return (
    <>
      <div className="s-40"></div>
      <h3 className="title-part mx-2">{apiData ? apiData.results[0].meta.categories: ''}</h3>
      <div className="s-20"></div>
    </>
  )
}

export {Title}
