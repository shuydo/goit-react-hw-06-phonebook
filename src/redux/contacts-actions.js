import { nanoid } from "nanoid";

import types from "./contacts-types";

const addContact = (name, number) => ({
  type: types.ADD,
  payload: { name, number, id: nanoid(10) },
});

const deleteContact = contactId => ({
  type: types.DEL,
  payload: contactId,
});

const changeFilter = value => ({
  type: types.FILTERchange,
  payload: value,
});

const contactsAction = { addContact, deleteContact, changeFilter };
export default contactsAction;
