// src/components/sidebar/Sidebar.jsx
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import { FaTachometerAlt, FaFile, FaBuilding, FaPhone, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Import icons

const Sidebar = () => {
    const location = useLocation();

    const sidebarItems = [
        { path: '/dashboard', label: 'Dashboard', icon: <FaTachometerAlt /> },
        { path: '/missingcase', label: 'Missing Cases', icon: <FaFile /> },
        { path: '/police', label: 'Police Stations', icon: <FaBuilding /> },
        { path: '/emergency', label: 'Emergency Numbers', icon: <FaPhone /> },
        { path: '/users', label: 'Users', icon: <FaUsers /> },
        { path: '/settings', label: 'Settings', icon: <FaCog /> },
        { path: '/logout', label: 'Logout', icon: <FaSignOutAlt /> },
    ];

    return (
        <aside className="sidebar">
            

            <nav className="sidebar-nav">
                <ul>
                    {sidebarItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`sidebar-link ${location.pathname.startsWith(item.path) ? 'active' : ''}`} // Active link logic
                            >
                                {item.icon} {/* Render the icon */}
                                <span>{item.label}</span> {/* Render the label */}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
