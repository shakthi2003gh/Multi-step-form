import InputGroup from "./../components/inputGroup";
import { useState } from "react";
import Joi from "joi";

const PersonalInfo = ({ initialValue, setInitialValue, setIsValid }) => {
  const [name, setName] = useState(initialValue.name);
  const [email, setEmail] = useState(initialValue.email);
  const [number, setNumber] = useState(initialValue.number);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");

  const schema = {
    name: Joi.string().required().min(3).max(50),
    email: Joi.string()
      .email({
        tlds: { allow: false },
      })
      .required()
      .max(100),
    number: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required(),
  };

  const onChange = (setValue, setError) => (e) => {
    const id = e.target.id;
    const value = e.target.value;
    const { error } = schema[id].validate(value);

    setError(error ? error.message.replace("value", id) : "");
    setValue(value);

    const { error: errors } = Joi.object(schema).validate({
      name,
      email,
      number,
      [id]: value,
    });

    setInitialValue({ name, email, number });
    setIsValid(!errors);
  };
  return (
    <div className="personal-info container">
      <h1>Personal info</h1>

      <p>Please Provide your name, email address and phone number.</p>

      <InputGroup
        id="name"
        type="text"
        label="Name"
        placeholder="e.g Stephen King"
        value={name}
        onChange={onChange(setName, setNameError)}
        error={nameError}
      />

      <InputGroup
        id="email"
        type="email"
        label="Email Address"
        placeholder="e.g stephenking@lorem.com"
        value={email}
        onChange={onChange(setEmail, setEmailError)}
        error={emailError}
      />

      <InputGroup
        id="number"
        type="number"
        label="Phone Number"
        placeholder="e.g +1 234 567 890"
        value={number}
        onChange={onChange(setNumber, setNumberError)}
        error={numberError}
      />
    </div>
  );
};

export default PersonalInfo;
