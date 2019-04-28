import React from 'react';

import '../CSS/header.css';

import HeaderImage from '../assets/Header-img.png';

import CallToAction from './CallToAction';

const Header = () => {
  return (
    <header className="main-header" id="top">
      <div className="container hero-items">
        <div className="hero">
          <div className="hero-image">
            <img src={HeaderImage} alt="main header " />
          </div>
          <div className="hero-description">
            <h1>
              <span className="inline-heading h1">Powerful Simple </span>with a
              <span className="inline-heading h1"> Squeeky clean </span>
              design.
            </h1>
            <p>Find out how you can offer quick and powerful solutions to your customers now!</p>
            <button className="btn blue">Learn more</button>
          </div>
        </div>
      </div>
      <CallToAction textOne="Create a" textTwo="Powerful" textThree={'Solutions Now!'} btnText="Get started" />
    </header>
  );
};

export default Header;
