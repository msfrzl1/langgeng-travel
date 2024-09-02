import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../Elements/Button";
import FormInput from "../../Elements/FormInput";
import Gap from "../../Elements/Gap";
import SelecOption from "../../Elements/SelectOption";
import HidePasswordToggle from "../../Elements/HidePasswordToggle";
import axios from "axios";

export default function FormRegister() {
  const [error, setError] = useState("");
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
      try {
        const response = await axios.post(
          "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/upload-image",
          formData,
          {
            headers: {
              apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k",
              "Content-Type": "multipart/form-data",
            },
          },
        );
        console.log(response.data.url);
      } catch (error) {
        console.log(error);
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
