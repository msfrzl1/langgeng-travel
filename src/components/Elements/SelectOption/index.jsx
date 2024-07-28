import Label from "../FormInput/Label";

export default function SelecOption({ label, htmlFor, children, ...props }) {
  return (
    <div>
      <Label label={label} htmlFor={htmlFor} />
      <select
        {...props}
        className="w-full px-2 py-[0.44rem] border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-200 placeholder:text-sm text-sm"
      >
        {children}
      </select>
    </div>
  );
}
