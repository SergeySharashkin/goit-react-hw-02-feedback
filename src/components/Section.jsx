import Feedback from "./Feedback";
export default function Section({ tittel }) {
  return (
    <>
      <h1>{tittel}</h1>
      <Feedback initialValue={0} />
    </>
  );
}
