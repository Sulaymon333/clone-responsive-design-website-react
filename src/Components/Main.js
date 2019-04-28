import React from 'react';

import FeatureCards from './FeatureCards';
import RecentWorkCards from './RecentWorkCards';
import TestimonialCards from './TestimonialCards';
import CallToAction from './CallToAction';

import featuresInfo from '../data/features-info';
import recentWorks from '../data/recent-works';
import testimonials from '../data/testimonials';

const Main = () => {
  return (
    <main>
      <FeatureCards featuresInfo={featuresInfo} />
      <div className="border-bg container">
        <h2>Recent work</h2>
      </div>
      <RecentWorkCards recentWorks={recentWorks} />
      <div className="hr-bg container">
        <div className="border-bg testimonial-hr">
          <h2>Testimonials</h2>
        </div>
        <div className="border-bg development-hr">
          <h2>development</h2>
        </div>
      </div>
      <TestimonialCards testimonials={testimonials} />
      <section className="contact-us-section">
        <CallToAction textOne="Get in touch with us " textTwo="Now!" btnText="Contact us" />
      </section>
    </main>
  );
};

export default Main;
