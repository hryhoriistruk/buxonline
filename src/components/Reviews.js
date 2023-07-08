import React from 'react'
import land from '../data/land'

function Reviews() {
  return (
    <>
      <div className="s-80"></div>
      <h2 className="title-part">{land[0].ru.reviews.title}</h2>
      <div className="s-40"></div>
      <div className="row">
        <div className="col-lg-4">
            <img src={land[0].ru.reviews.review[0].photo} alt={land[0].ru.reviews.review[0].name} className="rev w-100 r-8" />
            <div className="s-20"></div>
            <h3 className="title-part mini tc">{land[0].ru.reviews.review[0].name}</h3>
            <p className='tc'><strong>{land[0].ru.reviews.review[0].position}</strong></p>
            <div className="s-20 px-1 ex">{land[0].ru.reviews.review[0].text}</div>
            <p></p>
        </div>
        <div className="col-lg-4">
            <img src={land[0].ru.reviews.review[1].photo} alt={land[0].ru.reviews.review[1].name} className="w-100 r-16" />
            <div className="s-20"></div>
            <h3 className="title-part mini tc">{land[0].ru.reviews.review[1].name}</h3>
            <p className='tc'><strong>{land[0].ru.reviews.review[1].position}</strong></p>
            <div className="s-20 px-1 ex">{land[0].ru.reviews.review[1].text}</div>
            <p></p>
        </div>
        <div className="col-lg-4 tc">
          <div className="r-16 h-70 flex jcc aic bg-light">
            <div>
              <div className="flex jcc aic">
                <img src={land[0].ru.reviews.photos[0]} alt={'user'} className="avatar r-32 oh shadow-xs" />
                <img src={land[0].ru.reviews.photos[1]} alt={'user'} className="avatar r-32 oh shadow-xs" />
                <img src={land[0].ru.reviews.photos[2]} alt={'user'} className="avatar r-32 oh shadow-xs" />
                <div className="avatar r-32 bg-blue c-white">+{land[0].ru.reviews.users}</div>
              </div>
              <div className="s-10"></div>
              <p className='w-60 ma'>{land[0].ru.reviews.text}</p>
              <div className="s-10"></div>
              <a href='#resume' className='button w-70 ma'>{land[0].ru.nav.button}</a>
            </div>
          </div>
        </div>
      </div>
      <div className="s-40"></div>
    </>
  )
}

export {Reviews}
