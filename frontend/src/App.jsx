import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddSlot from "./pages/AddSlot";
import ViewSlots from "./pages/ViewSlots";
import ParkRemove from "./pages/ParkRemove";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<AddSlot />} />
          <Route path="/view" element={<ViewSlots />} />
          <Route path="/park-remove" element={<ParkRemove />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;