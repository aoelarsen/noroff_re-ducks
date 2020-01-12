import React from "react";
import PropTypes from "prop-types";
import useForm from "react-hook-form";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { authMethods } from "../../../redux/ducks/authentication";

import ErrorMessage from "../../error/ErrorMessage";

const LoginForm = ({ authUser }) => {
  let history = useHistory();

  const findUser = () => {
    const localStorage = window.localStorage;
    const foundUser = JSON.parse(localStorage.getItem("user"));

    if (!foundUser) {
      return {
        validName: "",
        validpass: ""
      };
    }

    return {
      validName: foundUser.userName,
      validPass: foundUser.password
    };
  };

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log("Logged in as: " + data.userName);
    authUser(data.userName);
    setTimeout(() => history.push("/"), 500);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <FormControl
          name="userName"
          placeholder="Username"
          ref={register({
            required: true,
            validate: value => value === findUser().validName
          })}
        />
        {errors.userName && errors.userName.type === "required" && (
          <ErrorMessage>Username is required</ErrorMessage>
        )}
        {errors.userName && errors.userName.type === "validate" && (
          <ErrorMessage>Username is incorrect</ErrorMessage>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <FormControl
          type="password"
          name="password"
          placeholder="password"
          ref={register({
            required: true,
            validate: value => value === findUser().validPass
          })}
        />
        {errors.password && errors.password.type === "required" && (
          <ErrorMessage>Password is required</ErrorMessage>
        )}
        {errors.password && errors.password.type === "validate" && (
          <ErrorMessage>Password is incorrect</ErrorMessage>
        )}
      </Form.Group>
      <Button variant="secondary" type="submit">
        Login
      </Button>
    </Form>
  );
};

LoginForm.propsTypes = {
  authUser: PropTypes.func.isRequired
};

export default connect(null, { authUser: authMethods.authUser })(LoginForm);
