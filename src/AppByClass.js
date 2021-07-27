import React from "react"; // import { v4 as uuid } from "uuid";
import { nanoid } from "nanoid";

import ContactForm from "./Comps/ContactForm/ContactForm";
import ContactList from "./Comps/ContactList/ContactList";
import Filter from "./Comps/Filter/Filter";

export default class App extends React.Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rousie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermeone Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eaden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  appendDBase = data => {
    if (this.state.contacts.map(el => el.name).includes(data.name))
      alert(`${data.name} is already in contacts.`);
    else
      this.setState(pState => ({
        contacts: [
          ...pState.contacts,
          {
            id: nanoid(10),
            ...data,
          },
        ],
      }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilterContacts = () => {
    const filterLowerC = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowerC)
    );
  };

  deleteContact = contactId => {
    this.setState(pState => ({
      contacts: pState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    // console.log("add componentDidMount");
    const isContacts = JSON.parse(localStorage.getItem("contacts"));
    if (isContacts) this.setState({ contacts: isContacts });
  }

  componentDidUpdate(pProps, pState) {
    // console.log("add componentDidUpdate");
    if (this.state.contacts !== pState.contacts)
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.appendDBase} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          dBase={this.getFilterContacts()}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
