const Button = ({ label, action, varient = "" }) => {
  const className =
    "btn" +
    (varient === "primary"
      ? " btn--primary"
      : varient === "secondary"
      ? " btn--secondary"
      : "");

  return (
    <button className={className} onClick={action}>
      {label}
    </button>
  );
};

export default Button;
