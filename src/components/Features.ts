import React from 'react';

interface FeaturesProps {
  apiData: {
    feat_title: string;
    feat_cta: string;
    feat_find: string;
    feat_time: string;
    feat_law: string;
    feat_happy: string;
  } | null;
}

const Features: React.FC<FeaturesProps> = ({ apiData }) => {
  const content = apiData || {};

  return (
    <div className='features'>
      <div className="s-30"></div>
      <div className="tc"></div>
      <div className="s-40"></div>
      <h3 className="title-part w-80 ma">{content.feat_title}</h3>
      <div className="s-40"></div>
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-3">
          <h3 className='flex aic'>
            <span className='feat-circle'>1</span>
            <span className='title-part mini feat'>{content.feat_cta}</span>
          </h3>
        </div>
        <div className="col-lg-4">
          <h3 className='flex aic'>
            <span className='feat-circle'>2</span>
            <span className='title-part mini feat'>{content.feat_find}</span>
          </h3>
        </div>
      </div>
      <div className="s-30"></div>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-3">
          <h3 className='flex aic'>
            <span className='feat-circle'>3</span>
            <span className='title-part mini feat'>{content.feat_time}</span>
          </h3>
        </div>
        <div className="col-lg-3">
          <h3 className='flex aic'>
            <span className='feat-circle'>4</span>
            <span className='title-part mini feat'>{content.feat_law}</span>
          </h3>
        </div>
      </div>
      <div className="s-30"></div>
      <div className="row">
        <div className="col-lg-5"></div>
        <div className="col-lg-3">
          <h3 className='flex aic'>
            <span className='feat-circle'>5</span>
            <span className='title-part mini feat'>{content.feat_happy}</span>
          </h3>
        </div>
      </div>
      <div className="s-80"></div>
    </div>
  );
};

export { Features };
