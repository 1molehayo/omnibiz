import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { formatPrice } from 'utility';

const ThemeCard = props => (
  <div className="col-md-4 mb-5">
    <div className="theme-card">
      <div className="card">
        <img
          src={props.theme.image}
          alt={props.theme.name}
          className="theme-card__image"
        />

        <div className="card__overlay">
          <button className="button button--primary">Add Website</button>
          <button className="button button--link">Preview Theme</button>
        </div>
      </div>
      <div className="theme-card__details">
        <div>
          <Link to="/themes" className="card__text theme-card__title">
            {props.theme.name}
          </Link>
          <p className="card__text text-capitalize">{props.theme.type}</p>
        </div>

        <div className="card__text theme-card__title">
          {formatPrice(props.theme.price)}
        </div>
      </div>

      <div className="author-wrapper">
        <div className="d-flex align-items-center">
          <div className="author__image">
            <img src={props.theme.author.image} alt={props.theme.author.name} />
          </div>
          <p className="author__name">{props.theme.author.name}</p>
        </div>

        <a
          href={`mailto:${props.theme.author.email}`}
          className="author__icon icon-envelope"
        >
          {''}
        </a>
      </div>
    </div>
  </div>
);

ThemeCard.propTypes = {
  theme: PropTypes.object
};

export default withRouter(ThemeCard);
