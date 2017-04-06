import React from 'react';

export default function Review(props) {
  let reviewType = '';
  const review = props.review;

  if (review.positive) {
    reviewType = '+';
  } else {
    reviewType = '-';
  }

  return (
    <article className="row hp-review">
      <div className="col-md-1 col-xs-2">
        <span className="hp-review-type">{reviewType}</span>
      </div>
      <div className="col-md-11 col-xs-10">
        <h4>{review.name}</h4>
        <p>{review.comment}</p>
      </div>
      <span className="hp-hr-line"></span>
    </article>
  );
}
