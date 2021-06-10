import { useState } from "react";

const Contact = (props) => {
  const [contact, setContact] = useState(props.result);
  const [name, setName] = useState(contact.name);
  const [tel, setTel] = useState(contact.tel);

  const updateThisContact = () => {
    const updatedContact = { id: contact.id, name: name, tel: tel };
    props.updateContact(updatedContact);
  };
  return (
    <div key={contact.id} className="wrapper">
      <input
        type="text"
        required
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        required
        value={tel}
        onChange={(e) => {
          setTel(e.target.value);
        }}
      />
      <button onClick={() => updateThisContact()}>update</button>
      <button onClick={() => props.deleteContact(contact.id)}>verwijder</button>
    </div>
  );
};

export default Contact;
