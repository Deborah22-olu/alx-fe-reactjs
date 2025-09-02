function Profile({ setIsAuthenticated }) {
  const handleLogout = () => {
    setIsAuthenticated(false); // simulate logout
  };

  return (
    <div>
      <h2>👤 Profile Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
