import missingCases from "../../assets/data/Data";

const Delete = () => {
  return (
    <div className="missing-cases-admin-container">
      <h1 className="page-title">Missing Cases - Admin Panel</h1>

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
                <button
                  className="action-button delete-button"
                  onClick={() => handleDelete(caseItem.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  function handleDelete(id) {
    alert(`Delete functionality for case ID ${id} triggered!`);
  }

  
};

export default Delete;