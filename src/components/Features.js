import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function Features() {

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
    <div className='features'>
      <div className="s-30"></div>
      <div className="tc"></div>
      <div className="s-40"></div>
      <h3 className="title-part w-80 ma">{content.feat_title}</h3>
      <div className="s-40"></div>
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-3">
          <h3 className='flex aic'>
            <span className='feat-circle'>1</span>
            <span className='title-part mini feat'>{content.feat_cta}</span>
          </h3>
        </div>
        <div className="col-lg-4">
          <h3 className='flex aic'>
            <span className='feat-circle'>2</span>
            <span className='title-part mini feat'>{content.feat_find}</span>
          </h3>
        </div>
      </div>
      <div className="s-30"></div>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-3">
          <h3 className='flex aic'>
            <span className='feat-circle'>3</span>
            <span className='title-part mini feat'>{content.feat_time}</span>
          </h3>
        </div>
        <div className="col-lg-3">
          <h3 className='flex aic'>
            <span className='feat-circle'>4</span>
            <span className='title-part mini feat'>{content.feat_law}</span>
          </h3>
        </div>
      </div>
      <div className="s-30"></div>
      <div className="row">
        <div className="col-lg-5"></div>
        <div className="col-lg-3">
          <h3 className='flex aic'>
            <span className='feat-circle'>5</span>
            <span className='title-part mini feat'>{content.feat_happy}</span>
          </h3>
        </div>
      </div>
      <div className="s-80"></div>
    </div>
  )
}

export {Features}
