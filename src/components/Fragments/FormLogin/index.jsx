import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Elements/Button";
import FormInput from "../../Elements/FormInput";
import Gap from "../../Elements/Gap";
import HidePasswordToggle from "../../Elements/HidePasswordToggle";
import useAuth from "../../../hooks/useAuth";

export default function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const { auth } = useAuth();
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const userData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const response = await auth("login", userData);
    if (response.status === 200) {
      setTimeout(() => {
        navigate("/register");
      }, 2000);
    }
  };

  return (
    <form onSubmit={handleSubmitLogin}>
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
          placeholder={"*******"}
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
        value={"Sign In"}
        classname="w-full bg-indigo-500 py-2 hover:bg-indigo-700"
      />
    </form>
  );
}
