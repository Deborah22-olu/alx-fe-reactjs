 import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile({ setIsAuthenticated }) {
  const handleLogout = () => {
    setIsAuthenticated(false); // simulate logout
  };

  return (
    <div>
      <h2>👤 Profile Page</h2>
      <button onClick={handleLogout}>Logout</button>

      {/* Navigation links for nested routes */}
      <nav>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
