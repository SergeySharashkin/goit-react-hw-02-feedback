import React from "react";
const Statistic = ({ good, neutral, bad, total }) => (
  <div>
    <h2>Статистика</h2>
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
  </div>
);
export default Statistic;
