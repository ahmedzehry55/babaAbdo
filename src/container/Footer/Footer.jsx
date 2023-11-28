import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">01002376188</p>
        <p className="p__opensans">01004843395</p>
        <p className="p__opensans">01094878093</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.babaAbdo} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Ahmed Zehry . All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
