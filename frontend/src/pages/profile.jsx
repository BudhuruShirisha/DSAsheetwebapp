import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const nav = useNavigate();

  const email = localStorage.getItem('email');
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    nav('/login');
  };

 
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <h2>Welcome Vipin</h2>
        <p>Email: {email}</p>
      </div>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "10px", backgroundColor: "#f1f1f1", fontSize: "14px" }}>
        © 2024 Dashboard. All Rights Reserved.
      </footer>
    </div>
  );
}

