import Label from "../FormInput/Label";

export default function SelecOption({ label, htmlFor, children, ...props }) {
  return (
    <div>
      <Label label={label} htmlFor={htmlFor} />
      <select
        {...props}
        className="w-full rounded-lg border border-gray-300 px-2 py-[0.44rem] text-sm shadow-sm placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-indigo-200"
      >
        {children}
      </select>
    </div>
  );
}
