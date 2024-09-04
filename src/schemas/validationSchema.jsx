import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid Email")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email must match",
    ),
  name: yup.string().required("Name is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "The password must contain at least one uppercase letter, one lowercase letter, and one number (example: A..Z, 1..0, !, @, #, $, %)",
    ),
  passwordRepeat: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  role: yup.string().required("Role is required"),
  phoneNumber: yup.number().required(),
});

export default validationSchema;
