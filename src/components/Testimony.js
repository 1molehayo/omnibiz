import React from 'react';
import PropTypes from 'prop-types';

export const Testimony = props => (
  <div className="testimonial slick__item">
    <div className="testimonial__body">
      <div className="testimonial__message">{props.testimony.message}</div>
    </div>
    <div className="testimonial__footer">
      <div
        className="testimonial__image"
        style={{ backgroundImage: `url(${props.testimony.image})` }}
      />
      <div className="testimonial__details">
        <div className="testimonial__name">{props.testimony.author}</div>
        <div className="testimonial__job">{props.testimony.job}</div>
      </div>
    </div>
  </div>
);

Testimony.propTypes = {
  testimony: PropTypes.object
};
