import React from 'react'

import land from '../data/land'

function Form() {
  return (
    <div id="resume">
      <div className="s-80"></div>
      <h4 className="title-part w-60 ma">{land[0].ru.nav.button}</h4>
      <div className="s-30"></div>
      <div className="card w-60 ma h-100"></div>
      <div className="s-80"></div>
    </div>
  )
}

export {Form}
