import React from 'react';

class ReviewButton extends React.Component {
  constructor(props) {
    super(props);
    
    this.toggleReviews = this.toggleReviews.bind(this);
    this.state = {isReviewsShown: false}
  }
  
  toggleReviews() {
    this.setState({isReviewsShown: !this.state.isReviewsShown});
    this.props.toggleReviews();
  }
  
  render() {
    return (
      <button className="btn btn-default" onClick={this.toggleReviews}>
        { this.state.isReviewsShown ? 'Hide' : 'Show' } reviews
      </button>
    );
  }
}

export default ReviewButton
