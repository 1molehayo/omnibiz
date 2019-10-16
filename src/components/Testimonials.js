import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { SLIDERSETTINGS } from 'utility/constant';
import { SectionHeader } from 'layouts/SectionHeader';
import { Testimony } from './Testimony';

export const Testimonials = props => (
  <section className="section testimonials">
    <SectionHeader
      title={`Testimonals`}
      desc={`Lorem ipsum dolor sit amet, consectetur /n adipiscing elit,
              sed do eiusmod tempor incididunt`}
    />
    <Slider {...SLIDERSETTINGS}>
      {props.testimonials.map((item, index) => (
        <Testimony key={index} testimony={item} />
      ))}
    </Slider>
  </section>
);

Testimonials.propTypes = {
  testimonials: PropTypes.array
};
