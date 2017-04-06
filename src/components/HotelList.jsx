import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Hotel from './Hotel';

class HotelList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const hotelList = this.props.hotels;
    let hotels = hotelList.map((hotel) => <Hotel key={hotel.id.toString()} hotel={hotel}/>);
    
    return (
      <section className="hp-hotels">
      <ReactCSSTransitionGroup
        transitionName="hotels-transition"
        transitionAppear={true} 
        transitionEnterTimeout={3000}
        transitionAppearTimeout={3000}
        transitionLeave={false}>
        {hotels}
      </ReactCSSTransitionGroup>
      </section>
    );
  }
}

export default HotelList
