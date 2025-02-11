import React, { useState } from "react";
import "./Sidebar.css";
import {
  FaUser,
  FaHome,
  FaTachometerAlt,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaChevronDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const menuItems = [
    {
      title: "Home",
      icon: <FaHome className="menu-icon"/>,
      path: "/dashboard",
      submenus: [],
    },
    {
      title: "Settings",
      icon: <FaTachometerAlt className="menu-icon"/>,
      submenus: [
        { name: "Patient Registration", path: "/patientRegistration" },
        { name: "Test Status", path: "/testStatus" },
        { name: "Patient Reg. List", path: "/patientRegistrationList" },
      ],
    },
    {
      title: "Settings",
      icon: <FaCog className="menu-icon"/>,
      submenus: [
        { name: "Patient Registration", path: "/patientRegistration" },
        { name: "Preferences", path: "/preferences" },
        { name: "Security", path: "/security" },
      ],
    },
    {
      title: "Logout",
      icon: <FaSignOutAlt className="menu-icon"/>,
      submenus: [],
    },
  ];

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
        {isOpen && <span style={{marginLeft: '15px'}}>Menu</span>}
      </button>

      <div className="profile">
        <FaUser className="icon" />
        {isOpen && <span>Shahanaj Gaddi</span>}
      </div>

      {/* Divider */}
      <hr className="divider" />

      {/* Sidebar Menu */}
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="menu-item"
            onMouseEnter={() => !isOpen && setHoveredMenu(index)}
            onMouseLeave={() => !isOpen && setHoveredMenu(null)}
            // onClick={() => isOpen && setSubmenuOpen(submenuOpen === index ? null : index)}
            onClick={() => {
              if (item.path) {
                window.location.href = item.path; // Direct navigation
              } else if (isOpen) {
                setSubmenuOpen(submenuOpen === index ? null : index);
              }
            }}
          >
            <div className="menu-main">
              {item.icon}
              {isOpen && <span>{item.title}</span>}
              {item.submenus.length > 0 && isOpen && (
                <FaChevronDown
                  className={`arrow ${submenuOpen === index ? "rotate" : ""}`}
                />
              )}
            </div>

            {/* Floating Submenu (Collapsed Mode) */}
            {!isOpen && hoveredMenu === index && item.submenus.length > 0 && (
              <div className="submenu-popup fixed-popup">
                 {item.submenus.map((sub, subIndex) => (
                  <Link key={subIndex} to={sub.path} className="submenu-item"  style={{ color: 'white', textDecoration: 'none' }}>
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Dropdown Submenu (Expanded Mode) */}
            {isOpen && submenuOpen === index && item.submenus.length > 0 && (
              <ul className="submenu">
                {item.submenus.map((sub, subIndex) => (
                  <li key={subIndex} className="submenu-item">
                    <Link to={sub.path}  style={{ color: 'white', textDecoration: 'none' }}>{sub.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
