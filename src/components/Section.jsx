import Feedback from "./Feedback";
import PropTypes from "prop-types";
export default function Section({ tittel }) {
  return (
    <>
      <h1>{tittel}</h1>
      <Feedback initialValue={0} onLeaveFeedback={false} />
    </>
  );
}
Section.propTypes = {
  tittel: PropTypes.string.isRequired,
};
