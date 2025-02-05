import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import PropTypes from "prop-types";  
import "react-toastify/dist/ReactToastify.css";

const API_ADD_URL = "http://127.0.0.1:8000/api/emergency-contacts/add/";

const AddContact = ({ setContacts }) => {
  const [formState, setFormState] = useState({ service_name: "", contact_number: "" });
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

 // Validate phone number between 3 to 6 digits
const isValidPhoneNumber = (phone) => {
  const phoneRegex = /^[0-9]{3,6}$/; // Matches a number between 3 and 6 digits
  return phoneRegex.test(phone);
};


  // Add new contact to API
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!formState.service_name.trim() || !formState.contact_number.trim()) {
      toast.error("Both fields are required.");
      return;
    }

    if (!isValidPhoneNumber(formState.contact_number)) {
      toast.error("Please enter a valid 10-digit contact number.");
      return;
    }

    if (window.confirm("Are you sure you want to add this contact?")) {
      try {
        const response = await fetch(API_ADD_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formState),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Failed to add contact: ${JSON.stringify(errorData)}`);
        }

        let newContact = await response.json();

        if (setContacts) {
          setContacts((prev) => [...prev, newContact]);
        }

        toast.success("Contact added successfully!");
        setTimeout(() => navigate("/emergency"), 2000);
      } catch (error) {
        console.error(error.message);
        toast.error("An error occurred while adding the contact.");
      }
    }
  };

  return (
    <div className="add-case-container">
      <h1>Add New Emergency Contact</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="service_name"
          placeholder="Service Name"
          value={formState.service_name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact_number"
          placeholder="Contact Number"
          value={formState.contact_number}
          onChange={handleChange}
          required
        />
        <button type="submit" className="add-contact-button">Add Contact</button>
      </form>
      <ToastContainer />
    </div>
  );
};

// ✅ PropTypes validation
AddContact.propTypes = {
  setContacts: PropTypes.func,
};

export default AddContact;
