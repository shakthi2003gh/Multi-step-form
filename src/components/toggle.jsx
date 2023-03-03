const Toggle = ({ toggled, onChange }) => {
  return (
    <label className="toggle">
      <input type="checkbox" onChange={onChange} checked={toggled} />
      <span></span>
    </label>
  );
};

export default Toggle;
