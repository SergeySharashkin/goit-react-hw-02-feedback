import React, { Component } from "react";
// import PropTypes from "prop-types";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Statistic from "./components/Statistic";
import Notification from "./components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (event) => {
    const { name } = event.currentTarget;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };
  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const positive = Math.round(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
    return positive;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const state = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title={"Пожалуйста оставьте обратную связь"}>
          <FeedbackOptions
            options={Object.keys(state)}
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
