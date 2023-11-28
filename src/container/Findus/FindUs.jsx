import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './findUs.css'
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="address">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>العنوان</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
الطريق العام مقابل مطعم ابناء المحلة الجنينة منية النصر</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>زورونا</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
