import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = ({ id, name, number, onDelete, onEdit }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    onEdit(id);
  };

  return (
    <div className="contact-card">
      <Link to={`/contact/${id}`} key={id} className="contact-card-link">
      <div className="contact-card-content">
        <h3 className="contact-name">{name}</h3>
        <p className="contact-number">{number}</p>
      </div>
      </Link>
      <div className="contact-card-buttons">
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
};

export default Contact;