import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import land from '../data/land';
import man from '../assets/svg/home/man.svg';

interface Props {}

function NotFound(): JSX.Element {
  return (
    <>
      <div className="s-100"></div>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-5">
          <Helmet>
            <title>{land[0].ru.err.subtitle}</title>
          </Helmet>
          <h2 className="title-part c-dark">{land[0].ru.err.subtitle}</h2>
          <div className="s-10"></div>
          <h3 className="title-intro mini c-blue">{land[0].ru.err.title}</h3>
          <div className="s-10"></div>
          <p>{land[0].ru.err.text}</p>
          <div className="s-10"></div>
          <Link to="/" className="button">{land[0].ru.err.link}</Link>
        </div>
        <div className="col-lg-5">
          <img src={man} alt={land[0].ru.err.subtitle} />
        </div>
      </div>
      <div className="s-100"></div>
    </>
  );
}

export default NotFound;