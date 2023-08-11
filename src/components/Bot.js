import React from 'react'
import { Link } from 'react-router-dom'

import bpic from '../assets/svg/home/bot.svg'


function Bot({ apiData }) {

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
          <Link to='https://t.me/buxonline' className='button'>{content.bot_team}</Link>
        </div>
        <div className="col-lg-6 m-tc py-4">
          <img src={bpic} width={320} alt={content.bot_team} />
        </div>
      </div>
    </>
  )
}

export {Bot}
