import React, { useState, useEffect } from "react"; // import { v4 as uuid } from "uuid";
import { nanoid } from "nanoid";

import ContactForm from "./Comps/ContactForm/ContactForm";
import ContactList from "./Comps/ContactList/ContactList";
import Filter from "./Comps/Filter/Filter";

// const defContacts = [
//   { id: "id-1", name: "Rousie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermeone Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eaden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

export default function App() {
  // const [contacts, setContacts] = useState(defContacts);

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const appendDBase = data => {
    if (contacts.map(el => el.name).includes(data.name))
      alert(`${data.name} is already in contacts.`);
    else setContacts(oldS => [...oldS, { id: nanoid(10), ...data }]);
  };

  const changeFilter = e => setFilter(e.target.value);

  const getFilterContacts = () => {
    const filterLowerC = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowerC)
    );
  };

  const deleteContact = contactId =>
    setContacts(contacts.filter(contact => contact.id !== contactId));

  useEffect(() => {
    // console.log("1st & единажды " + Date.now());
    const isContacts = JSON.parse(localStorage.getItem("contacts"));
    if (isContacts) setContacts(isContacts);
  }, []);

  useEffect(
    // console.log("типа componentDidUpdate " + Date.now());
    () => localStorage.setItem("contacts", JSON.stringify(contacts)),
    [contacts]
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={appendDBase} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        dBase={getFilterContacts()}
        onDeleteContact={deleteContact}
      />
    </>
  );
}
