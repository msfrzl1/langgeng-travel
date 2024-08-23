import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../../hooks/useAuth";
import Button from "../../Elements/Button";
import FormInput from "../../Elements/FormInput";
import Gap from "../../Elements/Gap";
import HidePasswordToggle from "../../Elements/HidePasswordToggle";
import validationSchema from "../../../schemas/validationSchema";

export default function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { auth } = useAuth();
  const navigate = useNavigate();

  const handleShowPassword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      const response = await auth("login", values);
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
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormInput
        onChange={formik.handleChange}
        id={"email"}
        htmlFor={"email"}
        name={"email"}
        label={"Email"}
        type={"email"}
        placeholder={"example@gmail.com"}
      />
      {formik.errors.email && (
        <p className="mt-1 rounded-md bg-red-100 px-1 py-1 text-xs text-red-600">
          {formik.errors.email}
        </p>
      )}
      <Gap y={0.8} />
      <div className="relative w-full">
        <FormInput
          onChange={formik.handleChange}
          id={"password"}
          htmlFor={"password"}
          name={"password"}
          label={"Password"}
          type={showPassword ? "text" : "password"}
          placeholder={"Kata Sandi"}
        />
        <HidePasswordToggle
          type={"button"}
          showPassword={showPassword}
          handleShowPassword={handleShowPassword}
        />
      </div>
      {formik.errors.password && (
        <p className="mt-1 rounded-md bg-red-100 px-1 py-1 text-xs text-red-600">
          {formik.errors.password}
        </p>
      )}
      <Gap y={1} />
      <Button
        type={"submit"}
        value={`${isLoading ? "Loading..." : "Sign In"}`}
        disabled={isLoading}
        classname={`w-full py-2 ${
          isLoading
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-indigo-500 hover:bg-indigo-700"
        } `}
      />
    </form>
  );
}
