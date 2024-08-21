export default function Button({
  classname = "bg-black",
  children,
  value,
  ...props
}) {
  return (
    <button
      {...props}
      className={`${classname} rounded-lg text-sm font-semibold text-white transition duration-300`}
    >
      {children || value}
    </button>
  );
}
