import { useState } from "react";
import PropTypes from "prop-types";
import { connect /*, useDispatch*/ } from "react-redux";
import contactsActions from "../../redux/contacts-actions";

function ContactForm({ onSubmit }) {
  const [name, setName] = useState();
  const [number, setNumber] = useState();

  // const dispatch=useDispatch()

  const handleChangeName = e => setName(e.target.value);
  const handleChangeNumber = e => setNumber(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number });
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Name</h3>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={name}
        onChange={handleChangeName}
      />

      <h3>Number</h3>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        value={number}
        onChange={handleChangeNumber}
      />
      <br></br>
      <button type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapsDispatchToProps = dispatch => ({
  onSubmit: ({ name, number }) =>
    dispatch(contactsActions.addContact(name, number)),
});

export default connect(null, mapsDispatchToProps)(ContactForm);
