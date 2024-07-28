import FormLogin from "../../components/Fragments/FormLogin";
import AuthLayout from "../../components/Layouts/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout title={"Form Login"} type={"login"}>
      <FormLogin />
    </AuthLayout>
  );
}
