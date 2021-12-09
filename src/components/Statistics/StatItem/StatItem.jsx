import React from "react";
import s from "./StatItem.module.css";

const StatItem = ({ label, percentage }) => {
  return (
    <li className={s.item}>
      <span>{label}</span>
      <span>{percentage}%</span>
    </li>
  );
};

export default StatItem;
