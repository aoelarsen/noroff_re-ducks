import React from "react";
import PropTypes from "prop-types";
import useForm from "react-hook-form";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addUser } from "../../../redux/ducks/authentication/methods";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import ErrorMessage from "../../error/ErrorMessage";

const schema = yup.object().shape({
  userName: yup.string().required("A username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password must be at least 4 characters")
});

const CreateUserForm = ({ addUser }) => {
  const localStorage = window.localStorage;

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });
  let histoy = useHistory();

  const onSubmit = data => {
    localStorage.removeItem("user");
    addUser({ userName: data.userName, password: data.password });
    const userData = JSON.stringify(data);
    localStorage.setItem("user", userData);
    histoy.push("/login");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <FormControl
          name="userName"
          placeholder="Enter your username"
          ref={register({ required: true })}
        />
        {errors.userName && (
          <ErrorMessage>{errors.userName.message}</ErrorMessage>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <FormControl
          type="password"
          name="password"
          placeholder="Enter your password"
          ref={register({ required: true })}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
      </Form.Group>
      <Button variant="secondary" type="submit">
        Create User
      </Button>
    </Form>
  );
};

CreateUserForm.propsTypes = {
  addUser: PropTypes.func.isRequired
};

export default connect(null, { addUser })(CreateUserForm);
