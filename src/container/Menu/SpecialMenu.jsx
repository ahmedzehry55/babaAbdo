import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      {/* creeps  */}
      <div className="app__specialMenu-menu_creeps  flex__center">
        <p className="app__specialMenu-menu_heading">كريبات</p>
        <div className="app__specialMenu_menu_items">
          {data.creeps.map((creeps, index) => (
            <MenuItem key={creeps.title + index} title={creeps.title} price={creeps.price}  />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.creeps} alt="creeps__img" />
      </div>
     {/* sory  */}
      <div className="app__specialMenu-menu_sory  flex__center">
        <p className="app__specialMenu-menu_heading">السوري</p>
        <div className="app__specialMenu_menu_items">
          {data.sory.map((sory, index) => (
            <MenuItem key={sory.title + index} title={sory.title} price={sory.price}  />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.sory} alt="sory__img" />
      </div>

       {/* koshry  */}
       <div className="app__specialMenu-menu_koshry flex__center">
        <p className="app__specialMenu-menu_heading">كشري</p>
        <div className="app__specialMenu_menu_items">
          {data.koshry.map((koshry, index) => (
            <MenuItem key={koshry.title + index} title={koshry.title} price={koshry.price}  />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.koshry} alt="koshry__img" />
      </div>
    
     {/* sorybox  */}
      <div className="app__specialMenu-menu_sorybox  flex__center">
        <p className="app__specialMenu-menu_heading">وجبات سوري</p>
        <div className="app__specialMenu_menu_items">
          {data.soryBox.map((soryBox, index) => (
            <MenuItem key={soryBox.title + index} title={soryBox.title} price={soryBox.price}  />
          ))}
        </div>
      </div>
      
     {/* twagen   */}
      <div className="app__specialMenu-menu_twgen  flex__center">
        <p className="app__specialMenu-menu_heading">طواجن</p>
        <div className="app__specialMenu_menu_items">
          {data.twagen.map((twagen, index) => (
            <MenuItem key={twagen.title + index} title={twagen.title} price={twagen.price}  />
          ))}
        </div>
      </div>
    </div>  
   

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">المزيد</button>
    </div>
  </div>
);

export default SpecialMenu;
