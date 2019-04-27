import React from 'react';
import PlaceholderImage from '../assets/img-placeholder.png';

const RecentWork = () => {
  return (
    <section className="container recent-work">
      <div className="recent-work-boxes boxes">
        <div className="box-3-col box-1">
          <div className="recent-work-image">
            <img src={PlaceholderImage} alt="placeholder" />
          </div>
          <h4 className="recent-work-title">Blog Title</h4>
          <p className="recent-work-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, labore soluta sint laborum nam
            obcaecati!
          </p>
        </div>
        <div className="box-3-col box-2">
          <div className="recent-work-image">
            <img src={PlaceholderImage} alt="placeholder" />
          </div>
          <h4 className="recent-work-title">Blog Title</h4>
          <p className="recent-work-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, labore soluta sint laborum nam
            obcaecati!
          </p>
        </div>
        <div className="box-3-col box-3">
          <div className="recent-work-image">
            <img src={PlaceholderImage} alt="placeholder" />
          </div>
          <h4 className="recent-work-title">Blog Title</h4>
          <p className="recent-work-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, labore soluta sint laborum nam
            obcaecati!
          </p>
        </div>
      </div>
    </section>
  );
};
export default RecentWork;
