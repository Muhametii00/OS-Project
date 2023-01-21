import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .oneOf(["admin123"], "Ops, wrong password!")
    .required("Password is required!")
    .min(5, "Password must be at least 8 characters long!"),
});

interface LoginFields {
  password: string;
}

interface FormikProps {
  onSubmit: (
    values: LoginFields,
    formikHelpers: FormikHelpers<LoginFields>
  ) => void;
}

export const useLoginFormik = ({ onSubmit }: FormikProps) => {
  return useFormik({
    initialValues: {
      password: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: LoginSchema,
    onSubmit,
  });
};
