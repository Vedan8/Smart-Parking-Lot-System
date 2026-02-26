// src/pages/ViewSlots.jsx
import { useEffect, useState } from "react";
import { getSlots } from "../api/parkingApi";
import SlotCard from "../components/SlotCard";

export default function ViewSlots() {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSlots().then(res => {
      setSlots(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="text-center mt-10 text-gray-400">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto mt-8 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {slots.map(slot => <SlotCard key={slot.id} slot={slot} />)}
    </div>
  );
}