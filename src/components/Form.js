import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

import pic from '../assets/svg/home/resume.svg'

function Form() {

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
    <div id="resume">
      <div className="w-80 ma">
        <div className="s-80"></div>
        <div className="row">
          <div className="col-lg-2 m-hide"></div>
          <div className="col-lg-4">
            <h4 className="title-part">{content.btn_text}</h4>
            <div className="s-20"></div>
            <p>{content.form}</p>
            <div className="s-20"></div>
            <a href='https://job.buxonline.org/' className='button w-70 ma' target='blank'>{content.btn_text}</a>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <div className="s-30"></div>
            <img src={pic} alt={content.btn_text} />
          </div>
        </div>
        <div className="s-100"></div>
        <div className="s-100"></div>
      </div>
    </div>
  )
}

export {Form}
