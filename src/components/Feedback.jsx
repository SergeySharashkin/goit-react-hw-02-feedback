import React, { Component } from "react";
import PropTypes from "prop-types";
import FeedbackOptions from "./FeedbackOptions";
import Statistic from "./Statistic";
import Notification from "./Notification";
class Feedback extends Component {
  static defaultProps = {
    initialValue: 0,
    onLeaveFeedback: false,
  };
  static propTypes = {
    initialValue: PropTypes.number.isRequired,
    onLeaveFeedback: PropTypes.bool.isRequired,
  };
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  onGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };
  onNormal = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };
  onBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback = (good, norm, bad) => {
    const total = good + norm + bad;
    return total;
  };
  countPositiveFeedbackPercentage = (good, norm, bad) => {
    const positive = Math.round((good * 100) / (good + norm + bad));
    return positive;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);
    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      neutral,
      bad
    );
    this.onLeaveFeedback = total;
    return (
      <div>
        <FeedbackOptions
          onGood={this.onGood}
          onNormal={this.onNormal}
          onBad={this.onBad}
        />
        {!this.onLeaveFeedback && (
          <Notification
            message={"Для просмотра статистики надо нажать на одну из кнопок"}
          />
        )}
        {this.onLeaveFeedback && (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </div>
    );
  }
}
export default Feedback;
