import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewContact from "./pages/NewContact";
import EditContact from "./components/EditContact";
import ContactDetail from "./components/ContactDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-contact" element={<NewContact />} />
        <Route path="/edit-contact/:id" element={<EditContact />} />
        <Route path="/contact/:id" element={<ContactDetail />} />
      </Routes>
    </>
  );
}

export default App;
