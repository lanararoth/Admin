import missingCases from "../../assets/data/Data";

const Notify = () => {
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

      
    </div>
  );



  function handleNotifyPolice(id) {
    alert(`Notify Police functionality for case ID ${id} triggered!`);
  }
};

export default Notify;