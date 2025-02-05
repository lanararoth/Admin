import { useState } from "react";
import { Link } from "react-router-dom";
import initialMissingCases from "../../assets/data/Data";
import "./MissingCase.css";

const MissingCase = () => {
  // State to manage the missing cases
  const [missingCases, setMissingCases] = useState(initialMissingCases);

  // State to manage the "Notify Police" alert message
  const [alertMessage, setAlertMessage] = useState("");

  // State to manage the "Deleted Successfully" notification
  const [deleteMessage, setDeleteMessage] = useState("");

  // Handle delete functionality
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this case?");
    if (confirmDelete) {
      setMissingCases((prevCases) => {
        const updatedCases = prevCases.filter((caseItem) => caseItem.id !== id);
        if (updatedCases.length === prevCases.length - 1) {
          setDeleteMessage("Case deleted successfully!");  // Show success message
          setTimeout(() => setDeleteMessage(""), 3000);  // Clear the message after 3 seconds
        }
        return updatedCases;
      });
    }
  };

  // Handle notify police functionality
  const handleNotifyPolice = (id) => {
    const caseItem = missingCases.find((item) => item.id === id);
    if (caseItem) {
      setAlertMessage(`Police notified for case: ${caseItem.name}`);
      // Clear the alert after 3 seconds
      setTimeout(() => setAlertMessage(""), 3000);
    }
  };

  return (
    <div className="missing-cases-admin-container">
      <h1 className="page-title">Missing Cases - Admin Panel</h1>

      {/* Show alert message when police are notified */}
      {alertMessage && <div className="alert-notification">{alertMessage}</div>}

      {/* Show delete success message */}
      {deleteMessage && <div className="alert-notification success">{deleteMessage}</div>}

      {/* Table for displaying missing cases */}
      <table className="missing-cases-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Last Seen</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {missingCases.map((caseItem) => (
            <tr key={caseItem.id}>
              <td>
                <img
                  src={caseItem.imageSrc}
                  alt={caseItem.name}
                  className="case-image"
                />
              </td>
              <td>{caseItem.name}</td>
              <td>{caseItem.age}</td>
              <td>{caseItem.gender}</td>
              <td>{caseItem.lastSeen}</td>
              <td>{caseItem.contact}</td>
              <td>
                <Link to={`/missingcase/view/${caseItem.id}`} className="action-button view-button">
                  View
                </Link>
                <Link to={`/missingcase/edit/${caseItem.id}`} className="action-button edit-button">
                  Edit
                </Link>
                <button
                  className="action-button delete-button"
                  onClick={() => handleDelete(caseItem.id)}
                >
                  Delete
                </button>
                <button
                  className="action-button notify-button"
                  onClick={() => handleNotifyPolice(caseItem.id)}
                >
                  Notify Police
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add new case button */}
      <div className="addcase-container">
        <Link to="/missingcase/add" className="addcase-button">
          + Add New Case
        </Link>
      </div>
    </div>
  );
};

export default MissingCase;
