import React from 'react'
import { Link, useParams } from 'react-router-dom'

// import land from '../data/land'

const SingleVacancy = () => {
  //const {category,title, salary, text} = useParams()
  const {category,title, text} = useParams()

  return (
    <>
   <div className="s-40"></div>
      {
          <>
            <h3 className="title-part mx-3">
              <Link to='/categories' className='c-blue'>{category}: </Link>{title}
            </h3>
            <div className="s-50"></div>
            <div className="row">
                <div className='col-lg-4 px-4 my-4'>
                  <h4 className="c-blue">{title ? title : category}</h4>
                  {/* <p className="c-dark">
                    <strong>{land[0].ru.vacancy.salary}: {'$'}{salary[0]}K - {'$'}{salary[1]}K - {salary[2]}</strong>
                  </p> */}
                  <p className="c-dark my-3">{text}</p>
                  <div className="s-10"></div>
                </div>
            </div>
          </>
      }
      <div className="s-100"></div>
      <div className="s-100"></div>
    </>
  )
}

export {SingleVacancy}
