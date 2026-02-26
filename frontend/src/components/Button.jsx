// src/components/Button.jsx
export default function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="border-2 border-white text-white font-bold px-6 py-2 rounded-sm hover:bg-white hover:text-gray-900 hover:scale-105 transition-transform duration-200"
    >
      {children}
    </button>
  );
}