export const Navbar = () => {
  return (
    <div className="navbar">
      <link className="nav-home" to="/">
        Home
      </link>
      <link className="nav-list" to="/employees">
        Employee List
      </link>
      <link className="nav-admin" to="/admin">
        Admin
      </link>
      {/* Show Either logout or login based on auth context. DO NOT show both */}
      <link className="nav-logout" to="/logout">
        Logout
      </link>

      <link className="nav-login" to="/login">
        Login
      </link>
      
    </div>
  );
};
