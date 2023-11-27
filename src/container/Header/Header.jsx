import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="من أول قطمة هتاخدك لعالم تاني" />
      <h1 className="app__header-h1">أحنا بتووع الأكل الأصلي</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>جعان وكرشك مش مبسوط سد جوعك بالطعم الأصلى المظبوط 
      بابا عبده عنده الطعم الاصلى اللى بتدور عليه 
      الطعم اللى يخلى كرشك فى حالة انبساط 
      وكل اللى بتتمناه عندنا وفرناه 
      علشان خاطر الكرش يبقى فريش 
      دلع كرشك مع  البابا عبده  </p>
      <button type="button" className="custom__button">المزيد</button>
    </div>

  </div>
);

export default Header;
