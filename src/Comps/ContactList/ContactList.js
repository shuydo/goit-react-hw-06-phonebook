// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import contactsActions from "../../redux/contacts-actions";

import { useSelector, useDispatch } from "react-redux";
import { delItem } from "../../redux/slices/items";

const getFilterContacts = (contacts, filter) =>
  contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

export default function ContactList() {
  const dispatch = useDispatch();

  const items = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);
  const dBase = getFilterContacts(items, filter);

  return (
    <ol>
      {dBase.map(el => (
        <li key={el.id}>
          <p>
            <span>
              {el.name}: {el.number + "  "}
            </span>
            <button type="button" onClick={() => dispatch(delItem(el.id))}>
              Delete
            </button>
          </p>
        </li>
      ))}
    </ol>
  );
}

// ContactList.propTypes = {
//   dBase: PropTypes.arrayOf(PropTypes.object).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   dBase: getFilterContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
