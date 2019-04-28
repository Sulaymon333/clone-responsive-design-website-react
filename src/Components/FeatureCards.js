import React from 'react';
import '../CSS/features.css';

const FeatureCards = ({ featuresInfo }) => {
  const renderedFeatures = featuresInfo.map((featureCard, i) => {
    const { featureIcon, featureTitle, featureDescription } = featureCard;
    const boxNum = `box-4-col box-${i + 1}`;
    return (
      <div className={boxNum} key={featureTitle}>
        <div className="icons">
          <i className={featureIcon} />
        </div>
        <h3 className="feature-title">
          <span className="inline-heading h3 no-italic">{featureTitle.split(' ')[0]} </span>
          {featureTitle.split(' ')[1]}
        </h3>
        <p className="feature-description">{featureDescription}</p>
        <button className="btn blue feature-button">Read more</button>
      </div>
    );
  });

  return (
    <section className="features">
      <div className="container features-boxes boxes">{renderedFeatures}</div>
    </section>
  );
};

export default FeatureCards;
