import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ContactDetail.css";

const CONTACTS_API = "http://localhost:3000/contacts";

const ContactDetail = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getContact = async () => {
      try {
        const { data } = await axios.get(`${CONTACTS_API}/${id}`);
        setContact(data);
        setLoading(false);
      } catch (error) {
        setError("An error occurred while fetching the contact.");
        setLoading(false);
      }
    };

    getContact();
  }, [id]);

  if (loading) {
    return <div className="contact-detail-loading">Loading...</div>;
  }

  if (error) {
    return <div className="contact-detail-error">{error}</div>;
  }

  if (!contact) {
    return <div className="contact-detail-not-found">Contact not found.</div>;
  }

  return (
    <div className="contact-detail">
      <h2 className="contact-detail-title">Contact Detail</h2>
      <p className="contact-detail-info">
        <span className="contact-detail-label">Name:</span> {contact.name}
      </p>
      <p className="contact-detail-info">
        <span className="contact-detail-label">Phone Number:</span> {contact.number}
      </p>
    </div>
  );
};

export default ContactDetail;
