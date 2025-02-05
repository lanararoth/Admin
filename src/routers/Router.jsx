import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Ahome from "../pages/home/Home"; 
import MissingCase from "../pages/missingcase/MissingCase";
import View from "../pages/view/View";
import ViewCase from "../pages/view/ViewCase";
import Edit from "../pages/edit/Edit";
import EditCase from "../pages/edit/EditCase";
import AddCase from "../pages/add/Addcase";
import Notify from "../pages/missingcase/Notify";
import Delete from "../pages/missingcase/Delete";
import EmergencyContact from "../pages/emergency/EmergencyContact";
import AddContact from "../pages/add/AddContact";
import PoliceStation from "../pages/police/PoliceStation";

const Router = () => {
  // ✅ Lift state up to Router
  const [contacts, setContacts] = useState([]);

  // ✅ Fetch contacts from Django API
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/emergency-contacts/")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching contacts:", error));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Ahome />} />
      <Route path="/missingcase" element={<MissingCase />} />
      <Route path="/missingcase/view/:id" element={<ViewCase />} />
      <Route path="/missingcase/view" element={<View />} />
      <Route path="/missingcase/edit/:id" element={<EditCase />} />
      <Route path="/missingcase/edit" element={<Edit />} />
      <Route path="/missingcase/add" element={<AddCase />} />
      <Route path="/missingcase/notify" element={<Notify />} />
      <Route path="/missingcase/delete" element={<Delete />} />
      <Route path="/police" element={<PoliceStation />} />
      
      {/* ✅ Pass contacts & setContacts to EmergencyContact */}
      <Route path="/emergency" element={<EmergencyContact contacts={contacts} setContacts={setContacts} />} />
      
      {/* ✅ Pass setContacts to AddContact */}
      <Route path="/emergency/add" element={<AddContact setContacts={setContacts} />} />
    </Routes>
  );
};

export default Router;
