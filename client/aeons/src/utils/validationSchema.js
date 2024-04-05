import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  name: Yup.string().required("Name is a required field").label("Name"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is a required field")
    .label("Email"),
  password: Yup.string()
    .required("Password is a required field")
    .label("Password"),
  username: Yup.string()
    .required("Username is a required field")
    .label("Username"),
  checked: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is a required field")
    .label("Email"),
  password: Yup.string()
    .required("Password is a required field")
    .label("Password"),
});
