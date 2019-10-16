import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from 'utility';

export const PlanCard = props => (
  <div className="col-md-4">
    <div className="card plan-card">
      <div className="plan-card__header">
        <p className="plan-card__title">{props.plan.name}</p>
      </div>

      <div className="mb-4 text-center">
        <p className="card__text card__text--small">Starting From</p>
        <p className="card__text card__text--big">
          {formatPrice(props.plan.price)}
        </p>
        <p className="card__text card__text--small">month</p>
      </div>

      <ul className="plan-card__list">
        <li className="plan-card__item">Website Development</li>
        <li className="plan-card__item">Website Development</li>
        <li className="plan-card__item">Website Development</li>
        <li className="plan-card__item">Website Development</li>
      </ul>

      <a href="/" className="button button--primary">
        GET STARTED
      </a>
    </div>
  </div>
);

PlanCard.propTypes = {
  plan: PropTypes.object
};
