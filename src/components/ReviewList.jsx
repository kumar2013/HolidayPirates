import React from 'react';

import Review from './Review';


class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {reviews: []};
  }
  
  loadReviews() {
    let url = 'https://fake-hotel-api.herokuapp.com/api/reviews?hotel_id=' + this.props.hotelId;
    
    fetch(url)
    .then((res) => res.json())
    .then((result) => this.setState({reviews: result}));
  }
  
  render() {
    let reviews = this.state.reviews.map((review, index) => <Review key={index.toString()} review={review} />);
                                           
    return (
      <div className="col-md-12 hp-reviews">
        {reviews.length ? reviews : 'No reviews yet!'}
      </div>
    );
  }
  
  componentDidMount() {
    this.loadReviews();
  }
}

export default ReviewList