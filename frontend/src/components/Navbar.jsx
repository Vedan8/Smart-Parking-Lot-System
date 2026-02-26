import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4 flex justify-center space-x-8">
    <Link to="/">Add Slot</Link>
    <Link to="/view">View Slots</Link>
    <Link to="/park-remove">Park/Remove</Link>
  </nav>
);

export default Navbar;