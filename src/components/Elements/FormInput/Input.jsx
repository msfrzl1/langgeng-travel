export default function Input({ type = "text", ...props }) {
  return (
    <input
      {...props}
      type={type}
      className={`w-full px-2 ${
        type === "file" ? "py-[0.3rem]" : "py-2"
      } rounded-lg border border-gray-300 text-sm shadow-sm placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-indigo-200`}
    />
  );
}
