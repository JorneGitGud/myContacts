//navigation bar component
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Contacts</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/ContactBook">Contact Book</Link>
        <Link to="/login">login/logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
