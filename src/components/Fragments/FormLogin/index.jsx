import Button from "../../Elements/Button";
import FormInput from "../../Elements/FormInput";
import Gap from "../../Elements/Gap";

export default function FormLogin() {
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
        id={"password"}
        htmlFor={"password"}
        name={"password"}
        label={"Password"}
        type={"password"}
        placeholder={"*******"}
      />
      <Gap y={1} />
      <Button
        type={"submit"}
        value={"Sign In"}
        classname="w-full bg-indigo-500 py-2 hover:bg-indigo-700"
      />
    </form>
  );
}
