import React from 'react';
import PropTypes from 'prop-types';
import StatItem from './StatItem/StatItem';
import './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="statList">
        {stats.map(({ id, label, percentage }) => {
          return <StatItem key={id} label={label} percentage={percentage} />;
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
export default Statistics;
