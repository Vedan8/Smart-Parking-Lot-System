import { useEffect, useState } from "react";
import { getSlots, parkVehicle, removeVehicle } from "../api/parkingApi";
import Loader from "../components/Loader";
import SlotCard from "../components/SlotCard";
import Button from "../components/Button";

const ParkRemove = () => {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [parkLoading, setParkLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [needsCovered, setNeedsCovered] = useState(false);
  const [needsEV, setNeedsEV] = useState(false);

  const fetchSlots = async () => {
    setLoading(true);
    try {
      const res = await getSlots();
      setSlots(res.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => { fetchSlots(); }, []);

  const handlePark = async () => {
    setParkLoading(true);
    setMessage("");
    try {
      const res = await parkVehicle({ needsCover: needsCovered, needsEV });
      setMessage(res.data.message);
      fetchSlots();
    } catch (err) {
      setMessage(err.response?.data?.message || "Error parking vehicle");
    }
    setParkLoading(false);
  };

  const handleRemove = async (id) => {
    setParkLoading(true);
    setMessage("");
    try {
      const res = await removeVehicle(id);
      setMessage(res.data.message);
      fetchSlots();
    } catch (err) {
      setMessage(err.response?.data?.message || "Error removing vehicle");
    }
    setParkLoading(false);
  };

  if (loading) return <Loader />;

  return (
    <div className="mt-6 space-y-4">
      <div className="flex items-center space-x-4">
        <label>
          <input type="checkbox" checked={needsCovered} onChange={() => setNeedsCovered(!needsCovered)} />
          <span className="ml-2">Needs Covered</span>
        </label>
        <label>
          <input type="checkbox" checked={needsEV} onChange={() => setNeedsEV(!needsEV)} />
          <span className="ml-2">Needs EV</span>
        </label>
        <Button onClick={handlePark}>Park Vehicle</Button>
      </div>
      {parkLoading && <Loader />}
      {message && <p className="text-green-600">{message}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {slots.map((slot) => (
          <div key={slot.id} className="flex flex-col space-y-2">
            <SlotCard slot={slot} />
            {slot.is_occupied && (
              <Button className="bg-red-500 hover:bg-red-600" onClick={() => handleRemove(slot.id)}>
                Remove Vehicle
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParkRemove;