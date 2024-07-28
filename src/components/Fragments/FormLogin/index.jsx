import { useState } from "react";
import Button from "../../Elements/Button";
import FormInput from "../../Elements/FormInput";
import Gap from "../../Elements/Gap";
import HidePasswordToggle from "../../Elements/HidePasswordToggle";

export default function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <form>
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
