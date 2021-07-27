import PropTypes from "prop-types";

export default function Filter({ value, onChange }) {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input type="text" value={value} onChange={onChange}></input>
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
