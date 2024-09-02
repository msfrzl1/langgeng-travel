import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { VscLoading } from "react-icons/vsc";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../../hooks/useAuth";
import Button from "../../Elements/Button";
import FormInput from "../../Elements/FormInput";
import Gap from "../../Elements/Gap";
import HidePasswordToggle from "../../Elements/HidePasswordToggle";

export default function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { auth } = useAuth();
  const navigate = useNavigate();

  const handleShowPassword = () => setShowPassword((prevState) => !prevState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const userData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const response = await auth("login", userData);
    if (response.status === 200) {
      setTimeout(() => {
        setIsLoading(false);
        navigate("/register");
      }, 3000);
      toast.success(response.data.message);
    } else if (response.status === 404) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      toast.error(response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        id={"email"}
        htmlFor={"email"}
        name={"email"}
        label={"Email"}
        type={"email"}
        placeholder={"example@gmail.com"}
      />

      <Gap y={0.8} />

      <div className="relative w-full">
        <FormInput
          id={"password"}
          htmlFor={"password"}
          name={"password"}
          label={"Password"}
          type={showPassword ? "text" : "password"}
          placeholder={"Enter your password"}
        />

        <HidePasswordToggle
          type={"button"}
          showPassword={showPassword}
          handleShowPassword={handleShowPassword}
        />
      </div>

      <Gap y={1} />

      <Button
        type={"submit"}
        disabled={isLoading}
        classname={`w-full py-2 ${
          isLoading
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-indigo-500 hover:bg-indigo-700"
        } `}
      >
        {isLoading ? (
          <div className="flex items-center justify-center gap-2">
            <VscLoading size={20} className="animate-spin" />
            Processing...
          </div>
        ) : (
          "Sign In"
        )}
      </Button>
    </form>
  );
}
