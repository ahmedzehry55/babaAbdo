import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-content flex__center">
    {/* left side container */}
      <div className="app__aboutus-content_leftSide">
      
      <p className="p__opensans" >  بابا عبده طول عمره فى الموضوع ده مبيهزرش لان كرشك عزيز علينا ومننا ميزعلش <br/>😍بابا عبده هيدلع كرشك بأطعم وأجمل ساندوتشات <br/>❤ ولو عاوز تزود شوية دلع عليك وعلى احلى كريبات <br/>😍 يعنى من الاخر بابا عبده الوحيد اللى هيدلع الكرش عالاخر
      <br/> كفته - فراخ مشويه - كبده - سجق - حواوشي - كريبات - شاورما </p>
        <button type="button" className="custom__button">المزيد</button>
      </div>

    {/* knife container */}
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>
      
    {/* right side container */}
      <div className="app__aboutus-content_rightSide">
        <h1 className="headtext__cormorant">عنا</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">احنا بتووع الأكل الأصلى 😍 كريب - سورى - حواوشى - سندويتشات 🍔🍟🌭 أحنا يهمنا جودة الاكل🥳أحنا بنحب ندلع كرشك 😋 نسى الدنيا ومتزعلش وإسمع منى وبلاش قفش بابا عبده هو الوحيد اللى يقدر يدلع الكرش 😍❤</p>
       
      </div>
    </div>
  </div>
);

export default AboutUs;
