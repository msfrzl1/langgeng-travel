import FormLogin from "../../components/Fragments/FormLogin";
import AuthLayout from "../../components/Layouts/AuthLayout";
import { ToastContainer } from "react-toastify";

export default function LoginPage() {
  return (
    <AuthLayout title={"Form Login"} type={"login"}>
      <FormLogin />
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
