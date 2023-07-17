import { useNavigate } from "react-router-dom";
import ContactList from "../components/ContactList";

const Home = () => {
  const navigate = useNavigate();

  const handleAddContact = () => {
    navigate("/new-contact");
  };

  const handleEditContact = (id) => {
    navigate(`/edit-contact/${id}`);
  };

  return (
    <div>
      <div className="header">
        <h1 className="title">Contact List</h1>
        <button className="add-btn" onClick={handleAddContact}>Add
        </button>
      </div>
      <div>
        <ContactList onEdit={handleEditContact} />
      </div>
    </div>
  );
};

export default Home;
