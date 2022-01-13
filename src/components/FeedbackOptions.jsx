import React from "react";
import PropTypes from "prop-types";
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(({ text, name }) => (
      <button key={name} type="button" name={name} onClick={onLeaveFeedback}>
        {text}
      </button>
    ))}
  </div>
);
export default FeedbackOptions;
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};
