import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddSlot from "./pages/AddSlot";
import ViewSlots from "./pages/ViewSlots";
import ParkRemove from "./pages/ParkRemove";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ViewSlots />} />          {/* default page */}
        <Route path="/add-slot" element={<AddSlot />} />
        <Route path="/view-slots" element={<ViewSlots />} />
        <Route path="/park-remove" element={<ParkRemove />} />
        <Route path="*" element={<NotFound />} />         {/* fallback */}
      </Routes>
    </Router>
  );
}

export default App;