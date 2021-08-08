// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import contactsActions from "../../redux/contacts-actions";

import { useDispatch } from "react-redux";
import { filterChange } from "../../redux/slices/filter";

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <>
      <h3>Find contacts by name</h3>
      <input type="text"  onChange={e => dispatch(filterChange(e.target.value))}></input>
    </>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
