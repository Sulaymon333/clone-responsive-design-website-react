import React from 'react';
import FeatureCard from './FeatureCards';

const FeatureCards = ({ featureInfo }) => {
  const featureCards = featureInfo.map((featureCard, i) => (
    <FeatureCard key={'featureCard' + i} featureCard={featureCard} />
  ));
  return <section className="features">{featureCards}</section>;
};

export default FeatureCards;
