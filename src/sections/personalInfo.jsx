import { useState } from "react";
import Joi from "joi";
import InputGroup from "./../components/inputGroup";

const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

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
  };

  return (
    <div className="personal-info">
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
