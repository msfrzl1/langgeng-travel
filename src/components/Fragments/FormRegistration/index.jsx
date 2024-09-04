import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { VscLoading } from "react-icons/vsc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../Elements/Button";
import FormInput from "../../Elements/FormInput";
import Gap from "../../Elements/Gap";
import SelecOption from "../../Elements/SelectOption";
import HidePasswordToggle from "../../Elements/HidePasswordToggle";
import useUpload from "../../../hooks/useUpload";
import ValidationLabel from "../../Elements/ValidationLabel";
import useAuth from "../../../hooks/useAuth";
import validationSchema from "../../../schemas/validationSchema";

export default function FormRegister() {
  const [error, setError] = useState("");
  const [showPasswords, setShowPasswords] = useState({
    password: false,
    passwordRepeat: false,
  });
  const [imageUrl, setImageUrl] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { uploadImage } = useUpload();
  const { auth } = useAuth();
  const navigate = useNavigate();

  const toggleShowPassword = (key) => {
    setShowPasswords((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleUploadPicture = async (event) => {
    const fileInput = event.target;
    const filePicture = event.target.files[0];
    const MAX_FILE_SIZE = 10 * 1024;

    if (filePicture.size > MAX_FILE_SIZE) {
      setError("File size must be less than 1 mb");
      fileInput.value = null;
      return;
    } else if (filePicture) {
      setError("");
      const formData = new FormData();
      formData.append("image", filePicture);
      const response = await uploadImage("upload-image", formData);
      if (response.status === 200) {
        setImageUrl(response.data.url);
        formik.setFieldValue("profilePictureUrl", response.data.url);
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      passwordRepeat: "",
      role: "",
      profilePictureUrl: imageUrl,
      phoneNumber: "",
    },
    validationSchema,
    onSubmit: async (value) => {
      setIsLoading(true);
      const response = await auth("register", value);
      if (response.status === 200) {
        setTimeout(() => {
          setIsLoading(false);
          navigate("/login");
        }, 3000);
        toast.success(response.data.message);
      } else if (response.status === 409) {
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
        id="email"
        htmlFor="email"
        name="email"
        label="Email"
        type="email"
        placeholder="example@gmail.com"
      />
      {formik.errors.email && (
        <ValidationLabel>{formik.errors.email}</ValidationLabel>
      )}
      <Gap y={0.5} />
      <FormInput
        onChange={formik.handleChange}
        id="name"
        htmlFor="name"
        name="name"
        label="Name"
        type="text"
        placeholder="Enter your Name"
      />
      {formik.errors.name && (
        <ValidationLabel>{formik.errors.name}</ValidationLabel>
      )}
      <Gap y={0.5} />
      <div className="relative w-full">
        <FormInput
          onChange={formik.handleChange}
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
      {formik.errors.password && (
        <ValidationLabel>{formik.errors.password}</ValidationLabel>
      )}
      <Gap y={0.5} />
      <div className="relative w-full">
        <FormInput
          onChange={formik.handleChange}
          id="passwordRepeat"
          htmlFor="passwordRepeat"
          name="passwordRepeat"
          label="Password Repeat"
          type={showPasswords.passwordRepeat ? "text" : "password"}
          placeholder="Enter your password repeat"
        />
        <HidePasswordToggle
          type="button"
          showPassword={showPasswords.passwordRepeat}
          handleShowPassword={() => toggleShowPassword("passwordRepeat")}
        />
      </div>
      {formik.errors.passwordRepeat && (
        <ValidationLabel>{formik.errors.passwordRepeat}</ValidationLabel>
      )}
      <Gap y={0.5} />
      <SelecOption
        onChange={formik.handleChange}
        id="role"
        htmlFor="role"
        name="role"
        label="Role"
      >
        <option value="">Select Roles</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </SelecOption>
      {formik.errors.role && (
        <ValidationLabel>{formik.errors.role}</ValidationLabel>
      )}
      <Gap y={0.5} />
      <div className="relative">
        <FormInput
          onChange={handleUploadPicture}
          id="profilePictureUrl"
          htmlFor="profilePictureUrl"
          name="profilePictureUrl"
          label="Profile Picture Url"
          type="file"
        />
        {error && <ValidationLabel>{error}</ValidationLabel>}
      </div>
      <Gap y={0.5} />
      <FormInput
        onChange={formik.handleChange}
        id="phoneNumber"
        htmlFor="phoneNumber"
        name="phoneNumber"
        label="Phone Number"
        type="text"
        placeholder="08xx-xxxx-xxxx"
      />
      {formik.errors.phoneNumber && (
        <ValidationLabel>{formik.errors.phoneNumber}</ValidationLabel>
      )}
      <Gap y={0.5} />
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
