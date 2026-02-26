const SlotCard = ({ slot }) => (
  <div className="p-4 border rounded shadow-sm bg-white flex flex-col space-y-2">
    <div>Slot No: <strong>{slot.slot_no}</strong></div>
    <div>Covered: {slot.is_covered ? "Yes" : "No"}</div>
    <div>EV Charging: {slot.is_ev_charging ? "Yes" : "No"}</div>
    <div>Status: {slot.is_occupied ? "Occupied" : "Free"}</div>
  </div>
);

export default SlotCard;