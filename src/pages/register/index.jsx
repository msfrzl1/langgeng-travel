import FormRegister from "../../components/Fragments/FormRegistration";
import AuthLayout from "../../components/Layouts/AuthLayout";

export default function RegisterPage() {
  return (
    <AuthLayout title={"Form Registration"} type={"register"}>
      <FormRegister />
    </AuthLayout>
  );
}
