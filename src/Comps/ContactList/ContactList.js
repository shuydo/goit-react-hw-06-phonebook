import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts-actions";

function ContactList({ dBase, onDeleteContact }) {
  return (
    <ol>
      {dBase.map(el => (
        <li key={el.id}>
          <p>
            <span>
              {el.name}: {el.number + "  "}
            </span>
            <button type="button" onClick={() => onDeleteContact(el.id)}>
              Delete
            </button>
          </p>
        </li>
      ))}
    </ol>
  );
}

ContactList.propTypes = {
  dBase: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const getFilterContacts = (contacts, filter) => {
  const filterLowerC = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterLowerC)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  dBase: getFilterContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
