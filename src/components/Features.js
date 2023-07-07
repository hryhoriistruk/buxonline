import React from 'react'


import land from '../data/land'

function Features() {
  return (
    <div className='features'>
      <div className="s-30"></div>
      <div className="tc"></div>
      <div className="s-40"></div>
      <h3 className="title-part w-80 ma">{land[0].ru.feat[0]}</h3>
      <div className="s-40"></div>
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-3">
          <h3 className='flex aic'>
            <span className='feat-circle'>1</span>
            <span className='title-part mini feat'>{land[0].ru.feat[1]}</span>
          </h3>
        </div>
        <div className="col-lg-4">
          <h3 className='flex aic'>
            <span className='feat-circle'>2</span>
            <span className='title-part mini feat'>{land[0].ru.feat[2]}</span>
          </h3>
        </div>
      </div>
      <div className="s-30"></div>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-3">
          <h3 className='flex aic'>
            <span className='feat-circle'>3</span>
            <span className='title-part mini feat'>{land[0].ru.feat[3]}</span>
          </h3>
        </div>
        <div className="col-lg-3">
          <h3 className='flex aic'>
            <span className='feat-circle'>4</span>
            <span className='title-part mini feat'>{land[0].ru.feat[4]}</span>
          </h3>
        </div>
      </div>
      <div className="s-30"></div>
      <div className="row">
        <div className="col-lg-5"></div>
        <div className="col-lg-3">
          <h3 className='flex aic'>
            <span className='feat-circle'>5</span>
            <span className='title-part mini feat'>{land[0].ru.feat[5]}</span>
          </h3>
        </div>
      </div>
      <div className="s-80"></div>
    </div>
  )
}

export {Features}
