import React from 'react';

const Services = () => {
  return (
    <div className="container my-5">
      <h2>Our Services</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="/images/flight.jpeg" className="card-img-top" alt="Service 1" />
            <div className="card-body">
              <h5 className="card-title">Flight Booking</h5>
              <p className="card-text">We offer the best flight booking options to ensure a smooth and comfortable journey.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/images/hotel.jpeg" className="card-img-top" alt="Service 2" />
            <div className="card-body">
              <h5 className="card-title">Hotel Reservations</h5>
              <p className="card-text">Stay at top-rated hotels with our exclusive reservation services.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/images/Travel.jpeg" className="card-img-top" alt="Service 3" />
            <div className="card-body">
              <h5 className="card-title">Tour Packages</h5>
              <p className="card-text">Explore our curated tour packages for an unforgettable travel experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
