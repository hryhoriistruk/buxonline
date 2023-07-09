import React from 'react'

import land from '../data/land'

import pic from '../assets/svg/home/resume.svg'

function Form() {
  return (
    <div id="resume">
      <div className="w-80 ma">
        <div className="s-80"></div>
        <div className="row">
          <div className="col-lg-2 m-hide"></div>
          <div className="col-lg-4">
            <h4 className="title-part">{land[0].ru.nav.button}</h4>
            <div className="s-20"></div>
            <p>{land[0].ru.form.text}</p>
            <div className="s-20"></div>
            <a href='#resume' className='button w-70 ma'>{land[0].ru.nav.button}</a>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <div className="s-30"></div>
            <img src={pic} alt={land[0].ru.nav.button} />
          </div>
        </div>
        <div className="s-100"></div>
        <div className="s-100"></div>
      </div>
    </div>
  )
}

export {Form}
