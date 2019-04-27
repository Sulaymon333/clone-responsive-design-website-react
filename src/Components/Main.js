import React from 'react';
import '../CSS/features.css';
import '../CSS/recent-works.css';
import '../CSS/testimonial-development.css';
import TestimonyDevelopment from './TestimonialDevelopment';
import Features from './Features';
import RecentWork from './RecentWorks';

const Main = () => {
  return (
    <main>
      <Features />
      <div className="border-bg container">
        <h2>Recent work</h2>
      </div>
      <RecentWork />
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
        <div className="action-box contact-us container">
          <h2>
            Get in touch with us <span className="inline-heading h2">Now!</span>
          </h2>
          <button className="btn grey">Contact us</button>
        </div>
      </section>
    </main>
  );
};

export default Main;
