import PropTypes from "prop-types";
import { connect } from "react-redux";

import contactsActions from "../../redux/contacts-actions";

function Filter({ value, onChange }) {
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

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
