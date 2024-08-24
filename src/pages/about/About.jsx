import React from 'react';
import aboutImage from '../../assets/about-image.png'; 

const About = () => {
  return (
    <div className="about-page" style={{ marginBottom: '30px', marginTop: '30px' }}>
      <div className="about-content">
        <h1 className="about-heading">Discover the World with Wanderlust</h1>
        <p className="about-caption">Unveiling the Beauty of Global Destinations</p>
        <img src={aboutImage} alt="Wanderlust" className="about-image" />
        <div className="about-description">
          <p>At Wanderlust, we believe in the power of exploration and the allure of discovery. Our mission is to inspire and guide travelers to uncover the stunning aesthetic vibes that different parts of the world have to offer.
          From the vibrant streets of Tokyo to the serene landscapes of the Swiss Alps, from the bustling markets of Marrakech to the sun-kissed beaches of the Maldives, every corner of the globe holds its unique charm waiting to be explored.
          Join us on a journey to experience the world through a lens of wonder and adventure. Let Wanderlust be your companion as you embark on unforgettable trips, create lifelong memories, and find inspiration in the beauty of diverse cultures and landscapes.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
