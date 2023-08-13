import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import bpic from '../assets/svg/home/bot.svg'


function Bot({ apiData }) {

  const { language } = useParams()

  const [apiEx,setApiEx] = useState(null)

  useEffect(() => {
    const fetchDataEx = async () => {
      try {
        const response = await axios.get(`https://api-dev.buxonline.org/api/v1/language/list/`)
        setApiEx(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchDataEx()
  }, [])

  const content = apiData || {}
  return (
    <>
      <h3 className="title-part w-50 ma">{content.bot_team}</h3>
      <div className="s-40"></div>
      <div className="row">
        <div className="col-lg-2 m-hide"></div>
        <div className="col-lg-4 m-tc">
          <div className="s-10"></div>
          <h3 className="title-part mini">{content.bot_qa}</h3>
          <p>{content.bot_chat}</p>
          <h3 className="title-part mini">{content.bot_att}</h3>
          <p>{content.bot_lng}</p>
          <div className="s-20"></div>
          {apiEx && apiEx.map(el => el.code_a2 === language ? <a href='https://t.me/buxonline' className='button'>{el.page_meta.footer_bot}</a> : <></>)}
        </div>
        <div className="col-lg-6 m-tc py-4">
          <img src={bpic} width={320} alt={content.bot_team} />
        </div>
      </div>
    </>
  )
}

export {Bot}
