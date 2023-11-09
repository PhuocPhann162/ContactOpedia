import Contact from "./Contact";

const GeneralContacts = (props) => {
  return (
    <div>
      {props.contacts.map((contact, index) => (
        <Contact contact={contact} index={index}></Contact>
      ))}
    </div>
  );
};

export default GeneralContacts;
