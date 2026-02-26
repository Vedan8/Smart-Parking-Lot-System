// src/components/Input.jsx
export default function Input({ label, ...props }) {
  return (
    <div className="relative mb-4">
      <input
        {...props}
        className="peer block w-full rounded-lg border border-gray-300 bg-transparent px-3 pt-5 pb-2 text-gray-900 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:outline-none"
        placeholder=" "
      />
      <label className="absolute left-3 top-2 text-gray-500 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
        {label}
      </label>
    </div>
  );
}