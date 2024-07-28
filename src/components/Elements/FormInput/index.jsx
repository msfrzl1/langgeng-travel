import Label from "./Label";
import Input from "./Input";

export default function FormInput({ htmlFor, label, type = "text", ...props }) {
  return (
    <>
      <Label htmlFor={htmlFor} label={label} />
      <Input {...props} type={type} />
    </>
  );
}
