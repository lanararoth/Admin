import './Home.css';
import { Link } from 'react-router-dom';

const Ahome = () => {
  return (
    <div className="dashboard">
      

      {/* Widgets Section */}
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-widgets-horizontal">
        <div className="widget">
          <h3>Missing Cases</h3>
          <p>25 Active Cases</p>
        </div>
        <div className="widget">
          <h3>Police Stations</h3>
          <p>10 Registered Stations</p>
        </div>
        <div className="widget">
          <h3>Emergency Contacts</h3>
          <p>6 Updated Contacts</p>
        </div>
      </div>

      {/* Actions and Notifications in a single row */}
      <div className="actions-and-notifications">
        {/* Quick Actions */}
        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="quick-actions-buttons">
            <div className="action-button">
              <button><Link to="/missingcase/add">Register New Missing Case</Link></button>
            </div>
            <div className="action-button">
              <button><Link to="/police/add">Register New Police Station</Link></button>
            </div>
            <div className="action-button">
              <button><Link to="/emergency/add">Register Emergency Contact</Link></button>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="notifications">
          <h2>Notifications</h2>
          <div className="notifications-list">
            <div className="notification-item">3 new missing cases registered today.</div>
            <div className="notification-item">Emergency contact list updated 1 hour ago.</div>
            <div className="notification-item">2 new police stations registered this week.</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Ahome;

