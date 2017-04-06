import React from 'react';

export default function Stars(props) {
  let stars = [];
  const starsReceived = props.stars;
  const starsRemaining = 5 - starsReceived;

  for (let i=0; i<starsReceived; i++) {
    stars.push(
      <span key={i+1} className="glyphicon glyphicon-star" aria-hidden="true"></span>
    );
  }

  for (let j=0; j<starsRemaining; j++) {
    stars.push(
      <span key={j+starsReceived+1} className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
    );
  }

  return (
    <div className="hp-stars">
      {stars}
    </div>
  );
}