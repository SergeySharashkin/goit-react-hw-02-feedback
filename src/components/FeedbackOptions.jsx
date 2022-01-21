import React from "react";
import PropTypes from "prop-types";
import { OptionsContain, OptionsBtn } from "./feedbakOptions.styled";
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionsContain>
    {options.map((option) => (
      <OptionsBtn
        key={option}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </OptionsBtn>
    ))}
  </OptionsContain>
);
export default FeedbackOptions;
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
