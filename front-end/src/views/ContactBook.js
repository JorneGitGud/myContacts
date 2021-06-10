import { useEffect, useState } from "react";
import axios from "axios";
import Contact from "../components/Contact";

const Contacts = () => {
  //variables
  const [contacts, setContacts] = useState([]);
  const [nameToAdd, setNameToAdd] = useState("");
  const [telToAdd, setTelToAdd] = useState("");
  //methods
  useEffect(() => {
    getAllContacts();
  }, []);

  //api calls
  const getAllContacts = () => {
    console.log("getting contacts");
    axios
      .get(`http://localhost:5000/contacts`)
      .then((res) => {
        const data = res.data;
        const options = data.map((data) => ({
          id: data._id,
          name: data.name,
          tel: data.tel,
        }));
        setContacts(options);
      })
      .then(() => {})
      .catch((e) => {
        console.log("Something went wrong fetching the data.  " + e);
      });
  };

  const deleteContact = (id) => {
    axios
      .delete(`http://localhost:5000/contacts/` + id.toString())
      .then(console.log("deleted contact"))
      .then(getAllContacts);
  };

  const postContact = () => {
    axios
      .post(`http://localhost:5000/contacts/`, {
        name: nameToAdd,
        tel: telToAdd,
      })
      .then(console.log("added contact"))
      .then(getAllContacts);
  };

  const updateContact = (props) => {
    console.log(props.name.toString());
    axios
      .put(`http://localhost:5000/contacts/` + props.id.toString(), {
        name: props.name,
        tel: props.tel,
      })
      .then(console.log("contact updated"))
      .then(getAllContacts);
  };

  const newContact = () => {
    if (nameToAdd.length > 1 && telToAdd.length > 1) postContact();
  };
  //template
  return (
    <div className="wrapper space">
      <h1>Contacts</h1>

      <div>
        <h2>Lijst met contacten:</h2>
        {contacts.map((props) => (
          <Contact
            result={props}
            key={props.id}
            deleteContact={deleteContact}
            updateContact={updateContact}
          />
        ))}
      </div>

      <h2>Voeg een nieuw contact toe:</h2>

      <div className="wrapper">
        <form>
          <label>Naam:</label>
          <input
            type="text"
            required
            value={nameToAdd}
            onChange={(e) => {
              setNameToAdd(e.target.value);
            }}
          />
          <label>Tel:</label>
          <input
            type="text"
            required
            value={telToAdd}
            onChange={(e) => {
              setTelToAdd(e.target.value);
            }}
          />
          <button onClick={newContact}>Toevoegen</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
