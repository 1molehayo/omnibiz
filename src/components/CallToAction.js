import React from 'react';
import { Link } from 'react-router-dom';

export const CallToAction = () => (
  <section className="section call-to-action">
    <div className="container">
      <div className="call-to-action__row">
        <div className="call-to-action__col">
          <h3 className="heading">Improve your business presence</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="call-to-action__col">
          <Link to="/signup" className="button button--primary">
            GET STARTED
          </Link>
        </div>
      </div>
    </div>
  </section>
);
