import React from 'react'

import land from '../data/land'

function Form() {
  return (
    <>
      <div className="s-80"></div>
      <h4 className="title-part w-60 ma">{land[0].ru.nav.button[0]}</h4>
      <div className="s-30"></div>
      <div className="card w-60 ma h-100"></div>
      <div className="s-80"></div>
    </>
  )
}

export {Form}
