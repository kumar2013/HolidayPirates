import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewButton from './ReviewButton';

class Hotel extends React.Component {
  constructor(props) {
    super(props);
    
    this.toggleReviews = this.toggleReviews.bind(this);
    this.state = {showReviews: false};
  }
  
  toggleReviews() {
    this.setState({showReviews: !this.state.showReviews});
  }
  
  render() {
    const hotel      = this.props.hotel;
    const startDate  = new Date(hotel.date_start).toLocaleDateString('de-DE', {
                                 day: '2-digit', month: '2-digit', year: 'numeric'});
    const endDate    = new Date(hotel.date_end).toLocaleDateString('de-DE', {
                                 day: '2-digit', month: '2-digit', year: 'numeric'});
    
    let description  = hotel.description;
    description      = description.length > 269 ? description.substring(0, 269) + ' . . .' : description
    
    
    return(
      <article className="col-md-12 col-xs-12">
        <div className="hp-hotel">
          <div className="hp-container">
            <div className="col-md-4 col-sm-12 col-xs-12">
              <img className="img-responsive" src={hotel.images[0]}/>
            </div>
            <div className="col-md-8 col-sm-12 col-xs-12 hp-content">
              <article className="hp-hotel-details">
                <div className="hp-top-banner">
                  <div className="col-md-9 col-sm-12 col-xs-12">
                    <h3>{hotel.name}</h3>
                    <p>{hotel.city} - {hotel.country}</p>
                  </div>
                  <div className="col-md-3 col-sm-12 col-xs-12">
                    <Stars stars={hotel.stars}/>
                  </div>
                </div>
                <div className="col-md-12 hp-description">
                  <p>Hotel description: {description}</p>
                </div>
                <div className="col-md-12 hp-bottom">
                  <div className="col-md-5 col-sm-12 col-xs-12">
                    <ReviewButton toggleReviews={this.toggleReviews} />
                  </div>
                  <div className="col-md-7 col-sm-12 col-xs-12 hp-price-wrapper">
                    <p className="hp-price">{hotel.price} &euro;</p>
                    <p className="hp-date">{startDate} - {endDate}</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="clearfix"></div>
          
          <ReactCSSTransitionGroup
            transitionName="reviews-transition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
              { this.state.showReviews ? <ReviewList hotelId={hotel.id} /> : null }
          </ReactCSSTransitionGroup>
        </div>
      </article>
    );
  }
}

export default Hotel
