import { useState, useEffect } from "react";
import "./PoliceStation.css"; // Ensure you have styles

const PoliceStation = () => {
  const [policeStations, setPoliceStations] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("add"); // "add" or "edit"
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    district: "",
    place: "",
    contact: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    district: "",
    place: "",
    contact: "",
  });

  // URL for fetching police stations (replace with actual URL)
  const getUrl = "http://localhost:8000/api/police/get/";

  // Fetch police stations on component mount
  useEffect(() => {
    const fetchPoliceStations = async () => {
      try {
        const response = await fetch(getUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch police stations");
        }
        const data = await response.json();
        // Ensure the data is an array before setting it
        if (Array.isArray(data)) {
          setPoliceStations(data);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching police stations:", error);
      }
    };

    fetchPoliceStations();
  }, [getUrl]);

  const validateForm = () => {
    const errors = {};

    if (!formData.name) errors.name = "Name is required.";
    if (!formData.district) errors.district = "District is required.";
    if (!formData.place) errors.place = "Place is required.";
    if (!formData.contact) {
      errors.contact = "Contact number is required.";
    } else if (!/^\+91\s\d{3}\s\d{7}$/.test(formData.contact)) {
      errors.contact = "Invalid contact number format. Use +91 XXX XXXXXXX.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormOpen = (type, station = null) => {
    setFormType(type);
    if (type === "edit" && station) {
      setFormData({ ...station });
    } else {
      setFormData({ id: null, name: "", district: "", place: "", contact: "" });
    }
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setFormData({ id: null, name: "", district: "", place: "", contact: "" });
    setFormErrors({});
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (formType === "add") {
        const newStation = { ...formData, id: policeStations.length + 1 };
        setPoliceStations([...policeStations, newStation]);
      } else if (formType === "edit") {
        const updatedStations = policeStations.map((station) =>
          station.id === formData.id ? formData : station
        );
        setPoliceStations(updatedStations);
      }
      handleFormClose();
    }
  };

  const handleDelete = (id) => {
    const updatedStations = policeStations.filter((station) => station.id !== id);
    setPoliceStations(updatedStations);
  };

  return (
    <div className="police-page">
      <h1 className="h1">Police Stations</h1>

      <button onClick={() => handleFormOpen("add")} className="add-button">
        Add Police Station
      </button>

      <table className="police-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>District</th>
            <th>Place</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(policeStations) && policeStations.length > 0 ? (
            policeStations.map((station) => (
              <tr key={station.id}>
                <td>{station.name}</td>
                <td>{station.district}</td>
                <td>{station.place}</td>
                <td>{station.contact}</td>
                <td>
                  <button
                    onClick={() => handleFormOpen("edit", station)}
                    className="edit-button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(station.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No police stations available.</td>
            </tr>
          )}
        </tbody>
      </table>

      {showForm && (
        <div className="form-container">
          <h2>{formType === "add" ? "Add Police Station" : "Edit Police Station"}</h2>
          <form onSubmit={handleFormSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              {formErrors.name && <p className="error">{formErrors.name}</p>}
            </label>
            <label>
              District:
              <input
                type="text"
                value={formData.district}
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                required
              />
              {formErrors.district && <p className="error">{formErrors.district}</p>}
            </label>
            <label>
              Place:
              <input
                type="text"
                value={formData.place}
                onChange={(e) => setFormData({ ...formData, place: e.target.value })}
                required
              />
              {formErrors.place && <p className="error">{formErrors.place}</p>}
            </label>
            <label>
              Contact:
              <input
                type="text"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                required
              />
              {formErrors.contact && <p className="error">{formErrors.contact}</p>}
            </label>
            <div className="form-buttons">
              <button type="submit" className="submit-button">
                {formType === "add" ? "Add" : "Update"}
              </button>
              <button type="button" onClick={handleFormClose} className="cancel-button">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default PoliceStation;
