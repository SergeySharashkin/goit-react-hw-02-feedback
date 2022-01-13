import React from "react";
import PropTypes from "prop-types";
import { OptionsContain, OptionsBtn } from "./feedbakOptions.styled";
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionsContain>
    {options.map(({ text, name }) => (
      <OptionsBtn
        key={name}
        type="button"
        name={name}
        onClick={onLeaveFeedback}
      >
        {text}
      </OptionsBtn>
    ))}
  </OptionsContain>
);
export default FeedbackOptions;
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};
