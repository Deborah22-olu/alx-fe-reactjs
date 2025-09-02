import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import BlogPost from "./components/BlogPost";

// inside <Routes> in App.jsx
<Route path="/blog/:id" element={<BlogPost />} />
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProfile from "./components/UserProfile"; // ✅ import UserProfile

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Public Login Route */}
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />

        {/* Protected Profile Route with nested routes */}
        <Route
          path="/profile/*"   // ✅ allow nested routes
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile setIsAuthenticated={setIsAuthenticated} />
            </ProtectedRoute>
          }
        />

        {/* Dynamic User Profile Route */}
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
