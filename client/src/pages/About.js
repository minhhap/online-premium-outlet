import React from 'react';
import coverImage from '../assets/chula-cover.jpeg';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-page">
      <div className="my-5">
        <Link to="/about"></Link>
        <div className="my-2" class="hero-cta">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            bibendum turpis sed ex condimentum molestie. Mauris condimentum
            lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat
            metus aliquam maximus. Proin aliquam justo nec diam vulputate
            vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit
            massa eleifend. Morbi tristique justo vel turpis sollicitudin, et
            tristique velit convallis. In hac habitasse platea dictumst.
            Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl
            nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea
            dictumst.
          </p>
        </div>
        <img
          src={coverImage}
          className="my-2"
          style={{ width: '100%' }}
          alt="cover"
        />
      </div>
    </div>
  );
}

export default About;
