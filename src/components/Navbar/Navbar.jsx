import React , {useState}from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      
      {/* menu section */}
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">الرئيسية</a></li>
        <li className="p__opensans"><a href="#about">عنا</a></li>
        <li className="p__opensans"><a href="#menu">الاصناف</a></li>
        <li className="p__opensans"><a href="#contact">اتصل بنا</a></li>
      </ul>
    
     {/* logo section  */}
      <div className="app__navbar-logo">
        <img src={images.babaAbdo} alt="baba abdo بابا عبدو" />
      </div>

    {/* smallscreen menu section  */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>الرئيسية</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>عنا</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>الاصناف</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>اتصل بنا</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
