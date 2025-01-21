// eslint-disable-next-line react/prop-types
const SubmitBtn = ({ text }) => {
  return (
    <button type="submit" className="btn btn-primary capitalize">
      {text}
    </button>
  );
};
export default SubmitBtn;
