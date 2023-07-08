import React from 'react'

import land from '../data/land'

function About() {
  return (
    <>
    <div className="row">
      <div className="col-lg-6">
        <div className="s-80"></div>
        <h4 className="title-part">{land[0].ru.about.title}</h4>
        <div className="s-20"></div>
        <p className="title-intro desc">{land[0].ru.about.description}</p>
        <div className="s-30"></div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <h3 className="title-intro big">5</h3>
          <h4 className="title-part mini">{land[0].ru.about.subtitle_1}</h4>
          <div className="s-20"></div>
          <p className="title-intro desc">{land[0].ru.about.text_1}</p>
        </div>
        <div className="col-lg-6">
          <h3 className="title-intro big">B1</h3>
          <h4 className="title-part mini">{land[0].ru.about.subtitle_2}</h4>
          <div className="s-20"></div>
          <p className="title-intro desc">{land[0].ru.about.text_2}</p>
        </div>
      </div>
    </div>
    <div className="s-40"></div>
    <div className="tc"><a href='#resume' className='button'>{land[0].ru.nav.button}</a></div>
    </>
  )
}

export {About}
