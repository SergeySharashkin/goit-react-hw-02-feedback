import React, { Component } from "react";
import PropTypes from "prop-types";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Statistic from "./components/Statistic";
import Notification from "./components/Notification";

class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  static propTypes = {
    initialValue: PropTypes.number.isRequired,
  };
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };
  options = [
    { name: "good", text: "Супер" },
    { name: "neutral", text: "Средне" },
    { name: "bad", text: "Плохо" },
  ];
  onLeaveFeedback = (event) => {
    const { name } = event.currentTarget;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
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
    // this.onLeaveFeedback = total;
    return (
      <>
        <Section title={"Пожалуйста оставьте обратную связь"}>
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={"Статистика"}>
          {total ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification
              message={"Для просмотра статистики надо нажать на одну из кнопок"}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
