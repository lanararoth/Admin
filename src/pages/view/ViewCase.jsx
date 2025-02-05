import { useParams, Link } from "react-router-dom";
import missingCases from "../../assets/data/Data";
import "./ViewCase.css";



const ViewCase = () => {
    const { id } = useParams();
    const caseDetails = missingCases.find((caseItem) => caseItem.id === parseInt(id));
  
    if (!caseDetails) {
      return <h2>Case not found</h2>;
    }
  
    return (
      <div className="view-case-container">
        <div className="case-card">
            <h2 className="card-heading">{caseDetails.name}</h2>
            <div className="case-details">
                <img
                    src={caseDetails.imageSrc}
                    alt={caseDetails.name}
                    className="case-details-image"
                />
                <div className="parent-details">
                    <p>
                     <strong>Age:</strong> {caseDetails.age}
                    </p>
                    <p>
                     <strong>Gender:</strong> {caseDetails.gender}
                    </p>
                    <p>
                     <strong>Last Seen:</strong> {caseDetails.lastSeen}
                    </p>
                    <p>
                     <strong>Special Features:</strong> {caseDetails.specialFeatures}
                    </p>
                    <p>
                     <strong>Parent Name:</strong> {caseDetails.parentDetails.parentName}
                    </p>
                    <p>
                     <strong>Contact:</strong> {caseDetails.contact}
                    </p>
                    <p>
                     <strong>Email:</strong> {caseDetails.parentDetails.email}
                    </p>
                    <p>
                     <strong>Address:</strong> {caseDetails.parentDetails.address}
                    </p>
                </div>
            </div>
        </div>
        <Link to="/missingcase" className="back-button">Back to Cases</Link>
      </div>
    );
  };
  
  export default ViewCase;

