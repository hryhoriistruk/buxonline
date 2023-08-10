import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

import image from '../assets/svg/home/hero.svg'

function Hero() {

  const { language } = useParams()
  const [content, setContent] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api-dev.buxonline.org/api/v1/landing/${language}/`)
        setContent(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [language])

  return (
    <div className="row">
      <div className="col-lg-6 flex aic">
        <div>
          <h1 className="title-intro">{content.hero_title}</h1>
          <div className="s-20"></div>
          <h3 className="title-intro desc">{content.hero_desc}</h3>
          <div className="s-30"></div>
          <a href='https://job.buxonline.org/' className="button" target="blank">{content.btn_text}</a>
        </div>
      </div>
      <div className="col-lg-6 flex jcc aic">
        <img
          src={image}
          alt={content.hero_title}
        />
      </div>
    </div>
  )
}

export { Hero }
