import React from "react";
import useForm from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import ErrorMessage from "../error/ErrorMessage";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phone: yup
    .string()
    .matches(
      // eslint-disable-next-line
      /(?:\d{3})(?:[\s\-\.])(?:\d{3})(?:[\s\-\.])(?:\d{4})/,
      "The phone number must match one of these patterns: xxx xxx xxxx OR xxx-xxx-xxxx OR xxx.xxx.xxxx"
    )
    .max(12, "The number is too long")
    .required("Please enter a valid phone number"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required")
});

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  function onSubmit(data, e) {
    console.log(
      `First name: ${data.firstName}, Last name: ${data.lastName}, Telephone: ${data.phone}, email: ${data.email}`
    );
    e.target.reset();
    alert("The contact info is logged in the browser console");
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>First name</Form.Label>
        <Form.Control
          name="firstName"
          placeholder="First name"
          ref={register({ required: true })}
        />
        {errors.firstName && (
          <ErrorMessage>{errors.firstName.message}</ErrorMessage>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Label>Last name</Form.Label>
        <Form.Control
          name="lastName"
          placeholder="Last name"
          ref={register({ required: true })}
        />
        {errors.lastName && (
          <ErrorMessage>{errors.lastName.message}</ErrorMessage>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          name="phone"
          placeholder="XXX XXX XXXX"
          ref={register({ required: true })}
        />
        {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          placeholder="Enter your email"
          ref={register}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </Form.Group>
      <Button variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
