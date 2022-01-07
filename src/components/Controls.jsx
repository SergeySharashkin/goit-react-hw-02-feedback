import React from "react";
const Controls = ({ onGood, onNormal, onBad, countTotalFeedback }) => (
  <div>
    <h2>Пожалуйста оставьте обратную связь</h2>
    <button type="button" onClick={onGood}>
      Супер
    </button>
    <button type="button" onClick={onNormal}>
      Средне
    </button>
    <button type="button" onClick={onBad}>
      Плохо
    </button>
  </div>
);
export default Controls;
