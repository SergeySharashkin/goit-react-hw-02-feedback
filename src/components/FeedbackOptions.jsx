import React from "react";
import PropTypes from "prop-types";
const FeedbackOptions = ({ onGood, onNormal, onBad }) => (
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
export default FeedbackOptions;
FeedbackOptions.propTypes = {
  onGood: PropTypes.func,
  onNormal: PropTypes.func,
  onBad: PropTypes.func,
};
