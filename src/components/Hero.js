import React from 'react'

import land from '../data/land'

import hero from '../assets/svg/home/hero.svg'

function Hero() {
  return (
    <div className="row">
      <div className="col-lg-6 flex aic">
        <div>
        <h1 className="title-intro">{land[0].ru.hero.title}</h1>
        <div className="s-20"></div>
        <h3 className="title-intro desc">{land[0].ru.hero.description}</h3>
        <div className="s-30"></div>
        <a href='#resume' className='button'>{land[0].ru.nav.button}</a>
        </div>
      </div>
      <div className="col-lg-6 flex jcc aic"><img src={hero} alt={land[0].ru.hero.title} /></div>
    </div>
  )
}

export {Hero}
