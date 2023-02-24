import React from 'react';
import './Landing.css';
import { Link } from "react-router-dom";
import MenuBar from "../navbar/Navbar";
import cakeImg from "../../images/deva-williamson-sjsG1yrwJxY-unsplash.jpg";
import cakeImgo from "../../images/savannah-rohleder-u57toIf20mg-unsplash(1).jpg";
import cakeImgn from "../../images/samantha-gades-NNHNe3rXcNY-unsplash.jpg";
import cakeImgt from "../../images/hitesh-patel-6t-i3QmvW8Y-unsplash.jpg";
import cakeImgs from "../../images/tuva-mathilde-loland-4rfVL3NNGrA-unsplash.jpg";
import cakeImgf from "../../images/david-holifield-7u_PvjPWLPU-unsplash.jpg";

function LandingPage() {
  const handleContactClick = (e) => {
    // handle contact button click here
  };

  return (
    <div className="landing-page">
        <MenuBar />
        <div className="banner">
        <h2>Order your favorite cakes now and get 10% off!</h2>
      </div>
        <h1>Welcome to Sweet Treats</h1>
      <p className="description">We offer a wide variety of delicious cakes for any occasion.</p>
      <div className="cake-list">
        <div className="cake">
          <img src={cakeImg} alt="Cake 1" />
          <h2>Chocolate Fudge Cake</h2>
          <p>A rich chocolate cake with layers of fudge filling and chocolate frosting.</p>
          <p className="cake-price">$19.99</p>
            <button>Order Now</button>
            </div>
        <div className="cake">
          <img src={cakeImgo} alt="Cake 2 " />
          <h2>Vanilla Bean Cake</h2>
          <p>A classic vanilla cake with vanilla buttercream frosting.</p>
           <p className="cake-price">$19.99</p>
          <button>Order Now</button>
          </div>
          <div className="cake">
          <img src={cakeImgn} alt="Cake 2 " />
          <h2>Sponge Cake</h2>
          <p>A classic vanilla cake with vanilla buttercream frosting.</p>
           <p className="cake-price">$19.99</p>
          <button>Order Now</button>
          </div>
          <div className="cake">
          <img src={cakeImgs} alt="Cake 2 " />
          <h2>Pumpkin Spice Cake</h2>
          <p>A classic vanilla cake with vanilla buttercream frosting.</p>
           <p className="cake-price">$19.99</p>
          <button>Order Now</button>
          </div>
          <div className="cake">
         <img src={cakeImgt} alt="Cake 2 " />
          <h2>Cheese Cake</h2>
          <p>A classic vanilla cake with vanilla buttercream frosting.</p>
           <p className="cake-price">$19.99</p>
          <button>Order Now</button>
          </div>
        <div className="cake">
         <img src={cakeImgf} alt="Cake 2 " />
          <h2>Chocolate Cake</h2>
          <p>A classic vanilla cake with vanilla buttercream frosting.</p>
           <p className="cake-price">$19.99</p>
          <button>Order Now</button>
        </div>
      </div>
      <p className="contact-text">Don't see the cake you're looking for? Contact us and we'll do our best to accommodate your request!</p>
      <Link to={`/contact`}>
        <button className="contact-button" onClick={handleContactClick}>Contact Us</button>
      </Link>
    </div>
  );
}

export default LandingPage;


