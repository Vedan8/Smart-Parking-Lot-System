// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b-4 border-white p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-white text-2xl font-extrabold">SMART PARKING</div>
      <div className="flex space-x-4">
        <Link className="hover:text-purple-400 border-2 border-white px-3 py-1 rounded-sm" to="/add-slot">Add Slot</Link>
        <Link className="hover:text-purple-400 border-2 border-white px-3 py-1 rounded-sm" to="/view-slots">View Slots</Link>
        <Link className="hover:text-purple-400 border-2 border-white px-3 py-1 rounded-sm" to="/park-remove">Park/Remove</Link>
      </div>
    </nav>
  );
}