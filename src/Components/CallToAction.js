import React from 'react';

const CallToAction = props => {
  return (
    <div className="action-box get-started">
      <h2>
        {props.textOne} <span className="inline-heading h2">{props.textTwo}</span> {props.textThree}
      </h2>
      <button className="btn grey">{props.btnText}</button>
    </div>
  );
};

export default CallToAction;
