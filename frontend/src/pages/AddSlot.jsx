import { useState } from "react";
import { addSlot } from "../api/parkingApi";
import Loader from "../components/Loader";
import Button from "../components/Button";

const AddSlot = () => {
  const [slotNo, setSlotNo] = useState("");
  const [isCovered, setIsCovered] = useState(false);
  const [isEV, setIsEV] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      await addSlot({ slot_no: slotNo, is_covered: isCovered, is_ev_charging: isEV });
      setMessage(`Slot ${slotNo} added successfully!`);
      setSlotNo("");
      setIsCovered(false);
      setIsEV(false);
    } catch (err) {
      setMessage("Error adding slot");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-6">
      <h2 className="text-2xl font-bold mb-4">Add Parking Slot</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          placeholder="Slot Number"
          value={slotNo}
          onChange={(e) => setSlotNo(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <div className="flex items-center space-x-4">
          <label>
            <input type="checkbox" checked={isCovered} onChange={() => setIsCovered(!isCovered)} />
            <span className="ml-2">Covered</span>
          </label>
          <label>
            <input type="checkbox" checked={isEV} onChange={() => setIsEV(!isEV)} />
            <span className="ml-2">EV Charging</span>
          </label>
        </div>
        <Button type="submit">Add Slot</Button>
      </form>
      {loading && <Loader />}
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default AddSlot;