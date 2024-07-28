export default function Label({ htmlFor, id, label }) {
  return (
    <label
      htmlFor={htmlFor}
      id={id}
      className="block text-sm font-medium text-gray-700"
    >
      {label}
    </label>
  );
}
