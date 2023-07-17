import { useParams } from "react-router-dom";
import ContactForm from "../components/ContactForm";

const EditContact = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 className="title">Edit Contact</h1>
      <ContactForm contactId={id} />
    </div>
  );
};

export default EditContact;