const Toggle = ({ onClick }) => {
  return (
    <label className="toggle">
      <input type="checkbox" onClick={onClick} />
      <span></span>
    </label>
  );
};

export default Toggle;
