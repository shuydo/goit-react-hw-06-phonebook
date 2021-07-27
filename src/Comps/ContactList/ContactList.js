import PropTypes from "prop-types";

export default function ContactList({ dBase, onDeleteContact }) {
  return (
    <ol>
      {dBase.map((el) => (
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
