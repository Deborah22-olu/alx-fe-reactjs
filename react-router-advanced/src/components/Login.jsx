function Login({ setIsAuthenticated }) {
  const handleLogin = () => {
    setIsAuthenticated(true); // simulate login
  };

  return (
    <div>
      <h2>🔑 Login Page</h2>
      <button onClick={handleLogin}>Click to Login</button>
    </div>
  );
}

export default Login;
