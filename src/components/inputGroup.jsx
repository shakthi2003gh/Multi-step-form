const InputGroup = ({
  id,
  type = "text",
  label,
  value = "",
  onChange,
  placeholder,
  error,
}) => {
  return (
    <div className={"input-group" + (error ? " error" : "")}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <div className="error-message">{error}</div>
    </div>
  );
};

export default InputGroup;
