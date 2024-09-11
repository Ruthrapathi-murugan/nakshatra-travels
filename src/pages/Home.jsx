import React from 'react';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section text-white text-center d-flex align-items-center justify-content-center" 
           style={{ 
             height: '80vh', 
             backgroundColor: 'rgba(0, 0, 0, 0.7)', // Slight overlay on top of background
             backgroundImage: 'url(/images/bg.jpeg)',
             position: 'relative',
             overflow: 'hidden' // Ensure the marquee is clipped correctly
           }}>
        {/* Marquee effect for scrolling car images */}
        <div className="marquee">
          <img src="/images/etios.jpeg" alt="Toyota Etios" />
          <img src="/images/traveller.jpg" alt="Traveller" />
          <img src="/images/suv.jpeg" alt="SUV" />
        </div>

        {/* Hero content */}
        <div className="hero-text" style={{ zIndex: '1' }}>
          <h1 style={{color:"white"}}>Welcome to Nakshatra Travels</h1>
          <p>Your trusted travel partner for unforgettable experiences.</p>
        </div>
      </div>
      {/* <space></space>
      <div>
        <center>
        <h1>Nakshatra Travels in Palani</h1>
        <p>

        </p>
</center>
      </div> */}

      {/* Car Image Gallery Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Our Fleet of Cars</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="/images/etios.jpeg" className="card-img-top" alt="Toyota Etios" />
              <div className="card-body">
                <h5 className="card-title">Toyota Etios</h5>
                <p className="card-text">A reliable sedan perfect for city tours and long trips.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="/images/traveller.jpg" className="card-img-top" alt="Traveller" />
              <div className="card-body">
                <h5 className="card-title">Traveller</h5>
                <p className="card-text">Spacious and comfortable for group travel.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="/images/suv.jpeg" className="card-img-top" alt="SUV" />
              <div className="card-body">
                <h5 className="card-title">Luxury SUV</h5>
                <p className="card-text">Enjoy the ultimate comfort and luxury with our premium SUVs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
