import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../Elements/Button";
import FormInput from "../../Elements/FormInput";
import Gap from "../../Elements/Gap";
import SelecOption from "../../Elements/SelectOption";
import HidePasswordToggle from "../../Elements/HidePasswordToggle";
import useUpload from "../../../hooks/useUpload";

export default function FormRegister() {
  const [error, setError] = useState("");
  const [showPasswords, setShowPasswords] = useState({
    password: false,
    passwordRepeat: false,
  });
  const [imageUrl, setImageUrl] = useState(false);
  const { uploadImage } = useUpload();

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
      }
    }
  };

  return (
    <form>
      <div>
        <img src="" alt="" />
      </div>
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
      <Gap y={0.8} />
      <SelecOption id="role" htmlFor="role" name="role" label="Role">
        <option value="">Select Roles</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </SelecOption>
      <Gap y={0.8} />
      <div className="relative">
        <FormInput
          onChange={handleUploadPicture}
          id="profilePictureUrl"
          htmlFor="profilePictureUrl"
          name="profilePictureUrl"
          label="Profile Picture Url"
          type="file"
        />
        <p className="px-1 text-xs text-red-500">{error}</p>
      </div>
      <Gap y={0.8} />
      <FormInput
        id="phoneNumber"
        htmlFor="phoneNumber"
        name="phoneNumber"
        label="Phone Number"
        type="text"
        placeholder="08xx-xxxx-xxxx"
      />
      <Gap y={0.8} />
      <Button
        type="submit"
        value="Registration"
        classname="w-full bg-indigo-500 py-2 hover:bg-indigo-700"
      />
    </form>
  );
}
