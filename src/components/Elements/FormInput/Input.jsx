export default function Input({ type = "text", ...props }) {
  return (
    <input
      {...props}
      type={type}
      className="w-full px-2 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-200 placeholder:text-sm text-sm"
    />
  );
}
