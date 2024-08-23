import { useState } from "react";
import Button from "../../Elements/Button";
import FormInput from "../../Elements/FormInput";
import Gap from "../../Elements/Gap";
import SelecOption from "../../Elements/SelectOption";
import HidePasswordToggle from "../../Elements/HidePasswordToggle";

export default function FormRegister() {
  const [showPasswords, setShowPasswords] = useState({
    password: false,
    passwordRepeat: false,
  });

  const toggleShowPassword = (key) => {
    setShowPasswords((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <form>
      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
        <div className="w-full">
          <FormInput
            id="email"
            htmlFor="email"
            name="email"
            label="Email"
            type="email"
            placeholder="example@gmail.com"
          />
          <Gap y={0.8} />
          <FormInput
            id="name"
            htmlFor="name"
            name="name"
            label="Name"
            type="text"
            placeholder="Enter your Name"
          />
          <Gap y={0.8} />
          <div className="relative w-full">
            <FormInput
              id="password"
              htmlFor="password"
              name="password"
              label="Password"
              type={showPasswords.password ? "text" : "password"}
              placeholder="Enter your password"
            />
            <HidePasswordToggle
              type="button"
              showPassword={showPasswords.password}
              handleShowPassword={() => toggleShowPassword("password")}
            />
          </div>
          <Gap y={0.8} />
          <div className="relative w-full">
            <FormInput
              id="passwordRepeat"
              htmlFor="passwordRepeat"
              name="passwordRepeat"
              label="Repeat Password"
              type={showPasswords.passwordRepeat ? "text" : "password"}
              placeholder="Enter your repeat password"
            />
            <HidePasswordToggle
              type="button"
              showPassword={showPasswords.passwordRepeat}
              handleShowPassword={() => toggleShowPassword("passwordRepeat")}
            />
          </div>
        </div>
        <div className="w-full">
          <SelecOption id="role" htmlFor="role" name="role" label="Role">
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </SelecOption>
          <Gap y={0.8} />
          <FormInput
            id="profilePictureUrl"
            htmlFor="profilePictureUrl"
            name="profilePictureUrl"
            label="Profile Picture Url"
            type="file"
          />
          <Gap y={0.8} />
          <FormInput
            id="phoneNumber"
            htmlFor="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            type="number"
            placeholder="08xx-xxxx-xxxx"
          />
        </div>
      </div>
      <Gap y={1} />
      <Button
        type="submit"
        value="Registration"
        classname="w-full bg-indigo-500 py-2 hover:bg-indigo-700"
      />
    </form>
  );
}
