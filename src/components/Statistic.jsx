import React from "react";
import PropTypes from "prop-types";

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <p>
      Супер <span>{good}</span>
    </p>
    <p>
      Средне <span>{neutral}</span>
    </p>
    <p>
      Плохо <span>{bad}</span>
    </p>
    <p>
      Общее число <span>{total}</span>
    </p>
    <p>
      Процент хороших отзывов <span>{positivePercentage}%</span>
    </p>
  </div>
);
export default Statistic;
Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
