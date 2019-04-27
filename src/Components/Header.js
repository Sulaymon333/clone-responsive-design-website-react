import React from 'react';
import '../CSS/header.css';
import HeaderImage from '../assets/Header-img.png';

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
              <span className="inline-heading h1">Powerful Simple</span> with a
              <span className="inline-heading h1">Squeeky clean</span>
              design.
            </h1>
            <p>Find out how you can offer quick and powerful solutions to your customers now!</p>
            <button className="btn blue">Learn more</button>
          </div>
        </div>
        <div className="action-box get-started">
          <h2>
            Create a <span className="inline-heading h2">powerful</span> solutions now!
          </h2>
          <button className="btn grey">Get started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
