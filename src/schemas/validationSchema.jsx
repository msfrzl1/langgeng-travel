import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email wajib diisi")
    .email("Email harus sesuai")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email harus sesuai",
    ),
  password: yup
    .string()
    .required("Password wajib diisi")
    .min(8, "Harus berisi 8 karakter")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password harus ada huruf besar, huruf kecil, angka, dan karakter spesial",
    ),
});

export default validationSchema;
