import React from 'react';

const TestimonyDevelopment = () => {
  return (
    <section className="container testimonial-development">
      <div className="testimonial-development-boxes boxes">
        <div className="box-3-col box-1">
          <div className="top">
            <h4 className="testimonial-title">John Smith</h4>
            <p className="testimonial-description">
              &ldquo;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi dignissimos illum
              tempora animi. At autem temporibus maxime ullam eos.&rdquo;
            </p>
          </div>
          <div className="bottom">
            <h4 className="testimonial-title">Johh Smith</h4>
            <p className="testimonial-description">
              &ldquo;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi dignissimos illum
              tempora animi. At autem temporibus maxime ullam eos.&rdquo;
            </p>
          </div>
        </div>
        <div className="box-3-col box-2">
          <div className="top">
            <h4 className="testimonial-title">John Smith</h4>
            <p className="testimonial-description">
              &ldquo;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi dignissimos illum
              tempora animi. At autem temporibus maxime ullam eos.&rdquo;
            </p>
          </div>
          <div className="bottom">
            <h4 className="testimonial-title">John Smith</h4>
            <p className="testimonial-description">
              &ldquo;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi dignissimos illum
              tempora animi. At autem temporibus maxime ullam eos.&rdquo;
            </p>
          </div>
        </div>
        <div className="box-3-col box-3 tabs">
          <div className="tab">
            <input name="checkbox-tabs-group" type="radio" id="checkbox-1" className="checkbox-tab" />
            <label htmlFor="checkbox-1">Design</label>
            <div className="content">
              <h4 className="development-title">The Design</h4>
              <p className="development-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi dignissimos illum tempora
                animi. At autem temporibus maxime ullam eos.
                <br />
                <br />
                &ldquo;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi dignissimos illum
                tempora animi. At autem temporibus maxime ullam eos.&rdquo;
              </p>
              <button className="btn blue development-button">Read more</button>
            </div>
          </div>
          <div className="tab">
            <input name="checkbox-tabs-group" type="radio" id="checkbox-2" className="checkbox-tab" />
            <label htmlFor="checkbox-2">Production</label>
            <div className="content">
              <h4 className="development-title">The Production</h4>
              <p className="development-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi dignissimos illum tempora
                animi. At autem temporibus maxime ullam eos.
                <br />
                <br />
                &ldquo;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi dignissimos illum
                tempora animi. At autem temporibus maxime ullam eos.&rdquo;
              </p>
              <button className="btn blue development-button">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TestimonyDevelopment;
