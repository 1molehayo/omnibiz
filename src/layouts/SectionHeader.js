import React from 'react';
import PropTypes from 'prop-types';

export const SectionHeader = props => {
  const splitText = str => {
    const nextLine = str.indexOf('/n');

    const beforenextline = str.substring(0, nextLine);
    const afternextline = str.substring(nextLine + 2, str.length);

    if (nextLine !== -1) {
      return (
        <>
          {beforenextline} <br /> {afternextline}
        </>
      );
    }

    return str;
  };

  const formatHeaderText = str => {
    const firstboldstring = str.indexOf('/bold');
    const lastboldstring = str.lastIndexOf('/bold');

    const beforeboldstring = str.substring(0, firstboldstring);
    const afterboldstring = str.substring(lastboldstring + 5, str.length);
    const boldstring = str.substring(firstboldstring + 5, lastboldstring);

    if (firstboldstring !== -1) {
      return (
        <h3 className="heading">
          {splitText(beforeboldstring)}{' '}
          <span className="font-bold">{boldstring}</span>
          {splitText(afterboldstring)}
        </h3>
      );
    }
    return <h3 className="heading">{str}</h3>;
  };

  return (
    <div className="section__header text-center">
      {formatHeaderText(props.title)}
      <p className="paragraph">{splitText(props.desc)}</p>
    </div>
  );
};

SectionHeader.propTypes = {
  desc: PropTypes.string,
  title: PropTypes.string
};
