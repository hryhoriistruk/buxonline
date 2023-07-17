import React from 'react'
import {Link} from 'react-router-dom'

import cats from '../data/cats'

function Categories() {

  return (
    <>
      <div className="s-70"></div>
      <h3 className="title-part mx-3">{cats[0].ru.page[0]}</h3>
      <div className="s-50"></div>
      <div className="w-100 tc">
        {cats[0].ru.data.map((el) => (
          <Link to={`/categories/${el.role}`} className='button cat m-1' key={el.id}>{el.role}</Link>
        ))}
      </div>
      <div className="s-100"></div>
      <div className="s-100"></div>
    </>
  )
}

export {Categories}
