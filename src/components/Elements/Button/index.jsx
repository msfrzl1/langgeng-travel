export default function Button({
  classname = "bg-black",
  children,
  value,
  ...props
}) {
  return (
    <button
      {...props}
      className={`${classname} transition duration-300 rounded-lg text-white font-semibold text-sm`}
    >
      {children || value}
    </button>
  );
}
