import { useState } from "react";
import Button from "../../Elements/Button";
import FormInput from "../../Elements/FormInput";
import Gap from "../../Elements/Gap";
import SelecOption from "../../Elements/SelectOption";
import HidePasswordToggle from "../../Elements/HidePasswordToggle";

export default function FormRegister() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <form>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="w-full">
          <FormInput
            id={"email"}
            htmlFor={"email"}
            name={"email"}
            label={"Email"}
            type={"email"}
            placeholder={"example@gmail.com"}
          />
          <Gap y={0.8} />
          <FormInput
            id={"name"}
            htmlFor={"name"}
            name={"name"}
            label={"Name"}
            type={"text"}
            placeholder={"Enter your Name"}
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
          <Gap y={0.8} />
          <FormInput
            id={"passwordRepeat"}
            htmlFor={"passwordRepeat"}
            name={"passwordRepeat"}
            label={"Repeat Password"}
            type={showPassword ? "text" : "password"}
            placeholder={"*******"}
          />
        </div>
        <div className="w-full">
          <SelecOption
            id={"role"}
            htmlFor={"role"}
            name={"role"}
            label={"Role"}
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </SelecOption>
          <Gap y={0.8} />
          <FormInput
            id={"profilePictureUrl"}
            htmlFor={"profilePictureUrl"}
            name={"profilePictureUrl"}
            label={"Profile Picture Url"}
            type={"file"}
          />
          <Gap y={0.8} />
          <FormInput
            id={"phoneNumber"}
            htmlFor={"phoneNumber"}
            name={"phoneNumber"}
            label={"Phone Number"}
            type={"number"}
            placeholder={"08xx-xxxx-xxxx"}
          />
        </div>
      </div>
      <Gap y={1} />
      <Button
        type={"submit"}
        value={"Registration"}
        classname="w-full bg-indigo-500 py-2 hover:bg-indigo-700"
      />
    </form>
  );
}
