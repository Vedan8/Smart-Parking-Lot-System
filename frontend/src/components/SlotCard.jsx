// src/components/SlotCard.jsx
export default function SlotCard({ slot }) {
  return (
    <div className={`p-4 border-4 border-white rounded-sm shadow-lg
      ${slot.is_occupied ? "bg-red-900 text-red-400" : "bg-gray-800 text-green-400"} 
      hover:scale-105 transition-transform duration-200`}>
      <h3 className="text-lg font-extrabold mb-2">Slot {slot.slot_no}</h3>
      <p>Covered: {slot.is_covered ? "Yes" : "No"}</p>
      <p>EV Charging: {slot.is_ev_charging ? "Yes" : "No"}</p>
      <p>Status: {slot.is_occupied ? "Occupied" : "Available"}</p>
    </div>
  );
}