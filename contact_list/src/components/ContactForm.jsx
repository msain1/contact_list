import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Contact.css'

const CONTACTS_API = "http://localhost:3000/contacts";


const ContactForm = ({ contactId }) => {
  const [contact, setContact] = useState({ name: "", number: "" });
  const { name, number } = contact;
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "" || number.trim() === "") {
      setError("All fields are required!");
      return;
    }

    try {
      if (contactId) {
        await axios.put(`${CONTACTS_API}/${contactId}`, contact);
      } else {
        await axios.post(CONTACTS_API, contact);
      }
      setContact({ name: "", number: "" });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="phone number"
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">{contactId ? "Update" : "Add"}</button>
        </div>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default ContactForm;

