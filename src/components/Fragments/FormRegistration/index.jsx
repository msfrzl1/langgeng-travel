import Button from "../../Elements/Button";
import FormInput from "../../Elements/FormInput";
import Gap from "../../Elements/Gap";
import SelecOption from "../../Elements/SelectOption";

export default function FormRegister() {
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
      <FormInput
        id={"name"}
        htmlFor={"name"}
        name={"name"}
        label={"Name"}
        type={"text"}
        placeholder={"Enter your Name"}
      />
      <Gap y={0.8} />
      <FormInput
        id={"password"}
        htmlFor={"password"}
        name={"password"}
        label={"Password"}
        type={"password"}
        placeholder={"*******"}
      />
      <Gap y={0.8} />
      <FormInput
        id={"passwordRepeat"}
        htmlFor={"passwordRepeat"}
        name={"passwordRepeat"}
        label={"Repeat Password"}
        type={"password"}
        placeholder={"*******"}
      />
      <Gap y={0.8} />
      <SelecOption id={"role"} htmlFor={"role"} name={"role"} label={"Role"}>
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
      <Gap y={1} />
      <Button
        type={"submit"}
        value={"Registration"}
        classname="w-full bg-indigo-500 py-2 hover:bg-indigo-700"
      />
    </form>
  );
}
