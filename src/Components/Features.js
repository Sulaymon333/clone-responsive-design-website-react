import React from 'react';

const Features = () => {
  return (
    <section className="features">
      <div className="container features-boxes boxes">
        <div className="box-4-col box-1">
          <div className="icons">
            <i className="fas fa-mobile-alt" />
          </div>
          <h3 className="feature-title">
            <span className="inline-heading h3 no-italic">Superbly </span>
            responsive
          </h3>
          <p className="feature-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem asperiores cumque modi, eveniet repellat ab
            temporibus eum tempora minus error...
          </p>
          <button className="btn blue feature-button">Read more</button>
        </div>
        <div className="box-4-col box-2">
          <div className="icons">
            <i className="fas fa-desktop" />
          </div>
          <h3 className="feature-title">
            <span className="inline-heading h3 no-italic">Squeeky</span> clean
          </h3>
          <p className="feature-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem asperiores cumque modi, eveniet repellat ab
            temporibus eum tempora minus error...
          </p>
          <button className="btn blue feature-button">Read more</button>
        </div>
        <div className="box-4-col box-3">
          <div className="icons">
            <i className="fas fa-laptop" />
          </div>
          <h3 className="feature-title">
            <span className="inline-heading h3 no-italic">Multi</span> purpose
          </h3>
          <p className="feature-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem asperiores cumque modi, eveniet repellat ab
            temporibus eum tempora minus error...
          </p>
          <button className="btn blue feature-button">Read more</button>
        </div>
        <div className="box-4-col box-4">
          <div className="icons">
            <i className="fas fa-sync-alt" />
          </div>
          <h3 className="feature-title">
            <span className="inline-heading h3 no-italic">Highly</span> Flexible
          </h3>
          <p className="feature-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem asperiores cumque modi, eveniet repellat ab
            temporibus eum tempora minus error...
          </p>
          <button className="btn blue feature-button ">Read more</button>
        </div>
      </div>
    </section>
  );
};

export default Features;
