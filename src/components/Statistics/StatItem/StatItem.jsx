import React from 'react';
import './StatItem.module.css';

const StatItem = ({ label, percentage }) => {
  return (
    <li className="item">
      <span>{label}</span>
      <span>{percentage}%</span>
    </li>
  );
};

export default StatItem;
