import React from 'react';
import '../CSS/recent-works.css';

const RecentWorkCards = ({ recentWorks }) => {
  const recentWorkList = recentWorks.map((recentWork, i) => {
    const { workImg, workTitle, workDescription } = recentWork;
    const boxNum = `box-3-col box-${i + 1}`;
    return (
      <div className={boxNum} key={workTitle + i}>
        <div className="recent-work-image">
          <img src={workImg} alt="placeholder" />
        </div>
        <h4 className="recent-work-title">{workTitle}</h4>
        <p className="recent-work-description">{workDescription}</p>
      </div>
    );
  });
  return (
    <section className="container recent-work">
      <div className="recent-work-boxes boxes">{recentWorkList}</div>
    </section>
  );
};

export default RecentWorkCards;
