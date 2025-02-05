// src/components/layout/Layout.jsx
import Header from "../header/Header"; // You might not need this anymore
import Router from "../../Routers/Router";
import Sidebar from "../sidebar/Sidebar"; // Import the new Sidebar component
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout-container">
      <Header /> {/* Fixed at the top */}
      <Sidebar /> {/* Positioned at the side */}
      <main className="main-content">
        <Router /> {/* Main content */}
      </main>
    </div>
  );
};

export default Layout;


