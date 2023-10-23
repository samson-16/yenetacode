import React from "react";
import Form from "react-bootstrap/Form";

const FormInput = ({ label, type, onChange, value, name }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        onChange={(e) => onChange(e)}
        name={name}
        value={value}
        type={type}
        placeholder={`Enter ${label}`}
      />
    </Form.Group>
  );
};

export default FormInput;
