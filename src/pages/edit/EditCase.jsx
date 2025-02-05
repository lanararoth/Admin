import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import missingCases from "../../assets/data/Data"; // Adjust based on your project structure
import "./EditCase.css"
const EditCase = () => {
  const { id } = useParams(); // Retrieve the case ID from the URL params
  const navigate = useNavigate();

  // Find the case by ID (replace this logic with a backend fetch if necessary)
  const existingCase = missingCases.find((caseItem) => caseItem.id === parseInt(id));

  // Initialize state with the existing case data
  const [formData, setFormData] = useState(
    existingCase || {
      name: "",
      age: "",
      gender: "",
      lastSeen: "",
      specialFeatures: "",
      contact: "",
      parentDetails: {
        parentName: "",
        contact: "",
        email: "",
        address: "",
      },
    }
  );

  // Handle input changes for both case details and parent details
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("parent_")) {
      const parentField = name.replace("parent_", ""); // Extract parent field name
      setFormData({
        ...formData,
        parentDetails: {
          ...formData.parentDetails,
          [parentField]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the case in the array (replace this logic with a backend update if needed)
    const updatedCases = missingCases.map((caseItem) =>
      caseItem.id === parseInt(id) ? { ...formData } : caseItem
    );

    // Update the array (temporary; replace with backend logic)
    missingCases.splice(0, missingCases.length, ...updatedCases);

    alert("Case updated successfully!");
    navigate("/missingcase");
  };

  return (
    <div className="add-case-container">
      <h1>Edit Missing Case</h1>
      <form onSubmit={handleSubmit}>
        {/* Case Details */}
        <h3>Case Details</h3>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
            <label htmlFor="gender">Gender:</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                >
                <option value="" disabled>
                 Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
        </div>
        <div className="form-group">
          <label htmlFor="lastSeen">Last Seen:</label>
          <input
            type="text"
            id="lastSeen"
            name="lastSeen"
            value={formData.lastSeen}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="specialFeatures">Special Features:</label>
          <input
            type="text"
            id="specialFeatures"
            name="specialFeatures"
            value={formData.specialFeatures}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Parent Details */}
        <h3>Parent Details</h3>
        <div className="form-group">
          <label htmlFor="parent_name">Parent Name:</label>
          <input
            type="text"
            id="parent_name"
            name="parent_name"
            value={formData.parentDetails.parentName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="parent_contact">Parent Contact:</label>
          <input
            type="text"
            id="parent_contact"
            name="parent_contact"
            value={formData.parentDetails.contact}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="parent_email">Parent Email:</label>
          <input
            type="email"
            id="parent_email"
            name="parent_email"
            value={formData.parentDetails.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="parent_address">Parent Address:</label>
          <input
            type="text"
            id="parent_address"
            name="parent_address"
            value={formData.parentDetails.address}
            onChange={handleInputChange}
          />
        </div>

        <div className="button-container">
          <button type="submit" className="save-button">
            Update Case
          </button>
          <button
            type="button"
            onClick={() => navigate("/missingcase")}
            className="cancel-button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCase;




