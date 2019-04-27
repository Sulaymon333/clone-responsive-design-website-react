import React from 'react';
import '../CSS/features.css';
import '../CSS/recent-works.css';
import '../CSS/testimonial-development.css';
import TestimonyDevelopment from './TestimonialDevelopment';
import FeatureCard from './FeatureCard';
import RecentWorkCards from './RecentWorkCards';
import RecentWork from './RecentWorks';
import featuresInfo from '../features-info';
import CallToAction from './CallToAction';

const Main = () => {
  return (
    <main>
      <FeatureCard featuresInfo={featuresInfo} />
      <div className="border-bg container">
        <h2>Recent work</h2>
      </div>
      {/* <RecentWork /> */}
      <RecentWorkCards />
      <div className="hr-bg container">
        <div className="border-bg testimonial-hr">
          <h2>Testimonials</h2>
        </div>
        <div className="border-bg development-hr">
          <h2>development</h2>
        </div>
      </div>
      <TestimonyDevelopment />
      <section className="contact-us-section">
        <CallToAction textOne="Get in touch with us " textTwo="Now!" btnText="Contact us" />
      </section>
    </main>
  );
};

export default Main;
