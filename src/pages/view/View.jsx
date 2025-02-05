import { Link } from "react-router-dom";
import missingCases from "../../assets/data/Data";

const View = () => {
  return (
    <div className="missing-cases-admin-container">
      <h1 className="page-title">Missing Cases</h1>

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
                <Link to={`/missingcase/view/${caseItem.id}`} className="action-button edit-button">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  


};

export default View;