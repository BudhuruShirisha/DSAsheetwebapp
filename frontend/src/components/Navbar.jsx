import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // redirect to login
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
        <NavLink className="navbar-brand fw-bold text-white" to="/profile">
          Dashboard
        </NavLink>

        <div className="ms-auto">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "fw-bold text-white" : "text-white"}`
                }
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/topics"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "fw-bold text-white" : "text-white"}`
                }
              >
                Topics
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/progress"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "fw-bold text-white" : "text-white"}`
                }
              >
                Progress
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/"
                onClick={handleLogout}
                className="nav-link text-white"
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "10px",
          backgroundColor: "#f1f1f1",
          fontSize: "14px",
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        © 2024 Dashboard. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Navbar;
