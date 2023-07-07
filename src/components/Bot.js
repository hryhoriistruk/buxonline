import React from 'react'
import { Link } from 'react-router-dom'

import bpic from '../assets/svg/home/bot.svg'

import land from '../data/land'

function Bot() {
  return (
    <>
      <h3 className="title-part w-50 ma">{land[0].ru.bot[0]}</h3>
      <div className="s-40"></div>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-4">
          <div className="s-10"></div>
          <h3 className="title-part mini">{land[0].ru.bot[1]}</h3>
          <p>{land[0].ru.bot[2]}</p>
          <h3 className="title-part mini">{land[0].ru.bot[3]}</h3>
          <p>{land[0].ru.bot[4]}</p>
          <div className="s-20"></div>
          <Link to={land[0].ru.footer.bot[1]} className='button'>{land[0].ru.footer.bot[0]}</Link>
        </div>
        <div className="col-lg-6">
          <img src={bpic} width={320} alt={land[0].ru.bot[0]} />
        </div>
      </div>
    </>
  )
}

export {Bot}
