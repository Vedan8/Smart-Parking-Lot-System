// src/pages/AddSlot.jsx
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { addSlot } from "../api/parkingApi";

export default function AddSlot() {
  const [slotNo, setSlotNo] = useState("");
  const [isCovered, setIsCovered] = useState(false);
  const [isEVCharging, setIsEVCharging] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addSlot({ slot_no: slotNo, is_covered: isCovered, is_ev_charging: isEVCharging });
    alert("Slot added successfully!");
    setSlotNo("");
    setIsCovered(false);
    setIsEVCharging(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border-4 border-white rounded-sm bg-gray-800">
      <h2 className="text-2xl mb-4 text-white font-extrabold">Add Parking Slot</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Slot Number"
            value={slotNo}
            onChange={(e) => setSlotNo(e.target.value)}
            className="w-full bg-gray-900 text-white border-2 border-white px-3 py-2 rounded-sm focus:outline-none focus:border-purple-400"
          />
        </div>
        <div className="mb-4 flex items-center">
          <input type="checkbox" checked={isCovered} onChange={(e) => setIsCovered(e.target.checked)} className="mr-2" />
          <span>Covered</span>
        </div>
        <div className="mb-4 flex items-center">
          <input type="checkbox" checked={isEVCharging} onChange={(e) => setIsEVCharging(e.target.checked)} className="mr-2" />
          <span>EV Charging</span>
        </div>
        <Button type="submit">Add Slot</Button>
      </form>
    </div>
  );
}