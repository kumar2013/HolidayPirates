import React from 'react';

import Navbar from './Navbar';
import HotelList from './HotelList';

class Main extends React.Component {
  constructor(props) {
    super(props);
    
    this.loadHotels = this.loadHotels.bind(this);
    this.state = {hotels: [], error: null};
  }
  
  loadHotels() {
    const url = 'https://fake-hotel-api.herokuapp.com/api/hotels';
    
    fetch(url)
    .then(handleErrors)
    .then((res) => res.json())
    .then((result) => this.setState({hotels: result.slice(0,5), error: null}))
    .catch((err) => this.setState({error: err}));
  }
  
  render() {
    return (
      <div>
        <Navbar />
        <section className="container hp-main-page">
          <div className="row">
            <article className="text-center">
              <button className="btn btn-default hp-load-btn" onClick={this.loadHotels}>Load Hotels</button>
            </article>
            {this.state.error ? <ErrorMessage error={this.state.error} /> : <HotelList hotels={this.state.hotels}/>}
          </div>
        </section>
      </div>
    );
  }
}

function ErrorMessage(props) {
  return <div className="hp-error-message"><h4>An error occurred, {props.error.toString()}</h4></div>
}

function handleErrors(res) {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return res;
}

export default Main
