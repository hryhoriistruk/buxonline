import React from 'react'

import p1 from '../assets/svg/steps/route_1.svg'
import p2 from '../assets/svg/steps/route_2.svg'
import p3 from '../assets/svg/steps/route_3.svg'
import p5 from '../assets/svg/steps/route_5.svg'
import p6 from '../assets/svg/steps/route_6.svg'
import p8 from '../assets/svg/steps/route_8.svg'

import land from '../data/land'

function Steps() {
  return (
    <>
      <div className="row">
        <div className="col-12 steps">
          <div className="s-80"></div>
          <h4 className="title-part">{land[0].ru.steps.title}</h4>
          <div className="s-20"></div>
          <div className="row">
            <div className="col-lg-5">
              <div className="flex jcfe">
                <div className="left-steps w-75">
                  <div className="s-80"></div>
                  <h4 className="title-part mini">
                    <span>{land[0].ru.steps.step[0].title}</span>
                    <em className='bg-blue c-white px-1'>{land[0].ru.steps.step[0].time} {land[0].ru.steps.step[0].label}</em>
                  </h4>
                  <p className='w-70'>{land[0].ru.steps.step[0].text}</p>
                  <div className="s-20"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-steps">
                <img src={p1} alt={land[0].ru.steps.step[0].title} />
              </div>
            </div>
          </div>
          <div className="s-50 m-hide"></div>
          <div className="row">
            <div className="col-lg-6">
              <div className="flex jcfe">
                <div className="right-steps">
                  <img src={p2} alt={land[0].ru.steps.step[1].title} />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="flex jcc">
                <div className="right-steps w-75">
                  <div className="s-100"></div>
                  <h4 className="title-part mini">
                    <span>{land[0].ru.steps.step[1].title}</span>
                    <em className='bg-blue c-white px-1'>{land[0].ru.steps.step[1].time} {land[0].ru.steps.step[1].label}</em>
                  </h4>
                  <p className='w-70'>{land[0].ru.steps.step[1].text}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="s-90"></div>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="flex jcfe aifs">
                <div className="left-steps w-75">
                  <div className="s-80"></div>
                  <h4 className="title-part mini">
                    <span>{land[0].ru.steps.step[2].title}</span>
                    <em className='bg-blue c-white px-1'>{land[0].ru.steps.step[2].time} {land[0].ru.steps.step[2].label}</em>
                  </h4>
                  <p className='w-70'>{land[0].ru.steps.step[2].text}</p>
                  <div className="s-20"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="s-80"></div>
              <div className="right-steps">
                <img src={p3} alt={land[0].ru.steps.step[2].title} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-11">
              <div className="flex jcc w-100">
                <div className="right-steps w-50">
                  <div className="s-20"></div>
                  <h4 className="title-part mini">
                    <span>{land[0].ru.steps.step[3].title}</span>
                    <em className='bg-blue c-white px-1'>{land[0].ru.steps.step[3].time} {land[0].ru.steps.step[3].label}</em>
                  </h4>
                  <p className='w-70'>{land[0].ru.steps.step[3].text}</p>
                  <div className="s-40"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 m-hide">
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-7">
                  <div className="flex jcfe">
                    <div className="left-steps w-75">
                      <div className="s-20"></div>
                      <h4 className="title-part mini">
                        <span>{land[0].ru.steps.step[4].title}</span>
                        <em className='bg-blue c-white px-1'>{land[0].ru.steps.step[4].time} {land[0].ru.steps.step[4].label}</em>
                      </h4>
                      <p className='w-70'>{land[0].ru.steps.step[4].text}</p>
                      <div className="s-20"></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="right-steps">
                    <img src={p5} alt={land[0].ru.steps.step[4].title} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="flex jcc">
                <div className="right-steps">
                  <div className="s-40"></div>
                  <img src={p6} alt={land[0].ru.steps.step[5].title} />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="flex jcc">
                <div className="right-steps">
                  <div className="s-60"></div>
                  <h4 className="title-part mini">
                    <span>{land[0].ru.steps.step[5].title}</span>
                    <em className='bg-blue c-white px-1'>{land[0].ru.steps.step[5].time} {land[0].ru.steps.step[5].label}</em>
                  </h4>
                  <p className='w-70'>{land[0].ru.steps.step[5].text}</p>
                  <div className="s-60"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-11">
                  <div className="flex jcc w-100">
                    <div className="right-steps w-50">
                      <div className="s-60"></div>
                      <h4 className="title-part mini">
                        <span>{land[0].ru.steps.step[6].title}</span>
                        <em className='bg-blue c-white px-1'>{land[0].ru.steps.step[6].time} {land[0].ru.steps.step[6].label}</em>
                      </h4>
                      <p className='w-70'>{land[0].ru.steps.step[6].text}</p>
                      <div className="s-20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 m-hide"></div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-7">
                  <div className="flex jcfe aifs">
                    <div className="left-steps w-75">
                      <div className="s-50"></div>
                      <h4 className="title-part mini">
                        <span>{land[0].ru.steps.step[7].title}</span>
                        <em className='bg-blue c-white px-1'>{land[0].ru.steps.step[7].time} {land[0].ru.steps.step[7].label}</em>
                      </h4>
                      <p className='w-70'>{land[0].ru.steps.step[7].text}</p>
                      <div className="s-20"></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="s-20"></div>
                  <div className="right-steps m-tc">
                    <img src={p8} alt={land[0].ru.steps.step[7].title} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="s-40"></div>
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 m-tc">
              <a href='#resume' className='button'>{land[0].ru.nav.button}</a>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export {Steps}
