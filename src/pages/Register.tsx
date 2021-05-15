import { Box, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { Heading } from "@chakra-ui/react";
import React from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { useActions } from "../hooks/useAction";
import { useSelector } from "../hooks/useTypeSelector";
import * as Yup from "yup";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

interface registerProps {}
const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("worng email format").required("Required field"),
  password: Yup.string().required("Required field"),

  confirm_password: Yup.string()
    .required("Required field")
    .oneOf(
      [Yup.ref("password"), null],
      "The Confirm Password confirmation dose not match"
    ),
});
export const Register: React.FC<registerProps> = () => {
  const { register } = useActions();
  const { error, loading } = useSelector((state) => state.auth);
  return (
    <Wrapper variant="small">
      <Heading>Register</Heading>
      {error && (
        <Alert status="error" mt="3">
          <AlertIcon />
          <AlertTitle mr={2}>Error!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={RegisterSchema}
        onSubmit={async (values, { setErrors }) => {
          register(values.email, values.password);
        }}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form>
            <Box mt={4}>
              <InputField name="email" placeholder="email" label="Email" />
            </Box>
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
            </Box>
            <Box mt={4}>
              <InputField
                name="confirm_password"
                placeholder="confirm_password"
                label="Confirm Password"
                type="password"
              />
            </Box>
            <Button mt={4} colorScheme="teal" isLoading={loading} type="submit">
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
