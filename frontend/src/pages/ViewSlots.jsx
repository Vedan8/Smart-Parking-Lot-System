import { useEffect, useState } from "react";
import { getSlots } from "../api/parkingApi";
import Loader from "../components/Loader";
import SlotCard from "../components/SlotCard";

const ViewSlots = () => {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const res = await getSlots();
        setSlots(res.data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchSlots();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {slots.map((slot) => (
        <SlotCard key={slot.id} slot={slot} />
      ))}
    </div>
  );
};

export default ViewSlots;