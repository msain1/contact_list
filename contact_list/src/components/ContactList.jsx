import { useState, useEffect } from "react";
import axios from "axios";
import Contact from "./Contact";
import "./ContactList.css";

const CONTACTS_API = "http://localhost:3000/contacts";

const ContactList = ({ onDelete, onEdit }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const { data } = await axios.get(CONTACTS_API);
        setContacts(data);
        setLoading(false);
      } catch (e) {
        setError("An error occurred while fetching contacts.");
        setLoading(false);
      }
    };

    getContacts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${CONTACTS_API}/${id}`);
      setContacts(contacts.filter((contact) => contact.id !== id));
    } catch (error) {
      setError("An error occurred while deleting the contact.");
    }
  };

  const handleEdit = (id) => {
    onEdit(id);
  };

  const handleUpdate = async (updatedContact) => {
    try {
      const { id } = updatedContact;
      await axios.put(`${CONTACTS_API}/${id}`, updatedContact);
      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact.id === id ? updatedContact : contact
        )
      );
    } catch (error) {
      setError("An error occurred while updating the contact.");
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (contacts.length === 0) {
    return <div className="no-contacts">No contacts found.</div>;
  }

  return (
    <div className="contact-list">
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
};

export default ContactList;


