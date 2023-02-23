import React from 'react';
import './Landing.css';
import {Link} from "react-router-dom";

function LandingPage() {
  const handleMenuClick = (e) => {
    // handle menu button click here
  };

  const handleContactClick = (e) => {
    // handle contact button click here
  };

  return (
    <div className="landing-page">
        <div className="banner">
     <h2>Order your favorite cakes now and get 10% off!</h2>
      </div>
        <nav className="menu-bar">
        <div className="logo">
          <img src="https://via.placeholder.com/50" alt="Sweet Treats Logo" />
          <span>Sweet Treats</span>
        </div>
        <ul className="menu-list">
          <li><button onClick={handleMenuClick}>Home</button></li>
            <Link to={`/about`}>
          <li><button onClick={handleMenuClick}>About</button></li>
             </Link>
          <li><button onClick={handleMenuClick}>Gallery</button></li>
           <Link to={`/contact`}>
          <li><button onClick={handleMenuClick}>Contact</button></li>
           </Link>
        </ul>
      </nav>
        <h1>Welcome to Sweet Treats</h1>
      <p className="description">We offer a wide variety of delicious cakes for any occasion.</p>
      <div className="cake-list">
        <div className="cake">
          <img src="https://via.placeholder.com/150" alt="Cake 1" />
          <h2>Chocolate Fudge Cake</h2>
          <p>A rich chocolate cake with layers of fudge filling and chocolate frosting.</p>
           <p className="cake-price">$19.99</p>
          <button>Order Now</button>
        </div>
        <div className="cake">
          <img src="https://via.placeholder.com/150" alt="Cake 2" />
          <h2>Vanilla Bean Cake</h2>
          <p>A classic vanilla cake with vanilla buttercream frosting.</p>
           <p className="cake-price">$19.99</p>
          <button>Order Now</button>
        </div>
        <div className="cake">
          <img src="https://via.placeholder.com/150" alt="Cake 3" />
          <h2>Red Velvet Cake</h2>
          <p>A moist red velvet cake with cream cheese frosting.</p>
           <p className="cake-price">$19.99</p>
          <button>Order Now</button>
        </div>
      </div>
      <p className="contact-text">Don't see the cake you're looking for? Contact us and we'll do our best to accommodate your request!</p>
      <button className="contact-button" onClick={handleContactClick}>Contact Us</button>
    </div>
  );
}

export default LandingPage;
