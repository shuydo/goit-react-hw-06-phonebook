import ContactForm from "./Comps/ContactForm/ContactForm";
import ContactList from "./Comps/ContactList/ContactList";
import Filter from "./Comps/Filter/Filter";

export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
