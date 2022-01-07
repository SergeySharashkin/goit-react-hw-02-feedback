import React from "react";
import Controls from "./Controls";
import Statistic from "./Statistic";
class Feedback extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  static propTypes = {};
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };
  total = 0;
  //    positivePercentage = this.positivePercentage;

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
  countTotalFeedback = () => {
    this.setState((prevState) => {
      return (this.total =
        prevState.neutral + prevState.good + prevState.neutral);
    });
  };
  //   countPositiveFeedbackPercentage = () => {

  //   }

  render() {
    return (
      <div>
        <Controls
          onGood={this.onGood}
          onNormal={this.onNormal}
          onBad={this.onBad}
          countTotalFeedback={this.countTotalFeedback}
        />
        <Statistic
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.total}
        />
      </div>
    );
  }
}
export default Feedback;
