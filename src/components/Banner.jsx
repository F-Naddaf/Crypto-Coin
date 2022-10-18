import React from 'react';
import bannerLogo from '../images/banner/banner-logo.png';
import '../style/Banner.css';
import Carousel from './Carousel';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="container-top">
        <div className="banner-details">
          <img className="Banner-logo" src={bannerLogo} alt="Logo" />
          <div className="paragraph-container">
            <p className="paragraph">
              Get All Info Regarding Your Favorite Crypto Currency
            </p>
          </div>
        </div>
      </div>
      <div className="container-bottom">
        <div className="moved-coins-container">
          <p className="moved-coins">
            THE MOST <span className="coin-number">8</span> COINS MOVED IN THE LAST
            24h
          </p>
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default Banner;
