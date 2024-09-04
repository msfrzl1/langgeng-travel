import { ToastContainer } from "react-toastify";
import FormRegister from "../../components/Fragments/FormRegistration";
import AuthLayout from "../../components/Layouts/AuthLayout";

export default function RegisterPage() {
  return (
    <AuthLayout title={"Form Registration"} type={"register"}>
      <FormRegister />
      <ToastContainer
        position="top-center"
        autoClose={2300}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </AuthLayout>
  );
}
