import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

export default function HidePasswordToggle({
  type,
  showPassword,
  handleShowPassword,
}) {
  return (
    <button
      type={type}
      onClick={handleShowPassword}
      className="absolute bottom-2.5 right-2 cursor-pointer"
    >
      {showPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
    </button>
  );
}
